import { RouterProvider } from "react-router-dom";
import "../src/app/core/theme/theme.scss";
import Router from "./app/core/router";
import { Provider } from "react-redux";
import store from "./app/core/store";

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  );
};

export default App;
