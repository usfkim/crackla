"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function AddToCartButton() {
  const { toast } = useToast();

  const handleClick = () => {
    // Handle add to cart logic here
    toast({
      title: "Added to cart",
      description: "The service has been added to your cart.",
    });
  };

  return <Button onClick={handleClick}>Add to Cart</Button>;
}
