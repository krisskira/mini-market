import { Product } from "./product.entity";

export interface ItemShopingCart extends Product {
  count: number;
}

export type ShoppingCartSummary = ItemShopingCart[];
