import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import newsImg from '../../../assets/images/trade.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


import './style.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function SliderNews() {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                    clickable: true
                }}

                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=' grid grid-cols-12 mt-4 items-center justify-between w-full'>
                        <div className=' col-span-7'>
                            <p className=' mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam iure, doloribus asperiores vero perspiciatis optio!</p>
                            <img src={newsImg} alt="" className=' w-[700px] h-[450px] object-cover rounded-xl' />
                        </div>
                        <div className=' col-span-5 ml-10'>
                            <h2 className=' text-[30px] tracking-widest font-extrabold leading-tight mb-5'>
                                TIPS CHOICE BEST <br /> AGENCY For House <br /> Decoration
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' grid grid-cols-12 mt-4 items-center justify-between w-full'>
                        <div className=' col-span-7'>
                            <p className=' mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam iure, doloribus asperiores vero perspiciatis optio!</p>
                            <img src={newsImg} alt="" className=' w-[700px] h-[450px] object-cover rounded-xl' />
                        </div>
                        <div className=' col-span-5 ml-10'>
                            <h2 className=' text-[30px] tracking-widest font-extrabold leading-tight mb-5'>
                                TIPS CHOICE BEST <br /> AGENCY For House <br /> Decoration
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. </p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
