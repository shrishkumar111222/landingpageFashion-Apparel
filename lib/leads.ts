import { getDb, isFirebaseConfigured } from "@/lib/firebase";
import { whatsappLink } from "@/lib/site-config";

export type Lead = {
  businessName: string;
  ownerName: string;
  phone: string;
  whatsapp: string;
  email: string;
  businessType: string;
  city: string;
  currentWebsite: string;
  message: string;
};

export const EMPTY_LEAD: Lead = {
  businessName: "",
  ownerName: "",
  phone: "",
  whatsapp: "",
  email: "",
  businessType: "",
  city: "",
  currentWebsite: "",
  message: "",
};

export type LeadErrors = Partial<Record<keyof Lead, string>>;

const PHONE_PATTERN = /^[+]?[\d\s()-]{7,18}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateLead(lead: Lead): LeadErrors {
  const errors: LeadErrors = {};

  if (!lead.businessName.trim()) errors.businessName = "Business name is required";
  if (!lead.ownerName.trim()) errors.ownerName = "Owner name is required";

  if (!lead.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!PHONE_PATTERN.test(lead.phone.trim())) {
    errors.phone = "Enter a valid phone number";
  }

  if (lead.whatsapp.trim() && !PHONE_PATTERN.test(lead.whatsapp.trim())) {
    errors.whatsapp = "Enter a valid WhatsApp number";
  }

  if (lead.email.trim() && !EMAIL_PATTERN.test(lead.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (!lead.businessType.trim()) errors.businessType = "Select your business type";
  if (!lead.city.trim()) errors.city = "City is required";

  return errors;
}

/** Human-readable summary used for the WhatsApp fallback message. */
export function leadToMessage(lead: Lead): string {
  const lines = [
    "New website demo request",
    `Business: ${lead.businessName}`,
    `Owner: ${lead.ownerName}`,
    `Phone: ${lead.phone}`,
    lead.whatsapp ? `WhatsApp: ${lead.whatsapp}` : "",
    lead.email ? `Email: ${lead.email}` : "",
    `Business Type: ${lead.businessType}`,
    `City: ${lead.city}`,
    lead.currentWebsite ? `Current Website: ${lead.currentWebsite}` : "",
    lead.message ? `Message: ${lead.message}` : "",
  ];

  return lines.filter(Boolean).join("\n");
}

export type SubmitResult =
  | { status: "saved" }
  | { status: "fallback"; whatsappUrl: string };

/**
 * Persists a lead to Firestore. If Firebase is unconfigured or unreachable the
 * caller receives a WhatsApp deep link so the enquiry is never lost.
 */
export async function submitLead(lead: Lead): Promise<SubmitResult> {
  const trimmed = Object.fromEntries(
    Object.entries(lead).map(([key, value]) => [key, value.trim()]),
  ) as Lead;

  if (isFirebaseConfigured()) {
    try {
      const [db, { addDoc, collection, serverTimestamp }] = await Promise.all([
        getDb(),
        import("firebase/firestore"),
      ]);

      await addDoc(collection(db, "leads"), {
        ...trimmed,
        source: "fashion-apparel-landing-page",
        pageUrl: typeof window === "undefined" ? "" : window.location.href,
        createdAt: serverTimestamp(),
      });

      return { status: "saved" };
    } catch (error) {
      console.error("Lead could not be saved to Firestore:", error);
    }
  }

  return {
    status: "fallback",
    whatsappUrl: whatsappLink(leadToMessage(trimmed)),
  };
}
