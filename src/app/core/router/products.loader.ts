import { Product } from "../entities/product.entity";
import products from "../api/data-fake/products.json";
import store from "../store";
import { addBulkProductsToCart } from "../store/slices/shopingCart.slice";

export async function ProductsLoader(): Promise<Product[]> {
  const shoppingString = localStorage.getItem("shoppingCart");
  if (!shoppingString) return products as Product[];

  try {
    const cart: Product[] = JSON.parse(shoppingString);
    store.dispatch(addBulkProductsToCart(cart));
  } catch (e) {
    localStorage.clear();
  }
  return products as Product[];
}
