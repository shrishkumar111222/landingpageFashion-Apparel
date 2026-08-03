"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  LoaderCircle,
  ShieldCheck,
} from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  EMPTY_LEAD,
  submitLead,
  validateLead,
  type Lead,
  type LeadErrors,
} from "@/lib/leads";
import { businessTypes } from "@/lib/site-config";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "saved" }
  | { status: "fallback"; whatsappUrl: string };

const assurances = [
  { icon: Clock3, label: "Reply within a few hours" },
  { icon: ShieldCheck, label: "Your details stay private" },
  { icon: BadgeCheck, label: "Free demo, no obligation" },
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-medium text-destructive">{message}</p>;
}

export function LeadForm() {
  const [lead, setLead] = React.useState<Lead>(EMPTY_LEAD);
  const [errors, setErrors] = React.useState<LeadErrors>({});
  const [state, setState] = React.useState<FormState>({ status: "idle" });
  // Bots fill hidden inputs; humans never see this one.
  const [honeypot, setHoneypot] = React.useState("");

  const update = (field: keyof Lead) => (value: string) => {
    setLead((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state.status === "submitting") return;

    if (honeypot) {
      // Silently accept, but never store or forward the submission.
      setState({ status: "saved" });
      return;
    }

    const validationErrors = validateLead(lead);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstField = Object.keys(validationErrors)[0];
      document
        .querySelector<HTMLElement>(`[name="${firstField}"]`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setState({ status: "submitting" });

    const result = await submitLead(lead);

    if (result.status === "saved") {
      setState({ status: "saved" });
      setLead(EMPTY_LEAD);
      return;
    }

    setState({ status: "fallback", whatsappUrl: result.whatsappUrl });
  };

  const isSubmitting = state.status === "submitting";
  const isComplete = state.status === "saved" || state.status === "fallback";

  return (
    <section id="demo-form" className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_0%,rgba(176,134,74,0.10),transparent_65%)]"
      />

      <div className="container relative">
        <SectionHeading
          eyebrow="Free Demo Request"
          title="Request Your Free Website Demo"
          subtitle="Share a few details about your store and we'll design a demo built around your brand — completely free, with no obligation."
        />

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-lift">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-border bg-[#FBFAF8] px-6 py-4">
              {assurances.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 text-xs font-medium text-ink-muted"
                >
                  <Icon className="size-4 text-gold-600" />
                  {label}
                </span>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {isComplete ? (
                <motion.div
                  key="complete"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center px-6 py-16 text-center sm:px-10"
                >
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 240, damping: 16, delay: 0.1 }}
                    className="flex size-16 items-center justify-center rounded-full bg-gold-50 text-gold-600 ring-1 ring-gold-200"
                  >
                    <CheckCircle2 className="size-8" strokeWidth={1.7} />
                  </motion.span>

                  {state.status === "saved" ? (
                    <>
                      <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink">
                        Thank You.
                      </h3>
                      <p className="mt-3 max-w-md text-base text-ink-muted">
                        We Will Contact You Shortly.
                      </p>
                      <p className="mt-6 max-w-md text-sm text-ink-muted">
                        Prefer to talk right away? Message us on WhatsApp and we&apos;ll
                        pick up from there.
                      </p>
                      <Button asChild variant="whatsapp" className="mt-5">
                        <a
                          href="https://wa.me/919905429650"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <WhatsAppIcon className="size-[1.15rem]" />
                          Chat On WhatsApp
                        </a>
                      </Button>
                    </>
                  ) : (
                    <>
                      <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink">
                        One Last Step.
                      </h3>
                      <p className="mt-3 max-w-md text-base text-ink-muted">
                        Your details are ready to send. Tap below to deliver them on
                        WhatsApp and we&apos;ll contact you shortly.
                      </p>
                      <Button asChild variant="whatsapp" size="lg" className="mt-6">
                        <a
                          href={state.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <WhatsAppIcon className="size-[1.15rem]" />
                          Send On WhatsApp
                        </a>
                      </Button>
                    </>
                  )}

                  <button
                    type="button"
                    onClick={() => setState({ status: "idle" })}
                    className="mt-8 text-sm font-medium text-ink-muted underline underline-offset-4 transition-colors hover:text-ink"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="grid gap-5 p-6 sm:grid-cols-2 sm:p-10"
                >
                  {/* Honeypot — visually hidden, ignored by real users */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="company-website">Company Website</label>
                    <input
                      id="company-website"
                      name="company-website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(event) => setHoneypot(event.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      className="mt-2"
                      placeholder="e.g. Shree Fashion Hub"
                      autoComplete="organization"
                      value={lead.businessName}
                      onChange={(event) => update("businessName")(event.target.value)}
                      aria-invalid={Boolean(errors.businessName)}
                    />
                    <FieldError message={errors.businessName} />
                  </div>

                  <div>
                    <Label htmlFor="ownerName">Owner Name *</Label>
                    <Input
                      id="ownerName"
                      name="ownerName"
                      className="mt-2"
                      placeholder="Your full name"
                      autoComplete="name"
                      value={lead.ownerName}
                      onChange={(event) => update("ownerName")(event.target.value)}
                      aria-invalid={Boolean(errors.ownerName)}
                    />
                    <FieldError message={errors.ownerName} />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      className="mt-2"
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      value={lead.phone}
                      onChange={(event) => update("phone")(event.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                    />
                    <FieldError message={errors.phone} />
                  </div>

                  <div>
                    <Label htmlFor="whatsapp">WhatsApp Number</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      inputMode="tel"
                      className="mt-2"
                      placeholder="Same as phone, if applicable"
                      value={lead.whatsapp}
                      onChange={(event) => update("whatsapp")(event.target.value)}
                      aria-invalid={Boolean(errors.whatsapp)}
                    />
                    <FieldError message={errors.whatsapp} />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="mt-2"
                      placeholder="you@yourstore.com"
                      autoComplete="email"
                      value={lead.email}
                      onChange={(event) => update("email")(event.target.value)}
                      aria-invalid={Boolean(errors.email)}
                    />
                    <FieldError message={errors.email} />
                  </div>

                  <div>
                    <Label htmlFor="businessType">Business Type *</Label>
                    <Select
                      value={lead.businessType || undefined}
                      onValueChange={update("businessType")}
                    >
                      <SelectTrigger
                        id="businessType"
                        name="businessType"
                        className="mt-2"
                        aria-invalid={Boolean(errors.businessType)}
                      >
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FieldError message={errors.businessType} />
                  </div>

                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      className="mt-2"
                      placeholder="Your city"
                      autoComplete="address-level2"
                      value={lead.city}
                      onChange={(event) => update("city")(event.target.value)}
                      aria-invalid={Boolean(errors.city)}
                    />
                    <FieldError message={errors.city} />
                  </div>

                  <div>
                    <Label htmlFor="currentWebsite">Current Website</Label>
                    <Input
                      id="currentWebsite"
                      name="currentWebsite"
                      className="mt-2"
                      placeholder="Leave blank if you don't have one"
                      value={lead.currentWebsite}
                      onChange={(event) => update("currentWebsite")(event.target.value)}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      className="mt-2"
                      placeholder="Tell us about your collections, your customers and what you'd like your website to do."
                      value={lead.message}
                      onChange={(event) => update("message")(event.target.value)}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      size="lg"
                      variant="gold"
                      disabled={isSubmitting}
                      className="group w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <LoaderCircle className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Request Free Demo
                          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                    <p className="mt-3 text-center text-xs text-ink-muted">
                      Fields marked * are required. We never share your details.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
