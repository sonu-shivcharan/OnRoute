import React from "react";

const Passenger = ({ startLocations, search, setSearch, filteredLocations, setFilteredLocations }) => {

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    // Filter the startLocations array based on user input
    const matchedLocations = startLocations.filter((location) =>
      location.toLowerCase().includes(value.toLowerCase())
    );

    // Set the filtered locations to display in the dropdown
    setFilteredLocations(matchedLocations);
  };

  const handleSelectLocation = (location) => {
    setSearch(location); // Set the selected location in the input field
    setFilteredLocations([]); // Clear the dropdown after selection
  };
  return (
    <div className="w-full bg-gray-100  flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-[30rem] mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Passenger Journey
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="relative"
        >
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
              value={search}
              onChange={handleInputChange}
            />

            {/* Dropdown for filtered locations */}
            {filteredLocations.length > 0 && (
              <ul className="border border-gray-300 mt-2 rounded-md bg-white shadow-lg max-h-40 min-w-[15rem] overflow-auto fixed ">
                {filteredLocations.map((location, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => handleSelectLocation(location)}
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
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Search Rides
          </button>
        </form>
      </div>
    </div>
  );
};

export default Passenger;
