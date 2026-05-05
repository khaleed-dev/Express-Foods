"use server";

import {
  SESv2Client,
  SendEmailCommand,
} from "@aws-sdk/client-sesv2";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";
import { company } from "@/lib/data/company";

type ActionResult =
  | { success: true }
  | { success: false; error: string };

const productCategoryLabels: Record<string, string> = {
  citrus: "Citrus",
  "fresh-fruits": "Fresh Fruits",
  vegetables: "Vegetables",
  "iqf-frozen": "IQF Frozen",
  other: "Other",
};

const serviceInterestLabels: Record<string, string> = {
  pricing: "Pricing & Quote",
  samples: "Sample Request",
  partnership: "Partnership / Distribution",
  logistics: "Logistics & Cold-Chain",
  other: "Other",
};

function buildEmailBody(data: ContactFormData): {
  text: string;
  html: string;
} {
  const productCat = productCategoryLabels[data.productCategory] ?? data.productCategory;
  const service = serviceInterestLabels[data.serviceInterest] ?? data.serviceInterest;

  const lines = [
    `Company: ${data.companyName}`,
    `Contact: ${data.contactPerson}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Product category: ${productCat}`,
    `Service interest: ${service}`,
    data.product ? `Product reference: ${data.product}` : null,
    "",
    "Message:",
    data.message,
  ].filter(Boolean);

  const text = lines.join("\n");

  const escapeHtml = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const html = `
    <div style="font-family: system-ui, sans-serif; line-height: 1.5; color: #2a332b;">
      <h2 style="margin: 0 0 16px;">New inquiry from ${escapeHtml(data.companyName)}</h2>
      <table style="border-collapse: collapse;">
        <tbody>
          <tr><td style="padding: 4px 12px 4px 0;"><strong>Company</strong></td><td>${escapeHtml(data.companyName)}</td></tr>
          <tr><td style="padding: 4px 12px 4px 0;"><strong>Contact</strong></td><td>${escapeHtml(data.contactPerson)}</td></tr>
          <tr><td style="padding: 4px 12px 4px 0;"><strong>Email</strong></td><td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
          <tr><td style="padding: 4px 12px 4px 0;"><strong>Phone</strong></td><td>${escapeHtml(data.phone)}</td></tr>
          <tr><td style="padding: 4px 12px 4px 0;"><strong>Category</strong></td><td>${escapeHtml(productCat)}</td></tr>
          <tr><td style="padding: 4px 12px 4px 0;"><strong>Interest</strong></td><td>${escapeHtml(service)}</td></tr>
          ${data.product ? `<tr><td style="padding: 4px 12px 4px 0;"><strong>Product ref</strong></td><td>${escapeHtml(data.product)}</td></tr>` : ""}
        </tbody>
      </table>
      <h3 style="margin: 20px 0 8px;">Message</h3>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(data.message)}</p>
    </div>
  `.trim();

  return { text, html };
}

export async function submitContactForm(
  data: ContactFormData
): Promise<ActionResult> {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    const firstError = parsed.error.issues[0];
    return {
      success: false,
      error: firstError?.message ?? "Invalid form data",
    };
  }

  const payload = parsed.data;

  const region = process.env.AWS_REGION;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  // Dev fallback when SES is not configured — log to console.
  if (!region || !accessKeyId || !secretAccessKey) {
    console.log("[contact] SES not configured — logging submission instead");
    console.log(payload);
    return { success: true };
  }

  const ses = new SESv2Client({
    region,
    credentials: { accessKeyId, secretAccessKey },
  });

  const { text, html } = buildEmailBody(payload);
  const subject = `New ${serviceInterestLabels[payload.serviceInterest]} inquiry from ${payload.companyName}`;

  try {
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: `${company.senderName} <${company.senderEmail}>`,
        Destination: { ToAddresses: [company.inquiryRecipientEmail] },
        ReplyToAddresses: [payload.email],
        Content: {
          Simple: {
            Subject: { Data: subject, Charset: "UTF-8" },
            Body: {
              Text: { Data: text, Charset: "UTF-8" },
              Html: { Data: html, Charset: "UTF-8" },
            },
          },
        },
      }),
    );

    return { success: true };
  } catch (err) {
    console.error("[contact] SES send error:", err);
    return {
      success: false,
      error:
        "We couldn't send your inquiry right now. Please email us directly at " +
        company.publicEmail +
        ".",
    };
  }
}
