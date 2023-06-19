import { FC } from "react";
import { Bullet } from "./Bullet";
import { Divider } from "./Divider";
import { ItemShopingCart } from "../core/entities/shoppingCart.entity";
import { Product } from "../core/entities/product.entity";

interface Props {
  product: ItemShopingCart;
  onSelect?(product: Product): void;
}

export const ShoppingCartListItem: FC<Props> = ({ product, onSelect }) => {
  const { image, name, count } = product;

  return (
    <div style={{ cursor: "pointer" }} onClick={() => onSelect?.(product)}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          margin: 8,
          gap: 16,
        }}
      >
        <div>
          <Bullet numberOfItems={count} />
        </div>
        <div style={{ height: 80 }}>
          <img src={image.url} className="image-fluid" alt={name} />
        </div>
      </div>
      <Divider />
    </div>
  );
};
