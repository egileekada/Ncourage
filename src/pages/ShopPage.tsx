import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import OtherImages from '../components/OtherImages'
import Portrait from '../components/Portrait'
import SocialMedia from '../components/SocialMedia'

export default function ShopPage() {
    return (
        <div className='w-full relative overflow-x-hidden ' > 
            <div className=' z-50 px-6 lg:px-20 bg-[#1F1610]' >
                <Navbar tab='2' />
                <div className=' w-full flex pt-8 pb-20 justify-between items-center text-white ' >
                    <div>
                        <p className=' font-CircularStd-Bold text-5xl' >Shop</p>
                        <p className=' font-CircularStd-Medium w-96 mt-2 ' >Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className='w-72' > 
                        <InputGroup >
                            <InputLeftElement 
                                children={
                                    <svg className='mt-2' width="18" height="19" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.82568 0.333328C10.4057 0.333328 13.3177 3.24533 13.3177 6.82533C13.3177 8.51436 12.6695 10.0548 11.6088 11.211L13.6959 13.2938C13.8913 13.4891 13.8919 13.8051 13.6966 14.0005C13.5993 14.0991 13.4706 14.1478 13.3426 14.1478C13.2153 14.1478 13.0873 14.0991 12.9893 14.0018L10.8769 11.8953C9.76572 12.7852 8.35679 13.318 6.82568 13.318C3.24568 13.318 0.333008 10.4053 0.333008 6.82533C0.333008 3.24533 3.24568 0.333328 6.82568 0.333328ZM6.82568 1.33333C3.79701 1.33333 1.33301 3.79666 1.33301 6.82533C1.33301 9.854 3.79701 12.318 6.82568 12.318C9.85368 12.318 12.3177 9.854 12.3177 6.82533C12.3177 3.79666 9.85368 1.33333 6.82568 1.33333Z" fill="white"/>
                                    </svg>
                                }
                            />
                            <Input size='lg' fontSize='sm' placeholder="Search" /> 
                        </InputGroup>
                    </div> 
                </div>
            </div> 
            <Portrait />
            <Portrait /> 
            <SocialMedia />
            <OtherImages />
            <Footer />
        </div>
    )
} 