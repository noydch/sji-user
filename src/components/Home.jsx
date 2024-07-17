import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';

import bgOverlay from '../assets/images/bg.png';
import stockImg from '../assets/images/stock.jpg';
import MosueWheelSlider from './MosueWheelSlider';
import SliderHome from '../views/Homepage/SliderHome';

// image
import graphImg from '../assets/images/graph.png'
import aiyA from '../assets/images/aiy-a.png'
import SliderHomeMB from '../views/Homepage/SliderHomeMB';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useLanguageStore from '../store/languageStore';
import SliderHomeMD from '../views/Homepage/SliderHomeMD';

export const Home = () => {
    const { t, i18n } = useTranslation()
    const { currentLanguage, changeLanguage } = useLanguageStore();
    // package active
    const packageActiveStyle = "border border-orange-400 bg-[#FFEDD5]"
    const [packageActive, setPackageActive] = useState(false)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Navbar>
            <div className='md:bg-[#003049] bg-[#002133]'>
                <div className='sm:h-[700px] h-full xl:h-screen z-0 w-full relative before:absolute before:bg-[#002133] before:-z-[1] before:w-full before:h-[300px] sm:before:bg-[#002133] sm:before:h-[700px] xl:before:h-screen'>
                    <img src={bgOverlay} className="sm:w-full xl:h-screen sm:h-full sm:block absolute hidden" />
                    <div className='pt-[70px] mb-5 lg:mb-0 relative container mx-auto h-full max-w-[340px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl text-white z-50'>
                        <div className='flex md:mt-5 items-center justify-between'>
                            <div className=' sm:flex sm:flex-col md:flex-[2] md:w-full xl:flex-[3] lg:w-full sm:items-start sm:gap-y-4 sm:flex-[2]'>
                                <h1 className='text-[40px] mt-3 text-[#F97316] mb-1 font-bold'>
                                    {t('home.title')}
                                </h1>
                                <p className='text-[14px]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa temporibus
                                    <br /> facere quam sequi <br /> adipisci voluptatum illo velit in quod nulla minus vitae, nam rem ipsum eaque consequatur assumenda explicabo!
                                </p>
                                <button className='mt-5'>
                                    <Link to={'/home/membership'}
                                        className='bg-[#FB923C] px-5 py-2 font-semibold rounded'>
                                        {t('home.premium')}
                                    </Link>
                                </button>
                            </div>
                            <div className='sm:flex-[] md:flex-[2] flex flex-col mt-5 gap-y-5 items-center'>
                                {windowWidth > 480 && <MosueWheelSlider />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-white pb-10'>
                    <div className='container mx-auto h-full max-w-[340px] sm:max-w-[620px] md:max-w-[700px]
                    lg:max-w-[900px] xl:max-w-6xl'>
                        <div className='flex justify-center'>
                            <h2 className='text-[28px] sm:text-[34px] text-[#1F2937] font-extrabold pt-7 pb-0'>
                                {t('home.ourServices')}
                            </h2>
                        </div>
                        <div className='w-full relative block h-full'>
                            {windowWidth < 700 && <SliderHomeMB />}
                            {windowWidth > 800 && <SliderHome />}
                            {windowWidth < 800 && windowWidth > 700 && <SliderHomeMD />}

                        </div>

                        <div className='flex justify-center'>
                            <h2 className='text-[24px] sm:text-[34px] text-[#1F2937] font-extrabold pt-7 pb-5 sm:pb-2'>
                                {t('home.briefInfo')}
                            </h2>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
                            <div className='flex justify-center w-full sm:w-[300px] lg:w-[380px] sm:rounded-lg'>
                                <img src={graphImg} alt="" className='w-[500px] lg:w-full h-[400px] sm:w-[320px] object-cover rounded-xl' />
                            </div>
                            <div className='flex justify-between gap-x-6'>
                                <div className='flex flex-col items-center gap-y-4'>
                                    <div className='flex flex-col items-center'>
                                        <h1 className='text-[30px] font-bold text-orange-600'>6Y</h1>
                                        <p className='text-[18px] sm:text-center font-bold'>{t('home.investmentExperience')}</p>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <h1 className='text-[30px] font-bold text-orange-600'>4Y</h1>
                                        <p className='text-[18px] sm:text-center font-bold text-center'>
                                            {t('home.teachingExperience')}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-y-4'>
                                    <div className='flex flex-col items-center'>
                                        <h1 className='text-[30px] font-bold text-orange-600'>6Y</h1>
                                        <p className='text-[18px] sm:text-center font-bold'>{t('home.investmentExperience')}</p>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <h1 className='text-[30px] font-bold text-orange-600'>4Y</h1>
                                        <p className='text-[18px] sm:text-center font-bold text-center'>
                                            {t('home.teachingExperience')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center mt-10'>
                            <div className='lg:hidden lg:w-full  md:hidden flex justify-center'>
                                <div className='hover:shadow-md cursor-pointer w-[350px] h-[370px] lg:w-full sm:w-[300px] sm:h-[340px] bg-[#457B9D] flex justify-center items-end rounded-xl'>
                                    <img src={aiyA} alt="" className='w-[300px] sm:w-[280px] sm:h-[320px] h-[350px] object-cover rounded-xl' />
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex flex-col items-center justify-center py-4 mb-5'>
                                    <h2 className='text-[24px] font-bold text-[#6B7280]'>{t('home.ourExperience')}</h2>
                                    <hr className='border-b-2 border-b-[#FF6500] w-[150px]' />
                                </div>
                                <div className='flex justify-between gap-x-6'>
                                    <div className='flex flex-col items-center gap-y-4'>
                                        <div className='flex flex-col items-center'>
                                            <h1 className='text-[30px] font-bold text-orange-600'>6Y</h1>
                                            <p className='text-[18px] font-bold sm:text-center'>{t('home.investmentExperience')}</p>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <h1 className='text-[30px] font-bold text-orange-600'>4Y</h1>
                                            <p className='text-[18px] font-bold sm:text-center text-center'>
                                                {t('home.teachingExperience')}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center gap-y-4'>
                                        <div className='flex flex-col items-center'>
                                            <h1 className='text-[30px] font-bold text-orange-600'>6Y</h1>
                                            <p className='text-[18px] font-bold sm:text-center'>{t('home.investmentExperience')}</p>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <h1 className='text-[30px] font-bold text-orange-600'>4Y</h1>
                                            <p className='text-[18px] font-bold sm:text-center text-center'>
                                                {t('home.teachingExperience')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='hidden md:flex lg:flex justify-center xl:w-full'>
                                <div className='hover:shadow-md cursor-pointer w-[350px] h-[370px] lg:w-full sm:w-[300px] sm:h-[340px] bg-[#457B9D] flex justify-center items-end rounded-xl'>
                                    <img src={aiyA} alt="" className='w-[300px] sm:w-[280px] sm:h-[320px] h-[350px] object-cover rounded-xl' />
                                </div>
                            </div>
                        </div>

                        {/* package */}
                        <div className='mt-10'>
                            <div className='flex justify-center'>
                                <h2 className='text-[24px] sm:text-[34px] text-[#1F2937] font-extrabold pt-5 pb-5'>
                                    {t('home.membershipPackages')}
                                </h2>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-8 sm:gap-5 md:gap-x-1 place-items-center'>
                                <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer w-[300px] h-[420px] md:w-[225px] lg:w-[290px] sm:w-[300px] sm:h-[380px] rounded-lg border border-[#CBD5E1] flex flex-col px-5'>
                                    <h2 className='text-center my-4 text-[24px] text-[#FB923C] font-bold'>Gold</h2>
                                    <p className='text-[18px] w-full mb-5'>{t('home.freePackageDesc')}</p>
                                    <ul className='list-disc text-[18px] list-inside'>
                                        <li>{t('home.membershipRegistration')}</li>
                                        <li>{t('home.registration')}</li>
                                        <li>{t('home.able')}</li>
                                    </ul>
                                    <div className='w-full h-full flex items-end mb-5'>
                                        <button className='text-orange-400 text-[20px] w-full h-[40px] font-bold border rounded-md border-orange-400 py-1'>
                                            {t('home.tryNow')}
                                        </button>
                                    </div>
                                </div>
                                <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer w-[300px] h-[420px] md:w-[225px] lg:w-[290px] sm:w-[300px] sm:h-[380px] border border-orange-400 bg-[#FFEDD5] rounded-lg flex flex-col px-5'>
                                    <h2 className='text-center my-4 text-[30px] text-[#FB923C] font-bold'>Free Package</h2>
                                    <p className='text-[18px] w-full mb-5'>{t('home.freePackageDesc')}</p>
                                    <ul className='list-disc text-[18px] list-inside'>
                                        <li>{t('home.membershipRegistration')}</li>
                                        <li>{t('home.registration')}</li>
                                        <li>{t('home.able')}</li>
                                    </ul>
                                    <div className='w-full h-full flex items-end mb-5'>
                                        <button className='text-white bg-orange-400 text-[20px] w-full h-[40px] font-bold border rounded-md border-orange-400 py-1'>
                                            {t('home.tryNow')}
                                        </button>
                                    </div>
                                </div>
                                <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer w-[300px] h-[420px] md:w-[225px] lg:w-[290px] sm:w-[300px] sm:h-[380px] rounded-lg border border-[#CBD5E1] flex flex-col px-5'>
                                    <h2 className='text-center my-4 text-[30px] text-[#FB923C] font-bold'>{t('home.premium')}</h2>
                                    <p className='text-[18px] w-full mb-5'>{t('home.freePackageDesc')}</p>
                                    <ul className='list-disc text-[18px] list-inside'>
                                        <li>{t('home.membershipRegistration')}</li>
                                        <li>{t('home.registration')}</li>
                                        <li>{t('home.able')}</li>
                                    </ul>
                                    <div className='w-full h-full flex items-end mb-5'>
                                        <button className='text-orange-400 text-[20px] w-full h-[40px] font-bold border rounded-md border-orange-400 py-1'>
                                            {t('home.tryNow')}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-14 mb-16 text-center'>
                            <h5 className='text-[16px] sm:text-[18px]'>
                                {t('home.note')} <br className=' sm:hidden' />
                                <span className='text-orange-400 sm:ml-2'>{t('home.consultationNote')}</span>
                            </h5>
                        </div>

                    </div>
                </div>
            </div>
        </Navbar>
    );
};
