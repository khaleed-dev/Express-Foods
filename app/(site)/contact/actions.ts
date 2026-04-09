"use server";

import { Resend } from "resend";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";

type ActionResult =
  | { success: true }
  | { success: false; error: string };

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

  const { firstName, lastName, email, phone, companyName, inquiryType, message, product } =
    parsed.data;

  try {
    // If RESEND_API_KEY is set, send via Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Express Foods <noreply@expressfoods.com>",
        to: ["info@expressfoods.com"],
        replyTo: email,
        subject: `New ${inquiryType} inquiry from ${firstName} ${lastName}`,
        text: [
          `Name: ${firstName} ${lastName}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : null,
          companyName ? `Company: ${companyName}` : null,
          `Inquiry Type: ${inquiryType}`,
          product ? `Product: ${product}` : null,
          `\nMessage:\n${message}`,
        ]
          .filter(Boolean)
          .join("\n"),
      });
    } else {
      // Fallback: log to console when no API key is configured
      console.log("--- Contact Form Submission ---");
      console.log("Name:", firstName, lastName);
      console.log("Email:", email);
      if (phone) console.log("Phone:", phone);
      if (companyName) console.log("Company:", companyName);
      console.log("Inquiry Type:", inquiryType);
      if (product) console.log("Product:", product);
      console.log("Message:", message);
      console.log("--- End Submission ---");
    }

    return { success: true };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      success: false,
      error: "Something went wrong. Please try again or email us directly.",
    };
  }
}
