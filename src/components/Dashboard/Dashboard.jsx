import React, { useContext, useEffect, useState } from 'react'
import Passenger from '../Passenger';
import RiderPage from '../RiderPage';
import { UserContext } from '../../contexts/UserContext'
import Navbar from './Navbar/Navbar';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

function Dashboard() {
    const {userId, role} = useContext(UserContext);
    const [userDetails, setUserDetails] = useState({});
    console.log(userId);
    useEffect( ()=>{
      const docRef = doc(db, role+'s', userId);
      const getData = async ()=>{ 
        console.log("getting details for ", role);
        try {
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
          setUserDetails(docSnap.data());
          console.log("userData", docSnap.data());
        }
      } catch (err) {
        console.err("Something went wrong while fething user data", err);
      }}
      getData();
    },[]);
  return (
    <div>
      <Navbar userDetails={userDetails}/>
      {
      role==="passenger" ? <Passenger/> :<RiderPage/>
      }
      </div>
  )
}

export default Dashboard