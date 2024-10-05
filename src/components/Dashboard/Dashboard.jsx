import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
// import Navbar from "./Navbar/Navbar";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";
import Content from "./Content/Content";
import { onAuthStateChanged } from "firebase/auth";
import { useParams } from "react-router-dom";

function Dashboard() {
  const {role} = useParams("role");
  const { userId, setUserId } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true); // Add a loading state

  // Fetch the userId from the cookie if it's not set in the context
  useEffect(() => {
    if (!userId) {
      let uid;
      onAuthStateChanged(auth, (user)=>{
        if(user){
          uid=user.uid;
          setUserId(uid)
          console.log("auth",user);
        }
      })
    }
  }, []);

  // Fetch user details only when userId and role are available
  useEffect(() => {
    const getData = async () => {
      if (!userId || !role){
        console.log("ccc", userId);
        return;
      }  // Return early if userId or role isn't available yet

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
    return <div className="h-screen w-screen flex justify-center items-center text-2xl font-bold">Loading...</div>; // Display a loading state until the data is ready
  }

  return (
    <div>
      {/* <Navbar userDetails={userDetails} /> */}
      <Content role={role} userName={userDetails.displayName || "Guest"} userDetails={userDetails}/>
    </div>
  );
}

export default Dashboard;

