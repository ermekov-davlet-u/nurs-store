import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainPage from "./Main";
import "../css/pages.scss"
import DetailPage from "./DetailPage";
import ProductsPage from "./Product";
import CatalogPage from "./CatalogPage";

export default function PageWrapper(){

    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainPage/>,
        },
        {
          path: "/product",
          element: <ProductsPage/>,
        },
        {
          path: "/product/:id",
          element: <DetailPage/>,
        },
        {
          path: "/catalog",
          element: <CatalogPage/>,
        }
      ]);

    return (
            <>
                <RouterProvider router={router} />
            </>
    )
}