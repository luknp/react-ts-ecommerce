import React, { useState } from 'react';
import { pushFilters } from 'redux/slices/productsSlice';
import { useAppDispatch } from 'redux/hooks';
import ProductsCards from 'components/ProductsCards';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { buildFiltersObjFromQueryParams } from 'utils';
import './style.scss';

const queryKeys = {
  SEARCH: 'search',
  CATEGORY: 'category',
};
function ProductsList() {
  const dispatch = useAppDispatch();

  const { search } = useLocation();
  const queries = queryString.parse(search);
  const queryStringData = queryString.stringify(queries);
  dispatch(pushFilters(buildFiltersObjFromQueryParams(queryStringData)));

  let searchInitPhrase = queries[queryKeys.SEARCH] || '';
  if (Array.isArray(searchInitPhrase)) {
    searchInitPhrase = searchInitPhrase[0];
  }

  return (
    <>
      <ProductsCards />
    </>
  );
}

export default ProductsList;
