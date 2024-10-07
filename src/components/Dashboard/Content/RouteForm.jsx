import React from "react";
import { useState } from "react";
import { rtdb } from "../../../firebase/firebaseConfig";
import { onValue, push, ref, set } from "firebase/database";

const startLocations = [
  "Pune",
  "Shivaji Nagar",
  "Khadaki",
  "Pimpri",
  "Chinchwad",
  "Nigdi",
];
const RouteForm = ({
  role,
  uid,
  setRouteAdded,
  search,
  setSearch,
  destination,
  setDestination,
  setFoundRoutes, setRouteIds
}) => {
  const [filteredLocationsStart, setFilteredLocationsStart] = useState([]);
  const [filteredLocationsEnd, setFilteredLocationsEnd] = useState([]);
  const [isSubmitting, setSubmitting] = useState(false);
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    if (name == "start") {
      setSearch(value);
      // Filter the startLocations array based on user input
      const matchedLocations = startLocations.filter((location) =>
        location.toLowerCase().includes(value.toLowerCase())
      );
      // Set the filtered locations to display in the dropdown
      setFilteredLocationsStart(matchedLocations);
    } else {
      setDestination(value);
      const matchedLocations = startLocations.filter((location) =>
        location.toLowerCase().includes(value.toLowerCase())
      );
      // Set the filtered locations to display in the dropdown
      setFilteredLocationsEnd(matchedLocations);
    }
  };

  const handleSelectLocation = (location, where) => {
    if (where === "start") {
      setSearch(location); // Set the selected location in the input field
      setFilteredLocationsStart([]); // Clear the dropdown after selection
    } else {
      console.log(location);
      setDestination(location); // Set the selected location in the input field
      setFilteredLocationsEnd([]); // Clear the dropdown after selection
    }
  };

  const searchRoute = (start, end) => {
    setSubmitting(true)
    const journeyRef = ref(rtdb, "addedJournies");
    onValue(journeyRef, (snapshot) => {
      const data = snapshot.val();
      const keysInRoutes = Object.keys(data);
      setRouteIds(keysInRoutes);
      const routes = [];
      for(let key in data){
        const current = data[key];
        if(current.startLocation==start || current.intermediateStations.indexOf(start)>-1  ) {
            if(current.intermediateStations.indexOf(end)>-1 || current.destination===end){
                console.log("matched");
                routes.push(current)
            }
        }
      }
      console.log(routes);
      setFoundRoutes(routes);
      setTimeout(()=>{setSubmitting(false)}, 1000);
    });
  };
  const addRoute = (start, end) => {
    setSubmitting(true);
    const interStations = findIntermediateStations(start, end);
    const journey = push(ref(rtdb, "addedJournies"));
    set(journey, {
      startLocation: start,
      destination: end,
      intermediateStations: interStations.join(","),
      userId: uid,
      isCompleted: false,
      isStarted: false,
      timestamp: Date.now(),
    });
    setTimeout(() => {
      setSubmitting(false);
      setRouteAdded(true);
    }, 1500);
    console.log("working");
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    role === "passenger"
      ? searchRoute(search, destination)
      : addRoute(search, destination);
  };
  const state =
    role === "passenger"
      ? ["Search Rides", "Searching..."]
      : ["Add Route", "Adding..."];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-[30rem] mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {role === "passenger" ? "Passenger" : "Rider"} Journey
        </h2>
        <form onSubmit={handleFormSubmit} className="relative">
          <div className="mb-4 relative h-full w-full">
            <label
              htmlFor="from"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              From
            </label>
            <input
              type="text"
              id="from"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter starting location"
              name="start"
              value={search}
              onChange={handleInputChange}
              required={true}
            />

            {/* Dropdown for filtered locations */}
            {filteredLocationsStart.length > 0 && (
              <ul className="border border-gray-300 mt-2 rounded-md bg-white shadow-lg max-h-40 min-w-[15rem] overflow-auto ">
                {filteredLocationsStart.map((location, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => handleSelectLocation(location, "start")}
                  >
                    {location}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="to"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              To
            </label>
            <input
              type="text"
              id="to"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter destination"
              name="end"
              value={destination}
              onChange={handleInputChange}
              required={true}
            />
            {filteredLocationsEnd.length > 0 && (
              <ul className="border border-gray-300 mt-2 rounded-md bg-white shadow-lg max-h-40 min-w-[15rem] overflow-auto">
                {filteredLocationsEnd.map((location, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => handleSelectLocation(location, "end")}
                  >
                    {location}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {isSubmitting ? state[1] : state[0]}
          </button>
        </form>
      </div>
    </div>
  );
};
export default RouteForm;

function findIntermediateStations(start, end) {
  const startIdx = startLocations.indexOf(start);
  const endIdx = startLocations.indexOf(end);
  if (startIdx > endIdx) {
    return startLocations.slice(endIdx + 1, startIdx);
  }
  return startLocations.slice(startIdx + 1, endIdx);
}
