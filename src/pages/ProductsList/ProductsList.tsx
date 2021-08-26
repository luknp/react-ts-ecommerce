import React, { useState } from 'react';
import MobileHeader from 'components/Header/MobileHeader';
import MobileButtomMenu from 'components/MobileButtomMenu';
import ProductsCards from 'components/ProductsCards';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import './style.scss';

const queryKeys = {
  SEARCH: 'search',
  CATEGORY: 'category',
};
function ProductsList() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const { search } = useLocation();
  const queries = queryString.parse(search);
  console.log(search);
  console.log(queries[queryKeys.SEARCH]);

  let searchInitPhrase = queries[queryKeys.SEARCH] || '';
  if (Array.isArray(searchInitPhrase)) {
    searchInitPhrase = searchInitPhrase[0];
  }

  return (
    <>
      <MobileHeader searchInitPhrase={searchInitPhrase} handleSetIsSearchActive={isActive => setIsSearchActive(isActive)} />
      {!isSearchActive && (
        <>
          <ProductsCards />
          <MobileButtomMenu />
        </>
      )}
    </>
  );
}

export default ProductsList;
