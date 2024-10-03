import React, { useContext, useEffect, useState } from "react";
import Passenger from "../Passenger";
import RiderPage from "../RiderPage";
import { UserContext } from "../../contexts/UserContext";
import Navbar from "./Navbar/Navbar";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import Content from "./Content/Content";

function Dashboard() {
  const { userId, role, setUserId } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true); // Add a loading state

  // Fetch the userId from the cookie if it's not set in the context
  useEffect(() => {
    if (!userId) {
      const uid = getCookie("userId");
      if (uid) {
        setUserId(uid);
        console.log("User ID fetched from cookie:", uid);
      }
    }
  }, [userId, setUserId]);

  // Fetch user details only when userId and role are available
  useEffect(() => {
    const getData = async () => {
      if (!userId || !role) return; // Return early if userId or role isn't available yet

      console.log("Getting details for role:", role);
      const docRef = doc(db, `${role}s`, userId); // Construct the document path using role and userId

      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log("User data fetched:", docSnap.data());
        } else {
          console.log("No user data found");
        }
      } catch (err) {
        console.error("Something went wrong while fetching user data", err);
      } finally {
        setLoading(false); // Set loading to false after the data is fetched
      }
    };

    getData();
  }, [userId, role]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading state until the data is ready
  }

  return (
    <div>
      <Navbar userDetails={userDetails} />
      <Content role={role} userName={userDetails.displayName || "Guest"} />
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
