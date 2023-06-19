import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { Product } from "../entities/product.entity";
import products from "../api/data-fake/products.json";
import { Routes } from ".";

export async function ProductDetailLoader({
  params,
}: LoaderFunctionArgs): Promise<Product | Response> {
  const { code = "" } = params;
  const product = products.find(({ code: c }) => c === code);
  if (!product) return redirect(Routes.productNotFound);
  return product as Product;
}
