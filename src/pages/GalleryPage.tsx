import React from 'react'
import Footer from '../components/Footer'
import LatestWork from '../components/LatestWork'
import Navbar from '../components/Navbar'
import OtherImages from '../components/OtherImages'
import SocialMedia from '../components/SocialMedia'

export default function GalleryPage() {
    return (
        <div className='w-full relative overflow-x-hidden ' > 
            <div className=' z-50 px-6 lg:px-20 bg-[#1F1610]' >
                <Navbar tab='3' />
                <div className=' w-full flex flex-col pt-8 pb-20 justify-center items-center text-white ' > 
                    <p className=' font-CircularStd-Bold text-5xl' >Gallery</p>
                    <p className=' font-CircularStd-Medium w-96 mt-2 text-center ' >Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur</p>
                </div> 
            </div>
            <div className='w-full' >
                <LatestWork />
            </div>
            <SocialMedia />
            <div className='w-full' >
                <OtherImages />
            </div>
            <Footer />
        </div>
    )
} 