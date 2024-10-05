import React from 'react'
import about from "./../../assets/about.jpg"
function About() {
    return (
        <div className="bg-black min-h-screen text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold my-8 text-center">About OnRoute</h1>
            
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src={about} 
                  alt="OnRoute Team" 
                  className="w-[80%] rounded-lg shadow-xl mx-auto"
                />
              </div>
              
              <div className="md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-semibold mb-4">Driving the Future of Transportation</h2>
                <p className="text-xl mb-6">
                  At OnRoute, we're not just another ride-hailing service. We're revolutionizing the way people move in cities across the globe.
                </p>
                <p className="text-xl mb-6">
                  Founded in 2023, our mission is to provide safe, reliable, and affordable transportation options while creating opportunities for drivers to earn on their own terms.
                </p>
                <p className="text-xl">
                  With cutting-edge technology and a passion for customer satisfaction, we're committed to making every journey with OnRoute an exceptional experience.
                </p>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
                <p>We're constantly pushing the boundaries of what's possible in urban mobility.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Community</h3>
                <p>We believe in fostering strong relationships with drivers, riders, and the cities we serve.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Sustainability</h3>
                <p>We're committed to reducing our environmental impact and promoting eco-friendly transportation options.</p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default About