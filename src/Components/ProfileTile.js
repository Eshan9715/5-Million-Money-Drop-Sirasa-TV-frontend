import React from 'react'
import ProgressBar from './ProgressBar'

const ProfileTile = ({progress, day,questionNum, moneySave, status}) => {
  return (
    <div className="w-3/4 md:w-2/3 flex flex-col p-6 bg-white shadow-md hover:shodow-lg rounded-2xl my-2">
          <div className="flex w-full items-center justify-between">
           
            <div className="flex w-[18%] items-center justify-center">
              <p className="text-sm text-gray-600 font-bold leading-none ml-3">{day}</p>
            </div>
            <div className="flex w-[18%] items-center justify-center">
              <p className="text-sm text-gray-600 font-bold leading-none ml-3">{questionNum}</p>
            </div>
            <div className="flex  w-[22%] items-center justify-center">
              <p className="text-sm text-gray-600 font-bold leading-none ml-3">{moneySave}</p>
            </div>
            <div className="hidden lg:flex w-[24%] items-center justify-center">
              <ProgressBar completed={progress} />

            </div>
            <div className="hidden lg:flex w-[18%] items-center justify-center">
              <p className="text-sm text-gray-600 font-bold leading-none ml-3">{status}</p>
            </div>
          </div>
      </div>
  )
}

export default ProfileTile