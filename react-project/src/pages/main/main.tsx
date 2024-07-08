import React from 'react';
import SearchSection from '../../components/search-section/SearchSection';
import './main.css';

function MainPage() {
  return (
    <section>
      <SearchSection />
      <section className="result-section">
        <h2>Results:</h2>
      </section>
    </section>
  );
}

export default MainPage;
