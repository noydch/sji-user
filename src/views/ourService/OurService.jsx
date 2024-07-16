import React from 'react'
import { Navbar } from '../../components/Navbar'

// image
import bgOverlay from '../../assets/images/bg.png'
import serviceImg from '../../assets/images/trade3.jpg'
import { Services } from './components/Services'
import { ExampleService } from './components/ExampleService'
import { useTranslation } from 'react-i18next'

export const OurService = () => {
    const { t } = useTranslation()
    return (
        <Navbar>
            <div>
                <div className=' h-full md:h-[400px] xl:h-full z-0 w-full relative before:absolute md:before:bg-[#002133] before:-z-[1] before:w-full md:before:h-[400px] before:h-full
                    before:bg-[#002133] xl:before:h-full'>
                    <img src={bgOverlay}
                        className=" hidden xl:block xl:h-full w-full h-screen xl:object-cover absolute"
                    />
                    <div className=' pt-[70px] relative container mx-auto h-full max-w-[340px] sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl text-white z-50'>
                        <div className=' grid place-items-center xl:gap-x-[120px] xl:items-center sm:grid-cols-2 xl:grid-cols-12 h-full mt-5 pb-10 xl:py-5 md:py-0 md:pb-10'>
                            <div className=' xl:col-span-8 '>
                                <h1 className=' text-[34px] lg:text-[50px] text-[#F97316] mb-3 font-bold md:mt-10'>
                                    {t('OurService.title.title')}
                                </h1>
                                <p className=' text-[15px]'>
                                    {t('OurService.title.desc')}
                                </p>
                            </div>
                            <div className='w-[300px] xl:grid-cols-5 hidden sm:block sm:w-[250px] sm:h-[250px] h-[300px] md:w-[250px] md:h-[250px] border-4 border-white 
                            rounded-full mt-5 sm:mt-5 gap-y-5 items-center'>
                                <img src={serviceImg} alt=""
                                    className=' w-full h-full object-cover rounded-full
                                shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' mt-10 container mx-auto h-full max-w-[340px] sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl'>
                    <div className=' md:mb-20 mb-5 sm:mb-10 flex flex-col items-center'>
                        <h1 className='px-2 border-b-[4px] border-orange-400 text-[24px] sm:text-[34px] md:text-[50px] font-extrabold'>
                            {t('OurService.title.title')}
                        </h1>
                    </div>
                    <Services />
                    <hr className=' border mt-10 md:mb-20 mb-5 sm:mb-10' />
                    <ExampleService />
                </div>
            </div>
        </Navbar>
    )
}
