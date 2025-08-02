import BecomeASellerForm from "@/components/user/BecomeASellerForm";

export default function BecomeASellerPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Become a Seller</h1>
      <p className="mb-8">
        Join our community of talented freelancers and start offering your
        services today!
      </p>
      <BecomeASellerForm />
    </div>
  );
}
