import { Hero } from "../components";

const url = '/products?featured=true'

export const loader = () => {
  return null;
}

const Landing = () => {
  return (
    <h1 className="text-4xl">
      <Hero />
    </h1>
  );
};
export default Landing;
