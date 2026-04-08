import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

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

// Protected Layout Component
const ProtectedLayout = () => {
  const { isLoggedIn, loading } = useAuth();
  if (loading) return null;
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return <Outlet />;
};

// Public Layout Component
const PublicLayout = () => {
  const { isLoggedIn, loading } = useAuth();
  if (loading) return null;
  if (isLoggedIn) return <Navigate to="/dashboard" replace />;
  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    element: <PublicLayout />,
    children: [
      { path: "login", Component: Login },
      { path: "signup", Component: Signup },
    ]
  },
  {
    element: <ProtectedLayout />,
    children: [
      { path: "dashboard", Component: Dashboard },
      { path: "app", Component: AppPage },
      { path: "settings", Component: Settings },
      { path: "history", Component: History },
      { path: "templates", Component: Templates },
      { path: "recorder", Component: Recorder },
      { path: "profile", Component: Profile },
      { path: "playground", Component: Playground },
    ]
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
