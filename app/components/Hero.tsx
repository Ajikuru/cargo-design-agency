import React from 'react'
import CustomButton from './CustomButton'

export default function Hero() {
  return (
    <div className='w-full bg-black py-[6rem] flex flex-col items-center justify-center gap-5'>
        <h1 className='text-6xl font-[500]'> Cargo <span className='text-[#A1A1A1]'>Design</span> Agency</h1>
        <p className='text-center'>Ahead with 100+ Amazing clients with 20+ Country
            <br/>
            Served the best design materials
        </p>
        <CustomButton 
                title="Get Started"
                link="#"
                className="bg-[#276DF1] text-white px-5 py-2 rounded-full"
                 />
    </div>
  )
}
