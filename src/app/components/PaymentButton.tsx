import { FC, useMemo } from "react";
import { AppConfig } from "../core/appConfig";
interface Props {
  amount: number;
}

export const PaymentButton: FC<Props> = ({ amount = 1 }) => {
  const checkout = useMemo(() => {
    if (!amount) return undefined;
    // @ts-ignore
    return new WidgetCheckout({
      currency: "COP",
      amountInCents: Math.round(amount * 100),
      reference: "AD002901221",
      publicKey: AppConfig.PAYMENT_GATEWAY_SECRET,
    });
  }, [amount]);

  const onPressPayment = () => {
    // @ts-ignore
    checkout.open(function (result) {
      const transaction = result.transaction;
      console.log("Transaction ID: ", transaction.id);
      console.log("Transaction object: ", transaction);
    });
  };

  return (
    <button
      className={`waybox-button ${!amount ? "bg-mute-color" : ""}`}
      disabled={!amount}
      onClick={onPressPayment}
    >
      Pagar con <strong>Wompi</strong>
    </button>
  );
};
