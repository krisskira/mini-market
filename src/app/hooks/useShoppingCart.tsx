import { useAppDispatch, useAppSelector } from "../core/store";
import {
  addToCart,
  deleteToCart,
  shoppingCartSelector,
} from "../core/store/slices/shopingCart.slice";
import { Product } from "../core/entities/product.entity";
import { ShoppingCartSummary } from "../core/entities/shoppingCart.entity";

export const useShoopingCart = () => {
  const [...products] = useAppSelector(shoppingCartSelector);
  const dispatch = useAppDispatch();

  const totalPrice = products?.reduce((t, { total }) => t + total, 0) || 0;

  const addProductToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const removeProductToCart = (code: string) => {
    dispatch(deleteToCart(code));
  };

  const getUnitsNumber = (productCode: string): number => {
    return products.find(({ code }) => code == productCode)?.count ?? 0;
  };

  return {
    total: totalPrice,
    products,
    addProductToCart,
    removeProductToCart,
    getUnitsNumber,
  };
};
