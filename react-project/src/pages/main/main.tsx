import React from 'react';
import './main.css';

function MainPage() {
  return (
    <section>
      <section className="search-section">
        <h1>Search Star Wars characters</h1>
        <section className="search-section__box">
          <input className="search-section__input" type="text" />
          <button type="submit">Search</button>
        </section>
      </section>
      <section className="result-section">
        <h2>Results:</h2>
      </section>
    </section>
  );
}

export default MainPage;
