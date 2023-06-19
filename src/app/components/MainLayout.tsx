import { Outlet } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { ProductList } from "./ProductList";

export const MainLayout = () => {

  return (
    <div
      className="bg-light-color"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
        position: "absolute",
      }}
    >
      <AppBar />
      <div
        style={{
          display: "flex",
          flex: "1",
          gap: 10,
          minHeight: "100%",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            padding: 16,
            minWidth: 400,
          }}
        >
          <ProductList />
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            padding: 16,
            minWidth: 400,
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
