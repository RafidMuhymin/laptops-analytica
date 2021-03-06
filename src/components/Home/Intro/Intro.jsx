import "./Intro.css";

export default function Intro() {
  return (
    <section className="intro d-grid p-4 gap-5 align-items-center">
      <div className="px-3 d-flex flex-column gap-3">
        <h1>
          <span className="lh-lg" style={{ color: "teal" }}>
            LAPTOPS ANALYTICA
          </span>
          <br />
          THE BEST LAPTOPS FOR YOU
        </h1>

        <p className="fs-4">
          Laptops Analytica, a laptop shop in the heart of Bangladesh. We have
          the best world-class, performant, shiny and durable laptops to meet
          all of your needs at just the right price!
        </p>

        <button
          className="btn p-3 fs-5"
          style={{
            backgroundColor: "#b260ff",
            maxWidth: "fit-content",
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
