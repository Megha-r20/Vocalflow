import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import AppPage from "./pages/AppPage";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Templates from "./pages/Templates";
import Recorder from "./pages/Recorder";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Playground from "./pages/Playground";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/app",
    Component: AppPage,
  },
  {
    path: "/settings",
    Component: Settings,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/history",
    Component: History,
  },
  {
    path: "/templates",
    Component: Templates,
  },
  {
    path: "/recorder",
    Component: Recorder,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/playground",
    Component: Playground,
  },
]);
