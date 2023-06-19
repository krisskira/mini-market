import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  // @ts-ignore
  const { statusText = "", message = "" } = useRouteError();

  return (
    <div id="error-page">
      <h1>Ups!</h1>
      <p>lo sentimos, un error a ocurrido.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  );
};
