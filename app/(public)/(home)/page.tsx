import Categories from "./partials/categories";
import Hero from "./partials/hero";
import HomeContainer from "./partials/home-container";

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <Categories />
    </HomeContainer>
  );
};

export default Home;