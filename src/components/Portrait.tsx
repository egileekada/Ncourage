import React from 'react'
import one from '../assets/images/Portrait1.png'
import two from '../assets/images/Portrait2.png'
import three from '../assets/images/Portrait3.png'

export default function Portrait() {
    return (
        <div className=' w-full flex lg:flex-row flex-col ' >
            <div className='w-full relative ' >
                <div style={{ background: 'linear-gradient(180deg, #3C2A35 36.69%, rgba(79, 64, 66, 0) 100%)'}} className=' absolute w-full py-12 text-white text-center ' >
                    <p className=' font-CircularStd-Medium  ' >Portrait Session</p>
                    <p className=' font-CircularStd-Bold text-5xl my-4 ' >₦12,000</p>
                    <button className=' text-[#222] bg-[#FFFFFFB2] h-11 mt-2 w-24 font-CircularStd-SemiBold ' >Book</button>
                </div>
                <img src={one} alt='1' />
            </div>
            <div className='w-full relative ' >
                <div style={{ background: 'linear-gradient(180deg, #3C2A35 36.69%, rgba(79, 64, 66, 0) 100%)'}} className=' absolute w-full py-12 text-white text-center ' >
                    <p className=' font-CircularStd-Medium  ' >Portrait Session</p>
                    <p className=' font-CircularStd-Bold text-5xl my-4 ' >₦15,000</p>
                    <button className=' text-[#222] bg-[#FFFFFFB2] h-11 mt-2 w-24 font-CircularStd-SemiBold ' >Book</button>
                </div>
                <img src={two} alt='1' />
            </div>
            <div className='w-full relative ' >
                <div style={{ background: 'linear-gradient(180deg, #3C2A35 36.69%, rgba(79, 64, 66, 0) 100%)'}} className=' absolute w-full py-12 text-white text-center ' >
                    <p className=' font-CircularStd-Medium  ' >Portrait Session</p>
                    <p className=' font-CircularStd-Bold text-5xl my-4 ' >₦10,000</p>
                    <button className=' text-[#222] bg-[#FFFFFFB2] h-11 mt-2 w-24 font-CircularStd-SemiBold ' >Book</button>
                </div>
                <img src={three} alt='1' />
            </div>
        </div>
    )
} 