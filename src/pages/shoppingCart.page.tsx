import { PaymentButton } from "../app/components/PaymentButton";
import { SessionTitle } from "../app/components/SessionTitle";
import { ShoppingCartListItem } from "../app/components/ShoppingCartItem";
import { useShoopingCart } from "../app/hooks/useShoppingCart";
import { currencyFormatter } from "../app/utils/currency";

export const ShoppingCartPage = () => {
  const { cartItems, total } = useShoopingCart();
  return (
    <div style={{ flex: 1 }}>
      <SessionTitle title="Shopping Cart" />
      <div>
        {cartItems.map((p, k) => (
          <ShoppingCartListItem key={k} product={p} />
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
