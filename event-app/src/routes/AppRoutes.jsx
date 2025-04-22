import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CalendarPage from "../pages/CalendarPage";
import MainLayout from "../Layouts/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            index: true,
            element: <HomePage />
         },
         {
            path: "about",
            element: <AboutPage />
         },
         {
            path: "calendar",
            element: <CalendarPage />
         }
      ]
   }
]);

const AppRoutes = () => {
   return <RouterProvider router={router} />;
};
export default AppRoutes;
