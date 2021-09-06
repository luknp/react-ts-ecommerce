import React, { useEffect } from 'react';
import ProductCardSkeleton from 'components/ProductCardSkeleton';
import PageHeader from 'components/PageHeader';
import { makeStyles } from '@material-ui/core/styles';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { selectProductsState, fetchProducts } from 'redux/slices/productsSlice';
import ProductCard from './ProductCard';
import './style.scss';

const useStyles = makeStyles({
  root: {
    padding: '2rem 1rem',
  },
  placeholder: {
    padding: '0.5rem 0',
  },
});

function ProductsCards() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { isLoading, fetchError, products, variants } = useAppSelector(selectProductsState);

  useEffect(() => {
    dispatch(fetchProducts('some filters in future'));
  }, []);

  if (isLoading) {
    return (
      <div className={classes.root}>
        <PageHeader title='Products' description='List of searched products' />
        {[...Array(10)].map((e, i) => (
          <div key={i} className={classes.placeholder}>
            <ProductCardSkeleton />
          </div>
        ))}
      </div>
    );
  }

  if (fetchError) {
    return (
      <div>
        <h1>error</h1>
        <h2> Please refresh</h2>
      </div>
    );
  }
  return (
    <>
      <PageHeader title='Products' description='List of searched products' />
      {products.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  );
}

export default ProductsCards;
