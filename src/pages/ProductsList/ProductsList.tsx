import React from 'react';
import MobileHeader from 'components/Header/MobileHeader';
import MobileButtomMenu from 'components/MobileButtomMenu';
import './style.scss';

function ProductsList() {
  return (
    <div className=''>
      <MobileHeader />
      <MobileButtomMenu />
    </div>
  );
}

export default ProductsList;
