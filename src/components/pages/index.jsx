import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainPage from "./Main";
import "../../css/pages.css"

export default function PageWrapper(){

    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainPage />,
        },
      ]);

    return (
        <div className="page-wrapper">
            <div className="page-wrapper_container">
                <RouterProvider router={router} />
            </div>
        </div>
    )
}