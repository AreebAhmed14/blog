"use client"
import React from 'react'
import { useState } from 'react'

const Comments = () => {
    const [comments, setComments] = useState("share you thought....")
    const [takeinput, setTakeinput] = useState(" ")
  return (
    <>
    <div className='w-[400px] mx-5 shadow-xl rounded-md my-5 h-[300px] bg-gray-100 flex flex-col items-center max-[450px]:w-[300px] max-[340px]:w-[280px] max-[340px]:my-10'>
        <div className='w-[90%] my-5 overflow-y-scroll rounded-md h-[150px] bg-white px-3 py-3 font-medium max-[340px]:text-[15px]'>{comments}</div>
        <input onChange={(e)=>setTakeinput(e.target.value)} type="text" className='w-[90%] h-[40px] px-2 rounded-md text-sans text-gray-600'/>
        <button onClick={()=>{setComments(takeinput)}} className='bg-white my-5 px-3 py-1 text-[18px] font-sans font-[600] rounded-md shadow-xl hover:scale-105 cursor-pointer'>Post</button>
    </div>
    </>
  )
}

export default Comments
