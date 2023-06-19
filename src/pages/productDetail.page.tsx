import { useLoaderData } from "react-router-dom";
import { SessionTitle } from "../app/components/SessionTitle";
import { useShoopingCart } from "../app/hooks/useShoppingCart";
import { Product } from "../app/core/entities/product.entity";
import { Bullet } from "../app/components/Bullet";
import { ButtonIcon } from "../app/components/ButtonIcon";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import { currencyFormatter } from "../app/utils/currency";
import { Divider } from "../app/components/Divider";

export const ProductDetailPage = () => {
  const { getUnitsNumber, addProductToCart, removeProductToCart } =
    useShoopingCart();

  const product = useLoaderData() as Product;
  const numberOfItems = getUnitsNumber(product.code);

  const onPressAddToCart = () => {
    addProductToCart(product);
  };

  const onPressRemoveToCart = () => {
    removeProductToCart(product);
  };

  return (
    <div className="container-column">
      <SessionTitle title="Product" />
      <div>
        {!!numberOfItems && <Bullet numberOfItems={numberOfItems} />}
        <div style={{ height: 300 }}>
          <img
            className="image-fluid"
            src={product.image.url}
            alt={product.description}
          />
        </div>
        <SessionTitle
          titleComponent={
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", flexGrow: 1, gap: 10 }}>
                <span style={{ fontWeight: "bold", color: "black" }}>
                  {product.name}:{" "}
                </span>
                <span className="primary-color" style={{ fontWeight: "500" }}>
                  {" " + currencyFormatter(product.price)}
                </span>
              </div>
              <ButtonIcon
                className="button-standard"
                icon={MinusIcon}
                onClick={onPressRemoveToCart}
                style={{
                  padding: 4,
                  margin: 2,
                }}
              />
              <ButtonIcon
                className="button-primary light-color"
                icon={PlusIcon}
                onClick={onPressAddToCart}
                style={{
                  padding: 4,
                  margin: 2,
                }}
              />
            </div>
          }
        />
        <span
          style={{
            lineHeight: 1.3,
            wordSpacing: 10,
            fontFamily: "Roboto",
          }}
        >
          {product.description}
        </span>
        <Divider
          style={{
            backgroundColor: "var(--primary-color)",
            height: 1.5,
            opacity: 0.2,
            margin: "10px 0px",
          }}
        />
      </div>
    </div>
  );
};
