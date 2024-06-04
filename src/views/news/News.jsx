import React from 'react'
import { Navbar } from '../../components/Navbar'
import bgOverlay from '../../assets/images/bg.png'
import SliderNews from './components/SliderNews'

export const News = () => {
    return (
        <Navbar>
            <div className=' h-screen z-0 w-full relative before:absolute before:bg-[#003049] before:-z-[1] before:w-full before:h-screen'>
                <img src={bgOverlay}
                    className=" w-full h-screen absolute"
                />
                <div className=' pt-[70px] relative container mx-auto h-full max-w-6xl text-white z-50'>
                    <h1 className=' mt-6 flex items-start text-[40px] text-[#F97316] font-bold'>ຂ່າວສານ</h1>
                    <div className=' relative flex items-center'>
                        <SliderNews />
                    </div>
                </div>
            </div>
        </Navbar>
    )
}
