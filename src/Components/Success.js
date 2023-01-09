import React from 'react'
import win from '../Assets/win.png'

const Success = ({bal,handleData}) => {
 
  return (
  <div className="w-[400px] h-[250px] p-10 border rounded-md bg-white absolute top-0 bottom-0 left-0 right-0 m-auto flex justify-between items-center flex-col">
    <div className="flex justify-center items-center">
      <img src={win} alt='Success!!' className='w-200px'/>
      <h1 className="font-semibold text-center text-xl text-gray-700 mt-2">
       Success
      </h1>
      
    </div>
    <div className='flex flex-col gap-2 justify-center items-center'>
      <p className="text-center text-gray-700 mb-5 mt-2 text-sm">Achieved money</p>
    </div>

    <div className='flex flex-col justify-center items-center gap-2'>
      <button onClick={handleData} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">ok</button>
    </div>
  
  </div>
  )
}

export default Success