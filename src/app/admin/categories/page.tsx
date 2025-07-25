import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminCategoriesPage() {
  // Replace with actual category management components
  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Categories</h1>
        <Button asChild>
          <Link href="/admin/categories/new">Add Category</Link>
        </Button>
      </div>
      <p>Category management table goes here.</p>
    </AdminLayout>
  );
}
