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
                    <div className=' grid sm:grid-cols-12 grid-cols-1 place-items-center justify-between w-full'>
                        <div className=' sm:col-span-6 p-2'>
                            <p className=' mb-5 md:text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam iure, doloribus asperiores vero perspiciatis optio!</p>
                            <img src={newsImg} alt="" className=' sm:w-[700px] sm:h-[450px] w-[320px] object-cover rounded sm:rounded-xl' />
                        </div>
                        <div className=' sm:col-span-6 ml-10'>
                            <h2 className=' md:text-[30px] md:text-start sm:text-[22px] text-[20px] tracking-widest font-extrabold leading-tight mb-5'>
                                TIPS CHOICE BEST <br /> AGENCY For House <br /> Decoration
                            </h2>
                            <p className=' sm:text-[15px] md:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' grid sm:grid-cols-12 grid-cols-1 place-items-center justify-between w-full'>
                        <div className=' sm:col-span-6 p-2'>
                            <p className=' mb-5 md:text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam iure, doloribus asperiores vero perspiciatis optio!</p>
                            <img src={newsImg} alt="" className=' sm:w-[700px] sm:h-[450px] w-[320px] object-cover rounded sm:rounded-xl' />
                        </div>
                        <div className=' sm:col-span-6 ml-10'>
                            <h2 className=' md:text-[30px] md:text-start sm:text-[22px] text-[20px] tracking-widest font-extrabold leading-tight mb-5'>
                                TIPS CHOICE BEST <br /> AGENCY For House <br /> Decoration
                            </h2>
                            <p className=' sm:text-[15px] md:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' grid sm:grid-cols-12 grid-cols-1 place-items-center justify-between w-full'>
                        <div className=' sm:col-span-6 p-2'>
                            <p className=' mb-5 md:text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam iure, doloribus asperiores vero perspiciatis optio!</p>
                            <img src={newsImg} alt="" className=' sm:w-[700px] sm:h-[450px] w-[320px] object-cover rounded sm:rounded-xl' />
                        </div>
                        <div className=' sm:col-span-6 ml-10'>
                            <h2 className=' md:text-[30px] md:text-start sm:text-[22px] text-[20px] tracking-widest font-extrabold leading-tight mb-5'>
                                TIPS CHOICE BEST <br /> AGENCY For House <br /> Decoration
                            </h2>
                            <p className=' sm:text-[15px] md:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. </p>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
}
