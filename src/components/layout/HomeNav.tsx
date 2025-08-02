"use client";

import Link from "next/link";
import { useAuth } from "@/lib/AuthContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function HomeNav() {
  const { user } = useAuth();

  return (
    <>
      <nav className="hidden lg:flex items-center space-x-6 text-gray-600 dark:text-gray-300">
        <Link href="/crackle-pro" className="flex items-center space-x-1 hover:text-green-600 dark:hover:text-green-400 cursor-pointer transition-colors">
          <span>Crackla Pro</span>
        </Link>
        <Link href="/explore" className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">Explore</Link>
        <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">English</span>
        {user ? (
          <Link href="/freelancer/dashboard" className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">Dashboard</Link>
        ) : (
          <Link href="/become-a-seller" className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">Become a Seller</Link>
        )}
        {!user && <Link href="/auth/login" className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">Sign in</Link>}
      </nav>
      <div className="flex items-center space-x-4">
        {user ? (
           <p>Welcome, {user.name}</p>
        ) : (
          <Link href="/auth/signup">
            <Button className="bg-green-600 hover:bg-green-700 text-white hidden md:inline-flex">
              Join
            </Button>
          </Link>
        )}

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="dark:bg-gray-900">
            <div className="flex flex-col space-y-6 mt-8">
              <Link href="/crackle-pro" className="text-lg font-medium hover:text-green-600 transition-colors">Crackla Pro</Link>
              <Link href="/explore" className="text-lg font-medium hover:text-green-600 transition-colors">Explore</Link>
              {user ? (
                <Link href="/freelancer/dashboard" className="text-lg font-medium hover:text-green-600 transition-colors">Dashboard</Link>
              ) : (
                <Link href="/become-a-seller" className="text-lg font-medium hover:text-green-600 transition-colors">Become a Seller</Link>
              )}
              <hr className="dark:border-gray-700" />
              {!user && (
                <>
                  <Link href="/auth/login">
                    <Button variant="ghost" className="justify-start w-full">Sign in</Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button className="bg-green-600 hover:bg-green-700 text-white w-full">Join</Button>
                  </Link>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
