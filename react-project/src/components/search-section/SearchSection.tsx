import React from 'react';
import SearchBox from '../search-box/SearchBox';
import './SearchSection.css';

function SearchSection() {
  return (
    <section className="search-section">
      <h1>Search Star Wars characters</h1>
      <SearchBox />
    </section>
  );
}

export default SearchSection;
