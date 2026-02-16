import { getApps, initializeApp } from "firebase/app";
import { getDatabase, ref, push, type DatabaseReference } from "firebase/database";

function stripEnv(value: string | undefined): string | undefined {
  if (value == null) return undefined;
  return value.replace(/^["'\s]+|["'\s]+$/g, "").trim() || undefined;
}

const databaseURL = stripEnv(process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL);
let db: ReturnType<typeof getDatabase> | null = null;

if (databaseURL && typeof window !== "undefined") {
  const firebaseConfig = {
    apiKey: stripEnv(process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
    authDomain: stripEnv(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN),
    databaseURL,
    projectId: stripEnv(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID),
    storageBucket: stripEnv(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET),
    messagingSenderId: stripEnv(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID),
    appId: stripEnv(process.env.NEXT_PUBLIC_FIREBASE_APP_ID),
    measurementId: stripEnv(process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID),
  };
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  db = app ? getDatabase(app as ReturnType<typeof initializeApp>) : null;
}

export function getOpinionsRef(): DatabaseReference | null {
  if (!db) return null;
  return ref(db, "opinions");
}

export async function addOpinion(data: { author: string; role: string; quote: string }) {
  const opinionsRef = getOpinionsRef();
  if (!opinionsRef) throw new Error("Firebase no configurado");
  await push(opinionsRef, {
    ...data,
    createdAt: new Date().toISOString(),
  });
}

export { db };
