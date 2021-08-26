import React from 'react';
import MobileHeader from 'components/Header/MobileHeader';
import MobileButtomMenu from 'components/MobileButtomMenu';
import ProductsCards from 'components/ProductsCards';
import './style.scss';

function ProductsList() {
  return (
    <>
      <MobileHeader />
      <ProductsCards />
      <MobileButtomMenu />
    </>
  );
}

export default ProductsList;
