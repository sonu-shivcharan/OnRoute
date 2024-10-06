import { useState } from 'react';

function RouteDetails({ start, end, requests }) {
  const [isCollapsed, setIsCollapsed] = useState(false); // State to manage collapse

  return (
    <div className="mx-auto px-7 my-10 border p-4 rounded-sm">
      {/* Route Added Header */}
      <h1 className="font-bold text-2xl text-gray-800 text-center mb-4">Route Added</h1>

      {/* Route Details */}
      <div className="font-bold text-xl text-gray-700 mb-6">
        {start} &rarr; {end}
      </div>

      {/* Collapsible Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none"
      >
        {` ${1} Request`}
      </button>

      {/* Collapsible Requests Section */}
      {isCollapsed && (
        <div className="mt-6 p-4 border border-gray-200 shadow-md rounded-lg bg-gray-50">
          <h2 className="text-lg font-semibold mb-3">Requests:</h2>

          {/* Check if there are any requests */}
          {requests && requests.length > 0 ? (
            <ul className="list-disc list-inside text-gray-600">
              {requests.map((request, index) => (
                <li key={index} className="py-1">
                  {request}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No requests found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default RouteDetails;
