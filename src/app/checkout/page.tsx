import ShippingAddressForm from "@/components/checkout/ShippingAddressForm";
import PaymentMethodSelection from "@/components/checkout/PaymentMethodSelection";

export default function CheckoutPage() {
  return (
    <div>
      <h1>Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ShippingAddressForm />
        </div>
        <div>
          <PaymentMethodSelection />
        </div>
      </div>
    </div>
  );
}
