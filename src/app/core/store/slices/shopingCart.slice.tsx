import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../entities/product.entity";
import { RootState } from "..";

interface ShopingCartState {
  products: Product[];
}

const initialState: ShopingCartState = {
  products: [],
};

export const ShopingCartSlice = createSlice({
  name: "shopingCart",
  initialState,
  reducers: {
    addBulkProductsToCart: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    deleteToCart: (state, action: PayloadAction<{ code: string }>) => {
      const index = state.products.findIndex(
        (p) => p.code === action.payload.code
      );
      if (index !== -1) state.products.splice(index, 1);
    },
  },
});

export const shoppingCartSelector = (state: RootState) => state.shopingCart;
export const { addToCart, deleteToCart, addBulkProductsToCart } = ShopingCartSlice.actions;
