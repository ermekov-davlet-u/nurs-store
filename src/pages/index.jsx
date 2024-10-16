import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainPage from "./Main";
import "../css/pages.scss"
import DetailPage from "./DetailPage";
import ProductsPage from "./Product";
import CatalogPage from "./CatalogPage";
import FormPage from "./Form";

export default function PageRouting(){

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
        },
        {
          path: "/form",
          element: <FormPage/>,
        }
      ]);

    return (
            <>
              <RouterProvider router={router} />
            </>
    )
}