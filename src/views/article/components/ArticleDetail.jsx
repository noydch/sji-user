import React from 'react'
import { Navbar } from '../../../components/Navbar'

import bgOverlay2 from '../../../assets/images/bg3.png'
import { useNavigate } from 'react-router-dom/dist'
import { ImArrowLeft } from 'react-icons/im'

export const ArticleDetail = () => {
    const navigate = useNavigate()
    return (
        <Navbar>
            <div>
                <div className=' z-0 w-full h-[200px] sm:h-[300px] relative before:absolute before:bg-[#003049] before:-z-[1] before:w-full 
                before:h-[200px] sm:before:h-[300px]'>
                    <img src={bgOverlay2} className="w-full h-[350px] sm:h-[300px] bg-bottom bg-cover absolute sm:block hidden" />
                    <div className='pt-[70px] relative container mx-auto h-full max-w-[340px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl text-white z-50'>
                        <div className=' h-[150px] flex items-center justify-center sm:h-[200px] relative'>
                            <h1 className='text-[40px] sm:hidden md:text-[50px] font-bold'>
                                ບົດຄວາມ
                            </h1>
                            <div onClick={() => navigate(-1)} className='hidden absolute bottom-4 left-2 sm:bottom-0 sm:left-0 sm:flex cursor-pointer items-center sm:justify-center sm:w-full hover:text-[#F97316]'>
                                <ImArrowLeft className=' text-[30px] mr-5 sm:hidden' />
                                <h1 className='text-[40px]  sm:text-[50px]  font-bold'>ບົດຄວາມ</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' h-full w-full bg-white sm:mb-20 mx-auto max-w-[340px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl'>
                    <h1 className=' text-[24px] font-bold md:text-[30px] text-black sm:font-black md:pb-10 sm:pb-5 sm:pt-7 md:pt-7'>
                        TIPS CHOICE BEST AGENCY For <br /> House Decoration
                    </h1>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 place-items-center gap-6'>
                        <div className=' sm:mb-10 sm:h-[280px] sm:w-[300px] xl:w-[450px] mt-5 sm:mt-0 px-2 sm:px-0 shadow-[6px_6px_13px_4px_#00000024] rounded-xl'>
                            <img src="https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg" alt=""
                                className=' rounded-xl sm:h-[280px] sm:w-[300px] xl:w-full'
                            />
                        </div>
                        <div className=' xl:flex xl:items-center h-full xl:justify-start xl: flex-col'>
                            <p className='md:text-[16px] text-[14px] xl:text-[20px] font-medium mb-5'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                vitae dicta sunt explicabo.
                            </p>
                            <p className='md:text-[16px] text-[14px] xl:text-[20px] font-medium mb-5'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className='md:text-[16px] text-[14px] xl:text-[20px] font-medium mb-5'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p className='md:text-[16px] text-[14px] xl:text-[20px] font-medium mb-5'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p className='md:text-[16px] text-[14px] xl:text-[20px] font-medium mb-5'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p className='md:text-[16px] text-[14px] xl:text-[20px] font-medium mb-5'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p className='md:text-[16px] text-[14px] xl:text-[20px] font-medium mb-5'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p className='md:text-[16px] text-[14px] xl:text-[20px] font-medium mb-5'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p className='md:text-[16px] text-[14px] xl:text-[20px] font-medium mb-5'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}
