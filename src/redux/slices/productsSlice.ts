import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from 'redux/store';
import { fetchProductsApi, fetchCategoriesApi } from 'services/fakeProductsApi';
import { Product, ProductVariant, FiltersParams, Category } from 'types';

interface ProductsState {
  products: Array<Product>;
  variants: Array<ProductVariant>;
  variantsProducts: Array<Product>;

  categories: Array<Category>;
  categoriesObj: Array<Category>; //todelete
  filtersParams: FiltersParams;

  isLoading: boolean;
  fetchError: string | null;
}

const initialState: ProductsState = {
  products: [],
  variants: [],
  variantsProducts: [],
  categories: [],
  categoriesObj: [],
  filtersParams: {},
  isLoading: false,
  fetchError: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading: state => {
      state.isLoading = true;
      state.fetchError = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.fetchError = action.payload;
    },
    setProducts: (state, action: PayloadAction<any>) => {
      const data = action.payload;
      console.log(data);
      state.products = data.products;
      state.variants = data.variants;
      state.variantsProducts = data.variantsProducts;
      state.isLoading = false;
      state.fetchError = null;
    },
    setCategories: (state, action: PayloadAction<any>) => {
      const data = action.payload;
      console.log(data);
      state.categories = data.categories;
      state.categoriesObj = data.categoriesObj;
      state.isLoading = false;
      state.fetchError = null;
    },
  },
});

export const fetchProducts = (filterParams: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setLoading());
      const data = await fetchProductsApi();
      dispatch(setProducts(data.data));
    } catch (e) {
      console.log(e);
      //   dispatch(setError('error'));
    }
  };
};

export const fetchCategories = (): AppThunk => {
  return async dispatch => {
    try {
      const data = await fetchCategoriesApi();
      dispatch(setCategories(data.data));
    } catch (e) {
      console.log(e);
      //   dispatch(setError('error'));
    }
  };
};

export const { setLoading, setError, setProducts, setCategories } = productsSlice.actions;
export const selectProductsState = (state: RootState) => state.products;
export default productsSlice.reducer;
