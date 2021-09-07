import React from 'react';
import { useSelector } from 'react-redux';
import { selectProductsState } from 'redux/slices/productsSlice';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';
import { Category } from 'types';

export default function FilterCategories() {
  const { categoriesObj } = useSelector(selectProductsState);

  const choseCategory = (category: Category) => {
    console.log(category);
  };
  const expandSubCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  const createUl = (obj: Category[]) => {
    return (
      <ul className='categories-list'>
        {obj.map((c, index) => (
          <li key={c.name}>
            <div className='categories-header'>
              <p className='categories-name' onClick={() => choseCategory(c)}>
                {c.name}
              </p>
              <p>2390</p>
              {c.sub.length > 0 && (
                <IconButton color='inherit' onClick={expandSubCategory}>
                  <ExpandMoreIcon />
                </IconButton>
              )}
            </div>
            <div className='categories-childlist'>{c.sub.length > 0 && createUl(c.sub)}</div>
          </li>
        ))}
      </ul>
    );
  };

  return <div className='filters-categories-container'>{createUl(categoriesObj)}</div>;
}
