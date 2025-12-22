'use client';

import { useState, useEffect } from 'react';
import { useDebounce } from '@/features/shared/hooks/use-debounce';
import { useAppDispatch } from '@/lib/hooks';
import { clearSearchResults } from '@/features/restaurants/stores';
import Categories from './partials/categories';
import Hero from './partials/hero';
import HomeContainer from './partials/home-container';
import Recommended from './partials/recommended';
import Nearby from './partials/nearby';
import BestSeller from './partials/best-seller';
import SearchResults from './partials/search-results';

const Home = () => {
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // Clear search results when search query is cleared
  useEffect(() => {
    if (!debouncedSearchQuery || debouncedSearchQuery.trim() === '') {
      dispatch(clearSearchResults());
    }
  }, [debouncedSearchQuery, dispatch]);

  const renderContent = () => {
    // Show search results if there's a search query
    if (debouncedSearchQuery && debouncedSearchQuery.trim().length > 0) {
      return <SearchResults query={debouncedSearchQuery.trim()} />;
    }

    // Otherwise show content based on selected category
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
      <Hero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <Categories
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {renderContent()}
    </HomeContainer>
  );
};

export default Home;