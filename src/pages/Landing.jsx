import { Hero } from "../components";
import { customFetch } from "../utils";

const url = '/products?featured=true'

export const loader = async () => {
  const response = await customFetch(url)
  return response.data
}

const Landing = () => {
  return (
    <h1 className="text-4xl">
      <Hero />
    </h1>
  );
};
export default Landing;
