import { DataSource } from "../api/dataSource";
import { Product } from "../entities/product.entity";

export async function ProductsLoader(): Promise<Product[]> {
  return await DataSource.getProducts();
}
