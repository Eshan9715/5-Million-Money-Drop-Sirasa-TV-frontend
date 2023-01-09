import React, { useEffect, useState } from 'react'
import win from '../Assets/win.png'
import { SlCalender } from "react-icons/sl";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdQueryStats } from "react-icons/md";
import axios from 'axios';
import StatTile from '../Components/StatTile';

import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux';


const Stats = () => {
  const[tries, setTries] = useState([]);
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  const[user, setUser] = useState('')

  const navigate = useNavigate();
  const localStorageItems = JSON.parse(localStorage.getItem('items'));
  console.log(localStorageItems);

  useEffect(()=>{
    const sendRequest = async ()=>{
      const res = await axios.get("http://localhost:5000/api/tries").catch(err=>console.log(err));    //http://localhost:5000
      setTries(res.data)    
    }
    sendRequest();
    },[])

  console.log(tries)

  const handleCheck = (type)=>{
    if(type==="login"){
      navigate('/login')
    }else{
      navigate('/register')
    }
  }

  return (
    <div className='w-screen h-screen flex justify-start items-center flex-col bg-gray-900'>
      <div className=" w-3/4 md:w-2/3 flex flex-col p-2 bg-white shadow-md hover:shodow-lg rounded-2xl my-5 items-center justify-center">
          <div className="flex items-center justify-center">
          <img src={win} alt='' className='sm:w-[120px] w-[90px]' />
          <p className="text-xl sm:text-3xl text-gray-600 font-bold leading-none ml-3">LeaderBoard</p>

          </div>
      </div>

      <div className="w-3/4 md:w-2/3 flex flex-col p-6 bg-white shadow-md hover:shodow-lg rounded-2xl my-1">
          <div className="flex w-full items-center justify-between">
           
            <div className="flex w-[18%] items-center justify-center">
            <SlCalender style={{fontSize:25}}/>
              <p className="text-sm text-gray-600 font-bold leading-none ml-3">User</p>
            </div>
         
            <div className="flex w-[22%]  items-center justify-center">
              <GiTakeMyMoney style={{fontSize:25}}/>
              <p className="text-sm text-gray-600 font-bold leading-none ml-3">Money</p>
            </div>
            <div className="hidden lg:flex w-[24%]  items-center justify-center">
              <MdQueryStats style={{fontSize:25}} />
              <p className="text-sm text-gray-600 font-bold leading-none ml-3">Percentage</p>
            </div>
            <div className="flex w-[18%]  items-center justify-center">
              <SlCalender style={{fontSize:25}}/>
              <p className="text-sm text-gray-600 font-bold leading-none ml-3">date</p>
            </div>
          </div>
      </div>

      
    {!isLoggedIn?
      <div className='flex justify-center items-center flex-col'>
        <div className='flex justify-center items-center flex-col'>
          <p class="text-center text-lg text-white">Already have a account?</p>

          <button onClick={()=>handleCheck('login')} class="w-full my-5 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>Login Here</span>
          </button>

          <p class="text-center mt-5 text-lg text-white">Not registered yet?</p>

          <button onClick={()=>handleCheck('register')}  class="w-full my-5 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>Register Here</span>
          </button>
      </div> 
      </div>
    : 

          tries.map((tri,index)=>{
                  return (                      
                    <StatTile
                      key={index} 
                      user={tri.image}
                      moneySave={tri.title} 
                      progress= {tri.type}
                      day= {tri.day}
                      id={tri._id}
                      />
                  )
          })}
       

      
    

    </div> 
     )
}

export default Stats