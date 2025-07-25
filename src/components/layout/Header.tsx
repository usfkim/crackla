import Link from "next/link";
import AuthStatus from "./AuthStatus";

export default function Header() {
  return (
    <header className="py-4 px-6 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My App
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/services">Services</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/admin/dashboard">Admin</Link>
          <AuthStatus />
        </nav>
      </div>
    </header>
  );
}
