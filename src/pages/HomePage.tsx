import React from 'react'
import Footer from '../components/Footer';
import LatestWork from '../components/LatestWork';
import Navbar from "../components/Navbar";
import OtherImages from '../components/OtherImages';
import Portrait from '../components/Portrait';
import SalesPage from "../components/SalesPage";
import SocialMedia from '../components/SocialMedia';

export default function HomePage() {
    return (
        <div className='w-full relative overflow-x-hidden ' > 
            <div className=' z-50 absolute top-0 bg-transparent' >
                <Navbar tab='1' />
            </div>
            <SalesPage />
            <div className='w-full h-full ' >
                <LatestWork />
            </div>
            <div className='w-full' >
                <Portrait />
            </div>
            <SocialMedia />
            <div className='w-full' >
                <OtherImages />
            </div>
            <Footer />
        </div>
    )
} 