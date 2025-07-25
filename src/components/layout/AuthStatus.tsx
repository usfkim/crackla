"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function AuthStatus() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {user ? (
        <div>
          <span>{user.name}</span>
          <a href="/api/auth/logout">Logout</a>
        </div>
      ) : (
        <div>
          <Link href="/api/auth/login">Login</Link>
          <Link href="/api/auth/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
}
