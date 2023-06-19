import { configureStore } from "@reduxjs/toolkit";
import { ShopingCartSlice } from "./slices/shopingCart.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    [ShopingCartSlice.name]: ShopingCartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store