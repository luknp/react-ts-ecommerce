import React, { useState } from 'react';
import MobileHeader from 'components/Header/MobileHeader';
import DesktopHeader from 'components/Header/DesktopHeader';
import MobileButtomMenu from 'components/MobileButtomMenu';
import ProductsCards from 'components/ProductsCards';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import './style.scss';

const queryKeys = {
  SEARCH: 'search',
  CATEGORY: 'category',
};
function ProductsList() {
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const { search } = useLocation();
  const queries = queryString.parse(search);

  let searchInitPhrase = queries[queryKeys.SEARCH] || '';
  if (Array.isArray(searchInitPhrase)) {
    searchInitPhrase = searchInitPhrase[0];
  }

  return <>{!isMobileSearchActive && <ProductsCards />}</>;
}

export default ProductsList;
