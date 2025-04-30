import { createBrowserRouter } from "react-router";
import HomeLayout from "../layoutes/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
  {
    path: "/auth",
    element: <h2>Authentication layout</h2>,
  },
  {
    path: "/news",
    element: <h2>news layout</h2>,
  },
  {
    path: "/*",
    element: <h2>error 404</h2>,
  },
]);

export default router;
