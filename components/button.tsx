"use client";
import { signOut, signIn } from "next-auth/react";

export const SignInButton = () => {
  return (
    <button
      className="hover:underline underline-offset-4"
      onClick={() => {
        signIn();
      }}
    >
      Sign in
    </button>
  );
};

export const SignOutButton = () => {
  return (
    <button
      className="hover:underline underline-offset-4"
      onClick={() => {
        signOut();
      }}
    >
      Sign out
    </button>
  );
};
