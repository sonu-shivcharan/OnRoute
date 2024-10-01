import LoginPage from "./Components/LoginPage";
import { Route,Routes } from "react-router-dom";
import Passenger from "./Components/Passenger";
import RiderPage from "./Components/RiderPage";

function App() {

  return (
    <div className="w-full h-screen">
      
      <Routes>
      
      <Route path="/" element={<LoginPage />}></Route>
      
      <Route path="/rider" element={<Passenger />}></Route>
      <Route path="/passenger" element={<RiderPage />}></Route>

      </Routes>


    </div>
  );
}

export default App;
