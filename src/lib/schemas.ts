import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(500, { message: "Message cannot exceed 500 characters." }),
  preferredTime: z
    .string()
    .min(1, { message: "Please suggest a contact time." }),
  preferredMethod: z.enum(["phone", "video", "email"], {
    required_error: "Please select a preferred contact method.",
  }),
});
