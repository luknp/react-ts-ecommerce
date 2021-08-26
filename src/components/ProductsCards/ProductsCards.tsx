import React from 'react';
import ProductCardSkeleton from 'components/ProductCardSkeleton';
import PageHeader from 'components/PageHeader';
import { makeStyles } from '@material-ui/core/styles';
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
  const fetchLoading = true;

  if (fetchLoading) {
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
  return <div>nothing..</div>;
}

export default ProductsCards;
