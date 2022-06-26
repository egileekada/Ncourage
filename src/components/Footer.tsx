import React from 'react'
import Logo from "../assets/images/logo.png";

export default function Footer() {
    return (
        <div style={{ background: 'radial-gradient(104.03% 33705% at 11.49% 29.38%, #1E0E1B 0%, #0D0C16 100%)' }} className='w-full flex flex-col text-white pb-8 pt-24 px-6 lg:px-24' >
            <img src={Logo} className='w-28' alt="logo" />
            <div className='w-full flex lg:flex-row flex-col mt-6 lg:justify-between lg:items-center' >
                <p className=' font-CircularStd-Medium lg:w-96' >The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion.</p>
                <div className=' lg:mt-0 mt-14' >
                    <p className=' font-CircularStd-Bold text-2xl  ' >Contacts</p>
                    <p className=' font-CircularStd-Medium mt-2'>Phone: +234 706 817 2124</p>
                    <p className=' font-CircularStd-Medium mt-1'>Email: courage@couragestudios.com</p>
                </div>
            </div>
            <p  className=' font-CircularStd-Medium mt-14 text-sm text-center'>Copyright © 2021 Ncourage. All Rights Reserved.</p>
                <a href='https://www.icowebagency.com'><p className=' font-OpenSans-SemiBold text-white mt-4 text-center text-sm ' >Developed by icoweb</p></a>
        </div>
    )
} 