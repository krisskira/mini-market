import { FC } from "react";
import { Product } from "../core/entities/product.entity";
import { useShoopingCart } from "../hooks/useShoppingCart";
import { Bullet } from "./Bullet";
import { Divider } from "./Divider";

interface Props {
  product: Product;
}

export const ShoppingCartListItem: FC<Props> = ({ product }) => {
  const { image, code, name } = product;
  const { getUnitsNumber } = useShoopingCart();
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          margin: 8,
          gap: 16
        }}
      >
        <div>
          <Bullet numberOfItems={getUnitsNumber(code)} />
        </div>
        <div style={{ height: 80 }}>
          <img
            src={image.url}
            className="image-fluid"
            alt={name}
          />
        </div>
      </div>
      <Divider />
    </div>
  );
};
