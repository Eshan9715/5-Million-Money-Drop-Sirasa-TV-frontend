import React from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FaDribbble } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";

  
const BottomNav = ({children}) => {
    const menus = [
        { name: "Home", link: "/", icon: MdOutlineDashboard },
        { name: "About", link: "/About", icon: MdOutlineContactPage },
        { name: "Rules", link: "/Rules", icon: FiMessageSquare },
        { name: "Game", link: "/Game", icon: FaDribbble, margin: true },
        { name: "Stats", link: "/Stats", icon: TbReportAnalytics },
        { name: "Profile", link: "/Profile", icon: AiOutlineUser }
       
      ];

  return (
    <>
        <main>{children}</main>
        <div className='z-50 w-full fixed flex bottom-0 left-0 right-0 h-16 bg-[#240d4b] md:hidden justify-between mx-auto'>
            <div className="my-5 flex text-white ml-5">
            <HiMenuAlt3
                size={26}
                className="cursor-pointer"
            />
            </div>

            <div className="w-3/4 my-2 flex gap-4 relative justify-between text-white ml-3 items-center mx-5">
            {menus?.map((menu, i) => (
                <Link
                to={menu?.link}
                key={i}
                className={` ${
                    menu?.margin && "my-3"
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
            </div>
            
        </div>

    </>
        

  )
}

export default BottomNav