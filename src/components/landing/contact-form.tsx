"use client";

import { useEffect, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { contactSchema } from "@/lib/schemas";
import { submitContactForm, type FormState } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";

type ContactFormValues = z.infer<typeof contactSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        "Submit"
      )}
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast();
  const [state, formAction] = useActionState<FormState, FormData>(
    submitContactForm,
    null
  );

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      preferredTime: "",
      preferredMethod: undefined,
    },
  });

  useEffect(() => {
    if (state?.status === "success") {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      form.reset();
    } else if (state?.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
      if (state.fieldErrors) {
        Object.entries(state.fieldErrors).forEach(([field, message]) => {
          form.setError(field as keyof ContactFormValues, { message });
        });
      }
    }
  }, [state, toast, form]);

  // Check for success
  if (state?.status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="text-3xl mb-4">😊</div>
        <div className="text-2xl font-bold text-center mb-2">
          Thank you! Ellie will get back to you soon
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="(555) 234-5678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="How can I help you?"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="preferredTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Contact Time</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Let us know when you're typically available for a call or
                consultation
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Controller
          name="preferredMethod"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Contact Method</FormLabel>
              <>
                <Select
                  onValueChange={field.onChange}
                  value={field.value ?? ""}
                  defaultValue={field.value ?? ""}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred method" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="phone">Phone Call</SelectItem>
                    <SelectItem value="video">Video Call</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                  </SelectContent>
                </Select>
                <input type="hidden" name="preferredMethod" value={field.value ?? ""} />
                <FormMessage />
              </>
            </FormItem>
          )}
        />
        <SubmitButton />
      </form>
    </Form>
  );
}
