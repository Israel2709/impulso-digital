import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getDatabase, ref, push, get, type DatabaseReference } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function stripEnv(value: string | undefined): string | undefined {
  if (value == null) return undefined;
  return value.replace(/^["'\s]+|["'\s]+$/g, "").trim() || undefined;
}

const databaseURL = stripEnv(process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL);
let db: ReturnType<typeof getDatabase> | null = null;
let storage: ReturnType<typeof getStorage> | null = null;

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
  const app = (getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]) as FirebaseApp;
  db = getDatabase(app);
  storage = getStorage(app);
}

export function getOpinionsRef(): DatabaseReference | null {
  if (!db) return null;
  return ref(db, "opinions");
}

export type Opinion = {
  author: string;
  role: string;
  quote: string;
  createdAt: string;
};

export async function getOpinions(): Promise<Opinion[]> {
  const opinionsRef = getOpinionsRef();
  if (!opinionsRef) return [];
  const snapshot = await get(opinionsRef);
  if (!snapshot.exists()) return [];
  const data = snapshot.val() as Record<string, Opinion>;
  return Object.entries(data)
    .map(([, v]) => v)
    .filter((v) => v && typeof v.author === "string" && typeof v.quote === "string")
    .sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? ""))
    .slice(0, 12);
}

export async function addOpinion(data: { author: string; role: string; quote: string }) {
  const opinionsRef = getOpinionsRef();
  if (!opinionsRef) throw new Error("Firebase no configurado");
  await push(opinionsRef, {
    ...data,
    createdAt: new Date().toISOString(),
  });
}

// Portafolio (Realtime Database + Storage)
export type PortfolioItem = {
  title: string;
  description: string;
  badge: string;
  tags: string[];
  imageUrl: string;
  href?: string;
  createdAt: string;
};

function getPortfolioRef(): DatabaseReference | null {
  if (!db) return null;
  return ref(db, "portfolio");
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const portfolioRef = getPortfolioRef();
  if (!portfolioRef) return [];
  const snapshot = await get(portfolioRef);
  if (!snapshot.exists()) return [];
  const data = snapshot.val() as Record<string, PortfolioItem>;
  return Object.entries(data)
    .map(([, v]) => v)
    .filter(
      (v) =>
        v &&
        typeof v.title === "string" &&
        Array.isArray(v.tags)
    )
    .sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? ""));
}

export async function addPortfolioItem(data: Omit<PortfolioItem, "createdAt">) {
  const portfolioRef = getPortfolioRef();
  if (!portfolioRef) throw new Error("Firebase no configurado");
  await push(portfolioRef, {
    ...data,
    createdAt: new Date().toISOString(),
  });
}

export async function uploadPortfolioScreenshot(file: File): Promise<string> {
  if (!storage) throw new Error("Firebase Storage no configurado");
  const path = `portfolio/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
  const fileRef = storageRef(storage, path);
  await uploadBytesResumable(fileRef, file);
  return getDownloadURL(fileRef);
}

export { db };
