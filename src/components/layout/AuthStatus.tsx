"use client";

import { useAuth } from "@/lib/AuthContext";
import Link from "next/link";
import { Button } from "../ui/button";

export default function AuthStatus() {
  const { user, logout } = useAuth();

  return (
    <div>
      {user ? (
        <div className="flex items-center space-x-4">
          <span>Welcome, {user.name}</span>
          <Button onClick={logout} variant="ghost">
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
}
