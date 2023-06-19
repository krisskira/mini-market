import { FC, PropsWithChildren, ReactNode } from "react";
import { Divider } from "./Divider";

export interface Props extends PropsWithChildren {
  title?: string;
  titleComponent?: ReactNode;
  rightComponent?: ReactNode;
}

export const SessionTitle: FC<Props> = (props) => {
  const { title, titleComponent, children, rightComponent } = props;
  return (
    <div style={{ width: "100%" }}>
      {Boolean(title) && (
        <div style={{ display: "flex", flexGrow: 1 }}>
          <span
            className="primary-color"
            style={{
              fontWeight: "bold",
              flexGrow: 1,
            }}
          >
            {title}
          </span>
          {rightComponent}
        </div>
      )}
      {titleComponent}
      {children}
      <Divider style={{
        backgroundColor: "var(--primary-color)",
        height: 1.5,
        opacity: 0.2,
        margin: "10px 0px",
      }} />
    </div>
  );
};
