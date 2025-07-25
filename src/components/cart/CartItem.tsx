import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CartItem() {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <img src="https://via.placeholder.com/100" alt="Service Image" />
        <div>
          <h3 className="font-semibold">Service Name</h3>
          <p className="text-sm text-gray-500">Service Description</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Input type="number" defaultValue="1" className="w-16" />
        <p className="font-semibold">$99.99</p>
        <Button variant="destructive" size="sm">
          Remove
        </Button>
      </div>
    </div>
  );
}
