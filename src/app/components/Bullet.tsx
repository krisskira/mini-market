import { CSSProperties, FC } from "react";

interface Props {
  numberOfItems: number;
  style?: CSSProperties;
  textStyle?: CSSProperties;
}

export const Bullet: FC<Props> = ({
  numberOfItems,
  style = {},
  textStyle = {},
}) => {
  return (
    <div
      className="bg-primary-color"
      style={{
        display: "flex",
        width: 16,
        height: 16,
        justifyContent: "center",
        alignItems: "center",
        padding: 18,
        borderRadius: "50%",
        ...style,
      }}
    >
      <span
        className="light-color"
        style={{
          fontWeight: "600",
          fontSize: 11,
          ...textStyle,
        }}
      >
        {numberOfItems > 99 ? "+99" : numberOfItems}
      </span>
    </div>
  );
};
