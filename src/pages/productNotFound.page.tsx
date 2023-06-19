import { SessionTitle } from "../app/components/SessionTitle";
import ProductNotFoundImage from "../assets/images/product-not-found.png";
export const ProductNotFoundPage = () => {
  return (
    <div className="container-column">
      <SessionTitle title="Product No Found" />
      <div style={{ width: "100%", textAlign: "center" }}>
        <img width={200} src={ProductNotFoundImage} alt="Product not found" />
        <p>
          <span style={{ fontWeight: "300", marginTop: 16 }}>
            The product you are looking for does not exist.
          </span>
          <br />
          <br />
          <span style={{ fontWeight: "300", marginTop: 16 }}>
            Please chooise a product from left.
          </span>
        </p>
      </div>
    </div>
  );
};
