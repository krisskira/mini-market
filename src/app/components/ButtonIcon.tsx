import { CSSProperties, FC } from "react";

interface Props {
  icon: string;
  onClick?(): void;
  style?: CSSProperties;
  iconStyle?: CSSProperties;
  className?: string;
  iconClassName?: string;
}

export const ButtonIcon: FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
      style={{
        width: 36,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer",
        ...(props.style ?? {}),
      }}
    >
      <img
        className={props.iconClassName}
        style={{ width: 18, ...(props.iconStyle ?? {}) }}
        src={props.icon}
      />
    </button>
  );
};
