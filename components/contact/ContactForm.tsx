"use client";

import React, { useEffect, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@relume_io/relume-ui";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";
import { submitContactForm } from "@/app/(site)/contact/actions";

const inquiryOptions = [
  { value: "pricing", label: "Pricing & Quotes" },
  { value: "samples", label: "Request Samples" },
  { value: "partnership", label: "Partnership Inquiry" },
  { value: "other", label: "Other" },
] as const;

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
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      inquiryType: intentParam === "quote" ? "pricing" : undefined,
      message: "",
      product: productParam ?? undefined,
    },
  });

  // Keep product field in sync if search params change
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
          message: "Thank you! We'll be in touch within 24 hours.",
        });
        reset();
      } else {
        setSubmitState({
          type: "error",
          message: result.error,
        });
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
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        {/* Left column — heading + quick contacts */}
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4">Send</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Your inquiry
            </h2>
            <p className="md:text-md">
              Tell us what you need and we&apos;ll respond with pricing and
              availability.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 py-2">
            <div className="flex items-center gap-4">
              <BiEnvelope className="size-6 flex-none" />
              <p>info@expressfoods.com</p>
            </div>
            <div className="flex items-center gap-4">
              <BiPhone className="size-6 flex-none" />
              <p>+20 2 XXXX XXXX</p>
            </div>
            <div className="flex items-center gap-4">
              <BiMap className="size-6 flex-none" />
              <p>Cairo, Nile Delta Agricultural Zone, Egypt</p>
            </div>
          </div>
        </div>

        {/* Right column — form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid max-w-lg grid-cols-1 grid-rows-[auto_auto] gap-6"
        >
          {/* Product notice */}
          {productDisplay && (
            <div className="rounded-md border border-border-primary bg-background-secondary px-4 py-3 text-sm">
              Inquiring about: <strong>{productDisplay}</strong>
            </div>
          )}

          {/* Success / Error banner */}
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

          {/* First / Last name */}
          <div className="grid grid-cols-2 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="firstName" className="mb-2">
                First name *
              </Label>
              <Input type="text" id="firstName" {...register("firstName")} />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="lastName" className="mb-2">
                Last name *
              </Label>
              <Input type="text" id="lastName" {...register("lastName")} />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email / Phone */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email *
              </Label>
              <Input type="email" id="email" {...register("email")} />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-2">
                Phone number
              </Label>
              <Input type="text" id="phone" {...register("phone")} />
            </div>
          </div>

          {/* Company name */}
          <div className="grid w-full items-center">
            <Label htmlFor="companyName" className="mb-2">
              Company name
            </Label>
            <Input type="text" id="companyName" {...register("companyName")} />
          </div>

          {/* Inquiry type */}
          <div className="grid w-full items-center">
            <Label className="mb-2">Inquiry type *</Label>
            <Select
              defaultValue={intentParam === "quote" ? "pricing" : undefined}
              onValueChange={(value: string) =>
                setValue("inquiryType", value as ContactFormData["inquiryType"], {
                  shouldValidate: true,
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select topic" />
              </SelectTrigger>
              <SelectContent>
                {inquiryOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.inquiryType && (
              <p className="mt-1 text-sm text-red-600">
                {errors.inquiryType.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Message *
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your sourcing needs..."
              className="min-h-[11.25rem] overflow-auto"
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

          {/* Submit */}
          <div>
            <Button type="submit" title="Send inquiry" disabled={isPending}>
              {isPending ? "Sending..." : "Send inquiry"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
