import { ref, set } from "firebase/database";
import React, { useState } from "react";
import { rtdb } from "../../../firebase/firebaseConfig";
import RouteDetails from "./RouteDetails";

function RouteCard({ start, end, role, foundRoutes , uid, routeIds}) {
  const [isCollapsed, setIsCollapsed] = useState(false); // State to manage collapse
  const isPassenger = role === "passenger";
    

  const handleRequestForLift=(userId)=>{
    const liftRequestRef = ref(rtdb, "resquetsForLift/"+userId);
    set(liftRequestRef, {
        requesteBy:uid,
        startLocation:start,
        destination:end, 
        timestamp : Date.now(),
        accepted: false
    })
  }
  if (isPassenger) {
    return (
      <div className="flex justify-center flex-wrap p-5 gap-6">
        <h1 className="w-full text-center text-2xl font-bold">{foundRoutes.length>0? "Rides Found":"No Rides Found1"}</h1>
        {foundRoutes &&
          foundRoutes.map(
            (
              {
                startLocation,
                destination,
                intermediateStations,
                isStarted,
                userId,
              },
              idx
            ) => {
              return (
                <div
                  key={idx + userId}
                  className="p-6 border border-gray-200 shadow-lg rounded-lg w-full md:w-72 bg-white hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex justify-around items-center">
                    <div className="text-lg font-semibold text-gray-800 mb-2">
                      {startLocation}
                    </div>
                    <div className="text-gray-500 mb-4">to</div>
                    <div className="text-lg font-semibold text-gray-800 mb-2">
                      {destination}
                    </div>
                  </div>
                  {/* Intermediate Stations */}
                  {/* Status */}
                  {isStarted ? (
                    <div className="mb-4 text-green-600 font-medium">
                      Journey Started
                    </div>
                  ) : (
                    <div className="mb-4 text-red-600 font-medium">
                      Not Started Yet
                    </div>
                  )}

                  <button 
                  onClick={()=>{handleRequestForLift(userId)}}
                  className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                    Request for Lift
                  </button>
                </div>
              );
            }
          )}
      </div>
    );
  } else {
    return (
     <RouteDetails
     start={start}
     end={end}
     requests={[1]}
     />
    );
  }
}

export default RouteCard;
