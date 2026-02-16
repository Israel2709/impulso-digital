import { getApps, initializeApp } from "firebase/app";
import { getDatabase, ref, push, type DatabaseReference } from "firebase/database";

const databaseURL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;
let db: ReturnType<typeof getDatabase> | null = null;

if (databaseURL && typeof window !== "undefined") {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
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
