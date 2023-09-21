import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import Notfound from "~/pages/not-found";
import Notification from "~/pages/notifications";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/notifications",
        element: <Notification />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

export default routes;
