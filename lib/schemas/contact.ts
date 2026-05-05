import { z } from "zod";

export const productCategoryValues = [
  "citrus",
  "fresh-fruits",
  "vegetables",
  "iqf-frozen",
  "other",
] as const;

export const serviceInterestValues = [
  "pricing",
  "samples",
  "partnership",
  "logistics",
  "other",
] as const;

export const contactSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactPerson: z.string().min(1, "Contact person is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(5, "Phone is required"),
  productCategory: z.enum(productCategoryValues),
  serviceInterest: z.enum(serviceInterestValues),
  message: z.string().min(10, "Message must be at least 10 characters"),
  product: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type ProductCategory = (typeof productCategoryValues)[number];
export type ServiceInterest = (typeof serviceInterestValues)[number];
