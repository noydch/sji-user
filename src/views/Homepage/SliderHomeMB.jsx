import React, { useRef, useState } from 'react';
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

export default function SliderHomeMB() {
    return (
        <div className=''>
            <Swiper
                slidesPerView={1}
                loop={true}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=' shadow-md cursor-pointer  h-full sm:h-[420px] mt-5 sm:w-[450px] w-[360px]'>
                        <div className='bg-[#003049] w-full sm:h-full h-[390px] flex items-center flex-col px-7 rounded-lg'>
                            <h3 className=' mt-7 mb-5 text-[24px] sm:text-[28px] font-semibold text-white'>ຄຳແນະນຳຮຸ້ນລາວ</h3>
                            <div className=' flex mb-5 justify-center items-center sm:w-28 sm:h-28 h-24 w-24 p-6 bg-white rounded-full'>
                                <img src={img1} alt=""
                                    className=' sm:w-10 sm:h-10 w-8 h-8'
                                />
                            </div>
                            <p className=' text-white text-[15px] sm:text-[18px]  text-start'>
                                ການສະໝັກສະມາຊິກແມ່ນຟຣີບໍ່ມີຄ່າໃຊ້ຈ່າຍໃດໆ ສາມາດເບິ່ງການວິເຄາະຂ່າວການເງິນແລະບິ່ງການ ວິເຄາະຂ່າວການເງິນແລະຂ່າວການເງິນແລະບິ່ງການ ວິເຄາະຂ່າວການເງິນແລະ
                            </p>
                            <hr className=' border-white border w-full sm:mt-10 mt-5' />
                            <div className=' text-white flex items-center gap-x-2 sm:text-[20px] text-[18px] mt-6 cursor-pointer hover:text-orange-400'>
                                <p>ອ່ານຕໍ່</p>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' shadow-md cursor-pointer  h-full sm:h-[420px] mt-5 sm:w-[450px] w-[360px]'>
                        <div className='bg-[#003049] w-full sm:h-full h-[390px] flex items-center flex-col px-7 rounded-lg'>
                            <h3 className=' mt-7 mb-5 text-[24px] sm:text-[28px] font-semibold text-white'>ຄຳແນະນຳຮຸ້ນລາວ</h3>
                            <div className=' flex mb-5 justify-center items-center sm:w-28 sm:h-28 h-24 w-24 p-6 bg-white rounded-full'>
                                <img src={img1} alt=""
                                    className=' sm:w-10 sm:h-10 w-8 h-8'
                                />
                            </div>
                            <p className=' text-white text-[15px] sm:text-[18px]  text-start'>
                                ການສະໝັກສະມາຊິກແມ່ນຟຣີບໍ່ມີຄ່າໃຊ້ຈ່າຍໃດໆ ສາມາດເບິ່ງການວິເຄາະຂ່າວການເງິນແລະບິ່ງການ ວິເຄາະຂ່າວການເງິນແລະຂ່າວການເງິນແລະບິ່ງການ ວິເຄາະຂ່າວການເງິນແລະ
                            </p>
                            <hr className=' border-white border w-full sm:mt-10 mt-5' />
                            <div className=' text-white flex items-center gap-x-2 sm:text-[20px] text-[18px] mt-6 cursor-pointer hover:text-orange-400'>
                                <p>ອ່ານຕໍ່</p>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' shadow-md cursor-pointer  h-full sm:h-[420px] mt-5 sm:w-[450px] w-[360px]'>
                        <div className='bg-[#003049] w-full sm:h-full h-[390px] flex items-center flex-col px-7 rounded-lg'>
                            <h3 className=' mt-7 mb-5 text-[24px] sm:text-[28px] font-semibold text-white'>ຄຳແນະນຳຮຸ້ນລາວ</h3>
                            <div className=' flex mb-5 justify-center items-center sm:w-28 sm:h-28 h-24 w-24 p-6 bg-white rounded-full'>
                                <img src={img1} alt=""
                                    className=' sm:w-10 sm:h-10 w-8 h-8'
                                />
                            </div>
                            <p className=' text-white text-[15px] sm:text-[18px]  text-start'>
                                ການສະໝັກສະມາຊິກແມ່ນຟຣີບໍ່ມີຄ່າໃຊ້ຈ່າຍໃດໆ ສາມາດເບິ່ງການວິເຄາະຂ່າວການເງິນແລະບິ່ງການ ວິເຄາະຂ່າວການເງິນແລະຂ່າວການເງິນແລະບິ່ງການ ວິເຄາະຂ່າວການເງິນແລະ
                            </p>
                            <hr className=' border-white border w-full sm:mt-10 mt-5' />
                            <div className=' text-white flex items-center gap-x-2 sm:text-[20px] text-[18px] mt-6 cursor-pointer hover:text-orange-400'>
                                <p>ອ່ານຕໍ່</p>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
