import { Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import OtherImages from '../components/OtherImages'
import SocialMedia from '../components/SocialMedia'

export default function ContactUs() {
    return (
        <div className='w-full relative overflow-x-hidden ' > 
            <div className=' z-50 px-6 lg:px-20 bg-[#1F1610]' >
                <Navbar tab='4' />
                <div className=' w-full flex flex-col lg:pt-8 pt-16 pb-20 justify-center items-center text-white ' > 
                    <p className=' font-CircularStd-Bold text-5xl' >Contact us</p>
                    <p className=' font-CircularStd-Medium w-96 mt-2 text-center ' >Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur</p>
                </div> 
            </div> 
            <div style={{background: 'radial-gradient(50% 50% at 50% 50%, #574130 0%, #1F1610 100%)'}} className='w-full flex flex-col justify-center items-center text-white lg:px-0 px-6' >
                <div className='w-full lg:flex-row flex-col flex justify-center items-center text-white' >
                    <div className='lg:mx-6 h- cursor-pointer flex justify-center flex-col items-center ' >
                        <svg className=' w-20 h-20' viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="61" cy="61" r="60.5" fill="white" fill-opacity="0.08" stroke="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M48.2659 49.4345C48.2693 49.4345 48.1859 49.5212 48.0809 49.6245C47.6776 50.0162 46.8426 50.8312 46.8342 52.5362C46.8209 54.9212 48.3893 59.3495 55.9409 66.8995C63.4576 74.4128 67.8793 75.9995 70.2693 75.9995H70.3043C72.0093 75.9912 72.8226 75.1545 73.2159 74.7528C73.3359 74.6295 73.4326 74.5395 73.5009 74.4828C75.1609 72.8128 76.0109 71.5695 76.0027 70.7728C75.9909 69.9595 74.9793 68.9978 73.5809 67.6678C73.1359 67.2445 72.6526 66.7845 72.1426 66.2745C70.8209 64.9562 70.1659 65.1812 68.7259 65.6878C66.7343 66.3862 64.0009 67.3362 59.7543 63.0878C55.5009 58.8378 56.4526 56.1078 57.1493 54.1162C57.6526 52.6762 57.8826 52.0195 56.5593 50.6962C56.0409 50.1795 55.5759 49.6895 55.1476 49.2395C53.8259 47.8495 52.8726 46.8445 52.0643 46.8328H52.0509C51.2526 46.8328 50.0126 47.6862 48.2576 49.4412C48.2626 49.4362 48.2643 49.4345 48.2659 49.4345ZM70.2709 78.4995C66.1176 78.4995 60.7026 75.1928 54.1743 68.6678C47.6209 62.1162 44.3093 56.6845 44.3341 52.5228C44.3493 49.7728 45.7909 48.3645 46.3326 47.8362C46.3609 47.8012 46.4576 47.7062 46.4909 47.6728C48.8809 45.2812 50.4926 44.3145 52.0959 44.3326C53.9576 44.3578 55.2826 45.7512 56.9593 47.5162C57.3743 47.9528 57.8243 48.4278 58.3259 48.9278C60.7593 51.3612 60.0659 53.3462 59.5093 54.9395C58.9026 56.6778 58.3776 58.1778 61.5209 61.3212C64.6676 64.4645 66.1676 63.9395 67.8993 63.3278C69.4943 62.7712 71.4743 62.0745 73.9109 64.5078C74.4043 65.0012 74.8726 65.4462 75.3043 65.8578C77.0776 67.5428 78.4776 68.8745 78.5012 70.7412C78.5209 72.3328 77.5543 73.9545 75.1676 76.3428L74.1109 75.6262L75.0043 76.4995C74.4759 77.0412 73.0693 78.4845 70.3176 78.4995H70.2709Z" fill="white"/>
                        </svg>
                        <p className=' lg:text-base font-CircularStd-Medium mt-2' >+ (65) 123-272-778</p>
                    </div>
                    <div className='lg:mx-6 text-sm cursor-pointer flex justify-center flex-col items-center ' > 
                        <svg className=' w-20 h-20 lg:mt-0 mt-8' width="122" height="122" viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="61" cy="61" r="60.5" fill="white" fill-opacity="0.08" stroke="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.7648 44.3333C74.3148 44.3333 78.4998 48.8617 78.4998 54.8667V66.3133C78.4998 69.3867 77.4132 72.1633 75.4382 74.1333C73.6665 75.8983 71.3682 76.8333 68.7915 76.8333H52.3698C49.7982 76.8333 47.5015 75.9 45.7282 74.1333C43.7532 72.1633 42.6665 69.3867 42.6665 66.3133V54.8667C42.6665 48.8617 46.8515 44.3333 52.4015 44.3333H68.7648ZM68.7648 46.8333H52.4015C48.2098 46.8333 45.1665 50.2117 45.1665 54.8667V66.3133C45.1665 68.7183 45.9932 70.8667 47.4932 72.3617C48.7865 73.6533 50.4748 74.3333 52.3748 74.3333H68.7648C68.7682 74.33 68.7815 74.3333 68.7915 74.3333C70.6932 74.3333 72.3798 73.6533 73.6732 72.3617C75.1748 70.8667 75.9998 68.7183 75.9998 66.3133V54.8667C75.9998 50.2117 72.9565 46.8333 68.7648 46.8333ZM71.3915 54.548C71.8265 55.083 71.7448 55.8697 71.2098 56.3063L63.8032 62.3263C62.8665 63.0697 61.7465 63.4413 60.6282 63.4413C59.5132 63.4413 58.4015 63.073 57.4715 62.3363L49.9965 56.3097C49.4582 55.8763 49.3748 55.088 49.8065 54.5513C50.2415 54.0163 51.0282 53.9313 51.5648 54.363L59.0332 60.383C59.9715 61.1263 61.2932 61.1263 62.2382 60.3763L69.6315 54.3663C70.1682 53.928 70.9548 54.0113 71.3915 54.548Z" fill="white"/>
                        </svg>
                        <p className=' text-sm lg:text-base font-CircularStd-Medium mt-2' >support@gmail.com</p>
                    </div>
                    <div className='lg:mx-6 cursor-pointer flex justify-center flex-col items-center ' > 
                        <svg className=' w-20 h-20 mt-8 ' viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="61" cy="61" r="60.5" fill="white" fill-opacity="0.08" stroke="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M61.416 44.3333C68.9977 44.3333 75.166 50.5483 75.166 58.1883C75.166 67.58 64.406 76.8333 61.416 76.8333C58.426 76.8333 47.666 67.58 47.666 58.1883C47.666 50.5483 53.8343 44.3333 61.416 44.3333ZM61.416 46.8333C55.2127 46.8333 50.166 51.9283 50.166 58.1883C50.166 66.1533 59.5393 73.9133 61.416 74.3267C63.2927 73.9117 72.666 66.1517 72.666 58.1883C72.666 51.9283 67.6193 46.8333 61.416 46.8333ZM61.4177 52.6667C64.4043 52.6667 66.8343 55.0967 66.8343 58.085C66.8343 61.0717 64.4043 63.5 61.4177 63.5C58.431 63.5 56.001 61.0717 56.001 58.085C56.001 55.0967 58.431 52.6667 61.4177 52.6667ZM61.4177 55.1667C59.8093 55.1667 58.501 56.475 58.501 58.085C58.501 59.6933 59.8093 61 61.4177 61C63.026 61 64.3343 59.6933 64.3343 58.085C64.3343 56.475 63.026 55.1667 61.4177 55.1667Z" fill="white"/>
                        </svg>
                        <p className=' text-sm lg:text-base font-CircularStd-Medium mt-2 text-center' >Port Harcourt, Rivers <br/>State</p>
                    </div>
                </div>
                <p className=' text-base lg:px-40 lg:text-center font-CircularStd-Medium my-6 '>My photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people I photograph!</p> 
                <p className=' font-PublicSans-Bold text-2xl' >Drop me a Message</p>
                <div className=' lg:w-96  mb-20 mt-8 flex flex-col' >
                    <div className=' w-full my-2' >
                        <p className=' font-PublicSans-Medium mb-1 text-sm' >Full Name</p>
                        <Input size='lg' backgroundColor='rgba(255, 255, 255, 0.08)' borderColor='#7D614C' border='1px solid #7D614C' /> 
                    </div>
                    <div className=' flex' > 
                        <div className=' w-full my-2 mr-1' >
                            <p className=' font-PublicSans-Medium mb-1 text-sm' >Email/Phone</p>
                            <Input size='lg' backgroundColor='rgba(255, 255, 255, 0.08)' borderColor='#7D614C' border='1px solid #7D614C' /> 
                        </div>
                        <div className=' w-full my-2 ml-1' >
                            <p className=' font-PublicSans-Medium mb-1 text-sm' >Phone (optional)</p>
                            <Input size='lg' backgroundColor='rgba(255, 255, 255, 0.08)' borderColor='#7D614C' border='1px solid #7D614C' /> 
                        </div>
                    </div>
                    <div className=' w-full my-2' >
                        <p className=' font-PublicSans-Medium mb-1 text-sm' >Enter Message</p>
                        <Textarea height='100px' backgroundColor='rgba(255, 255, 255, 0.08)' borderColor='#7D614C' border='1px solid #7D614C' /> 
                    </div>
                    <button className='bg-white rounded h-11 w-56 mx-auto font-PublicSans-SemiBold text-sm mt-4 text-[#211811] '  >Send Message</button>
                </div>
            </div>
            <SocialMedia />
            <div className='w-full' >
                <OtherImages />
            </div>
            <Footer />
        </div>
    )
} 