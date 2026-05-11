import React from "react";
import { Star, StarHalf } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  className?: string;
}

export function RatingStars({ rating, className = "" }: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-badge-ml text-badge-ml" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 fill-badge-ml text-badge-ml" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-border" />
      ))}
    </div>
  );
}
