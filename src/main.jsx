import { StrictMode } from "react"
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";import './index.css'

import Home from "./routes/Home.jsx";
import { Shop } from "./routes/Shop.jsx";
import { Cart } from "./routes/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "shop",
    element: <Shop />,
    
  },
  {
    path: "cart",
    element: <Cart />,
    
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
