import React from 'react'

import { Navbar } from '../../components/Navbar'

// data countires
import { dataCountries } from './dataCountires';

import bgOverlay from '../../assets/images/bg.png';
import bgOverlay2 from '../../assets/images/bg3.png'

import usNewyork from '../../assets/images/countries/1_newyork.jpg'
import { Link } from 'react-router-dom';


export const Analysiss = () => {
    return (
        <Navbar>
            <div className=' z-0 w-full relative before:absolute before:bg-[#003049] before:-z-[1] before:w-full sm:before:h-[350px] before:h-[200px]'>
                <img src={bgOverlay2} className="w-full h-[350px] bg-bottom bg-cover absolute hidden sm:block" />
                <div className='pt-[70px] relative container mx-auto h-full max-w-[340px] sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl text-white z-50'>
                    <div className=' h-[150px] flex items-center justify-center sm:h-[280px] relative'>
                        <h1 className='text-[40px] sm:absolute bottom-4 left-2 flex sm:text-[50px] text-[#F97316] mb-3 font-bold'>ບົດວິເຄາະ</h1>
                    </div>
                    <div className=' h-full w-full bg-white mb-10'>
                        <h1 className=' text-[35px] text-black font-extrabold text-center p-4 sm:pb-10 sm:pt-7'>ບົດວິເຄາະໃນຕ່າງປະເທດ</h1>
                        <div className=' grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:gap-y-5 place-items-center gap-3 sm:gap-3'>
                            {
                                dataCountries.map((item, index) => {
                                    return (
                                        <Link to={`country/${item.id}`} key={index} className="xl:w-[270px] md:h-[140px] lg:w-[220px] lg:h-[160px] sm:w-[200px] sm:h-[180px] w-[160px] h-[100px] flex items-center z-0  justify-center relative 
                                        rounded bg-center bg-cover shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
                                            hover:scale-[1.02] duration-300 ease cursor-pointer
                                            before:absolute before:-z-[1] before:bg-black before:rounded before:opacity-30 before:content-['*] before:w-full before:h-full"
                                            style={{ backgroundImage: `url(${item.locationImg})` }}>
                                            <div className=' flex flex-col items-center leading-loose  '>
                                                <img src={item.flag} alt="" className='w-[50px]' />
                                                <h4 className=' text-[15px] sm:text-[20px] font-semibold'>{item.name}</h4>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}
