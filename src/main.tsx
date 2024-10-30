import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Shop from "./pages/Shop.tsx";
import FAQs from "./pages/FAQs.tsx";
import ToggleContext from "./contexts/ToggleContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "faqs",
        element: <FAQs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToggleContext>
      <RouterProvider router={router}></RouterProvider>
    </ToggleContext>
  </StrictMode>,
);
