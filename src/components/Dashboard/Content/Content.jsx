import React, { useState } from "react";
import RiderPage from "./RiderPage";
import Passenger from "./Passenger";
import { useParams } from "react-router-dom";
function Content({role, userName }) {

  console.log("from content ", role);
  const [search, setSearch] = useState("");
  const [destination, setDestination] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const startLocations = [
    "Pune",
    "Pimpri",
    "Chinchwad",
    "Nigdi",
    "Bhosari",
    "Khadaki",
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "passenger") {
      console.log(`Searching for a lift to ${search}`);
      // Add logic to search for lifts based on the destination
    } else if (role === "rider") {
      console.log(`Offering a ride to ${destination}`);
      // Add logic to offer a ride to the specified destination
    }
  };

  return (
    <div className="container mx-auto bg-gray-100 w-full min-h-screen pt-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">
          {role === "passenger"
            ? `Welcome, ${userName.split(" ")[0]}! Ready to find a lift?`
            : `Welcome, ${userName}! Ready to offer a ride?`}
        </h1>
        <p className="text-lg">
          {role === "passenger"
            ? "Enter your destination to search for available rides."
            : "List your route and help passengers along the way!"}
        </p>
      </div>
      {role === "passenger" ? (
        <Passenger
          search={search}
          setSearch={setSearch}
          startLocations={startLocations}
          filteredLocations={filteredLocations}
          setFilteredLocations={setFilteredLocations}
        />
      ) : (
        <RiderPage />
      )}
    </div>
  );
}

export default Content;
