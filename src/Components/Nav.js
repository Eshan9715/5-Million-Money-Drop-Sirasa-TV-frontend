import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { authActions } from '../store';

import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { BiUserX } from "react-icons/bi";
import { FaDribbble } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { BiUserCheck } from "react-icons/bi";


const Nav = ({children}) => {
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  const dispatch = useDispatch();
  const [data, setData] = useState('');

  const menus = [
    { name: "Home", link: "/", icon: MdOutlineDashboard },
    { name: "About", link: "/About", icon: MdOutlineContactPage },
    { name: "Rules", link: "/Rules", icon: FiMessageSquare },
    { name: "Game", link: "/Game", icon: FaDribbble, margin: true },
    { name: "Stats", link: "/Stats", icon: TbReportAnalytics },
    { name: "Profile", link: "/Profile", icon: isLoggedIn? BiUserCheck : BiUserX }
   
  ];


  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem('items'));
    console.log(localStorageItems);
    if (localStorageItems) {
        setData(localStorageItems);
    }
}, []);

  // const handleAuth = ()=>{
  //   dispatch(authActions.logout());
  //   localStorage.removeItem('items')
  // }

  return (
    <div className="flex h-full">
      <div className='bg-[#240d4b] min-h-screen md:w-16 duration-500 text-gray-100 px-4 fixed z-50 hidden md:block'>
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
          />
        </div>

        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>            
              <h2
                className='absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit'
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
          
          {/* {isLoggedIn && <div><img src={man} alt='login'/></div>}

          {!isLoggedIn && <> 
              <Link to='/register'><div><AiOutlineUser style={{size:20, marginLeft:10}}/></div>            
              <h2 className='absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit'>
                signup
              </h2></Link>
                         </>
            }

          {isLoggedIn && 
              <Link to='/login'><img src={man} alt='login'/>
               <h2 className='absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit'>
                logout
              </h2></Link>
            } */}

        </div>
      </div>

      <main>{children}</main>
    </div>

   
          
        

      
     
  
               
  )
}

export default Nav;