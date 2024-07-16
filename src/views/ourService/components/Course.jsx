import React, { useState } from 'react'
import { Navbar } from '../../../components/Navbar'

import bgOverlay from '../../../assets/images/bg.png'
import serviceImg from '../../../assets/images/bg-service.jpg'
import { dataCourse } from './dataCourse'
import { data } from 'autoprefixer'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ImArrowLeft } from 'react-icons/im'

export const Course = () => {
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0)
    const id = useParams()
    const itemPerpage = 6

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + itemPerpage, dataCourse.length + itemPerpage))
        console.log(currentIndex);
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - itemPerpage, 0))
    }
    return (
        <Navbar>
            <div>
                <div className=' h-screen sm:h-[300px] md:h-[400px] xl:h-[500px] z-0 w-full relative before:absolute md:before:bg-[#003049] before:-z-[1] before:w-full before:h-screen md:before:h-[400px] 
                sm:before:h-[300px]
                    before:bg-[#002133] xl:before:h-[500px]'>
                    <img src={bgOverlay}
                        className="xl:block hidden w-full xl:h-[500px] xl:object-cover h-screen absolute"
                    />
                    <div className=' pt-[70px] relative container mx-auto h-full max-w-[340px] sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl text-white z-50'>
                        <Link to={"/ourService"} className='absolute hidden top-32 md:top-24 left-2 md:flex cursor-pointer items-center hover:text-[#F97316]'>
                            <ImArrowLeft className=' text-[30px] mr-5' />
                            <h1 className='text-[40px]  sm:text-[50px] lg:text-[40px] font-bold'>ກັບຄືນ</h1>
                        </Link>
                        <div className=' grid place-items-center xl:grid-cols-3 2xl:grid-cols-2 md:grid-cols-2 items-center lg:mt-8 h-full pb-10 xl:py-5 md:py-0 md:pb-10'>
                            <div className=' xl:col-span-2 '>
                                <h1 className=' text-[34px] sm:text-[45px] text-[#F97316] mb-3 font-bold md:mt-10'>ບໍລິການຂອງພວກເຮົາ</h1>
                                <p className=' sm:text-[15px] text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa temporibus <br /> facere quam sequi <br /> adipisci voluptatum illo velit in quod nulla minus vitae, nam rem ipsum eaque consequatur assumenda explicabo!</p>
                            </div>
                            <div className='w-[300px] h-[300px] sm:hidden md:block md:w-[250px] md:h-[250px] border-4 border-white rounded-full mt-5 gap-y-5 items-center'>
                                <img src={serviceImg} alt=""
                                    className=' w-full h-full object-cover rounded-full
                                shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' h-full bg-white container mx-auto max-w-[340px] sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl'>
                    <div className=' p-4 md:border-2 mt-10 rounded-lg '>
                        <ul className={`grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-6 gap-y-10 h-fit ${currentIndex < 6 || currentIndex < 10 ? 'place-items-center' : ''}`}>
                            {dataCourse.slice(currentIndex, currentIndex + itemPerpage).map((item, index) => (
                                <li key={index} className='relative border-2 rounded-lg shadow-md h-[420px] w-[320px] sm:w-[290px] md:h-[410px] xl:w-[370px] md:w-[280px]'>
                                    <img src={item.picture} alt="" className='w-full h-[270px] sm:h-[260px] md:h-[250px] object-cover rounded-lg' />
                                    <div className='p-3 leading-[1.6] w-full'>
                                        <div className='flex justify-between'>
                                            <h4 className='text-[18px] font-semibold'>{item.title}</h4>
                                            <p className='flex items-center gap-x-2'>4.5 <FaRegStar className='text-[#F97316]' /></p>
                                        </div>
                                        <p className='font-medium text-gray-400 text-[12px] mt-2'>ຜູ້ຊົມ 21ຄົນ</p>
                                        <div className='absolute bottom-3 left-3 right-3 flex justify-between items-center'>
                                            <p className='font-medium text-[#F97316] text-[18px]'>{item.price} ₭</p>
                                            <button
                                                onClick={() => navigate(`${item.id}`)}
                                                className='bg-[#F97316] text-white w-[90px] py-1 rounded'>
                                                ສະໝັກ
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {
                        dataCourse.length > itemPerpage && <div className=' mt-14 mb-20 flex gap-x-10 justify-center items-center text-[40px]'>
                            <button onClick={handlePrev} disabled={currentIndex == 0}
                                className='bg-gray-200 flex items-center justify-center rounded-full w-[60px] h-[60px]'>
                                <IoIosArrowBack />
                            </button>
                            <button onClick={handleNext} disabled={currentIndex + itemPerpage >= dataCourse.length}
                                className='bg-gray-200 flex items-center justify-center rounded-full w-[60px] h-[60px]'>
                                <IoIosArrowForward />
                            </button>
                        </div>
                    }
                </div>
            </div>
        </Navbar>
    )
}
