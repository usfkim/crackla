import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

export default function CartPage() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <CartItem />
          <CartItem />
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
