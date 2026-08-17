import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import NotFound from "./error/NotFound"; // المسار من مجلد error

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout><Landing /></MainLayout>,
  },
  {
    path: "/about",
    element: <MainLayout><About /></MainLayout>,
  },
  {
    path: "/courses",
    element: <MainLayout><Courses /></MainLayout>,
  },
  {
    path: "/contact",
    element: <MainLayout><Contact /></MainLayout>,
  },
  
  {
    path: "/not-found",
    element: <MainLayout><NotFound /></MainLayout>,
  },
  {
    path: "*",
    element: <MainLayout><NotFound /></MainLayout>,
  },
]);

export default router;