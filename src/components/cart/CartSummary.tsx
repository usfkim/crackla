import { Button } from "@/components/ui/button";

export default function CartSummary() {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Cart Summary</h3>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>$199.98</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Taxes</span>
        <span>$10.00</span>
      </div>
      <div className="flex justify-between font-semibold mb-4">
        <span>Total</span>
        <span>$209.98</span>
      </div>
      <Button className="w-full">Checkout</Button>
    </div>
  );
}
