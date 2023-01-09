import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div class="bg-gray-900 w-screen h-screen">
        <div class="mx-auto flex flex-col items-center py-12 sm:py-24">
            <div class="w-full sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-7 md:leading-10">
                FIVE MILLION              
                </h1>
                <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-indigo-700 font-black leading-7 md:leading-10">
                MONEY DROP              
                </h2>
                <p class="mt-5 sm:mt-10 lg:w-10/12 text-white font-normal text-center text-sm sm:text-lg">A professonal website for testing </p>
                <p class="mt-3 sm:mt-6 lg:w-10/12 text-white font-normal text-center text-sm sm:text-lg"> what you in good via online. </p>
                <p class="mt-3 sm:mt-6 lg:w-10/12 text-white font-normal text-center text-sm sm:text-lg">Engage & win money. </p>

            </div>
            <div class="flex justify-center items-center">
              <Link to='/register'>
                <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Get Started</button>
              </Link>
              <Link to='/demo'>
                <button class="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-white transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Live Demo</button>
              </Link>

            </div>
        </div>
    </div>
  )
}

export default Hero;