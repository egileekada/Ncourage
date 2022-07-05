import React from 'react'
import Slider1 from "../assets/images/wallpaper.png";
import Mobile from "../assets/images/mobile.png";
import Profile from "../assets/images/profile.png";

export default function SalesPage() { 
    return (
        <div className='w-full overflow-hidden' >
            <div className=' h-screen bg-black absolute z-10 w-full opacity-25 ' />
            <img style={{height: '100vh'}} src={Slider1} className=' w-screen object-cover flex cursor-pointer' alt="Slider1" />
            <img src={Slider1} className=' h-screen w-screen object-cover flex cursor-pointer' alt="Slider1" />
            <div className='w-full h-auto absolute top-0 z-30' >
                <div className=' w-full  h-screen px-6 lg:px-20 pb-20 flex flex-col ' >
                    <p className=' text-5xl lg:mx-auto mt-auto text-white font-CircularStd-Bold ' >We are Ncourage</p>
                    <p className=' mt-4 lg:w-96 lg:mx-auto lg:text-center text-white mb-auto font-CircularStd-Medium ' >Ncourage is an Educator, Retoucher and a professional photographer based in Nigeria, Africa. </p>
                </div>
                <div className=' w-full h-auto lg:h-screen  lg:flex-row flex-col py-10 lg:py-0 px-6 lg:px-0 lg:p-20 items-center justify-center backdrop-blur-2xl flex bg-[#2C241F7A]' >
                    <img src={Profile} className=' rounded-full lg:mr-20 lg:mb-0 mb-12 ' alt="Slider1" />
                    <div className='lg:ml-20 ' >
                        <p className='text-white leading-tight font-PublicSans-Bold text-3xl ' >My name is<br/><span className=' text-[#EDB388] ' >Muegbeyogho Courage Nosakhare,</span><br/>I’m a Photographer. </p>
                        <p className=' mt-4 lg:w-96 text-[#FFFFFFCC] font-CircularStd-Medium ' >As a Photographer, I strive for an ideal capture that requires minimal post-production, and as a Retoucher, I leave no trace of my presence, while elevating a perfectly captured image and as an Educator, I am dedicated at ensuring my students can recreate my kind of results themselves. I'm willing to listen to your needs, do some great work and have fun doing it; that you'll love working with me.</p>
                    
                        <div className=' grid grid-cols-3 gap-6 lg:mb-16 lg:justify-start mt-10' >
                            <div className='' >
                                <p className=' font-CircularStd-Medium lg:text-4xl text-2xl text-[#EDB388] ' >934</p>
                                <p className=' mt-1 w-28 text-sm text-[#E7DDD5] font-CircularStd-Medium ' >Finished Photosessions</p>
                            </div>
                            <div className=' lg:px-6 lg:h-16 lg:border-l lg:-ml-8 lg:border-r border-[#7D614C] ' >
                                <p className=' font-CircularStd-Medium lg:text-4xl text-2xl text-[#EDB388] ' >2,934</p>
                                <p className=' mt-1 w-16 text-sm text-[#E7DDD5] font-CircularStd-Medium ' >Studio Sessions</p>
                            </div>
                            <div className=' ' >
                                <p className=' font-CircularStd-Medium lg:text-4xl text-2xl text-[#EDB388] ' >1,234</p>
                                <p className=' mt-1 w-16 text-sm text-[#E7DDD5] font-CircularStd-Medium ' >Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 