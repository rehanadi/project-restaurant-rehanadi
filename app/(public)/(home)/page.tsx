import Categories from "./partials/categories";
import Hero from "./partials/hero";
import HomeContainer from "./partials/home-container";
import Recommended from "./partials/recommended";

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <Categories />
      <Recommended />
    </HomeContainer>
  );
};

export default Home;