import Reviews from "../Reviews/Reviews";
import Intro from "./Intro/Intro";

export default function Home() {
  return (
    <main>
      <Intro />
      <Reviews count={3} />
    </main>
  );
}
