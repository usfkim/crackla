import AdminLayout from "@/components/admin/AdminLayout";
import ServiceTable from "@/components/admin/ServiceTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminServicesPage() {
  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Services</h1>
        <Button asChild>
          <Link href="/admin/services/new">Add Service</Link>
        </Button>
      </div>
      <ServiceTable />
    </AdminLayout>
  );
}
