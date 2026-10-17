import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // প্রডাকশনে Vercel-এর নিজস্ব ডোমেইন বা উইন্ডো অবজেক্ট থেকে ডোমেইন নেবে, লোকালহোস্টে localhost:3000 ব্যবহার করবে
  baseURL:
    process.env.APP_URL ||
    (typeof window !== "undefined"
      ? window.location.origin
      : "http://localhost:3000"),
});

export const {
  signIn,
  signUp,
  signOut,
  updateUser,
  changePassword,
  useSession,
} = authClient;
