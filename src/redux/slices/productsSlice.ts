import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from 'redux/store';
import { fetchProductsApi } from 'services/fakeProductsApi';

interface ProductsState {
  products: any;
  variants: any;
  variantsProducts: any;
  isLoading: boolean;
  fetchError: string | null;
}

const initialState: ProductsState = {
  products: [],
  variants: [],
  variantsProducts: [],
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
      state.products = data.products;
      state.variants = data.variants;
      state.variantsProducts = data.variantsProducts;
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
      console.log(data);
      dispatch(setProducts(data));
    } catch (e) {
      console.log(e);
      dispatch(setError('error'));
    }
  };
};

export const { setLoading, setError, setProducts } = productsSlice.actions;
export const selectProductsState = (state: RootState) => state.products;
export default productsSlice.reducer;
