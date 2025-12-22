'use client';

import { useState } from 'react';
import Categories from './partials/categories';
import Hero from './partials/hero';
import HomeContainer from './partials/home-container';
import Recommended from './partials/recommended';
import Nearby from './partials/nearby';
import BestSeller from './partials/best-seller';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const renderContent = () => {
    switch (selectedCategory) {
      case 'Nearby':
        return <Nearby />;
      case 'Best Seller':
        return <BestSeller />;
      default:
        return <Recommended />;
    }
  };

  return (
    <HomeContainer>
      <Hero />
      <Categories
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {renderContent()}
    </HomeContainer>
  );
};

export default Home;