"use client";

import { useState, type FormEvent } from "react";
import { signup } from "@/content/site";
import { validateSignup, type SignupErrors, type SignupInput } from "@/lib/signup";
import { Container, Eyebrow } from "./Section";

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: SignupInput = { name: "", company: "", email: "", notes: "" };

export function SignupForm() {
  const [values, setValues] = useState<SignupInput>(EMPTY);
  const [errors, setErrors] = useState<SignupErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");

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
        body: JSON.stringify({ ...values, website: honeypot }),
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
    <section
      id="signup"
      aria-labelledby="signup-heading"
      className="border-t border-fg/10 px-[clamp(20px,4vw,56px)] py-[clamp(96px,12vw,160px)]"
    >
      <Container className="grid gap-x-24 gap-y-16 [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))]">
        <div className="flex flex-col gap-6">
          <Eyebrow>{signup.eyebrow}</Eyebrow>
          <h2
            id="signup-heading"
            className="m-0 text-balance font-reader text-[clamp(38px,4.4vw,64px)] leading-[1.02] font-light tracking-[-0.02em]"
          >
            {signup.heading}
          </h2>
          <p className="m-0 max-w-[380px] text-base leading-[1.6] text-muted">{signup.sub}</p>
        </div>

        {status === "success" ? (
          <div
            role="status"
            className="flex min-h-80 flex-col justify-center gap-4 border-t border-fg/18"
          >
            <span className="label-mono flex items-center gap-2.5 text-faint">
              <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
              Received
            </span>
            <p className="m-0 font-reader text-4xl font-light tracking-[-0.02em]">
              {signup.success.heading}
            </p>
            <p className="m-0 text-muted">{signup.success.body}</p>
          </div>
        ) : (
          <form
            noValidate
            onSubmit={onSubmit}
            className="grid content-start gap-x-8 gap-y-9 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]"
          >
            <Field id="name" label={signup.fields.name} required autoComplete="name" value={values.name} error={errors.name} onChange={update} />
            <Field id="company" label={signup.fields.company} required autoComplete="organization" value={values.company} error={errors.company} onChange={update} />
            <Field id="email" type="email" label={signup.fields.email} required autoComplete="email" value={values.email} error={errors.email} onChange={update} />

            {/* Honeypot: hidden from people and screen readers; bots fill it. */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="absolute -left-[9999px] size-px opacity-0"
            />

            <label className="col-span-full flex flex-col gap-1.5">
              <span className="label-mono text-faint">
                {signup.fields.notes} <span className="text-quiet">(optional)</span>
              </span>
              <textarea
                id="signup-notes"
                name="notes"
                rows={3}
                value={values.notes}
                placeholder={signup.notesPlaceholder}
                onChange={(e) => update("notes", e.target.value)}
                className="resize-y rounded-none border-0 border-b border-fg/[0.22] bg-transparent py-2.5 text-[17px] outline-none focus:border-fg"
              />
            </label>

            <div className="col-span-full flex flex-wrap items-center gap-5">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex items-center gap-3.5 bg-fg px-[26px] py-4 text-[15px] font-medium text-bg transition-colors hover:bg-fg/85 disabled:cursor-wait disabled:opacity-60"
              >
                {status === "submitting" ? signup.submitting : signup.submit} <span aria-hidden="true">→</span>
              </button>
              <p aria-live="polite" className="text-sm text-error">
                {status === "error" ? signup.error : ""}
              </p>
            </div>
          </form>
        )}
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
  autoComplete,
}: {
  id: keyof SignupInput;
  label: string;
  value: string;
  error?: string;
  onChange: (field: keyof SignupInput, value: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const inputId = `signup-${id}`;
  const errorId = `${inputId}-error`;

  return (
    <label htmlFor={inputId} className="flex flex-col gap-1.5">
      <span className="label-mono text-faint">
        {label}
        {required ? <span aria-hidden="true"> *</span> : <span className="text-quiet"> (optional)</span>}
      </span>
      <input
        id={inputId}
        name={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        onChange={(e) => onChange(id, e.target.value)}
        className={`border-0 border-b bg-transparent py-2.5 text-[17px] outline-none focus:border-fg ${
          error ? "border-error" : "border-fg/[0.22]"
        }`}
      />
      <span id={errorId} className="min-h-[18px] text-[13px] text-error">
        {error}
      </span>
    </label>
  );
}
