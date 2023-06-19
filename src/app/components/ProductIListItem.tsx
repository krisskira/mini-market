import { FC, PropsWithChildren, useEffect, useState } from "react";
import { ImageSize, Product } from "../core/entities/product.entity";
import { Bullet } from "./Bullet";
import { useShoopingCart } from "../hooks/useShoppingCart";
import { useMatch } from "react-router-dom";
import { Routes } from "../core/router";

export interface Props extends PropsWithChildren {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductIListItem: FC<Props> = ({ product, onSelect }) => {
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const { getUnitsNumber } = useShoopingCart();
  const numberOfItems = getUnitsNumber(product.code);
  const match = useMatch(Routes.productDetail);

  useEffect(() => {
    if (!match) return;

    const { params } = match;
    const { code } = params;
    product.code === code ? setIsSelect(true) : setIsSelect(false);
  }, [match, product.code]);

  return (
    <div
      onClick={() => onSelect(product)}
      style={{
        boxShadow: isSelect ? "0px 0px 8px var(--primary-color)" : "none",
        border: "2px solid var(--mute-color)",
        padding: 8,
        height: product.image.size === ImageSize.large ? 300 : 150,
        gridRow: product.image.size === ImageSize.large ? "span 2" : "span 1",
      }}
    >
      {!!numberOfItems && (
        <div>
          <Bullet
            style={{ position: "absolute" }}
            numberOfItems={numberOfItems}
          />
        </div>
      )}
      <img src={product.image.url} className="image-fluid" />
    </div>
  );
};
