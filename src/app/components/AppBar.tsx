import { FC } from "react";
import { BusketLink } from "./BusketButton";
import { ShoppingCartButton } from "./ShoppingCartButton";
import { useMatch } from "react-router-dom";
import { Routes } from "../core/router";

export const AppBar: FC = () => {
  const isShoppingCart = useMatch(Routes.shoppingCart);

  return (
    <>
      <nav
        className="bg-light-color"
        style={{
          display: "flex",
          padding: "16px 16px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <BusketLink link="/" />
        <ShoppingCartButton style={isShoppingCart ? "close" : "read-only"} />
      </nav>
    </>
  );
};
