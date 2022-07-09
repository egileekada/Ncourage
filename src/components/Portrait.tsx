import React from 'react'
import one from '../assets/images/Portrait1.jpg'
import two from '../assets/images/Portrait2.jpg'
import three from '../assets/images/Portrait3.jpg'

export default function Portrait() {
    return (
        <div className=' w-full flex lg:flex-row flex-col ' >
            <div className='w-full relative ' >
                <div style={{ background: 'linear-gradient(180deg, #3C2A35 36.69%, rgba(79, 64, 66, 0) 100%)'}} className=' absolute w-full py-12 text-white text-center ' >
                    <p className=' font-CircularStd-Medium  ' >Portrait Photoshoot(Indoor or Outdoor)</p>
                    {/* <p className=' font-CircularStd-Bold text-5xl my-4 ' >₦12,000</p> */} 
                </div>
                <div className=' absolute  w-full h-full flex justify-center items-center ' >
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSeHL18YFw3nCY9mxlyxjvxLUloMjObRINwPtyPgBCPUiPv9aQ/viewform?usp=pp_url' className=' text-[#222] flex justify-center items-center bg-[#FFFFFFB2] h-11 mt-2 w-24 font-CircularStd-SemiBold ' >Book</a>
                </div>
                <img className=' w-full lg:h-550px object-cover' src={one} alt='1' />
            </div>
            <div className='w-full relative ' >
                <div style={{ background: 'linear-gradient(180deg, #3C2A35 36.69%, rgba(79, 64, 66, 0) 100%)'}} className=' absolute w-full py-12 text-white text-center ' >
                    <p className=' font-CircularStd-Medium  ' >Wedding/Event Coverage</p>
                    {/* <p className=' font-CircularStd-Bold text-5xl my-4 ' >₦15,000</p>
                    <a href='http://wa.link/9xzsdb' className=' text-[#222] bg-[#FFFFFFB2] h-11 mt-2 w-24 font-CircularStd-SemiBold ' >Book</button> */}
                </div>
                <div className=' absolute  w-full h-full flex justify-center items-center ' >
                    <a href='http://wa.link/9xzsdb' className=' text-[#222] flex justify-center items-center bg-[#FFFFFFB2] h-11 mt-2 w-24 font-CircularStd-SemiBold ' >Book</a>
                </div>
                <img className=' w-full lg:h-550px object-cover' src={two} alt='1' />
            </div>
            <div className='w-full relative ' >
                <div style={{ background: 'linear-gradient(180deg, #3C2A35 36.69%, rgba(79, 64, 66, 0) 100%)'}} className=' absolute w-full py-12 text-white text-center ' >
                    <p className=' font-CircularStd-Medium  ' > Photography school or other trainings</p>
                    {/* <p className=' font-CircularStd-Bold text-5xl my-4 ' >₦10,000</p>
                    <button className=' text-[#222] bg-[#FFFFFFB2] h-11 mt-2 w-24 font-CircularStd-SemiBold ' >Book</button> */}
                </div>
                <div className=' absolute  w-full h-full flex justify-center items-center ' >
                    <a href='http://wa.link/9xzsdb' className=' text-[#222] flex justify-center items-center bg-[#FFFFFFB2] h-11 mt-2 w-24 font-CircularStd-SemiBold rounded ' >Book</a>
                </div>
                <img className=' w-full lg:h-550px object-cover ' src={three} alt='1' />
            </div>
        </div>
    )
} 