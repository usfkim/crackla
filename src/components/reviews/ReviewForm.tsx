"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import StarRating from "./StarRating";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle review submission logic here
    console.log({ rating, review });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Rating</Label>
        <StarRating rating={rating} setRating={setRating} />
      </div>
      <div>
        <Label htmlFor="review">Review</Label>
        <Textarea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Submit Review</Button>
    </form>
  );
}
