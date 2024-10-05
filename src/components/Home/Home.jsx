import React from 'react'
import { Link } from 'react-router-dom'
import bg from "./../../assets/bg.jpg"
function Home() {
  return (
    <div id="home" className="bg-black/5 min-h-screen w-full text-white bg-center bg-no-repeat bg-cover" style={{
        background:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7),black), url(${bg})`,
        backgroundPosition:"center"
    }}>
      
      <main className="container mx-auto px-4 flex items-center justify-center py-16 h-screen">
        <div className="flex flex-col items-center justify-center text-center ">
          <h1 className="text-5xl font-bold mb-6">Get a ride in minutes</h1>
          <p className="text-xl mb-8">Or become a Rider and earn money on your schedule.</p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <Link to={"/login/passenger"} className="bg-white text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
              Look for Lift
            </Link>
            <Link to={"/login/rider"} className="bg-transparent border-2 border-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300">
            Offer a Ride
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home