"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  setRating?: (rating: number) => void;
}

export default function StarRating({ rating, setRating }: StarRatingProps) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating && setRating(ratingValue)}
              className="hidden"
            />
            <Star
              className={cn(
                "h-5 w-5 cursor-pointer",
                ratingValue <= rating ? "text-yellow-400" : "text-gray-300"
              )}
            />
          </label>
        );
      })}
    </div>
  );
}
