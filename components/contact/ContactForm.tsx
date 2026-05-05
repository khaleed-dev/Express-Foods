"use client";

import React, { useEffect, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";
import { submitContactForm } from "@/app/(site)/contact/actions";
import { company } from "@/lib/data/company";
import { cn } from "@/lib/utils";

const productCategoryOptions = [
  { value: "citrus", labelEn: "Citrus", labelAr: "موالح" },
  { value: "fresh-fruits", labelEn: "Fresh Fruits", labelAr: "فواكه طازجة" },
  { value: "vegetables", labelEn: "Vegetables", labelAr: "خضروات" },
  { value: "iqf-frozen", labelEn: "IQF Frozen", labelAr: "مجمد IQF" },
  { value: "other", labelEn: "Other", labelAr: "أخرى" },
] as const;

const serviceInterestOptions = [
  { value: "pricing", labelEn: "Pricing & Quote", labelAr: "أسعار وعرض" },
  { value: "samples", labelEn: "Sample Request", labelAr: "طلب عينة" },
  { value: "partnership", labelEn: "Partnership / Distribution", labelAr: "شراكة / توزيع" },
  { value: "logistics", labelEn: "Logistics & Cold-Chain", labelAr: "لوجستيات وسلسلة تبريد" },
  { value: "other", labelEn: "Other", labelAr: "أخرى" },
] as const;

const inputClasses =
  "w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors duration-150 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

interface BilingualLabelProps {
  htmlFor?: string;
  en: string;
  ar: string;
  required?: boolean;
}

function BilingualLabel({ htmlFor, en, ar, required }: BilingualLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 flex items-end justify-between gap-4 text-sm font-semibold text-neutral-800"
    >
      <span>
        {en}
        {required && <span className="text-red-600">*</span>}
      </span>
      <span dir="rtl" className="text-neutral-700">
        {ar}
        {required && <span className="text-red-600">*</span>}
      </span>
    </label>
  );
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");
  const intentParam = searchParams.get("intent");

  const [isPending, startTransition] = useTransition();
  const [submitState, setSubmitState] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      productCategory: undefined,
      serviceInterest: intentParam === "quote" ? "pricing" : undefined,
      message: "",
      product: productParam ?? undefined,
    },
  });

  useEffect(() => {
    if (productParam) {
      setValue("product", productParam);
    }
  }, [productParam, setValue]);

  const onSubmit = (data: ContactFormData) => {
    setSubmitState({ type: "idle" });
    startTransition(async () => {
      const result = await submitContactForm(data);
      if (result.success) {
        setSubmitState({
          type: "success",
          message: "Thank you! We'll be in touch within one business day.",
        });
        reset();
      } else {
        setSubmitState({ type: "error", message: result.error });
      }
    });
  };

  const productDisplay = productParam
    ? productParam
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : null;

  return (
    <section className="bg-white px-[5%] py-16 text-neutral-900 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          {/* Form column */}
          <div>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              Send Us a Message
            </h2>
            <p className="mb-8 text-neutral-600 md:text-lg">
              Fill out the form below and our commercial team will respond
              within one business day.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-5"
            >
              {productDisplay && (
                <div className="rounded-md border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
                  Inquiring about: <strong>{productDisplay}</strong>
                </div>
              )}

              {submitState.type === "success" && (
                <div className="rounded-md border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-800">
                  {submitState.message}
                </div>
              )}
              {submitState.type === "error" && (
                <div className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
                  {submitState.message}
                </div>
              )}

              {/* Company name */}
              <div>
                <BilingualLabel
                  htmlFor="companyName"
                  en="Company Name"
                  ar="اسم الشركة"
                  required
                />
                <input
                  id="companyName"
                  type="text"
                  placeholder="Your company name"
                  className={inputClasses}
                  {...register("companyName")}
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              {/* Contact person */}
              <div>
                <BilingualLabel
                  htmlFor="contactPerson"
                  en="Contact Person"
                  ar="الشخص المسؤول"
                  required
                />
                <input
                  id="contactPerson"
                  type="text"
                  placeholder="Full name"
                  className={inputClasses}
                  {...register("contactPerson")}
                />
                {errors.contactPerson && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.contactPerson.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <BilingualLabel
                  htmlFor="email"
                  en="Email"
                  ar="البريد الإلكتروني"
                  required
                />
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className={inputClasses}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <BilingualLabel
                  htmlFor="phone"
                  en="Phone"
                  ar="رقم الهاتف"
                  required
                />
                <input
                  id="phone"
                  type="tel"
                  placeholder="+20 XXX XXX XXXX"
                  className={inputClasses}
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Product category */}
              <div>
                <BilingualLabel
                  htmlFor="productCategory"
                  en="Product Category"
                  ar="فئة المنتج"
                  required
                />
                <select
                  id="productCategory"
                  className={cn(inputClasses, "appearance-none bg-white pr-10")}
                  defaultValue=""
                  {...register("productCategory")}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {productCategoryOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.labelEn} — {opt.labelAr}
                    </option>
                  ))}
                </select>
                {errors.productCategory && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.productCategory.message}
                  </p>
                )}
              </div>

              {/* Service interest */}
              <div>
                <BilingualLabel
                  htmlFor="serviceInterest"
                  en="Service Interest"
                  ar="الخدمة المطلوبة"
                  required
                />
                <select
                  id="serviceInterest"
                  className={cn(inputClasses, "appearance-none bg-white pr-10")}
                  defaultValue={intentParam === "quote" ? "pricing" : ""}
                  {...register("serviceInterest")}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceInterestOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.labelEn} — {opt.labelAr}
                    </option>
                  ))}
                </select>
                {errors.serviceInterest && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.serviceInterest.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <BilingualLabel
                  htmlFor="message"
                  en="Message"
                  ar="الرسالة"
                  required
                />
                <textarea
                  id="message"
                  placeholder="Tell us about your sourcing needs..."
                  className={cn(inputClasses, "min-h-[10rem]")}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Hidden product field */}
              <input type="hidden" {...register("product")} />

              <button
                type="submit"
                disabled={isPending}
                className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-md"
              >
                {isPending ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </div>

          {/* Sidebar — Get in Touch */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
              <h3 className="mb-6 text-2xl font-bold">Get in Touch</h3>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BiEnvelope className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-neutral-800">
                      Email
                    </p>
                    <a
                      href={`mailto:${company.publicEmail}`}
                      className="break-all text-sm text-primary hover:underline"
                    >
                      {company.publicEmail}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BiPhone className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-neutral-800">
                      Phone / WhatsApp
                    </p>
                    <a
                      href={company.phone.tel}
                      className="block text-sm text-primary hover:underline"
                    >
                      {company.phone.display}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BiMap className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-neutral-800">
                      Address
                    </p>
                    <p className="text-sm text-neutral-700">
                      {company.address.full}
                    </p>
                  </div>
                </li>
              </ul>

              <a
                href={company.phone.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#1FBE5B] hover:shadow-lg active:translate-y-0"
              >
                <FaWhatsapp className="size-5" />
                Chat on WhatsApp
              </a>

              <div className="my-6 h-px w-full bg-neutral-200" />

              <div className="flex items-center gap-3">
                <a
                  href={company.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex size-10 items-center justify-center rounded-lg bg-neutral-200 text-neutral-700 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
              </div>

              <div className="mt-6 overflow-hidden rounded-lg border border-neutral-200">
                <iframe
                  title="Express Foods location — El Shorouk, Cairo"
                  src={company.address.mapEmbedSrc}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
