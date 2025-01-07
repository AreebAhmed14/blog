"use client"
import React from "react";
import { Roboto } from "next/font/google";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
// import Link from "next/link";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    {
      if(isMenuOpen==false){
        setIsMenuOpen(true);
      }
      else{
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <>
      <div className="h-[72px] w-full bg-[#f30202de] flex justify-between max-[656px]:justify-center items-center">
        <div className="w-[250px] max-[656px]:w-[1040px] h-[41px] flex justify-between item-center max-[808px]:ml-[1rem] ml-[3rem]">
          <p className="text-[2rem] font-[700] text-white max-[808px]:text-[1.5rem] max-[808px]:mt-1">PAK POLITICS</p>
          <IoIosMenu className="hidden mt-2 mr-3 max-[656px]:block w-[35px] text-white h-[30px]" onClick={toggleMenu}/>
        <ul className={`${isMenuOpen ? "block" : "hidden"} w-full h-[400px] flex flex-col justify-center items-center bg-[#ee2825] absolute mt-[3rem] left-0`}>
          <Link href={"/"}><li className="text-[22px] font-[600] my-4 text-white">Home</li></Link>
          <Link href={"/Blogs"}><li className="text-[22px] font-[600] my-4 text-white">Blogs</li></Link>
          <li className="text-[22px] font-[600] my-4 text-white">Achivement</li>
          <li className="text-[22px] font-[600] my-4 text-white">About Us</li>
        </ul>


        </div>
        <div className="w-[810px] max-[1180px]:w-[750px]  max-[656px]:hidden h-[44px] max-[986px]:w-[600px] max-[870px]:w-[500px] max-[756px]:w-[440px] max-[808px]:mr-[1rem] mr-[3rem] flex items-center justify-end">
          <ul className="flex items-center justify-between w-full h-full">
            <Link href={"/"}><li className={`text-[20px] font-[600] text-white hover:scale-105 transition-all cursor-pointer  ${roboto} ml-2`}>Home</li></Link>
            <Link href={"/Blogs"}><li className={`text-[20px] font-[600] text-white hover:scale-105 transition-all cursor-pointer  ${roboto}`}>Blogs</li></Link>
        
            <li className={`text-[20px] font-[600] text-white hover:scale-105 transition-all cursor-pointer  ${roboto}`}>Achivement</li>
            <li className={`text-[20px] font-[600] text-white hover:scale-105 transition-all cursor-pointer  ${roboto} max-[870px]:mr-2`}>About Us</li>
        
            <div className="flex max-[986px]:hidden">
              <li>
                <button className="px-7 py-2 text-[1.2rem] font-[500] bg-white hover:scale-95 transition-all cursor-pointer mr-3 rounded-[5px]">
                  Login
                </button>
              </li>
              <li>
                <button className="px-5 py-2 text-[1.2rem] font-[500] bg-black hover:scale-95 transition-all cursor-pointer text-white rounded-[5px]">
                  Sign Up
                </button>
              </li>
            </div>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Header;
