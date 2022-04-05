import { Link } from "react-router-dom";
import useReviews from "../../../hooks/useReviews";

export default function Reviews() {
  const reviews = useReviews(3);

  return (
    <section>
      <h2 className="px-4 fs-1 text-center">Customer Reviews</h2>

      <div className="p-4">
        {reviews.map(({ id, name, image, rating, review }) => (
          <div
            key={id}
            className="gap-4 mx-auto d-flex align-items-center"
            style={{
              maxWidth: "fit-content",
            }}
          >
            <div className="p-2 gap-2 d-flex flex-column">
              <img src={image} alt={name} className="rounded-circle" />
              <h3 className="text-center">{name}</h3>
            </div>

            <h4>{rating}*</h4>

            <p className="fs-5">{review}</p>
          </div>
        ))}
      </div>

      <Link
        to="/reviews"
        className="btn fs-5 text-white d-block mx-auto mb-5"
        style={{
          backgroundColor: "#3333aa",
          width: "fit-content",
        }}
      >
        See All Reviews
      </Link>
    </section>
  );
}
