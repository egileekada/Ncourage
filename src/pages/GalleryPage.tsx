import React from 'react'
import Footer from '../components/Footer'
import LatestWork from '../components/LatestWork'
import Navbar from '../components/Navbar'
import OtherImages from '../components/OtherImages'
import SocialMedia from '../components/SocialMedia'
import one from '../assets/images/G1-min.jpg'
import two from '../assets/images/G2-min.jpg'
import three from '../assets/images/G3-min.jpg'
import four from '../assets/images/G4-min.jpg'
import five from '../assets/images/G5-min.jpg'
import six from '../assets/images/G6-min.jpg'
import seven from '../assets/images/G7-min.jpg'
import eight from '../assets/images/G8-min.jpg'
// import nine from '../assets/images/G9-min.jpg'
import ten from '../assets/images/G10-min.jpg'
// import eleven from '../assets/images/G11-min.jpg'
import twelve from '../assets/images/G12-min.jpg'
import thirteen from '../assets/images/G13-min.jpg'
import fourteen from '../assets/images/G14-min.jpg'
import fithteen from '../assets/images/G15-min.jpg'
import G16 from '../assets/images/G16.jpg'
import G17 from '../assets/images/G17.jpg'
import G18 from '../assets/images/G18.jpg'
import G19 from '../assets/images/G19.jpg'
import G20 from '../assets/images/G20.jpg'
import G21 from '../assets/images/G21.jpg'
import G22 from '../assets/images/G22.png'
import G23 from '../assets/images/G23.png'
import G24 from '../assets/images/G24.png'
import G25 from '../assets/images/G25.png'
import G26 from '../assets/images/G26.png'
import G27 from '../assets/images/G27.png'

export default function GalleryPage() { 
    return (
        <div className='w-full relative overflow-x-hidden bg-[#1F1610] ' > 
            <div className=' z-50 px-6 lg:px-20 bg-[#1F1610]' >
                <Navbar tab='3' />
                <div className=' w-full flex flex-col pt-8 pb-20 justify-center items-center text-white ' > 
                    <p className=' font-CircularStd-Bold text-5xl' >Gallery</p>
                    <p className=' font-CircularStd-Medium w-96 mt-2 text-center ' >our latest work and the amazing personalities</p>
                </div> 
            </div>
            <div className=' w-full lg:flex justify-center items-center  hidden px-4 ' > 
                <div className='container w-screen pb-10 ' >
                    {/* <LatestWork /> */}
                    <figure>
                        <img src={one} alt="one" />
                        {/* <figcaption><a href="#">1</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={two} alt="two" />
                        {/* <figcaption><a href="#">2</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={three} alt="three" />
                        {/* <figcaption><a href="#">3</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={four} alt="four" />
                        {/* <figcaption><a href="#">4</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={five} alt="five" />
                        {/* <figcaption><a href="#">5</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={six} alt="six" />
                        {/* <figcaption><a href="#">6</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={seven} alt="seven" />
                        {/* <figcaption><a href="#">7</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={eight} alt="eight"/>
                        {/* <figcaption><a href="#">8</a></figcaption> */}
                    </figure> 
                    <figure>
                        <img src={ten} alt="ten" />
                        {/* <figcaption><a href="#">10</a></figcaption> */}
                    </figure> 
                    <figure>
                        <img src={twelve}  alt="twelve" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={thirteen}  alt="thirteen" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={fourteen}  alt="fourteen" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={fithteen}  alt="fithteen" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G16}  alt="G16" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G17}  alt="G17" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G18}  alt="G18" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G19}  alt="G19" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G20}  alt="G20" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G21}  alt="G21" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G22}  alt="G22" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G23}  alt="G23" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G24}  alt="G24" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G25}  alt="G25" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G26}  alt="G26" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G27}  alt="G27" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                </div>
            </div>
            <div className=' w-full lg:hidden px-4 ' >
                <div className='containermobile w-full pb-10 ' >
                    {/* <LatestWork /> */}
                    <figure>
                        <img src={one} alt="one" />
                        {/* <figcaption><a href="#">1</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={two} alt="two" />
                        {/* <figcaption><a href="#">2</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={three} alt="three" />
                        {/* <figcaption><a href="#">3</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={four} alt="four" />
                        {/* <figcaption><a href="#">4</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={five} alt="five" />
                        {/* <figcaption><a href="#">5</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={six} alt="six" />
                        {/* <figcaption><a href="#">6</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={seven} alt="seven" />
                        {/* <figcaption><a href="#">7</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={eight} alt="eight"/>
                        {/* <figcaption><a href="#">8</a></figcaption> */}
                    </figure> 
                    <figure>
                        <img src={ten} alt="ten" />
                        {/* <figcaption><a href="#">10</a></figcaption> */}
                    </figure> 
                    <figure>
                        <img src={twelve}  alt="twelve" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={thirteen}  alt="thirteen" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={fourteen}  alt="fourteen" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={fithteen}  alt="fithteen" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G16}  alt="G16" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G17}  alt="G17" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G18}  alt="G18" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G19}  alt="G19" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G20}  alt="G20" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G21}  alt="G21" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G22}  alt="G22" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G23}  alt="G23" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G24}  alt="G24" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G25}  alt="G25" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G26}  alt="G26" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src={G27}  alt="G27" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
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