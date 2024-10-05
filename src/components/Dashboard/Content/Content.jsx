import React, { useState } from "react";
import RouteForm from "./RouteForm";
import RouteCard from "./RouteCard";
function Content({ role, userDetails }) {
  const { displayName: userName, photoURL } = userDetails;
  const [search, setSearch] = useState("");
  const [destination, setDestination] = useState("");
  const [isRouteAdded, setRouteAdded] = useState(false);
  const [foundRoutes, setFoundRoutes] = useState(null);
  const instructions =
    role === "passenger"
      ? "Enter your destination to search for available rides."
      : "List your route and help passengers along the way!";
  console.log("found routes", foundRoutes);
  const condition = role === "passenger" ? foundRoutes : isRouteAdded;
  return (
    <>
      <div className="w-full bg-white/60 px-4 text-gray-700 backdrop-blur p-2 fixed top-0 z-50">
        <div className="container flex justify-between items-center mx-auto ">
          <div>
            <span className="text-xl font-bold">
              {role === "passenger"
                ? `Welcome, ${userName.split(" ")[0]}!`
                : `Welcome, ${userName}!`}
            </span>
          </div>
          <div>
            <img src={photoURL} className="rounded-full w-10"></img>
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-gray-100 w-full min-h-screen pt-16">
        <div className="text-center">
          <p className="text-2xl mx-8  py-5 font-bold">
            {instructions}
          </p>
        </div>

          <RouteForm
            role={role}
            uid={userDetails.uid}
            setRouteAdded={setRouteAdded}
            search={search}
            setSearch={setSearch}
            setDestination={setDestination}
            destination={destination}
            setFoundRoutes={setFoundRoutes}
          />

          {(isRouteAdded || foundRoutes) && <RouteCard
            role={role}
            foundRoutes={foundRoutes}
            start={search}
            end={destination}
            uid ={userDetails.uid}
          />}

      </div>
    </>
  );
}

export default Content;
