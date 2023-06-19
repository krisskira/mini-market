import { FC } from "react";
import { Link } from "react-router-dom";
import BasketIcon from "../../assets/icons/shopping-bag.svg";

interface Props {
  link: string;
}

export const BusketLink: FC<Props> = ({ link = "/" }) => (
  <Link to={link}>
    <div
      className="bg-primary-color"
      style={{
        borderRadius: "18%",
        width: 48,
        height: 48,
        padding: 8,
        boxShadow: "0px 0px 3px rgba(0,0,0,0.5)",
      }}
    >
      <img src={BasketIcon} />
    </div>
  </Link>
);
