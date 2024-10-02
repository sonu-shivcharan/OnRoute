import LoginPage from "./Components/LoginPage";
import { Route, Routes, useLocation } from "react-router-dom";
import Passenger from "./Components/Passenger";
import RiderPage from "./Components/RiderPage";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.includes("/dashboard")
  console.log(location, isDashboard);

  return (
    <div className="w-full h-screen">
      {!isDashboard && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/passenger" element={<Passenger />}></Route>
        <Route path="/rider" element={<RiderPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
