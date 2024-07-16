import React from 'react'

import { IoMdArrowRoundForward } from "react-icons/io";

import screenImg from '../../../assets/images/screen.jpg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const ExampleService = () => {
    const { t } = useTranslation()
    return (
        <div className=' w-full bg-white mb-32 sm:mb-20 container mx-auto h-full max-w-[340px] sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl'>
            <div className=' flex items-center gap-x-5 justify-between mb-5'>
                <h1 className=' md:text-[35px] font-bold text-[20px] lg:leading-[1.2]'>
                    {t('OurService.example.title')}
                </h1>
                <button className=' flex items-center justify-center bg-[#F97316] text-white text-[20px] w-[120px] px-4 py-[6px] rounded'>
                    {t('OurService.example.button')}
                    <IoMdArrowRoundForward className=' ml-1' />
                </button>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 place-items-center gap-10 sm:gap-5 lg:gap-6 '>
                <div className=' w-[320px] sm:w-[300px] xl:w-[350px] flex flex-col items-center cursor-pointer p-3 hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-md border-2
                    duration-300 ease-in-out'>
                    <img src={screenImg} alt=""
                        className=' w-[320px] sm:w-[300px] xl:w-[340px]'
                    />
                    <h2 className=' mb-2 mt-3 text-center sm:text-[30px] text-[20px] xl:text-[28px] leading-[1.2] lg:text-[26px] sm:mt-2 sm:mb-4 font-semibold'>
                        {t('OurService.example.video_title')} <br className=' hidden sm:block' /> {t('OurService.example.video_title2')}
                    </h2>
                    <p className=' text-orange-400 text-[14px] md:text-[12px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
                <div className=' w-[320px] sm:w-[300px] xl:w-[350px] flex flex-col items-center cursor-pointer p-3 hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-md border-2
                    duration-300 ease-in-out'>
                    <img src={screenImg} alt=""
                        className=' w-[320px] sm:w-[300px] xl:w-[340px]'
                    />
                    <h2 className=' mb-2 mt-3 text-center sm:text-[30px] text-[20px] xl:text-[28px] leading-[1.2] lg:text-[26px] sm:mt-2 sm:mb-4 font-semibold'>
                        {t('OurService.example.video_title')} <br className=' hidden sm:block' /> {t('OurService.example.video_title2')}
                    </h2>
                    <p className=' text-orange-400 text-[14px] md:text-[12px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
                <div className=' w-[320px] sm:w-[300px] xl:w-[350px] flex flex-col items-center cursor-pointer p-3 hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-md border-2
                    duration-300 ease-in-out'>
                    <img src={screenImg} alt=""
                        className=' w-[320px] sm:w-[300px] xl:w-[340px]'
                    />
                    <h2 className=' mb-2 mt-3 text-center sm:text-[30px] text-[20px] xl:text-[28px] leading-[1.2] lg:text-[26px] sm:mt-2 sm:mb-4 font-semibold'>
                        {t('OurService.example.video_title')} <br className=' hidden sm:block' /> {t('OurService.example.video_title2')}
                    </h2>
                    <p className=' text-orange-400 text-[14px] md:text-[12px] lg:text-[13px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
            </div>
        </div>
    )
}
