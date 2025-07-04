import RootLayout from "@/layout/RootLayout";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
        index: true,
      },
    ],
  },
]);

export default router;