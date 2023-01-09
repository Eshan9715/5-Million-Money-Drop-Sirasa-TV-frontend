import React from 'react'
import videoBg from '../Assets/md.mp4'

const Demo = () => {
  return (
    <div className='w-screen h-screen'>
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <video src={videoBg} autoPlay loop className='w-full h-full object-cover'/>
        {/* <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div> */}
    </div>
  )
}

export default Demo
