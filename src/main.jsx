import { StrictMode, createContext } from "react"
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";import './index.css'
import { CartProvider } from "./components/CartProvider.jsx";

import Home from "./routes/Home.jsx";
import { Shop, loader as shopLoader } from "./routes/Shop.jsx";
import { Cart } from "./routes/Cart.jsx";
import { CardProduct } from "./components/CardProduct.jsx";
import { BestSeller } from "./components/BestSeller.jsx";
import { ErrorPageGen } from "./routes/ErrorPageGen.jsx";
import { ErrorPageProd } from "./routes/ErrorPageProd.jsx";
import { ShopProduct } from "./components/ShopProduct.jsx";
import { Root } from "./routes/Root.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: < ErrorPageGen />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
        loader: shopLoader,
        children: [
            { index: true, element: <BestSeller /> },
            {
                path: "shop/:productId",
                element: <ShopProduct />,
                errorElement: < ErrorPageProd />,
            },
          ]
      },
      {
        path: "cart",
        element: <Cart />,
        },
    ]
  },
  {
    path: "/",
        element: <Home />,
        errorElement: < ErrorPageGen />,
  },
  {
      path: "shop",
      element: <Shop />,
      loader: shopLoader,
      children: [
          { index: true, element: <BestSeller /> },
          {
              path: "shop/:productId",
              element: <ShopProduct />,
              errorElement: < ErrorPageProd />,
          },
        ]
  },
  {
    path: "cart",
    element: <Cart />,
    },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
);
