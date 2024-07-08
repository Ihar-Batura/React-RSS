import React from 'react';
import SearchInput from '../input/SearchInput';
import Button from '../button/button';
import './SearchBox.css';

function SearchBox() {
  return (
    <section className="search-section__box">
      <SearchInput />
      <Button />
    </section>
  );
}

export default SearchBox;
