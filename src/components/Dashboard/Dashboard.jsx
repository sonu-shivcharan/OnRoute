import React, { useContext, useEffect, useState } from "react";
import Passenger from "../Passenger";
import RiderPage from "../RiderPage";
import { UserContext } from "../../contexts/UserContext";
import Navbar from "./Navbar/Navbar";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

function Dashboard() {
  const { userId, role, setUserId } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({});
  console.log(userId);
  useEffect(() => {
    if (!userId) {
      const uid = getCookie("userId");
      setUserId(uid);
      console.log(uid);
    }
    const docRef = doc(db, role + "s", userId);
    const getData = async () => {
      console.log("getting details for ", role);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log("userData", docSnap.data());
        }
      } catch (err) {
        console.err("Something went wrong while fething user data", err);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <Navbar userDetails={userDetails} />
      {role === "passenger" ? <Passenger /> : <RiderPage />}
    </div>
  );
}

export default Dashboard;

function getCookie(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
