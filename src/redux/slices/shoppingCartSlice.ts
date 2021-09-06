import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Product } from 'types';

enum Currency {
  PLN = 'zł',
}

interface IProduct {
  productId: number;
  amount: number;
}
interface InitialState {
  carts: Array<IProduct>;
}

const initialState: InitialState = {
  carts: [],
};

export const getToPaySum = (productCarts: Array<IProduct>, products: Array<Product>, currency = Currency.PLN): number => {
  let sum = 0;
  productCarts.forEach((cart, i) => {
    const product = products.find(p => p.id === cart.productId);
    if (product) {
      sum += product.price * cart.amount;
    }
  });
  return sum;
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    push: (state, action: PayloadAction<IProduct>) => {
      const index = state.carts.findIndex(el => el.productId === action.payload.productId);
      if (index > -1) {
        state.carts[index].amount = action.payload.amount;
      } else {
        state.carts.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.carts = state.carts.filter(el => el.productId !== action.payload);
    },
  },
});

export const { push, remove } = shoppingCartSlice.actions;

export const selectShoppingCartState = (state: RootState) => state.shoppingCart;

export default shoppingCartSlice.reducer;
