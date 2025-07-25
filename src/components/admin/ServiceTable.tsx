import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServiceTable() {
  // Dummy data
  const services = [
    { id: 1, name: "Service A", category: "Category 1", price: "$99.99" },
    { id: 2, name: "Service B", category: "Category 2", price: "$149.99" },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services.map((service) => (
          <TableRow key={service.id}>
            <TableCell>{service.name}</TableCell>
            <TableCell>{service.category}</TableCell>
            <TableCell>{service.price}</TableCell>
            <TableCell>
              <Button asChild variant="outline" size="sm">
                <Link href={`/admin/services/edit/${service.id}`}>Edit</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
