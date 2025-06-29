"use server";

import { z } from "zod";
import { contactSchema } from "./schemas";

export type FormState = {
  message: string;
  status: "success" | "error";
  fieldErrors?: Record<string, string>;
} | null;

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const parsed = contactSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      preferredTime: formData.get("preferredTime"),
      message: formData.get("message"),
      preferredMethod: formData.get("preferredMethod"),
    });

    console.log("Form data submitted successfully:", parsed);
    
    // Here you would typically send an email, save to a database, etc.
    // We'll simulate a delay.
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      message: "Thank you for your message! We will get back to you shortly.",
      status: "success",
    };
  } catch (e) {
    if (e instanceof z.ZodError) {
      console.error("Validation error:", e.errors);
      const fieldErrors: Record<string, string> = {};
      e.errors.forEach(err => {
        if (err.path && err.path[0]) {
          fieldErrors[err.path[0]] = err.message;
        }
      });
      return {
        message: "Please correct the errors below.",
        status: "error",
        fieldErrors,
      };
    }
    console.error(e);
    return {
      message: "An unexpected error occurred. Please try again later.",
      status: "error",
    };
  }
}
