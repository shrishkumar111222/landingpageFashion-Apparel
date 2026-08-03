import type { FirebaseApp } from "firebase/app";
import type { Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/**
 * The landing page is a static export, so Firebase is optional at build time.
 * When the keys are absent the lead form silently falls back to WhatsApp
 * instead of breaking, which keeps the page useful before Firebase is wired up.
 */
export function isFirebaseConfigured(): boolean {
  return Boolean(
    firebaseConfig.apiKey &&
      firebaseConfig.projectId &&
      firebaseConfig.appId,
  );
}

let dbPromise: Promise<Firestore> | null = null;

/** Loads the Firebase SDK on demand — never during the initial page render. */
export function getDb(): Promise<Firestore> {
  if (!isFirebaseConfigured()) {
    return Promise.reject(new Error("Firebase is not configured"));
  }

  if (!dbPromise) {
    dbPromise = (async () => {
      const [{ getApps, initializeApp }, { getFirestore }] = await Promise.all([
        import("firebase/app"),
        import("firebase/firestore"),
      ]);

      const app: FirebaseApp = getApps().length
        ? getApps()[0]
        : initializeApp(firebaseConfig as Record<string, string>);

      return getFirestore(app);
    })();
  }

  return dbPromise;
}
