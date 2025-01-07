import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Homeparas = () => {
  return (
    <>
      <div className='w-full flex justify-center items-center flex-col'>
        <div className='w-[80%] my-5 flex flex-col justify-center items-center max-[650px]:w-[90%]'>
            <h1 className='text-[2rem] font-[600] max-[550px]:text-[1.5rem] max-[390px]:text-[1.2rem] text-[#f30202de] font-serif'>History of Pakistan's Politics</h1>
            <p className='text-[1.2rem] font-[600] mt-3 text-center max-[650px]:text-[1rem] max-[650px]:font-[500] max-[390px]:font-[600] font-sans'>Pak political history is a tale of resilience, challenges, and transformation. Since its independence in 1947, the country has experienced a dynamic political landscape marked by shifts between civilian and military rule. The early years saw leaders like Muhammad Ali Jinnah and Liaquat Ali Khan striving to establish a democratic framework. However, political instability, economic challenges, and regional conflicts led to periods of military intervention.<span className='max-[390px]:hidden'>  Despite these setbacks, Pakistan has witnessed significant milestones, including the promulgation of its Constitution in 1973 and the restoration of democracy in the late 1980s. The political journey of Pakistan continues to evolve, reflecting the aspirations and struggles of its people.</span></p>
            <div className='w-[90%] h-[400px] mt-5 rounded-md overflow-hidden max-[550px]:h-[300px]'>
              <Image src={"/static/history.jpg"} alt='' width={950} height={950} className='h-full'/>
            </div>
        </div>
        <div className='w-[80%] my-5 flex flex-col justify-center items-center max-[650px]:w-[90%]'>
            <h1 className='text-[2rem] font-[600] max-[550px]:text-[1.5rem] max-[390px]:text-[1.2rem] text-[#f30202de] font-serif'>Fact of Pakistan's Politics</h1>
            <p className='text-[1.2rem] font-[600] mt-3 text-center max-[650px]:text-[1rem] max-[650px]:font-[500] max-[390px]:font-[600] font-sans'>Pakistan's political landscape is filled with unique and striking facts that highlight its tumultuous journey. One of the most notable facts is that no Prime Minister in Pakistan's history has ever completed a full five-year term in office. This reflects the political instability that has often plagued the country. Frequent military coups, judicial interventions, and internal party conflicts have disrupted democratic processes. <span className='max-[390px]:hidden'>Pakistan has also seen an unusual pattern of shifting alliances and power struggles between political parties and the military establishment. Despite being a democratic republic, the country has experienced prolonged periods of military rule, accounting for nearly half of its existence since independence. These dynamics underscore the challenges of governance and the resilience of its people in striving for political stability and progress</span></p>
            <div className='w-[90%] h-[400px] mt-5 rounded-md overflow-hidden max-[550px]:h-[300px]'>
              <Image src={"/static/fact.webp"} alt='' width={950} height={950} className='h-full'/>
            </div>
        </div>
        <div className='w-[80%] my-5 flex flex-col justify-center items-center max-[650px]:w-[90%]'>
            <center><h1 className='text-[2rem] font-[600] max-[550px]:text-[1.5rem] max-[390px]:text-[1.2rem] text-[#f30202de] font-serif'>Military in Pakistan's Politics</h1></center>
            <p className='text-[1.2rem] font-[600] mt-3 text-center max-[650px]:text-[1rem] max-[650px]:font-[500] max-[390px]:font-[600] font-sans'>The military has played a pivotal and often controversial role in Pakistan's political history. Since the country's independence in 1947, the armed forces have frequently intervened in civilian governance, with Pakistan experiencing direct military rule for nearly half of its existence. Starting with the first coup in 1958, military leaders like Ayub Khan, Zia-ul-Haq, and Pervez Musharraf seized power, citing political instability, corruption, and weak civilian institutions.<span className='max-[390px]:hidden'> Even during periods of civilian rule, the military has remained a dominant force, influencing key decisions in foreign policy, security, and governance. This deep entanglement has shaped the country's political landscape, often leading to tensions between democratic aspirations and authoritarian control. While the military's role has been criticized for stalling democratic development, it remains a significant institution in Pakistan's socio-political framework.</span></p>
            <div className='w-[90%] h-[400px] mt-5 rounded-md overflow-hidden max-[550px]:h-[300px]'>
              <Image src={"/static/military.jpeg"} alt='' width={950} height={950} className='h-full'/>
            </div>
        </div>
        <Link href={"/Blogs"}><button className='text-center bg-[#f30202de] text-white font-[600] font-sans text-[18px] px-3 py-2 rounded-md hover:scale-95 border-none my-7'>See Blogs</button></Link>
      </div>
    </>
  )
}

export default Homeparas
