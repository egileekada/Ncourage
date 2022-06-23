import React from 'react'
import Slider1 from "../assets/images/Slider1.png";
import Mobile from "../assets/images/mobile.png";
import Profile from "../assets/images/profile.png";

export default function SalesPage() {
    return (
        <div className='w-full overflow-hidden' >
            <img style={{height: '200vh'}} src={Slider1} className=' w-screen object-cover lg:flex hidden cursor-pointer' alt="Slider1" />
            <img style={{height: '200vh'}} src={Mobile} className=' w-screen object-cover lg:hidden flex object-left cursor-pointer' alt="Slider1" />
            <div className='w-full h-auto absolute top-0' >
                <div className=' w-full h-screen px-6 lg:px-20 pb-20 flex flex-col ' >
                    <p className=' text-5xl  mt-auto text-white font-CircularStd-Bold ' >We are Ncourage</p>
                    <p className=' mt-4 w-96 text-white font-CircularStd-Medium ' >Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className=' w-full h-auto lg:h-screen  lg:flex-row flex-col-reverse py-10 lg:py-0 px-6 lg:px-0 lg:p-20 items-center backdrop-blur-2xl flex bg-[#2C241F7A]' >
                    <img src={Profile} className=' rounded-full ' alt="Slider1" />
                    <div className='lg:ml-auto lg:mr-12 ' >
                        <p className='text-white leading-tight font-PublicSans-Bold text-3xl ' >My name is<br/><span className=' text-[#EDB388] ' >Muegbeyogho Courage Nosakhare,</span><br/>I’m a Photographer. </p>
                        <p className=' mt-4 lg:w-96 text-[#FFFFFFCC] font-CircularStd-Medium ' >Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur</p>
                    
                        <div className=' grid grid-cols-3 gap-6 mb-16 lg:justify-start mt-10' >
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