import "./Intro.css";

export default function Intro() {
  return (
    <section className="intro p-4 gap-5">
      <div className="px-3">
        <h1>
          <span className="lh-lg" style={{ color: "teal" }}>
            LAPTOPS ANALYTICA
          </span>
          <br />
          THE BEST LAPTOPS FOR YOU
        </h1>

        <p className="fs-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet eaque
          est vitae mollitia eum quibusdam, alias libero ipsum eveniet ipsam,
          voluptatum nemo corporis officia adipisci. Possimus placeat fugiat
          totam consequatur.
        </p>

        <button
          className="btn p-3 fs-5"
          style={{
            backgroundColor: "#b260ff",
          }}
        >
          {/* Fredoka Font Issue (If V comes after I) */}
          <span
            style={{
              paddingRight: "0.05rem",
            }}
          >
            LI
          </span>
          VE DEMO
        </button>
      </div>

      <div>
        <img
          className="img-fluid"
          src="https://images.wsj.net/im-419241/?width=860&size=1.5"
          alt="Two M1 MacBook Pros"
        />
      </div>
    </section>
  );
}
