import { client } from '@/sanity/lib/client'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Comments from '@/app/components/Comments'

const page = async  ({ params }:{params:Promise<{id:string}>})  => {
 
  const refine = await client.fetch(`*[_type=="blogs"]`)
  const {id} = await params
    const specify = refine[Number(id) - 1]
        console.log(refine)
  return (
    <>
     <div className='text-[30px] font-[600] text-center font-serif max-[600px]:text-[25px] text-[#f30202de] mx-3 my-10 max-[380px]:text-[20px] max-[380px]:my-7'>{specify.title}</div>
    <div className='w-full h-[400px] flex justify-center items-center my-5 overflow-hidden max-[450px]:h-[350px] max-[380px]:h-[300px]'>

     <Image src={urlFor(specify.coverImage).url()} alt={specify.title} width={950} height={950} className='w-[70%] rounded-md h-full max-[740px]:w-[90%]'/>
     </div>
     <div className='mx-5 my-4 text-[18px] font-sans leading-[30px] max-[380px]:text-[16px] max-[380px]:leading-[20px] font-[600] text-gray-800 text-justify'>{specify.detail}</div>
     <div className='mx-5 my-4 text-[18px] font-sans leading-[30px] max-[380px]:text-[16px] max-[380px]:leading-[20px] font-[600] text-gray-800 text-justify'>{specify.laptopdetail}</div>
        
      <Comments />
    </> 
  )
}

export default page


