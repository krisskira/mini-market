import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../entities/product.entity";
import { RootState } from "..";
import { ShoppingCartSummary } from "../../entities/shoppingCart.entity";
import { DataSource } from "../../api/dataSource";

interface ShopingCartState {
  cart: ShoppingCartSummary;
}

const initialState: ShopingCartState = {
  cart: DataSource.getShoppingCart(),
};

export const ShopingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const productCodeToAdd = action.payload.code;
      const index = state.cart.findIndex(
        ({ code }) => code === productCodeToAdd
      );
      if (index === -1) {
        state.cart.push({
          ...action.payload,
          total: action.payload.price,
          count: 1,
        });
        DataSource.saveShoppingCart(state.cart);
        return state;
      }

      state.cart[index].count += 1;
      state.cart[index].total =
        state.cart[index].price * state.cart[index].count;
      DataSource.saveShoppingCart(state.cart);
      return state;
    },
    deleteToCart: (state, action: PayloadAction<string>) => {
      const index = state.cart.findIndex((p) => p.code === action.payload);
      if (index === -1) return state;
      const product = state.cart[index];
      product.count -= 1;
      if (product.count <= 0) {
        state.cart.splice(index, 1);
        DataSource.saveShoppingCart(state.cart);
        return state;
      }
      product.total = product.total * product.count;
      state.cart[index] = product;
      DataSource.saveShoppingCart(state.cart);
      return state;
    },
  },
});

export const shoppingCartSelector = (state: RootState) =>
  state.shoppingCart.cart;
export const { addToCart, deleteToCart } = ShopingCartSlice.actions;
