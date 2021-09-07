import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import TuneIcon from '@material-ui/icons/Tune';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { useHistory } from 'react-router-dom';
import { selectProductsState /*, removeFilter, buildQueryParamsString*/ } from 'redux/slices/productsSlice';
import SortBar from 'components/SortBar';
import { ProductsSortValues } from 'types';
// import { sortProjectsBy, selectProjectsState } from '../../redux/slices/projectsSlice';
import { useActionCardStyles } from 'styles/muiStyles';

const menuItems = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'a-z', label: 'Name (A - Z)' },
  { value: 'z-a', label: 'Name (Z - A)' },
  { value: 'most-bugs', label: 'Most Bugs' },
  { value: 'least-bugs', label: 'Least Bugs' },
  { value: 'most-members', label: 'Most Members' },
  { value: 'least-members', label: 'Least Members' },
];

interface Props {
  filterValue: string;
  setFilterValue: (filterValue: string) => void;
  isMobile: boolean;
}

export default function ProjectsActionCard({ filterValue, setFilterValue, isMobile }: Props) {
  const classes = useActionCardStyles();
  const dispatch = useDispatch();
  // const { sortBy } = useSelector(selectProjectsState);
  const { filtersParams } = useSelector(selectProductsState);
  const history = useHistory();

  const handleSortChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const selectedValue = e.target.value as ProductsSortValues;
    // dispatch(sortProjectsBy(selectedValue));
  };

  // const handleDelete = (key: string) => {
  //   dispatch(removeFilter(key));
  //   const newFilterParams = JSON.parse(JSON.stringify(filtersParams));
  //   delete newFilterParams[key];
  //   history.push(`/app/shop/products/list?${buildQueryParamsString(newFilterParams)}`);
  // };

  const handleFilters = () => {
    history.push(`/filters`);
  };

  return (
    <div>
      <div className={classes.inputs}>
        <Button variant='outlined' startIcon={<ViewModuleIcon color='primary' />} />
        {isMobile && (
          <Button variant='outlined' startIcon={<TuneIcon color='primary' />} onClick={handleFilters}>
            Filters
          </Button>
        )}

        <div className={classes.sortBarWrapper}>
          <SortBar
            // sortBy={sortBy}
            sortBy=''
            handleSortChange={handleSortChange}
            menuItems={menuItems}
            label='Products'
            size={isMobile ? 'small' : 'medium'}
          />
        </div>
      </div>
      <div className='filter-flex'>
        {Object.entries(filtersParams).map(key => (
          <Chip
            key={Date.now()}
            label={`${key[0]}: ${key[1]}`}
            // onDelete={() => handleDelete(key[0])}
            color='primary'
            variant='outlined'
            style={{ marginLeft: '0.5rem' }}
          />
        ))}
      </div>
      <div className='filter-flex'>
        <Chip
          label='Elektronika'
          // onDelete={handleDelete}
          color='primary'
          variant='outlined'
          style={{ margin: '0.5rem 0 0 0.5rem' }}
        />
        <Chip
          label='Cena od 1222 do 9999'
          // onDelete={handleDelete}
          color='primary'
          variant='outlined'
          style={{ margin: '0.5rem 0 0 0.5rem' }}
        />
        <Chip
          label='Strzelce Opolskie +100km'
          // onDelete={handleDelete}
          color='primary'
          variant='outlined'
          style={{ margin: '0.5rem 0 0 0.5rem' }}
        />
      </div>
    </div>
  );
}
