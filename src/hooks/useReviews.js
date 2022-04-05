import { useEffect, useState } from "react";

export default function useReviews(count) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/data/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        // Slice data if all reviews are not required
        setReviews(data.slice(0, count));
      });
  }, [count]);

  return reviews;
}
