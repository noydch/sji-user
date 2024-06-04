import React from 'react'
import { Navbar } from '../../components/Navbar'
import bgOverlay from '../../assets/images/bg.png'
import serviceImg from '../../assets/images/bg-service.jpg'

export const OurService = () => {
    return (
        <Navbar>
            <div className=' h-screen z-0 w-full relative before:absolute before:bg-[#003049] before:-z-[1] before:w-full before:h-screen'>
                <img src={bgOverlay}
                    className=" w-full h-screen absolute"
                />
                <div className=' pt-[70px] relative container mx-auto h-full max-w-6xl text-white z-50'>
                    <div className=' flex items-center justify-between h-full'>
                        <div className=''>
                            <h1 className=' text-[60px] text-[#F97316] mb-3 font-bold'>ບໍລິການຂອງພວກເຮົາ</h1>
                            <p className=' text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa temporibus <br /> facere quam sequi <br /> adipisci voluptatum illo velit in quod nulla minus vitae, nam rem ipsum eaque consequatur assumenda explicabo!</p>
                        </div>
                        <div className=' flex flex-col w-[300px] h-[300px] border-4 border-white rounded-full mt-5 gap-y-5 items-center'>
                            <img src={serviceImg} alt=""
                                className=' w-full h-full object-cover rounded-full
                                shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}
