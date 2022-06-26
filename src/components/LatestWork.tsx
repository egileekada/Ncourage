import React from 'react'
import one from '../assets/images/1.png'
import two from '../assets/images/2.png'
import three from '../assets/images/3.png'
import middle from '../assets/images/middle.png'
import five from '../assets/images/5.png'
import six from '../assets/images/6.png'
import seven from '../assets/images/7.png'

export default function LatestWork() {
    return (
        <div style={{background: 'radial-gradient(50% 50% at 50% 50%, #574130 0%, #1F1610 100%)'}} className=' w-full h-full py-14' >
            <div className=' w-full flex flex-col justify-center items-center mt-8' >
                <p className=' text-4xl font-CircularStd-SemiBold text-white ' >Latest <span className=' text-[#EDB388]' >works</span></p>
                {/* <div className=' w-auto lg:flex items-center hidden text-sm my-8 text-[#FFFFFF99]' >
                    <button className=' font-PublicSans-Medium text-white mx-5 py-1 border-b border-white ' >ALL</button>
                    <button className=' font-PublicSans-Medium mx-5' >FASHION</button>
                    <button className=' font-PublicSans-Medium mx-5' >LIFESTYLE</button>
                    <button className=' font-PublicSans-Medium mx-5' >NATURE</button>
                    <button className=' font-PublicSans-Medium mx-5' >PORTRAITS</button>
                    <button className=' font-PublicSans-Medium mx-5' >NUDES</button>
                    <button className=' font-PublicSans-Medium mx-5' >STUDIO</button>
                    <button className=' font-PublicSans-Medium mx-5' >VIDEO</button>
                </div> */}
                <div className='w-screen hidden mt-14 lg:flex justify-center my-6 items-center' >
                    <img src={one} alt='one' />
                    <div className='mx-4  ' >
                        <img src={two} alt='two' />
                        <img src={three} className='mt-4' alt='three' />
                    </div>
                    <img src={middle} alt='middle' /> 
                    <div className='mx-4' >
                        <img src={five} alt='five' />
                        <img src={six} className='mt-4' alt='six' />
                    </div>
                    <img src={seven} alt='seven' />
                </div>

                <div className=' w-auto overflow-x-auto lg:hidden mb-12 dashboardslide flex mt-6  items-center' >
                    <img src={one} className='h-40 object-cover ' alt='one' />
                    <img src={two} className='h-40 object-cover ' alt='two' />
                    <img src={three} className='h-40 object-cover ' alt='three' />
                    <img src={middle} className='h-40 object-cover ' alt='middle' /> 
                    <img src={five} className='h-40 object-cover ' alt='five' />
                    <img src={six} className='h-40 object-cover ' alt='six' />
                </div>
            </div> 
            <a href='/gallery' className=' text-[#222] mx-auto flex justify-center items-center bg-[#FFFFFFB2] h-11 mt-6 w-32 font-CircularStd-SemiBold rounded ' >See More</a>
        </div>
    )
} 