import React from 'react'
import { Navbar } from '../../components/Navbar'
import bgOverlay from '../../assets/images/bg.png'
import SliderNews from './components/SliderNews'

import newsImg1 from '../../assets/images/news/gold.jpg'
import newsImg2 from '../../assets/images/news/rate.jpg'
import newsImg3 from '../../assets/images/news/calendar.jpg'
import newsImg4 from '../../assets/images/news/analysis.jpg'
import newsImg5 from '../../assets/images/news/money.jpg'
import newsImg6 from '../../assets/images/news/yuan.jpg'
import { Link, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const News = () => {
    const { t } = useTranslation()
    return (
        <Navbar>
            <div>
                <div className=' sm:h-[650px] xl:h-screen z-0 w-full relative before:absolute sm:before:bg-[#003049] bg-[#002133] before:-z-[1] before:w-full h-full sm:before:h-[650px] xl:before:h-screen'>
                    <img src={bgOverlay}
                        className=" w-full h-screen sm:h-[650px] xl:h-screen object-cover absolute hidden sm:block"
                    />
                    <div className=' pt-[70px] relative container mx-auto h-full max-w-[340px] sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl text-white z-50'>
                        <h1 className=' mt-10 sm:mt-0 sm:relative top-14 flex items-start sm:text-[35px] md:text-[40px] text-[30px] text-[#F97316] font-bold'>
                            {t('news.title')}
                        </h1>
                        <div className=' relative flex items-center'>
                            <SliderNews />
                        </div>
                    </div>
                </div>
                <div className=' container mx-auto h-full max-w-[340px] sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl'>
                    <h1 className=' mt-10 sm:mb-7 mb-3 flex items-start md:text-[40px] sm:text-[30px] text-[28px] text-[#1F2937] font-bold'>
                        Lastest News
                    </h1>
                    <div className=' grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-5 sm:place-items-center sm:gap-y-5 mb-10'>
                        <Link to={"/news/gold"} className=' sm:w-[290px] sm:h-[400px] xl:w-[270px] xl:h-[430px] xl:p-3 w-[320px] md:h-[420px] cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 rounded-md'>
                            <img src={newsImg1} alt=""
                                className=' w-[320px]'
                            />
                            <h4 className=' leading-[0.95] my-2 text-[20px] md:text-[28px] font-bold'>
                                10 TRENDS HOME DECORATION For Best House
                            </h4>
                            <p className=' text-[14px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Link>
                        <div className=' sm:w-[290px] sm:h-[400px] xl:w-[270px] xl:h-[430px] xl:p-3 w-[320px] md:h-[420px] cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 rounded-md'>
                            <img src={newsImg2} alt=""
                                className=' w-[320px]'
                            />
                            <h4 className=' leading-[0.95] my-2 text-[20px] md:text-[28px] font-bold'>
                                HOW TO CLEANING OWN HOME For Best Cleaning
                            </h4>
                            <p className=' text-[14px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className=' sm:w-[290px] sm:h-[400px] xl:w-[270px] xl:h-[430px] xl:p-3 w-[320px] md:h-[420px] cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 rounded-md'>
                            <img src={newsImg3} alt=""
                                className=' w-[320px]'
                            />
                            <h4 className=' leading-[0.95] my-2 text-[20px] md:text-[28px] font-bold'>
                                US Stock Market Holidays 2024
                            </h4>
                            <p className=' text-[14px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className=' sm:w-[290px] sm:h-[400px] xl:w-[270px] xl:h-[430px] xl:p-3 w-[320px] md:h-[420px] cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 rounded-md'>
                            <img src={newsImg4} alt=""
                                className=' w-[320px]'
                            />
                            <h4 className=' leading-[0.95] my-2 text-[20px] md:text-[28px] font-bold'>
                                HOW TO DRAW HOME DESIGN For Consystency
                            </h4>
                            <p className=' text-[14px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className=' sm:w-[290px] sm:h-[400px] xl:w-[270px] xl:h-[430px] xl:p-3 w-[320px] md:h-[420px] cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 rounded-md'>
                            <img src={newsImg5} alt=""
                                className=' w-[320px]'
                            />
                            <h4 className=' leading-[0.95] my-2 text-[20px] md:text-[28px] font-bold'>
                                TIPS MODELING DECORATION HOME modern
                            </h4>
                            <p className=' text-[14px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className=' sm:w-[290px] sm:h-[400px] xl:w-[270px] xl:h-[430px] xl:p-3 w-[320px] md:h-[420px] cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 rounded-md'>
                            <img src={newsImg6} alt=""
                                className=' w-[320px]'
                            />
                            <h4 className=' leading-[0.95] my-2 text-[20px] md:text-[28px] font-bold'>
                                HOW TO IMPROVE HOME DESIGN For Future
                            </h4>
                            <p className=' text-[14px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                    </div>
                    <div className=' w-full flex justify-center mb-10 mt-16'>
                        <button className=' bg-orange-400 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] 
                        sm:px-10 px-6 font-semibold sm:text-[20px] text-[18px] text-white py-2 sm:py-[10px] rounded-md'>
                            {t('news.learnMore')}
                        </button>
                    </div>
                </div>
            </div>
            {Outlet}
        </Navbar>
    )
}
