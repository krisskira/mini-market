import { Product } from "../entities/product.entity";
import { ShoppingCartSummary } from "../entities/shoppingCart.entity";
import fakejson from "./data-fake/products.json";

const CART_STORAGE_KEY = "@ShoppingCart";

export class DataSource {
  static async getProducts(): Promise<Product[]> {
    return fakejson as Product[];
  }

  static async getProductByCode(code: string): Promise<Product | undefined> {
    return (await this.getProducts()).find(({ code: c }) => c === code);
  }

  static saveShoppingCart(cart: ShoppingCartSummary) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }

  static getShoppingCart(): ShoppingCartSummary {
    const shoppingCartString = localStorage.getItem(CART_STORAGE_KEY);
    if (!shoppingCartString) return [];
    try {
      return JSON.parse(shoppingCartString) as ShoppingCartSummary;
    } catch (e) {
      localStorage.clear();
      return [];
    }
  }
}
