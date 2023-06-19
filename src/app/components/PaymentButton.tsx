import { FC, useMemo } from "react";
interface Props {
  amount: number;
}

export const PaymentButton: FC<Props> = ({ amount = 1 }) => {
  const checkout = useMemo(() => {
    // @ts-ignore
    return new WidgetCheckout({
      currency: "COP",
      amountInCents: Math.round(amount * 100),
      reference: "AD002901221",
      publicKey: "pub_test_cHFA7zZNb8XAOYRFxpHw7NadFgiUI5zT",
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
    <button className="waybox-button" onClick={onPressPayment}>
      Pagar con <strong>Wompi</strong>
    </button>
  );
};
