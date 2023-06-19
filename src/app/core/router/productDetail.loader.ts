import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { Product } from "../entities/product.entity";
import { Routes } from ".";
import { DataSource } from "../api/dataSource";

export async function ProductDetailLoader({
  params,
}: LoaderFunctionArgs): Promise<Product | Response> {
  const { code = "" } = params;
  const product = await DataSource.getProductByCode(code);
  if (!product) return redirect(Routes.productNotFound);
  return product as Product;
}
