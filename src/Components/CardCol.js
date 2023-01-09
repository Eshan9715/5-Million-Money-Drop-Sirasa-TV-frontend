import React from 'react'
import { BsFillPenFill } from 'react-icons/bs';

const cardCol = ({image,answer,money,tags,num,setMoney}) => { 
  return (
    <>
      <div class="max-w-sm min-w-[250px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 w-1/2 m-4">
          <img class="w-full pb-3 h-[180px] object-cover" src={image} alt="Sunset in the mountains"/>
          <div class="px-6 py-3 bg-white" >
            <div class="text-base text-white mb-2 absolute top-2 left-2 rounded-xl px-4 py-1 w-[70px] text-center bg-orange-600">{num}</div>

              <p class="text-lg text-bold text-black">{answer}
              </p>
              <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-300" />

              <div className='flex items-center p-1'>
                <BsFillPenFill />
                <div class="text-base ml-2">{money}</div>
                <form>
                  <div className='border-2 text-center'>
                  <input value={money} placeholder='Rs.'   name="firstName" onChange={e => setMoney(e.target.value)} />
                  </div>              
                </form>
            
              </div>
             
          </div>
          {/* <div class="px-6 pt-4 pb-2">
              <span class="hidden bg-white rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{tags}</span>
      
          </div> */}
      </div>
        
    </>

  )
}

export default cardCol