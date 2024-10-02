import LoginPage from "./Components/LoginPage";
import { Route, Routes } from "react-router-dom";
import Passenger from "./Components/Passenger";
import RiderPage from "./Components/RiderPage";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>

        <Route path="/passenger" element={<Passenger />}></Route>
        <Route path="/rider" element={<RiderPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
