import { client } from '@/sanity/lib/client'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

const page = async () => {
    const arr = [1,5,8,7]
    const data = await client.fetch(`*[_type=="blogs"]`)
    console.log(data)
  return (
    <>
    <div className='w-full grid grid-cols-3 justify-items-center my-5 max-[760px]:grid-cols-2 max-[520px]:grid-cols-1'>
        {
            data.map((item:any, index:any) => (
                <div key={index}>
                <Link href={`/Blogs/${item.id}`}><div className='bg-slate-300 cursor-pointer my-1 w-[430px] h-[400px] flex flex-col items-center rounded-md max-[1300px]:w-[400px] max-[1223px]:w-[350px] max-[1223px]:h-[350px] max-[1050px]:w-[300px] max-[1050px]:h-[330px] max-[912px]:w-[250px]'>
                    <div className='w-[90%] overflow-hidden h-[200px] mt-4 bg-yellow-400 rounded-md max-[915px]:h-[150px]'>
                <Image
                    src={urlFor(item.coverImage).url()}
                    alt={item.title}
                    width={400}
                    height={200}
                    className='w-full h-full'/>
                    
                    </div>
                    <h1 className='mt-3 font-[600] font-serif text-[#f30202de] text-[20px] mx-5 max-[915px]:text-[14px]'>{item.title}</h1>

                    <p className='mx-5 text-[18px] font-[500] leading-[20px] my-3 max-[950px]:my-2 max-[1050px]:text-[14px] max-[915px]:text-[13px] text-white'>{item.shortdetail}...</p>
                </div>
                </Link>
                </div>
            ))
        }
    </div>
      
    </>
  )
}

export default page
