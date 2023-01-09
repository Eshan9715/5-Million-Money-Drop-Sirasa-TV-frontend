import React from 'react'
import im from '../Assets/5m.jpg'
import drop from '../Assets/drop.jpg'

const About = () => {
  return (
    <div className='w-screen h-screen flex justify-start items-center flex-col bg-gray-900'>
      <div className='w-3/4 h-[120px] flex border rounded-lg bg-black justify-center items-center mt-[50px]'>
        <h1 className="text-md md:text-2xl font-bold text-white capitalize lg:text-4xl">Win money using your knowledge</h1>
        <div class="mt-16 absolute">
          <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
          <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
          <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
        </div>
      </div>

      <img src={drop} alt='' className='absolute w-3/4 md:w-3/5 top-[40%] border rounded-lg '/>
       

      
    
    </div>
  )
}

export default About