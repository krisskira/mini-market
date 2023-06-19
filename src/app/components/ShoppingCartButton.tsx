import { FC, PropsWithChildren } from "react";
import shoppingCartIcon from "../../assets/icons/shopping-cart.svg";
import closeIcon from "../../assets/icons/close.svg";
import { useNavigate } from "react-router-dom";
import { ButtonIcon } from "./ButtonIcon";
import { Routes } from "../core/router";
import { useShoopingCart } from "../hooks/useShoppingCart";
import { currencyFormatter } from "../utils/currency";

export interface Props extends PropsWithChildren {
  style?: "close" | "read-only";
}

export const ShoppingCartButton: FC<Props> = (props) => {
  const { style = "read-only" } = props;

  const navigate = useNavigate();
  const { total } = useShoopingCart();

  const onPressClose = () => {
    navigate(Routes.index);
  };

  const onPressShoppingCart = () => {
    navigate(Routes.shoppingCart);
  };

  return (
    <div
      data-testid="shoppingCartButton"
      className={style === "close" ? "button-secondary" : "button-primary"}
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        onClick={onPressShoppingCart}
        style={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "4px 8px",
        }}
      >
        <div style={{ height: 24, width: 24 }}>
          <img
            src={shoppingCartIcon}
            className={
              style === "close" ? "filter-primary-color" : "filter-none"
            }
          />
        </div>
        <span
          className={style === "close" ? "primary-color" : "light-color"}
          style={{ fontWeight: "500", padding: "0 4px" }}
        >
          {currencyFormatter(total)}
        </span>
      </div>

      {style === "close" && (
        <ButtonIcon
          data-testid="collapseButtonShoppingCart"
          className="bg-primary-color"
          onClick={onPressClose}
          icon={closeIcon}
        />
      )}
    </div>
  );
};
