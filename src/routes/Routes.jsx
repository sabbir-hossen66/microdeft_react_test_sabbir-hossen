import {
  createBrowserRouter,

} from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/error/Error";
import LandingPage from "../pages/landingPage/LandingPage";
import Register from "../pages/register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/register",
        element: <Register />,
      }
    ],
  },
]);