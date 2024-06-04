import React from 'react'
import { Navbar } from './Navbar'

import bgOverlay from '../assets/images/bg.png'
import stockImg from '../assets/images/stock.jpg'

export const Home = () => {
    // <img src={bgOverlay}
    //                     className=' w-full'
    //                 />
    return (
        <Navbar>
            <div className=' h-screen z-0 w-full relative before:absolute before:bg-[#003049] before:-z-[1] before:w-full before:h-screen'>
                <img src={bgOverlay}
                    className=" lg:w-full sm:bg-cover h-screen absolute"
                />
                <div className=' pt-[70px] relative container mx-auto h-full xl:max-w-6xl lg:max-w-4xl text-white z-50'>
                    <div className=' flex items-center justify-between lg:h-full'>
                        <div className=''>
                            <h1 className=' text-[60px] text-[#F97316] mb-3 font-bold'>ສອນເຈົ້າລົງທຶນ</h1>
                            <p className=' text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa temporibus <br /> facere quam sequi <br /> adipisci voluptatum illo velit in quod nulla minus vitae, nam rem ipsum eaque consequatur assumenda explicabo!</p>
                            <button className=' bg-[#FB923C] px-10 py-2 rounded mt-10'>ສະໝັກສະມາຊິກ</button>
                        </div>
                        <div className=' flex flex-col mt-5 gap-y-5 items-center'>
                            <img src={stockImg} alt=""
                                className=' w-[300px] h-[180px] object-cover rounded-md
                                shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'
                            />
                            <img src={stockImg} alt=""
                                className=' w-[370px] h-[200px] object-cover rounded-md
                                shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'
                            />
                            <img src={stockImg} alt=""
                                className=' w-[300px] h-[180px] object-cover rounded-md
                                shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}
