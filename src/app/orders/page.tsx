import OrderItem from "@/components/orders/OrderItem";

export default function OrdersPage() {
  return (
    <div>
      <h1>Order History</h1>
      <div className="space-y-4">
        <OrderItem />
        <OrderItem />
      </div>
    </div>
  );
}
