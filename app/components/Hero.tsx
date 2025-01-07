import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className='w-full h-[530px] max-[650px]:h-[400px]'>
        <Image src={"/static/hero2.webp"} alt='' width={950} height={950}  className='w-full h-full max-[650px]:hidden'/>
        <Image src={"/static/hero1.webp"} alt='' width={950} height={950}  className='w-full h-full hidden max-[650px]:block'/>
      </div>
    </>
  )
}

export default Hero
