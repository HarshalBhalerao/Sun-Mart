"use client";

import React, { useEffect, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Spinner from "@/components/ui/Spinner";

// Zod Form Schema - Rules set to catch issues with user input
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z
    .string()
    .min(1, { message: "Please enter your email" })
    .email("This is not a valid email."),
  phone: z.string().refine(
    (value) => {
      // Remove non-digit characters
      const numericValue = value.replace(/\D/g, "");

      // Validate the numeric value based on your criteria
      const isValid = /^(\+?1)?([2-9][0-9]{2})[2-9][0-9]{6}$/.test(
        numericValue
      );

      return isValid;
    },
    { message: "Invalid phone number" }
  ),
  amount: z.string().min(2),
  country: z.string().min(2),
});

// POST method for clients API
const postData = async (data: any) => {
  const res = await import('../../api/clients/route');

  // Handling errors with try-catch
  try {
    const response = await res.POST(data);
    if (!response.ok) {
      throw new Error('Failed to post data');
    }
    return await response.json(); 
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

/**
 * Form Component
 * For more info: https://ui.shadcn.com/docs/components/form
 * */
export default function ProfileForm() {
  // Setting Default Values for input fields
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    amount: "",
    country: "",
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  // For popup toast
  const { toast } = useToast();

  const [isSubmitting, setSubmitting] = useState(false);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      setSubmitting(true);

      // Calling our POST method
      postData(values);

      // Reset form input fields on successful POST
      form.reset(defaultValues);
      toast({
        title: "Success!",
        description: "Successfully Added Client",
      });
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
      // Handle errors, e.g., log the error or display an error message to the user
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }

  return (
    <div
      className="min-w-fit m-auto py-20 w-full flex justify-center items-center"
      style={{ animation: "fade-down 0.5s" }}
    >
      <div className="rounded-md border p-4 w-2/3 md:w-1/3">
        <div className="dark:invert text-zinc-900 flex items-center justify-center py-4 text-xl">
          Add Client
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
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
                    <Input placeholder="john.doe@sample.ca" {...field} />
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
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+X (XXX) XXX-XXXX" {...field} />
                  </FormControl>
                  <FormDescription>
                    Please enter your Phone Number with Area Code
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Amount of Purchase Made</FormLabel>
                  <FormControl>
                    <Input placeholder="1200.75" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Canada" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center space-x-4 md:space-x-2">
              <Button type="submit" variant="default" disabled={isSubmitting}>
                Submit {isSubmitting && <Spinner /> }
              </Button>
              <Link
                href={"/clients"}
                onClick={() => {
                  toast({
                    title: "Back to client list page",
                    description: "Want to add client? Click Add Client Button",
                  });
                }}
              >
                <Button variant="outline" size="default">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
