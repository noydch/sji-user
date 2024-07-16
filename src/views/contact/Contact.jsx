import React from 'react'
import { Navbar } from '../../components/Navbar'

import bgOverlay from '../../assets/images/bg.png'

export const Contact = () => {
    return (
        <Navbar>
            <div className=' w-full h-full'>
                <div className=' h-full md:h-[400px] z-0 w-full relative before:absolute before:bg-[#003049] before:-z-[1] before:w-full sm:before:h-screen md:before:h-[400px] before:h-full
                    xl:before:bg-[#002133] xl:before:h-full'>
                    <img src={bgOverlay}
                        className=" hidden w-full sm:block sm:h-screen md:h-[400px] object-cover absolute"
                    />
                    <div className=' pt-[70px] sm:pt-[80px] relative container mx-auto h-full flex justify-center items-center sm:max-w-[620px] max-w-[340px] lg:max-w-[900px] xl:max-w-6xl text-white  z-50'>
                        <h1 className=' text-[34px] py-3 sm:pt-0 sm:pb-0 mt-5 sm:mt-0 md:text-[70px] font-bold'>ຕິດຕໍ່ເຮົາ</h1>
                    </div>
                </div>

                <div className=' mt-10 mb-32 bg-white container mx-auto h-full max-w-[340px] sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl'>
                    <div className=' flex relative'>
                        <div className=' hidden md:block xl:w-full'>
                            <h1 className=' text-[32px] font-bold text-orange-500'>ຂັ້ນຕອນຕໍ່ໄປຈະເປັນ <br className=' xl:hidden' />ແນວໃດ?</h1>
                            <p className=' text-[14px] font-medium text-[#8D8D8D]'>ທ່ານເປັນບາດກ້າວຫນຶ່ງທີ່ໃກ້ຊິດເພື່ອສ້າງ <br />ຜະລິດຕະພັນທີ່ສົມບູນແບບຂອງທ່ານ</p>
                            <ul className='flex flex-col gap-y-20 mt-10 relative after:absolute after:w-[3px] after:h-[85%] after:bg-orange-500 after:left-[6px] after:top-7'>
                                <li className=' flex items-center'>
                                    <div className=' w-[14px] h-[14px] bg-orange-500 rounded-full mr-3'></div>
                                    <p className=' text-[18px] font-semibold py-3 border-b-2 border-orange-500 w-[300px]'>1.ກະກຽມຂໍ້ສະເໜີທີ່ດີ</p>
                                </li>
                                <li className=' flex items-center'>
                                    <div className=' w-[14px] h-[14px] bg-orange-500 rounded-full mr-3'></div>
                                    <p className=' text-[18px] font-semibold py-3 border-b-2 border-orange-500 w-[300px]'>2.ພວກເຮົາສົນທະນາຮ່ວມກັນ</p>
                                </li>
                                <li className=' flex items-center'>
                                    <div className=' w-[14px] h-[14px] bg-orange-500 rounded-full mr-3'></div>
                                    <p className=' text-[18px] font-semibold py-3 border-b-2 border-orange-500 w-[300px]'>3.ເລີ່ມຕົ້ນສ້າງກັນເລີຍ</p>
                                </li>
                            </ul>
                        </div>
                        <div className=' w-full sm:w-[600px] md:w-[550px] xl:w-[600px] xl:h-[600px] h-fit bg-white border-2 border-[#B3B3B3] rounded-lg md:absolute md:right-0 md:-top-24 xl:top-[-100px]'>
                            <form className=' flex flex-col py-5 xl:pt-14 px-8 md:px-4 items-center md:gap-y-[30px] xl:gap-y-[70px] sm:gap-y-4 md:py-20 sm:px-4 sm:py-10'>
                                <h1 className=' md:hidden text-[24px] font-semibold text-center py-4 md:py-7'>ປ້ອນຂໍ້ມູນຂອງທ່ານ</h1>
                                <div className="sm:grid sm:grid-cols-2 xl:w-full xl:gap-y-5 xl:px-5 gap-x-10">
                                    <div className=' mt-3'>
                                        <label className=' block mb-1'>ຊື່</label>
                                        <input type="text"
                                            className=' bg-gray-100 border border-[#B3B3B3] rounded md:w-[220px] sm:w-[240px] w-[290px] py-1 px-2 xl:w-full outline-none'
                                        />
                                    </div>
                                    <div className=' mt-3'>
                                        <label className=' block mb-1'>ນາມສະກຸນ</label>
                                        <input type="text"
                                            className=' bg-gray-100 border border-[#B3B3B3] rounded md:w-[220px] sm:w-[240px] w-[290px] py-1 px-2 xl:w-full outline-none'
                                        />
                                    </div>
                                    <div className=' mt-3'>
                                        <label className=' block mb-1'>ອີເມວ</label>
                                        <input type="email"
                                            className=' bg-gray-100 border border-[#B3B3B3] rounded md:w-[220px] sm:w-[240px] w-[290px] py-1 px-2 xl:w-full outline-none placeholder:text-[12px]'
                                            placeholder='example@gmail.com'
                                        />
                                    </div>
                                    <div className=' mt-3'>
                                        <label className=' block mb-1'>ເບີໂທ</label>
                                        <input type="text"
                                            className=' bg-gray-100 border border-[#B3B3B3] rounded md:w-[220px] sm:w-[240px] w-[290px] py-1 px-2 xl:w-full outline-none placeholder:text-[12px]'
                                            placeholder='+856 20 9900xxxx'
                                        />
                                    </div>
                                </div>
                                <div className=' w-full sm:w-[520px] md:w-full md:px-4 mt-5 sm:mt-0'>
                                    <label className=' block'>Message</label>
                                    <textarea rows="5"
                                        className='bg-gray-100 border border-[#B3B3B3] w-full rounded resize-none'></textarea>
                                    <button type='submit' className=' w-full text-center bg-[#003049] text-white py-2 rounded mt-10'>Submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}
