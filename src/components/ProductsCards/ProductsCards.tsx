import React from 'react';
import ProductCardSkeleton from 'components/ProductCardSkeleton';
import './style.scss';

function ProductsCards() {
  const fetchLoading = true;

  if (fetchLoading) {
    return (
      <div>
        {[...Array(10)].map((e, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }
  return <div>aaaa</div>;
}

export default ProductsCards;
