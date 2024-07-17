import React, { useState } from 'react'
import { Navbar } from '../../../components/Navbar'
import { Checkbox } from "@material-tailwind/react";

import bgOverlay from '../../../assets/images/bg2.png'
import serviceImg from '../../../assets/images/bg-service.jpg'
import manImg from '../../../assets/man.png'
import { dataCourse } from './dataCourse'
import { data } from 'autoprefixer'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ImArrowLeft } from 'react-icons/im'
import { FormBuyCourse } from './FormBuyCourse';

export const CourseDetail = () => {
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const id = useParams()
    const cid = id.id
    const itemPerpage = 6

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + itemPerpage, dataCourse.length + itemPerpage))
        console.log(currentIndex);
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - itemPerpage, 0))
    }
    return (
        <Navbar>
            <div>
                <div className=' h-[200px] xl:h-full z-0 w-full relative before:absolute before:bg-[#003049] before:-z-[1] before:w-full before:h-[200px]
                    xl:before:bg-[#002133] xl:before:h-full'>
                    <img src={bgOverlay}
                        className=" xl:hidden hidden w-full h-[200px] absolute"
                    />
                    <div className=' pt-[70px] relative flex items-center justify-center container mx-auto h-full max-w-[340px] sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl text-white z-50'>
                        <Link to={"/ourService/course"} className='absolute hidden bottom-5 left-2 cursor-pointer items-center hover:text-[#F97316]'>
                            <ImArrowLeft className=' text-[30px] mr-5' />
                            <h1 className='text-[40px]  sm:text-[50px]  font-bold'>ກັບຄືນ</h1>
                        </Link>
                        <h1 className=' text-[40px] sm:text-[50px] font-semibold'>ລາຍລະອຽດຄອສ</h1>
                    </div>
                </div>
                <div className=' h-full bg-white container mx-auto max-w-[340px] sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl'>
                    <div className=' py-10 sm:py-7'>
                        {
                            dataCourse.map((item) => (
                                item.id == id.id && <div>
                                    <div className=' flex gap-2 sm:gap-5 sm:flex-row flex-col justify-between'>
                                        <div className=' flex-[5] sm:flex-[3] text-gray-800'>
                                            <h1 className=' text-[28px] font-bold mb-5 text-[#F97316]'>
                                                {item.title}
                                            </h1>
                                            <div className=' relative rounded-lg'>
                                                <img src="https://imageio.forbes.com/specials-images/imageserve/6026d84441501b8d5dd87e54/Dashboard-graph-of-forex-statistics--business-and-financial-analytics--profit-and/960x0.jpg?format=jpg&width=960"
                                                    alt="" className=' w-full rounded-lg' />
                                                <FaRegPlayCircle size={100} className=' text-white absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 z-50' />
                                            </div>
                                            <div className=' mt-10'>
                                                <h4 className=' text-[24px] font-semibold'>ລາຍລະອຽດເນື້ອຫາ</h4>
                                                <p className=' text-[18px] sm:text-[16px] text-justify'>
                                                    &emsp; ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລ
                                                    ຈາກຕະຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານການເງິນທີ່ເກັ່ງຂື້ນພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                                                    ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານການເງິນທີ່ເກັ່ງຂື້ນພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                                                    ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານການເງິນທີ່ເກັ່ງຂື້ນພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                                                    ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານການເງິນທີ່ເກັ່ງຂື້ນ
                                                </p>

                                                <h5 className=' mt-14 font-semibold'>ສິ່ງທີ່ທ່ານຈະໄດ້ຮັບຈາກຄອສນີ້:</h5>
                                                <div className=' mt-2 flex flex-col gap-y-5'>
                                                    <div className=' flex items-center font-medium'>
                                                        <IoMdCheckmark className=' text-[24px] mr-2' />
                                                        ມີຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນຮຸ້ນໃນລາວ
                                                    </div>
                                                    <div className=' flex items-center font-medium'>
                                                        <IoMdCheckmark className=' text-[24px] mr-2' />
                                                        ມີຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນຮຸ້ນໃນລາວ
                                                    </div>
                                                    <div className=' flex items-center font-medium'>
                                                        <IoMdCheckmark className=' text-[24px] mr-2' />
                                                        ມີຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນຮຸ້ນໃນລາວ
                                                    </div>
                                                    <div className=' flex items-center font-medium'>
                                                        <IoMdCheckmark className=' text-[24px] mr-2' />
                                                        ມີຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນຮຸ້ນໃນລາວ
                                                    </div>
                                                    <div className=' flex items-center font-medium'>
                                                        <IoMdCheckmark className=' text-[24px] mr-2' />
                                                        ມີຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນຮຸ້ນໃນລາວ
                                                    </div>
                                                </div>
                                                <div className=' mt-10'>
                                                    <h5 className=' text-[18px] font-semibold mb-4'>ຜູ້ສອນ:</h5>
                                                    <div className=' flex items-center gap-x-5'>
                                                        <img src={manImg} alt=""
                                                            className=' w-[60px]'
                                                        />
                                                        <div>
                                                            <p className=' font-semibold'>ທ່ານ ສຸລິນທາລາ ພິລາວົງ</p>
                                                            <p className=' font-medium'>ຕຳແໜ່ງ: ຮອງຜູ້ກໍ່ຕັ້ງ ບໍລິສັດ M</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=' flex-[2] leading-[2.6] text-gray-800'>
                                            <p className=' mb-5 font-medium'>ເນື້ອຫາທັງໝົດ 1/25</p>
                                            <div className=' leading-[1.8] border-2 p-4 rounded-lg'>
                                                <p className=' font-bold text-[17px]'>ແນະນຳ</p>
                                                <div className=' text-[16px] font-semibold '>
                                                    <div className='flex items-center justify-between'>
                                                        <div className=' flex items-center gap-5'>
                                                            <Checkbox defaultChecked />
                                                            <label htmlFor="">ແນະນຳກ່ຽວກັບມືໃໝ່</label>
                                                        </div>
                                                        <span>2:30</span>
                                                    </div>
                                                    <div className='flex items-center justify-between'>
                                                        <div className=' flex items-center gap-5'>
                                                            <Checkbox defaultChecked />
                                                            <label htmlFor="">ແນະນຳກ່ຽວກັບມືໃໝ່</label>
                                                        </div>
                                                        <span>2:30</span>
                                                    </div>
                                                    <div className='flex items-center justify-between'>
                                                        <div className=' flex items-center gap-5'>
                                                            <Checkbox defaultChecked />
                                                            <label htmlFor="">ແນະນຳກ່ຽວກັບມືໃໝ່</label>
                                                        </div>
                                                        <span>2:30</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=' p-4 rounded-lg leading-[2.5] border-2 mt-10'>
                                                <div>
                                                    <div className=' flex items-center justify-between'>
                                                        <h4 className=' text-red-500 font-semibold text-[20px] sm:text-[24px]'>
                                                            {item.price} KIP
                                                        </h4>
                                                        <span className=' text-green-500 font-medium text-[14px]'>ອີກ 2 ມື້</span>
                                                    </div>
                                                    <h3 className=' text-[24px] sm:text-[30px] leading-[1] font-medium'>
                                                        ຈາກ <span className=' relative after:absolute after:content-[""] after:h-[2px] after:bg-black after:w-full after:top-[50%] after:-translate-x-1/2
                                                    after:-translate-y-1/2 after:left-[50%]' >300.000 KIP</span>
                                                    </h3>
                                                    {/* FB923C */}
                                                    <div className=' flex flex-col mt-10'>
                                                        <FormBuyCourse />
                                                        <button className=' border border-[#FB923C] text-[#FB923C] font-semibold text-[18px] rounded-lg mt-4'>ເພີ່ມລົງໃນກະຕ່າ</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=' mt-14 '>
                                        <h4 className=' text-[#F97316] text-[20px] font-semibold'>ຄອສໃກ້ຄຽງ</h4>
                                        <div className=' overflow-x-auto'>
                                            <ul className=' flex  w-max gap-x-10 md:gap-x-4 pl-3 pr-4 py-4 sm:p-4'>
                                                {
                                                    dataCourse.map((item, index) => (
                                                        <li key={index}
                                                            className='relative border-2 rounded-lg shadow-md h-[400px] w-[320px] lg:w-[320px] md:h-[380px] md:w-[280px] xl:h-[420px] xl:w-[320px]'>
                                                            <img src={item.picture} alt=""
                                                                className=' w-[320px] xl:w-full md:h-[220px] lg:h-[240px] xl:h-[280px] h-[250px] object-cover rounded-lg'
                                                            />
                                                            <div className='  leading-[1.6] '>
                                                                <div className=' flex justify-between p-3'>
                                                                    <h4 className=' text-[18px] font-semibold leading-[1.2]'>
                                                                        {item.title}
                                                                    </h4>
                                                                    <p className=' flex items-center gap-x-2'>4.5 <FaRegStar className=' text-[#F97316]' /></p>
                                                                </div>
                                                                <p className=' px-3 font-medium text-gray-400 text-[12px] '>ຜູ້ຊົມ 21ຄົນ</p>
                                                                <div className=' absolute w-full flex justify-between px-3 items-center  bottom-5'>
                                                                    <p className=' font-medium text-[#F97316] text-[18px]'>{item.price} ₭</p>
                                                                    <button
                                                                        onClick={() => {
                                                                            navigate(`/ourService/course/${item.id}`)
                                                                            // settimeOute 1s
                                                                            setTimeout(() => {
                                                                                window.location.reload(false);
                                                                                window.scrollTo(0, 0);
                                                                            }, 1000)
                                                                        }}
                                                                        className=' bg-[#F97316] text-white w-[100px] py-1 rounded'>ສະໝັກ</button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Navbar>
    )
}
