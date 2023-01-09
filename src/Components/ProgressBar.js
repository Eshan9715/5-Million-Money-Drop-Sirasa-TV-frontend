import React from 'react'

const ProgressBar = ({completed}) => {
  return (
    <div className="w-[200px] h-[15px] flex items-center">
      <div className="w-full flex">
        <div className={`w-[${completed}%] border rounded-l-lg bg-orange-500 text-xs p-1 text-center`}>{completed}%</div>
        <div className={`w-[${100-completed}%] border rounded-r-lg bg-orange-200`}></div>

      </div>

    </div>
  );
};

export default ProgressBar