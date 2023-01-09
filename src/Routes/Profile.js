import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux';

import man from '../Assets/man.png'
import { SlCalender } from "react-icons/sl";
import { MdOutlineAssignment } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdQueryStats } from "react-icons/md";
import { HiStatusOnline } from "react-icons/hi";
import ProfileTile from '../Components/ProfileTile';

const Profile = () => {
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  const [logState,setLogState] = useState(false);
  const[user, setUser] = useState('')

  const navigate = useNavigate();
  const localStorageItems = JSON.parse(localStorage.getItem('items'));
  console.log(localStorageItems);

  const sendRequest = async ()=>{
    if(isLoggedIn===true){
      const id  = localStorageItems.userID;
      console.log(id);
      const res = await axios.get(`http://localhost:5000/api/blogs/user/${id}`)
      .catch(err=>console.log(err));
      const data = await res.data;
      return data;
    } else{
      logState(false);
    }
  
  }

  useEffect(()=>{
    sendRequest()
    .then((data)=>setUser(data.user))
    .then((data)=>console.log(data.user))

},[]);

const handleCheck = (type)=>{
  if(type==="login"){
    navigate('/login')
  }else{
    navigate('/register')
  }
}

 const playGame = ()=>{
  navigate('/Game')

 }


  return (
  
    <>
    {!isLoggedIn?
      <div className='w-screen h-screen flex justify-center items-center flex-col bg-gray-900'>
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

    <div className='w-screen h-screen flex justify-start items-center flex-col bg-gray-900'>
      <div className=" w-3/4 md:w-2/3 flex flex-col p-6 bg-white shadow-md hover:shodow-lg rounded-2xl my-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                <img src={man} alt='man' className='w-[70px] h-[70px]' />
                  <div className="flex flex-col ml-3">
                    <div className="font-semibold leading-none">kamal Hassan</div>
                    <div className="flex bg-red-600 cursor-pointer justify-center mt-3 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-600 text-white rounded-lg text-center">logout</div>
                    
                  </div>
                </div>
                <div className="hidden md:flex bg-blue-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 text-white rounded-full">Tries : 8</div>
              </div>
      </div> 

      <div className="w-3/4 md:w-2/3 flex flex-col p-6 bg-white shadow-md hover:shodow-lg rounded-2xl my-1">
          <div className="flex w-full items-center justify-between">
           
            <div className="flex w-[18%] items-center justify-center">
            <SlCalender style={{fontSize:25}}/>
              <p className="text-sm text-gray-600 font-bold leading-none ml-3">Date</p>
            </div>
            <div className="flex w-[18%]  items-center justify-center">
              <MdOutlineAssignment style={{fontSize:25}}/>
              <p className="text-sm text-gray-600 font-bold leading-none ml-3">Questions</p>
            </div>
            <div className="flex w-[22%]  items-center justify-center">
              <GiTakeMyMoney style={{fontSize:25}}/>
              <p className="text-sm text-gray-600 font-bold leading-none ml-3">Money</p>
            </div>
            <div className="hidden lg:flex w-[24%]  items-center justify-center">
              <MdQueryStats style={{fontSize:25}} />
              <p className="text-sm text-gray-600 font-bold leading-none ml-3">Percentage</p>
            </div>
            <div className="hidden lg:flex w-[18%]  items-center justify-center">
              <HiStatusOnline style={{fontSize:25}} />
              <p className="text-sm text-gray-600 font-bold leading-none ml-3">Status</p>
            </div>
          </div>
      </div>


        {user && user.tries && user.tries.length!==0?
          user.tries.map((tri,index)=>{
                  return (                      
                    <ProfileTile
                      key={index} 
                      questionNum={tri.image}
                      moneySave={tri.title} 
                      status={tri.description.slice(0,350)} 
                      progress= {tri.type}
                      day= {tri.day}
                      id={tri._id}
                      />
                  )
          }):
        <>
          <div className='max-w-md mx-auto my-3'>
            <div className='flex flex-col justify-center items-center'>
              <img src={man} alt='start writing' className='w-1/2 md:w-3/4 mb-5'/>

              <button onClick={playGame} class="w-1/2 py-2 md:w-3/4 md:py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                <span>Play Game</span>
              </button>
            </div>
            {/* <p className='font-bold text-xl text-red-900'>No blogs found!!</p> */}
          

          </div>
        </>
        }
      
      </div>
    }
    </>

    
    
    )
}

export default Profile