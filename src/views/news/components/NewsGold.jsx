import React from 'react'
import { Navbar } from '../../../components/Navbar'

// image
import bgOverlay2 from '../../../assets/images/bg3.png'
import goldImg from '../../../assets/images/news/gold.jpg'

// icons
import { ImArrowLeft } from "react-icons/im";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const NewsGold = () => {
    const { t } = useTranslation()
    return (
        <Navbar>
            <div>
                <div className=' z-0 w-full relative before:absolute before:bg-[#002133] before:h-[200px] before:-z-[1] before:w-full sm:before:h-[350px]'>

                    <img src={bgOverlay2} className="w-full h-[350px] bg-bottom bg-cover absolute hidden sm:block" />
                    <div className='pt-[70px] relative container mx-auto h-full max-w-[330px] sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl text-white z-50'>
                        <div className=' sm:h-[280px] h-[100px] relative'>
                            <div className=' sm:hidden flex items-center w-full font-semibold justify-center absolute top-[50%] -translate-y-1/2'>
                                <h1 className='text-[40px]  cursor-pointer items-center text-[#F97316]'>News Gold</h1>
                            </div>
                            <Link to={"/news"} className='absolute hidden sm:flex bottom-4 left-2 md:left-4 cursor-pointer items-center hover:text-[#F97316]'>
                                <ImArrowLeft className=' text-[30px] mr-5' />
                                <h1 className='text-[40px]  sm:text-[50px]  font-bold'>
                                    {t('news.back')}
                                </h1>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=' h-full w-full bg-white mb-20 sm:mt-0 mt-5 mx-auto max-w-[330px] sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl p-2'>
                    <h1 className=' sm:text-[30px] text-[20px] md:text-[35px] text-black font-black sm:pb-10 pb-2 pt-5 sm:pt-7'>
                        TIPS CHOICE BEST AGENCY For <br /> House Decoration
                    </h1>
                    <div className=' grid-cols-1 md:grid-cols-2 sm:grid place-items-center gap-6'>
                        <div className=' mb-10 md:w-[350px] md:h-[220px] shadow-[6px_6px_13px_4px_#00000024] rounded-xl'>
                            <img src={goldImg} alt=""
                                className=' rounded-xl h-[200px] md:h-[220px] w-full object-cover'
                            />
                        </div>
                        <div>
                            <p className=' mb-5'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                vitae dicta sunt explicabo.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className=' mb-5'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p className=' mb-5'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p className=' mb-5'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p className=' mb-5'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p className=' mb-5'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p className=' mb-5'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p className=' mb-5'>
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
