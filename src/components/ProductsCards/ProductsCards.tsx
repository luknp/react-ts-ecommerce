import React, { useEffect, useState } from 'react';
import ProductCardSkeleton from 'components/ProductCardSkeleton';
import PageHeader from 'components/PageHeader';
import { makeStyles } from '@material-ui/core/styles';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { selectProductsState, fetchProducts, fetchCategories } from 'redux/slices/productsSlice';
import ProductsActionCard from 'components/ProductsActionCard';
import FilterSection from 'components/Filters/FilterSection';
import ProductCard from './ProductCard';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import './style.scss';

const useStyles = makeStyles({
  root: {
    padding: '2rem 1rem',
  },
  placeholder: {
    padding: '0.5rem 0',
  },
});

interface Props {
  queryString: string;
}

export default function ProductsCards({ queryString }: Props) {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [filterValue, setFilterValue] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const { isLoading, fetchError, products, variants } = useAppSelector(selectProductsState);

  useEffect(() => {
    console.log(queryString);
    dispatch(fetchProducts(queryString));
    dispatch(fetchCategories());
  }, [queryString]);

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
      <div className='filters-list-cols'>
        {!isMobile && (
          <div className='filters-col'>
            <div className='filter-col-backgroung'>
              <FilterSection />
            </div>
          </div>
        )}
        <div>
          <ProductsActionCard filterValue={filterValue} setFilterValue={setFilterValue} isMobile={isMobile} />
          {isLoading
            ? [...Array(10)].map((e, i) => (
                <div key={i} className={classes.placeholder}>
                  <ProductCardSkeleton />
                </div>
              ))
            : products.map(product => <ProductCard product={product} key={product.id} />)}
        </div>
      </div>
    </>
  );
}
