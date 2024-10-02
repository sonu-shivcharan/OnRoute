import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginPage from "./components/LoginPage";
function Layout() {
  const { pathname } = useLocation();
  const [userId, setUserId] = useState(null);
  const [role, setRole] = useState("passenger");

  const isDashboard = pathname.includes("dashboard");
  return (
    <UserProvider value={{ userId, role, setUserId, setRole }}>
      {isDashboard ? <Dashboard /> : <LoginPage />}
    </UserProvider>
  );
}

export default Layout;
