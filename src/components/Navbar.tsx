import React from 'react'
import Logo from "../assets/images/logo.png";
import { FiMenu } from 'react-icons/fi'; 
import { IoMdClose } from 'react-icons/io';

export default function Navbar(props: any) {

    const [menu, setMenu] = React.useState(false); 

    return (
        <div className='w-screen px-6 lg:px-20 flex h-28 items-center' >
            <div className='w-auto lg:flex hidden ' >
                <a href='/' className={props.tab === '1' ? ' relative z-20 border-l-2 h-3 flex items-center border-[#EDB388] pl-2 text-[#EDB388] font-CircularStd-Medium ':' relative z-20 h-3 flex items-center pl-2 text-[#DEDEDE] font-CircularStd-Medium ' } >
                    Home
                </a>
                <a href='/shop' className={props.tab === '2' ? ' ml-8 relative z-20 border-l-2 h-3 flex items-center border-[#EDB388] pl-2 text-[#EDB388] font-CircularStd-Medium ':' relative z-20 ml-8 h-3 flex items-center pl-2 text-[#DEDEDE] font-CircularStd-Medium ' }>
                    Shop
                </a>
                <a href='/gallery' className={props.tab === '3' ? ' ml-8 relative z-20 border-l-2 h-3 flex items-center border-[#EDB388] pl-2 text-[#EDB388] font-CircularStd-Medium ':' relative z-20 ml-8 h-3 flex items-center pl-2 text-[#DEDEDE] font-CircularStd-Medium ' } >
                    Gallery
                </a>
                <a href='/contactus' className={props.tab === '4' ? ' ml-8 relative z-20 border-l-2 h-3 flex items-center border-[#EDB388] pl-2 text-[#EDB388] font-CircularStd-Medium ':' relative z-20 ml-8 h-3 flex items-center pl-2 text-[#DEDEDE] font-CircularStd-Medium ' } >
                    Contact us
                </a>
            </div>
            <div className='w-full flex justify-center items-center mx-auto h-28 lg:absolute lg:mt-0 mt-8 top-0 left-0 right-0' >
                <a href=''><img src={Logo} className='cursor-pointer mr-8 ' alt="logo" /></a>
            
                <div className="w-full absolute flex justify-end lg:hidden pr-10"> 
                    {!menu
                        ?
                            <button onClick={()=> setMenu(true)} className=" w-auto h-auto text-center font-Heebo-Regular">
                                <FiMenu size={30} color="white" />
                            </button>
                        :
                            <button onClick={()=> setMenu(false)} className="xl:hidden sm:flex sm:justify-end sm:w-auto sm:h-auto text-center font-Heebo-Regular"> 
                                <IoMdClose  size={30} color="white"/>
                            </button>
                    } 
                </div> 
                {menu && (
                    <div className='w-full top-32 right-0 z-50 absolute flex-col flex px-6 justify-center lg:hidden ' >
                        <div className=' w-full flex-col flex bg-[#7D614C] justify-center py-4 rounded ' >
                            <div className=' w-auto mx-auto' >
                                <a href='/' className={props.tab === '1' ? ' relative z-20 border-l-2 h-3 flex items-center my-5 border-[#EDB388] pl-2 text-[#EDB388] font-CircularStd-Medium ':' relative z-20 h-3 flex items-center my-5 pl-2 text-[#DEDEDE] font-CircularStd-Medium '} >
                                    Home
                                </a>
                                <a href='/shop' className={props.tab === '2' ? ' relative z-20 border-l-2 h-3 flex items-center my-5 border-[#EDB388] pl-2 text-[#EDB388] font-CircularStd-Medium ':' relative z-20 h-3 flex items-center my-5 pl-2 text-[#DEDEDE] font-CircularStd-Medium '} >
                                    Shop
                                </a>
                                <a href='/gallery' className={props.tab === '3' ? ' relative z-20 border-l-2 h-3 flex items-center my-5 border-[#EDB388] pl-2 text-[#EDB388] font-CircularStd-Medium ':' relative z-20 h-3 flex items-center my-5 pl-2 text-[#DEDEDE] font-CircularStd-Medium '} >
                                    Gallery
                                </a>
                                <a href='/contactus' className={props.tab === '4' ? ' relative z-20 border-l-2 h-3 flex items-center my-5 border-[#EDB388] pl-2 text-[#EDB388] font-CircularStd-Medium ':' relative z-20 h-3 flex items-center my-5 pl-2 text-[#DEDEDE] font-CircularStd-Medium '} >
                                    Contact us
                                </a>
                            </div>
                        </div>
                    </div>  
                )}
            </div>
        </div>
    )
} 