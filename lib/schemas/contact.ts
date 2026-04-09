import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  inquiryType: z.enum(["pricing", "samples", "partnership", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  product: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
