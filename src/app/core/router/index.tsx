import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../../../pages/home.page";
import { ProductDetailPage } from "../../../pages/productDetail.page";
import { ShoppingCartPage } from "../../../pages/shoppingCart.page";
import { MainLayout } from "../../components/MainLayout";
import { ErrorPage } from "../../../pages/error.page";
import { ProductDetailLoader } from "./productDetail.loader";
import { ProductNotFoundPage } from "../../../pages/productNotFound.page";
import { ProductsLoader } from "./products.loader";

export const Routes = {
  index: "/",
  productDetail: "/:code/detail",
  productNotFound: "/product-not-found",
  shoppingCart: "/shopping-cart",
};

export const Router = createBrowserRouter([
  {
    path: Routes.index,
    element: <MainLayout />,
    loader: ProductsLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: Routes.productDetail,
        loader: ProductDetailLoader,
        element: <ProductDetailPage />,
      },
      {
        path: Routes.shoppingCart,
        element: <ShoppingCartPage />,
        handle: () => ({ isShoppingCart: true }),
      },
      {
        path: Routes.productNotFound,
        element: <ProductNotFoundPage />,
      },
    ],
  },
]);

export default Router;
