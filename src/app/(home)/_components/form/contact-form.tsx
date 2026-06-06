"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod/mini";

const contactSchema = z.object({
  name: z
    .string()
    .check(
      z.minLength(1, "Name is required"),
      z.maxLength(255, "Name must be at most 255 characters.")
    ),
  email: z
    .email()
    .check(
      z.minLength(1, "Email is required"),
      z.maxLength(255, "Email must be at most 255 characters.")
    ),
  businessName: z
    .string()
    .check(
      z.minLength(1, "Business Name is required"),
      z.maxLength(255, "Business Name must be at most 255 characters.")
    ),
  projectDetails: z
    .string()
    .check(
      z.maxLength(2048, "Project Details must be at most 2048 characters.")
    ),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      projectDetails: "",
    },
  });

  const onSubmit = useCallback((data: z.infer<typeof contactSchema>) => {}, []);

  return (
    <form
      className="bg-white rounded-lg p-6 max-w-lg w-full mx-auto shadow"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup>
        <div className="grid grid-cols-2 gap-4">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Name</FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  className="rounded-xl"
                  placeholder="Name"
                  required
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Email</FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  className="rounded-xl"
                  placeholder="placeholder@mail.com"
                  required
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
        <Controller
          name="businessName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Business Name</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                className="rounded-xl"
                placeholder="Business Name"
                required
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="projectDetails"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Project Details</FieldLabel>
              <Textarea
                {...field}
                aria-invalid={fieldState.invalid}
                className="rounded-xl"
                placeholder="Details of your project here"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button type="submit">Submit</Button>
      </FieldGroup>
    </form>
  );
}
