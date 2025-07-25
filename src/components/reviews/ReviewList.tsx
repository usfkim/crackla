import StarRating from "./StarRating";

export default function ReviewList() {
  // Dummy data
  const reviews = [
    { id: 1, author: "John Doe", rating: 5, text: "Excellent service!" },
    { id: 2, author: "Jane Smith", rating: 4, text: "Very good, but could be faster." },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id} className="p-4 border rounded-lg">
          <div className="flex items-center mb-2">
            <span className="font-semibold">{review.author}</span>
            <div className="ml-auto">
              <StarRating rating={review.rating} />
            </div>
          </div>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
}
