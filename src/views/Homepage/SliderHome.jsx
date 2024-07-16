import React from 'react';
import { useTranslation } from 'react-i18next';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import image
import img1 from '../../assets/icons/1.png'
import img2 from '../../assets/icons/2.png'
import img3 from '../../assets/icons/3.png'

import { IoIosArrowForward } from "react-icons/io";

// import required modules
import { Pagination } from 'swiper/modules';

export default function SliderHome() {
    const { t } = useTranslation();

    return (
        <>
            <Swiper
                slidesPerView={3}
                loop={true}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=' shadow-md px-7 bg-[#003049] h-[450px] w-[380px] lg:h-[470px] 2xl:w-[360px] rounded-md flex items-center flex-col'>
                        <h3 className=' mt-7 mb-10 text-[24px] font-semibold text-white'>{t('sliderHome.laoStockRecommendations')}</h3>
                        <div className=' flex mb-10 justify-center items-center w-28 h-28 p-6 bg-white rounded-full'>
                            <img src={img1} alt=""
                                className=' w-10 h-10'
                            />
                        </div>
                        <p className=' text-white text-[15px]  text-start'>
                            {t('sliderHome.freeRegistration')}
                        </p>
                        <hr className=' border-white border w-full mt-10' />
                        <div className=' text-white flex items-center gap-x-2 text-[20px] mt-6 cursor-pointer hover:text-orange-400'>
                            <p>{t('sliderHome.readMore')}</p>
                            <IoIosArrowForward />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' shadow-md px-7 bg-[#003049] h-[450px] w-[380px] lg:h-[470px] 2xl:w-[360px] rounded-md flex items-center flex-col'>
                        <h3 className=' mt-7 mb-10 text-[24px] font-semibold text-white'>{t('sliderHome.fundRecommendations')}</h3>
                        <div className=' flex mb-10 justify-center items-center w-28 h-28 p-6 bg-white rounded-full'>
                            <img src={img3} alt=""
                                className=' w-10 h-10'
                            />
                        </div>
                        <p className=' text-white text-[15px]  text-start'>
                            {t('sliderHome.freeRegistration')}
                        </p>
                        <hr className=' border-white border w-full mt-10' />
                        <div className=' text-white flex items-center gap-x-2 text-[20px] mt-6 cursor-pointer hover:text-orange-400'>
                            <p>{t('sliderHome.readMore')}</p>
                            <IoIosArrowForward />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' shadow-md px-7 bg-[#003049] h-[450px] w-[380px] lg:h-[470px] 2xl:w-[360px] rounded-md flex items-center flex-col'>
                        <h3 className=' mt-7 mb-10 text-[24px] font-semibold text-white'>{t('sliderHome.fundRecommendations')}</h3>
                        <div className=' flex mb-10 justify-center items-center w-28 h-28 p-6 bg-white rounded-full'>
                            <img src={img2} alt=""
                                className=' w-10 h-10'
                            />
                        </div>
                        <p className=' text-white text-[15px]  text-start'>
                            {t('sliderHome.freeRegistration')}
                        </p>
                        <hr className=' border-white border w-full mt-10' />
                        <div className=' text-white flex items-center gap-x-2 text-[20px] mt-6 cursor-pointer hover:text-orange-400'>
                            <p>{t('sliderHome.readMore')}</p>
                            <IoIosArrowForward />
                        </div>
                    </div>
                </SwiperSlide>
                {/* Repeat the same pattern for the remaining SwiperSlides */}
            </Swiper>
        </>
    );
}