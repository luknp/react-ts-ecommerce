import React, { useEffect } from 'react';
import ProductCardSkeleton from 'components/ProductCardSkeleton';
import PageHeader from 'components/PageHeader';
import { makeStyles } from '@material-ui/core/styles';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { selectProductsState, fetchProducts } from 'redux/slices/productsSlice';
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
  return <div>products..</div>;
}

export default ProductsCards;
