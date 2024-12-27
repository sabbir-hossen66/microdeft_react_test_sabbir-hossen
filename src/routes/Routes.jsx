import {
  createBrowserRouter,

} from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/error/Error";
import LandingPage from "../pages/landingPage/LandingPage";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import CourseList from "../pages/courseList/CourseList";


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
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/course-list",
        element: <CourseList />,
        // loader: () => fetch('https://react-interview.crd4lc.easypanel.host/api/course')
      }
    ],
  },
]);