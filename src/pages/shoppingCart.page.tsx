import { useNavigate } from "react-router-dom";
import { PaymentButton } from "../app/components/PaymentButton";
import { SessionTitle } from "../app/components/SessionTitle";
import { ShoppingCartListItem } from "../app/components/ShoppingCartItem";
import { useShoopingCart } from "../app/hooks/useShoppingCart";
import { currencyFormatter } from "../app/utils/currency";
import { Routes } from "../app/core/router";
import { Product } from "../app/core/entities/product.entity";

export const ShoppingCartPage = () => {
  const navigate = useNavigate();
  const { products = [], total = 0 } = useShoopingCart();

  const onSelectProduct = (product: Product) => {
    navigate(Routes.productDetail.replace(":code", product.code));
  };

  return (
    <div style={{ flex: 1 }}>
      <SessionTitle title="Shopping Cart" />
      <div>
        {products.map((p, k) => (
          <ShoppingCartListItem
            onSelect={(p) => onSelectProduct(p)}
            key={k}
            product={p}
          />
        ))}
      </div>
      <div
        style={{
          padding: 16,
          gap: 8,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <span
          className="mute-color"
          style={{
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          Total:
        </span>
        <span
          className="primary-color"
          style={{
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          {currencyFormatter(total)}
        </span>
      </div>

      <PaymentButton amount={total} />
    </div>
  );
};
