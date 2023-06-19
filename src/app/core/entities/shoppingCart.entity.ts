import { Product } from "./product.entity";

export interface ItemShopingCart extends Product {
  count: number;
  total: number;
}

export type ShoppingCartSummary = ItemShopingCart[];
