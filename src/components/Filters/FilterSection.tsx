import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Checkbox, RadioGroup, Radio, FormControlLabel, Button, InputAdornment, FormLabel } from '@material-ui/core';
import * as yup from 'yup';
import { useFormStyles } from 'styles/muiStyles';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useSelector, useDispatch } from 'react-redux';
import { selectProductsState /*, pushFilters,  buildQueryParamsString */ } from 'redux/slices/productsSlice';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import FilterCategories from './FilterCategories';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import './style.scss';

const validationSchema = yup.object({
  title: yup.string().required('Required').min(3, 'Must be at least 3 characters').max(60, 'Must be at most 60 characters'),
  description: yup.string().required('Required'),
});

export default function FilterSection() {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [submitted, setSubmitted] = React.useState<boolean>(false);
  const classes = useFormStyles();
  const {
    handleSubmit,
    control,
    watch,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { filtersParams } = useSelector(selectProductsState);
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const expandSubCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLDivElement;
    const filterContainer = target?.parentElement?.parentElement?.parentElement?.parentElement;
    if (filterContainer) {
      const filterForm = filterContainer.children[1];
      filterForm.classList.toggle('off');
      target.classList.toggle('svg-reverse');
    }
  };

  React.useEffect(() => {
    if (submitted) {
      // history.push(`/app/shop/products/list?${buildQueryParamsString(filtersParams)}`);
      setSubmitted(false);
    }
  }, [filtersParams]);

  const onSubmit = (data: any) => {
    setSubmitted(true);
    // dispatch(pushFilters(data));
  };

  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
  console.log(watchAllFields);

  return (
    <div className='filter-section-root'>
      <form onSubmit={handleSubmit(onSubmit)} className='filters-container'>
        <div className='filter-container'>
          <div className='header'>
            <p className='name'>Kategorie</p>
            <IconButton color='inherit' onClick={expandSubCategory}>
              <ExpandLessIcon />
            </IconButton>
          </div>
          <div className='filter-form'>
            <FilterCategories />
          </div>
        </div>

        <div className='filter-container'>
          <div className='header'>
            <p className='name'>Cena</p>
            <IconButton color='inherit' onClick={expandSubCategory}>
              <ExpandLessIcon />
            </IconButton>
          </div>
          <div className='filter-form'>
            <Controller
              name='filterPriceMin'
              control={control}
              render={({ field }) => (
                <TextField
                  // control={control}
                  size='small'
                  type='number'
                  label='Cena od'
                  variant='outlined'
                  style={{
                    width: '40%',
                  }}
                  error={'priceMin' in errors}
                  helperText={'priceMin' in errors ? errors.priceMin?.message : ''}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <AttachMoneyIcon color='primary' />
                      </InputAdornment>
                    ),
                  }}
                  {...field}
                />
              )}
            />

            <Controller
              name='filterPriceMax'
              control={control}
              render={({ field }) => (
                <TextField
                  // control={control}
                  size='small'
                  type='number'
                  label='Cena do'
                  variant='outlined'
                  style={{
                    width: '40%',
                  }}
                  error={'priceMax' in errors}
                  helperText={'priceMax' in errors ? errors.priceMax?.message : ''}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <AttachMoneyIcon color='primary' />
                      </InputAdornment>
                    ),
                  }}
                  {...field}
                />
              )}
            />
          </div>
          <div className='filter-container'>
            <div className='header'>
              <p className='name'>Czas dostawy</p>
              <IconButton color='inherit' onClick={expandSubCategory}>
                <ExpandLessIcon />
              </IconButton>
            </div>
            <div className='filter-form'>
              <Controller
                control={control}
                name='filterDeliveryTime'
                defaultValue='low'
                render={({ field: { value, onChange } }) => (
                  <FormControl className={classes.radioGroupForm}>
                    <RadioGroup row defaultValue='today' className={classes.radioGroup}>
                      <div className={classes.formControlLabels}>
                        <FormControlLabel
                          value='low'
                          control={<Radio color='primary' checked={value === 'low'} onChange={onChange} size='small' />}
                          label='Low'
                        />
                        <FormControlLabel
                          value='medium'
                          control={<Radio color='primary' checked={value === 'medium'} onChange={onChange} />}
                          label='Medium'
                        />
                        <FormControlLabel
                          value='high'
                          control={<Radio color='primary' checked={value === 'high'} onChange={onChange} />}
                          label='High'
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                )}
              />
            </div>
          </div>
        </div>
        {isMobile && (
          <div className='button-section'>
            <Button
              size='large'
              color='primary'
              variant='contained'
              fullWidth
              className={classes.submitBtn}
              type='submit'
              // disabled={submitLoading}
            >
              Pokaż (433)
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
