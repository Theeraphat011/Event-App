import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CalendarPage from "../pages/CalendarPage";
import DocumentPage from "../pages/DocumentPage";
import TrashPage from "../pages/TrashPage";
import SettingPage from "../pages/SettingPage";
import MainLayout from "../Layouts/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            index: true,
            element: <HomePage />,
         },
         {
            path: "calendar",
            element: <CalendarPage />,
         },
         {
            path: "about",
            element: <AboutPage />,
         },
         {
            path: "about/:id",
            element: <AboutPage />,
         },
         {
            path: "document",
            element: <DocumentPage />,
         },
         {
            path: "trash",
            element: <TrashPage />,
         },
         {
            path: "setting",
            element: <SettingPage />,
         },
      ],
   },
]);

const AppRoutes = () => {
   return <RouterProvider router={router} />;
};
export default AppRoutes;
