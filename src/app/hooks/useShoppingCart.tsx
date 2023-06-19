import { useAppDispatch, useAppSelector } from "../core/store";
import {
  addToCart,
  deleteToCart,
  shoppingCartSelector,
} from "../core/store/slices/shopingCart.slice";
import { Product } from "../core/entities/product.entity";
import { ShoppingCartSummary } from "../core/entities/shoppingCart.entity";

export const useShoopingCart = () => {
  const { products } = useAppSelector(shoppingCartSelector);
  const dispatch = useAppDispatch();

  const totalPrice = products?.reduce(
    (acc, product) => (acc ?? 0) + product.price,
    0
  );

  const cartItems = products.reduce((acc, p0) => {
    const productInclude = acc.findIndex((p1) => p0.code === p1.code);
    if (productInclude === -1) return [...acc, { ...p0, count: 1 }];
    acc[productInclude]["count"] += 1;
    return acc;
  }, [] as ShoppingCartSummary);

  const addProductToCart = (product: Product) => {
    dispatch(addToCart(product));
    localStorage.setItem(
      "shoppingCart",
      JSON.stringify([...products, product])
    );
  };

  const removeProductToCart = ({ code }: Product) => {
    dispatch(deleteToCart({ code }));
  };

  const getUnitsNumber = (productCode: string): number => {
    return products.filter(({ code }) => code == productCode).length;
  };

  return {
    total: totalPrice,
    products,
    cartItems,
    addProductToCart,
    removeProductToCart,
    getUnitsNumber,
  };
};
