import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex justify-center bg-[#f30202de]'>
      <div className='w-[1170px] h-[555px] max-[727px]:h-auto max-[727px]:flex-col flex relative justify-around items-center'>
        <div className='w-[285px] h-[72px] max-[727px]:items-center flex flex-col justify-around '>
            <h1 className='font-[700] my-5 text-white text-[18px] max-[650px]:text-center'>{`STAY UPDATED ABOUT PAKISTAN'S POLITICS WITH US.`}</h1>
        </div>
        <div className='w-[217px]  h-[312px] max-[727px]:h-[250px] flex flex-col max-[727px]:items-center justify-around '>
            <h1 className='font-[700] my-2 text-white text-[24px]'>Link</h1>
            <Link href={"/"}><h1 className='font-[400] my-2 text-white text-[16px]'>Home</h1></Link>
            <Link href={"/Shop"}><h1 className='font-[400] my-2 text-white text-[16px]'>Blogs</h1></Link>
            <Link href={"/"}><h1 className='font-[400] my-2 text-white text-[16px]'>About</h1></Link>
            
        </div>
        <div className='w-[217px]  h-[312px] max-[727px]:h-[250px] flex flex-col max-[727px]:items-center justify-around '>
            <h1 className='font-[700] my-2 text-white text-[24px]'>Help</h1>
            <h1 className='font-[400] my-2 text-white text-[16px]'>Paid promotion</h1>
            <h1 className='font-[400] my-2 text-white text-[16px]'>Rating</h1>
            <h1 className='font-[400] my-2 text-white text-[16px]'>Privacy Policy</h1>
            
        </div>
        
        <div className='w-[350px]  max-[1075px]:hidden max-[727px]:block max-[727px]:w-[250px] h-[312px] max-[727px]:h-[250px] flex flex-col max-[727px]:items-center justify-start'>
            <h1 className='font-[700] my-2 text-white text-[24px] max-[727px]:text-center'>News Latters</h1>
            <div className='flex justify-between items-center max-[727px]:flex-col'>
            <div className='border-b-[1px] border-black w-[200px] h-[24px] my-2 text-white mt-10 text-[16px]'>Enter Your Email Address</div>
            <button className=' ml-10 max-[727px]:ml-0 mt-8 py-2 px-4 bg-slate-50 text-black rounded-lg hover:scale-105 transition-all cousor-pointer font-[600] text-[16px]'>Subscribe</button>
            </div>
            
        </div>
        
      </div>
    </div>
  )
}

export default Footer
