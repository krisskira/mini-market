import { useLoaderData, useNavigate } from "react-router-dom";
import { SessionTitle } from "./SessionTitle";
import { Routes } from "../core/router";
import { Product } from "../core/entities/product.entity";
import { ProductIListItem } from "./ProductIListItem";

export const ProductList = () => {
  const navigate = useNavigate();

  const products = useLoaderData() as Product[];

  const onPressSeeProductDetail = (product: Product) => {
    navigate(Routes.productDetail.replace(":code", product.code));
  };

  return (
    <div className="container-column">
      <SessionTitle title="Store" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
          gridTemplateRows: "repeat(auto-fit, 150px)",
          gap: 10,
          gridAutoFlow: "dense",
        }}
      >
        {products.map((p, k) => (
          <ProductIListItem
            key={k}
            product={p}
            onSelect={onPressSeeProductDetail}
          />
        ))}
      </div>
    </div>
  );
};
