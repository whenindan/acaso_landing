"use client";

import { useState, type FormEvent } from "react";
import { signup } from "@/content/site";
import { validateSignup, type SignupErrors, type SignupInput } from "@/lib/signup";
import { Container, Eyebrow, Heading } from "./Section";

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: SignupInput = { name: "", company: "", email: "", phone: "", notes: "" };

export function SignupForm() {
  const [values, setValues] = useState<SignupInput>(EMPTY);
  const [errors, setErrors] = useState<SignupErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function update(field: keyof SignupInput, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateSignup(values);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      document.getElementById(`signup-${firstInvalid}`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("success");
      } else {
        if (data.errors) setErrors(data.errors);
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="signup" aria-labelledby="signup-heading" className="border-t border-ink-10 py-24 md:py-32">
      <Container className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Eyebrow>{signup.eyebrow}</Eyebrow>
          <Heading id="signup-heading">{signup.heading}</Heading>
          <p className="mt-6 max-w-md text-lg text-ink-80">{signup.sub}</p>
        </div>

        <div className="md:col-span-7">
          {status === "success" ? (
            <div
              role="status"
              className="flex min-h-80 flex-col justify-center rounded-2xl bg-ink p-8 text-paper sm:p-12"
            >
              <p className="label-mono flex items-center gap-2 text-paper/70">
                <span className="size-2 rounded-full bg-signal" aria-hidden="true" />
                Received
              </p>
              <p className="mt-6 text-3xl font-semibold tracking-[-0.03em]">
                {signup.success.heading}
              </p>
              <p className="mt-3 text-paper/70">{signup.success.body}</p>
            </div>
          ) : (
            <form
              noValidate
              onSubmit={onSubmit}
              className="grid grid-cols-1 gap-5 rounded-2xl border border-ink-10 p-6 sm:grid-cols-2 sm:p-10"
            >
              <Field id="name" label={signup.fields.name} required autoComplete="name"
                value={values.name} error={errors.name} onChange={update} />
              <Field id="company" label={signup.fields.company} required autoComplete="organization"
                value={values.company} error={errors.company} onChange={update} />
              <Field id="email" type="email" label={signup.fields.email} required autoComplete="email"
                value={values.email} error={errors.email} onChange={update} />
              <Field id="phone" type="tel" label={signup.fields.phone} autoComplete="tel"
                value={values.phone} error={errors.phone} onChange={update} />
              <Field id="notes" label={signup.fields.notes} multiline className="sm:col-span-2"
                placeholder={signup.notesPlaceholder}
                value={values.notes} error={errors.notes} onChange={update} />

              <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="rounded-full bg-ink px-6 py-3.5 font-semibold text-paper transition-opacity hover:opacity-85 disabled:cursor-wait disabled:opacity-60"
                >
                  {status === "submitting" ? signup.submitting : signup.submit}
                </button>
                <p aria-live="polite" className="text-sm text-ink-80">
                  {status === "error" ? signup.error : ""}
                </p>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  required = false,
  multiline = false,
  autoComplete,
  placeholder,
  className = "",
}: {
  id: keyof SignupInput;
  label: string;
  value: string;
  error?: string;
  onChange: (field: keyof SignupInput, value: string) => void;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
}) {
  const inputId = `signup-${id}`;
  const errorId = `${inputId}-error`;
  const shared = {
    id: inputId,
    name: id,
    value,
    required,
    placeholder,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: `mt-2 w-full rounded-lg border bg-paper px-4 py-3 text-base outline-none transition-colors placeholder:text-ink-60 focus:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 ${
      error ? "border-ink" : "border-ink/20"
    }`,
  };

  return (
    <div className={className}>
      <label htmlFor={inputId} className="label-mono text-ink-80">
        {label}
        {required ? <span aria-hidden="true"> *</span> : <span className="text-ink-60"> (optional)</span>}
      </label>
      {multiline ? (
        <textarea {...shared} rows={4} onChange={(e) => onChange(id, e.target.value)} />
      ) : (
        <input {...shared} type={type} autoComplete={autoComplete} onChange={(e) => onChange(id, e.target.value)} />
      )}
      {error ? (
        <p id={errorId} className="mt-2 text-sm font-semibold">
          {error}
        </p>
      ) : null}
    </div>
  );
}
