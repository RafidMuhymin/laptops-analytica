import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import "./Review.css";

export default function Reviews({ count }) {
  const reviews = useReviews(count);

  return (
    <section>
      <h2 className="px-4 mt-4 fs-1 text-center">What Our Customers Say!</h2>

      <div className="p-4 d-flex flex-column gap-3">
        {reviews.map(({ id, name, image, rating, review }) => (
          <div
            key={id}
            className="review gap-4 mx-auto d-grid align-items-center justify-content-center"
            style={{
              maxWidth: "fit-content",
            }}
          >
            <div
              className="p-2 gap-2 mx-auto d-flex flex-column align-items-center justify-content-center"
              style={{ width: "200px" }}
            >
              <img
                src={image}
                alt={name}
                className="rounded-circle"
                width={128}
              />
              <h3 className="text-center">{name}</h3>
            </div>

            <h4 className="text-center">
              {Array.from({ length: rating }).map(() => (
                <Icon icon="emojione:star" />
              ))}
            </h4>

            <p className="fs-4 text-center">{review}</p>
          </div>
        ))}
      </div>

      {/* Conditional Rendering */}
      {count < 6 && (
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
      )}
    </section>
  );
}
