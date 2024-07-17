import React from 'react'

// image
import callImg from '../../../assets/icons/call.png'
import coinImg from '../../../assets/icons/coin.png'
import likeImg from '../../../assets/icons/like.png'
import likeCoinImg from '../../../assets/icons/like-coin.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


export const Services = () => {
    const { t } = useTranslation()
    return (
        <div className=' mb-20 container mx-auto h-full max-w-[360px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl'>
            <div>
                <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-2 gap-y-5 lg:gap-x-10 lg:gap-y-10 md:gap-x-5 place-items-center'>
                    <div className=' w-[320px] sm:w-[300px] cursor-pointer border xl:w-[350px] xl:h-[260px] xl:py-7 p-3 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
                        duration-300 rounded-lg md:w-[220px] lg:w-[300px] flex flex-col items-center text-start'>
                        <img src={callImg} alt=""
                            className=' w-16'
                        />
                        <h2 className=' text-[24px] my-2 font-semibold md:text-[20px] lg:text-[24px] text-center text-orange-400'>
                            {t('OurService.serviceTitle1')}
                        </h2>
                        <p className=' md:text-[12px] lg:text-[14px]'>
                            {t('OurService.description1')}
                        </p>
                        <p className=' md:text-[12px] lg:text-[14px]'>
                            {t('OurService.description2')}
                        </p>
                    </div>
                    <div className=' w-[320px] sm:w-[300px] cursor-pointer border xl:w-[350px] xl:h-[260px] xl:py-7 p-3 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] 
                        duration-300 rounded-lg md:w-[220px] lg:w-[300px] flex flex-col items-center text-start'>
                        <img src={coinImg} alt=""
                            className=' w-16'
                        />
                        <h2 className=' text-[24px] my-2 font-semibold md:text-[20px] lg:text-[24px] text-center text-orange-400'>
                            {t('OurService.serviceTitle2')}
                        </h2>
                        <p className=' md:text-[12px] lg:text-[14px]'>
                            {t('OurService.description1')}
                        </p>
                        <p className=' md:text-[12px] lg:text-[14px]'>
                            {t('OurService.description2')}
                        </p>
                    </div>
                    <div className=' w-[320px] sm:w-[300px] cursor-pointer border xl:w-[350px] xl:h-[260px] xl:py-7 p-3 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] 
                        duration-300 rounded-lg md:w-[220px] lg:w-[300px] flex flex-col items-center text-start'>
                        <img src={coinImg} alt=""
                            className=' w-16'
                        />
                        <h2 className=' text-[24px] my-2 font-semibold md:text-[20px] lg:text-[24px] text-center text-orange-400'>
                            {t('OurService.serviceTitle3')}
                        </h2>
                        <p className=' md:text-[12px] lg:text-[14px]'>
                            {t('OurService.description1')}
                        </p>
                        <p className=' md:text-[12px] lg:text-[14px]'>
                            {t('OurService.description2')}
                        </p>
                    </div>
                    <Link to={'/ourService/course'} className=' w-[320px] sm:w-[300px] cursor-pointer border xl:w-[350px] xl:h-[260px] xl:py-7 p-3 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] 
                        duration-300 rounded-lg md:w-[220px] lg:w-[300px] flex flex-col items-center text-start'>
                        <img src={likeImg} alt=""
                            className=' w-16'
                        />
                        <h2 className=' text-[24px] my-2 font-semibold md:text-[20px] lg:text-[24px] text-center text-orange-400'>
                            {t('OurService.serviceTitle4')}
                        </h2>
                        <p className=' md:text-[12px] lg:text-[14px]'>
                            {t('OurService.description1')}
                        </p>
                        <p className=' md:text-[12px] lg:text-[14px]'>
                            {t('OurService.description2')}
                        </p>
                    </Link>
                    <div className=' w-[320px] sm:w-[300px] cursor-pointer border xl:w-[350px] xl:h-[260px] xl:py-7 p-3 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] 
                        duration-300 rounded-lg md:w-[220px] lg:w-[300px] flex flex-col items-center text-start'>
                        <img src={likeCoinImg} alt=""
                            className=' w-16'
                        />
                        <h2 className=' text-[24px] my-2 font-semibold md:text-[20px] lg:text-[24px] text-center text-orange-400'>
                            {t('OurService.serviceTitle5')}
                        </h2>
                        <p className=' md:text-[12px] lg:text-[14px]'>
                            {t('OurService.description1')}
                        </p>
                        <p className=' md:text-[12px] lg:text-[14px]'>
                            {t('OurService.description2')}
                        </p>
                    </div>
                </div>
                <div className=' grid-cols-2  hidden place-items-center px-20 mt-20 md:mt-10 '>
                    <Link to={'/ourService/course'} className=' w-[320px] md:w-[300px] cursor-pointer border p-3 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] 
                        duration-300 rounded-lg flex flex-col items-center text-start'>
                        <img src={likeImg} alt=""
                            className=' w-16'
                        />
                        <h2 className=' text-[24px] my-2 font-semibold md:text-[20px] lg:text-[24px] text-center text-orange-400'>
                            {t('OurService.serviceTitle4')}
                        </h2>
                        <p className=' md:text-[12px] lg:text-[14px]'>
                            {t('OurService.description1')}
                        </p>
                        <p className=' md:text-[12px] lg:text-[14px]'>
                            {t('OurService.description2')}
                        </p>
                    </Link>
                    <Link to={'/ourService/course'} className=' w-[320px] md:w-[300px] cursor-pointer border p-3 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] 
                        duration-300 rounded-lg flex flex-col items-center text-start'>
                        <img src={likeCoinImg} alt=""
                            className=' w-16'
                        />
                        <h2 className=' text-[24px] my-2 font-semibold md:text-[20px] lg:text-[24px] text-center text-orange-400'>
                            {t('OurService.serviceTitle5')}
                        </h2>
                        <p className=' md:text-[12px] lg:text-[14px]'>
                            {t('OurService.description1')}
                        </p>
                        <p className=' md:text-[12px] lg:text-[14px]'>
                            {t('OurService.description2')}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
