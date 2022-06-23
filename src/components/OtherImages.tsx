import React from 'react'
import eight from '../assets/images/8.png'
import nine from '../assets/images/9.png'
import ten from '../assets/images/10.png'
import eleven from '../assets/images/11.png'
import four from '../assets/images/4.png' 

export default function OtherImages() {
    return (
        <div className=' w-auto overflow-x-auto dashboardslide flex  items-center' >
            <img className='w-full' src={eight} alt='eight' />
            <img className='w-full' src={nine} alt='nine' />
            <img className='w-full' src={ten} alt='ten' />
            <img className='w-full' src={eleven} alt='eleven' />
            <img className='w-full' src={four} alt='four' />
        </div>
    )
} 