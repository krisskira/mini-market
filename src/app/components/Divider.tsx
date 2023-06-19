import { CSSProperties, FC } from "react";

interface Props {
  style?: CSSProperties;
  className?: string;
}

export const Divider: FC<Props> = ({ style = {}, className = "" }) => {
  return (
    <div
      className={className}
      style={{
        height: 0.5,
        width: "100%",
        backgroundColor: "var(--mute-color)",
        opacity: 0.4,
        ...style,
      }}
    />
  );
};
