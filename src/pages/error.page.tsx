import { Link, useRouteError } from "react-router-dom";
import { Routes } from "../app/core/router";

export const ErrorPage = () => {
  // @ts-ignore
  const { statusText = "", message = "" } = useRouteError();

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        minWidth: "100vw",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      id="error-page"
    >
      <p style={{ textAlign: "center", fontStyle: "oblique" }}>
        <span style={{ fontSize: 22, fontWeight: "bold" }}>Oops!</span>
        <br />
        <br />
        <span>Sorry, has an error.</span>

        <br />
        <br />
        <br />
        <i>{statusText || message}</i>
      </p>
      <br />
      <Link to={Routes.index}>
        <div
          className="bg-primary-color"
          style={{
            padding: "16px 8px",
            margin: 8,
            borderRadius: 8,
            backgroundColor: "var(--primary-color)",
          }}
        >
          <span className="light-color">Go to home.</span>
        </div>
      </Link>
    </div>
  );
};
