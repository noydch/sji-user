import React, { useState } from 'react'


// data countires
import { dataCountries } from '../dataCountires';

import bgOverlay from '../../../assets/images/bg.png';
import bgOverlay2 from '../../../assets/images/bg3.png'

import usNewyork from '../../../assets/images/countries/1_newyork.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Navbar } from '../../../components/Navbar';

import { IoSearchOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import { AnalysisFinancial } from './AnalysisFinancial';
import { HistoryCompany } from './HistoryCompany';

export const AnalysisDetailCompany = () => {
    const navigate = useNavigate();
    const [showRecieve, setShowRecieve] = useState('Income Statement')
    const [showAnalysis, setShowAnalysis] = useState('ປະຫວັດບໍລິສັດ')
    const cName = useParams()
    // const cid = localStorage.getItem('cid')

    const handleBackPage = () => {
        navigate(-1)
    }

    const dataCompanies = [
        {
            id: 1,
            companyName: 'Google',
            country: 'United States',
            picture: 'https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png',
            detail: 'ຮຸ້ນ IPO ຂອງ Google ມີລາຄາເລີ່ມຕົ້ນທີ່ 85$ຕໍ່ຮຸ້ນ ຮຸ້ນGoogle ເປີດຂາຍວັນແລກໃນ Nasdaq ທີ່ 100.00'
        },
        {
            id: 2,
            companyName: 'Apple',
            country: 'United States',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png',
            detail: 'ໃນບົດວິເຄາະນີ້ ເຈົ້າຈະໄດ້ສຶກສາລາຄາຄາດການຂອງຮຸ້ນ Apple ໃນໄລຍະຍາວລ່າສຸດຈາກນັກວິເຄາະ ລວມເຖິງການວິເຄາະເຊີງເທັກນິກຂອງລາຄາຮຸ້ນ Apple'
        },
        {
            id: 3,
            companyName: 'Nvidia',
            country: 'United States',
            picture: 'https://w7.pngwing.com/pngs/60/176/png-transparent-nvidia-hd-logo.png',
            detail: 'ປັດຈຸບັນຮຸ້ນ Nvidia ຊື້ຂາຍຢູ່ທີ່ລາຄາ 126.57$ ຄິດເປັນ PE ລ່ວງໜ້າ 48.78ເທົ່າ ເຊິ່ງເປັນມູນຄ່າທີ່ຄ່ອນຂ້າງຕີງຕົວບວກກັບລາຄາໃນຮອບ12ເດືອນທີ່ຜ່ານມາ'
        },
        {
            id: 4,
            companyName: 'Microsoft',
            country: 'United States',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png',
            detail: 'ລ່າສຸດຮຸ້ນ Microsoft ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ'
        },
        {
            id: 5,
            companyName: 'Meta (Facebook)',
            country: 'United States',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
            detail: 'ລ່າສຸດຮຸ້ນ Meta ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ'
        },
        {
            id: 6,
            companyName: 'Amazon',
            country: 'United States',
            picture: 'https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg',
            detail: 'ລ່າສຸດຮຸ້ນ Amazon ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ'
        },
        {
            id: 7,
            companyName: 'Tesla',
            country: 'United States',
            picture: 'https://cdn.logojoy.com/wp-content/uploads/20240110153809/Black-tesla-logo-600x600.png',
            detail: 'ລ່າສຸດຮຸ້ນ Tesla ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ'
        },
        {
            id: 8,
            companyName: 'Pepsi',
            country: 'United States',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Pepsi_2023.svg',
            detail: 'ລ່າສຸດຮຸ້ນ Pepsi ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ'
        },
        {
            id: 9,
            companyName: 'ChatGPT',
            country: 'United States',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png',
            detail: 'ລ່າສຸດຮຸ້ນ ChatGPT ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ'
        },
        {
            id: 10,
            companyName: 'Netflix',
            country: 'United States',
            picture: 'https://static.vecteezy.com/system/resources/previews/017/396/814/original/netflix-mobile-application-logo-free-png.png',
            detail: 'ລ່າສຸດຮຸ້ນ ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ'
        },
        {
            id: 11,
            companyName: 'Broadcom',
            country: 'United States',
            picture: 'https://companieslogo.com/img/orig/AVGO-ceb477a4.png?t=1654488680',
            detail: 'ລ່າສຸດຮຸ້ນ ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ'
        },
        {
            id: 11,
            companyName: 'JP Morgan',
            country: 'United States',
            picture: 'https://media2.vault.com/14347007/jp-morgan.png',
            detail: 'ລ່າສຸດຮຸ້ນ ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ'
        },
    ]
    return (
        <Navbar>
            {
                dataCompanies.map((item, index) => (
                    item.companyName == cName.company && (
                        <div key={index} className=' z-0 w-full relative before:absolute before:bg-[#003049] before:-z-[1] before:w-full md:before:h-[350px] sm:before:h-[330px] before:h-[350px]'>
                            <img src={bgOverlay2} className="w-full hidden md:block h-[350px] md:opacity-50 bg-bottom bg-cover absolute" />
                            <div className='pt-[70px] relative container mx-auto h-full max-w-[340px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl text-white z-50'>
                                <div className=' py-55 md:mt- sm:0 md:h-[280px] h-full md:relative flex flex-col items-center justify-center md:justify-end'>
                                    <div className='mb-5 mt-3 sm:mt-0 md:mt-0 xl:absolute w-full xl:top-[50%] md:mb-5 xl:-translate-y-1/2 sm:left-2 flex sm:flex-row justify-center items-center gap-x-4 sm:text-[50px] text-[#F97316] font-bold'>
                                        <div className=' rounded-full bg-white p-4 h-[55px] w-[55px] sm:h-[80px] sm:w-[80px] flex justify-center items-center'>
                                            <img src={item.picture} alt=""
                                                className=' w-[50px] sm:w-[70px] '
                                            />
                                        </div>
                                        <h1 className='text-[24px] sm:text-[50px] text-[#fff] font-semibold'>
                                            ບໍລິສັດ {item.companyName}
                                        </h1>
                                    </div>
                                    <div className=' mb-5 flex items-center md:w-full xl:flex-row md:flex-col flex-col gap-x-3'>
                                        <div className=' w-full md:w-[450px] relative md:mb-5 xl:mb-0'>
                                            <div className=' absolute top-[50%] -translate-y-1/2 left-[6px] text-[20px] text-[#F97316] border-[1.5px] border-[#F97316] w-[26px] h-[26px] flex items-center justify-center rounded-full '>
                                                <IoSearchOutline />
                                            </div>
                                            <input type="text"
                                                className=' w-full md:w-[450px] py-1 h-[35px] md:h-[40px] md:pl-10 rounded-md sm:text-[18px] text-[16px] text-black pl-9 outline-none placeholder:text-[14px]'
                                                placeholder='ຄົ້ນຫາບໍລິສັດ...'
                                            />
                                            <button className=' bg-[#F97316]  h-[35px] md:h-[40px] px-5 rounded-r-md right-0 absolute'>ຄົ້ນຫາ</button>
                                        </div>
                                        <div className=' sm:flex xl:flex md:grid md:w-full md:grid-cols-4 lg:grid-cols-3 grid grid-cols-2 gap-2 mt-5 md:mt-0'>
                                            <button onClick={() => setShowAnalysis('ປະຫວັດບໍລິສັດ')} className={`md:h-[40px] py-2 md:py-0 px-5 md:text-[18px] text-[16px]  font-medium rounded-md 
                                    ${showAnalysis === "ປະຫວັດບໍລິສັດ" ? 'bg-[#f97316]' : ' bg-white text-[#F97316]'}`}>
                                                ປະຫວັດບໍລິສັດ
                                            </button>
                                            <button onClick={() => setShowAnalysis('ງົບການເງິນ')} className={`md:h-[40px] py-2 md:py-0 px-5 md:text-[18px] text-[16px]  font-medium rounded-md 
                                    ${showAnalysis === "ງົບການເງິນ" ? 'bg-[#f97316]' : ' bg-white text-[#F97316]'}`}>
                                                ງົບການເງິນ
                                            </button>
                                            <button onClick={() => setShowAnalysis('ອັດຕາສ່ວນທາງການເງິນ ແລະເງິນປັນຜົນ')} className={`md:h-[40px] md:col-span-2 lg:col-span-1 py-2 md:py-0 px-2 md:text-[18px] text-[16px] font-medium rounded-md 
                                    ${showAnalysis === "ອັດຕາສ່ວນທາງການເງິນ ແລະເງິນປັນຜົນ" ? 'bg-[#f97316]' : 'bg-white text-[#F97316]'}`}>
                                                ອັດຕາສ່ວນທາງການເງິນ ແລະເງິນປັນຜົນ
                                            </button>
                                            <button onClick={() => setShowAnalysis('ເບິ່ງກຣາຟ')} className={`md:h-[40px] py-2 md:py-0 px-5 md:text-[18px] text-[16px] font-medium rounded-md 
                                    ${showAnalysis === "ເບິ່ງກຣາຟ" ? 'bg-[#f97316]' : ' bg-white text-[#F97316]'}`}>
                                                ເບິ່ງກຣາຟ
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {
                                    showAnalysis === "ປະຫວັດບໍລິສັດ" && <HistoryCompany companyName={item.companyName} />
                                }

                                {
                                    showAnalysis === "ງົບການເງິນ" && <div className=' h-full w-full bg-white mb-20 mt-10 sm:mt-0'>
                                        <div className=' flex items-center justify-between md:justify-between md:w-full flex-col sm:flex-row sm:mt-10 sm:px-10 md:px-0'>
                                            <div className=' flex items-center gap-x-3 md:gap-x-2 mb-3 md:mb-0'>
                                                <button onClick={() => setShowRecieve('Income Statement')}
                                                    className={` sm:h-[35px] md:h-[40px] py-1 sm:px-5 md:px-2 md:w-[200px] px-2 sm:text-[18px] text-[16px] font-medium rounded-md ${showRecieve == "Income Statement" ? 'bg-[#f97316]' : 'border-2 text-[#f97316] border-[#f97316]'}`}>
                                                    Income Statement
                                                </button>
                                                <button onClick={() => setShowRecieve('Balance Sheet')}
                                                    className={` sm:h-[35px] md:h-[40px] py-1 sm:px-5 md:px-2 md:w-[180px] px-2 sm:text-[18px] text-[16px] font-medium rounded-md ${showRecieve == "Balance Sheet" ? 'bg-[#f97316]' : ' border-2 text-[#f97316] border-[#f97316]'}`}>
                                                    Balance Sheet
                                                </button>
                                                <button onClick={() => setShowRecieve('Cash Flow')}
                                                    className={` sm:h-[35px] md:h-[40px] py-1 sm:px-5 md:px-2 md:w-[160px] px-2 sm:text-[18px] text-[16px] font-medium rounded-md ${showRecieve == "Cash Flow" ? 'bg-[#f97316]' : ' border-2 text-[#f97316] border-[#f97316]'}`}>
                                                    Cash Flow
                                                </button>
                                            </div>
                                            <div className=' w-full flex justify-end'>
                                                <button className=' sm:h-[35px] md:h-[40px] flex items-center justify-around w-[100px] text-[18px] font-medium rounded-md bg-[#fff] border-2 border-[#f97316] text-[#f97316]'>
                                                    <span>
                                                        ປະຈຳປີ
                                                    </span>
                                                    <GoTriangleDown />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="rounded-lg mt-8 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-6 w-full">
                                            {
                                                showRecieve === 'Income Statement' && (
                                                    <div className="overflow-x-auto">
                                                        <table className=' w-max min-w-full sm:w-full  '>
                                                            <thead>
                                                                <tr className=' text-gray-500 border-b-2 w-full '>
                                                                    <th className='font-medium text-[15px] py-4 w-[150px] sm:w-[400px]  px-2 sm:px-5 text-start'>ສະກຸນເງິນ: USD</th>
                                                                    <th className='font-semibold text-[16px] py-4 w-[100px]'>2024</th>
                                                                    <th className='font-semibold text-[16px] py-4 w-[100px]'>2023</th>
                                                                    <th className='font-semibold text-[16px] py-4 w-[100px]'>2022</th>
                                                                    <th className='font-semibold text-[16px] py-4 w-[100px]'>2021</th>
                                                                    <th className='font-semibold text-[16px] py-4 w-[100px]'>2020</th>
                                                                    <th className='font-semibold text-[16px] py-4 w-[100px]'>2019</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr className=' text-[#003049] h-[70px] border-b-2 w-full '>
                                                                    <td className='font-semibold text-[15px] sm w-[150px] sm:w-[400px] px-2 sm:px-5 text-start'>
                                                                        ລາຍໄດ້ລວມ
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-red-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-red-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-red-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-green-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr className=' text-[#003049] h-[70px] border-b-2 w-full '>
                                                                    <td className='font-semibold text-[15px] py-4 w-[150px] sm:w-[400px]  px-2 sm:px-5 text-start'>
                                                                        <div className=' flex items-center gap-x-1'>
                                                                            <FiChevronRight size={18} />
                                                                            ລາຍລະອຽດພື້ນຖານ
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>

                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>

                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>

                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>

                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr className=' text-[#003049] h-[70px] border-b-2 w-full '>
                                                                    <td className='font-semibold text-[15px] py-4 w-[150px] sm:w-[400px]  px-2 sm:px-5 text-start'>
                                                                        ກຳໄລຂັ້ນຕ່ຳ
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-green-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-green-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-green-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-red-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr className=' text-[#003049] h-[70px] border-b-2 w-full '>
                                                                    <td className='font-semibold text-[15px] py-4 w-[150px] sm:w-[400px]  px-2 sm:px-5 text-start'>
                                                                        <div className=' flex items-center gap-x-1'>
                                                                            <FiChevronRight size={18} />
                                                                            ລາຍລະອຽດ
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>

                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>

                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>

                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr className=' text-[#003049] h-[70px] border-b-2 w-full '>
                                                                    <td className='font-semibold text-[15px] py-4 w-[150px] sm:w-[400px]  px-2 sm:px-5 text-start'>
                                                                        ລາຍໄດ້ຈາກການດຳເນີນງານ
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-green-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-green-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-red-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-green-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr className=' text-[#003049] h-[70px] border-b-2 w-full '>
                                                                    <td className='font-semibold text-[15px] py-4 w-[150px] sm:w-[400px]  px-2 sm:px-5 text-start'>
                                                                        <div className=' flex items-center gap-x-1'>
                                                                            <FiChevronRight size={18} />
                                                                            ລາຍລະອຽດ
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>

                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>

                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>

                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr className=' text-[#003049] h-[70px] border-b-2 w-full '>
                                                                    <td className='font-semibold text-[15px] py-4 w-[150px] sm:w-[400px]  px-2 sm:px-5 text-start'>
                                                                        ລາຍໄດ້ກ່ອນຫັກພາສີ
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-green-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-green-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-red-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-green-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr className=' text-[#003049] h-[70px] w-full '>

                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )
                                            }

                                            {
                                                showRecieve === 'Balance Sheet' && (
                                                    <div className=' overflow-x-auto'>
                                                        <table className=' w-max min-w-full sm:w-full '>
                                                            <thead>
                                                                <tr className=' text-gray-500 border-b-2 w-full '>
                                                                    <th className='font-medium text-[15px] py-4 w-[150px] sm:w-[400px]  px-2 sm:px-5 text-start'>ສະກຸນເງິນ: USD</th>
                                                                    <th className='font-semibold text-[16px] py-4 w-[100px]'>2024</th>
                                                                    <th className='font-semibold text-[16px] py-4 w-[100px]'>2023</th>
                                                                    <th className='font-semibold text-[16px] py-4 w-[100px]'>2022</th>
                                                                    <th className='font-semibold text-[16px] py-4 w-[100px]'>2021</th>
                                                                    <th className='font-semibold text-[16px] py-4 w-[100px]'>2020</th>
                                                                    <th className='font-semibold text-[16px] py-4 w-[100px]'>2019</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr className=' text-[#003049] h-[70px] border-b-2 w-full '>
                                                                    <td className='font-semibold text-[15px] w-[150px] sm:w-[400px]  px-2 sm:px-5 text-start'>
                                                                        ລາຍໄດ້ລວມ
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-red-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-red-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-red-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-green-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr className=' text-[#003049] h-[70px] border-b-2 w-full '>
                                                                    <td className='font-semibold text-[15px] py-4 w-[150px] sm:w-[400px]  px-2 sm:px-5 text-start'>
                                                                        <div className=' flex items-center gap-x-1'>
                                                                            <FiChevronRight size={18} />
                                                                            ລາຍລະອຽດພື້ນຖານ
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>

                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>

                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>

                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>

                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr className=' text-[#003049] h-[70px] border-b-2 w-full '>
                                                                    <td className='font-semibold text-[15px] py-4 w-[150px] sm:w-[400px]  px-2 sm:px-5 text-start'>
                                                                        ກຳໄລຂັ້ນຕ່ຳ
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-green-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-green-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-green-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-red-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr className=' text-[#003049] h-[70px] border-b-2 w-full '>
                                                                    <td className='font-semibold text-[15px] py-4 w-[150px] sm:w-[400px]  px-2 sm:px-5 text-start'>
                                                                        <div className=' flex items-center gap-x-1'>
                                                                            <FiChevronRight size={18} />
                                                                            ລາຍລະອຽດ
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>

                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>

                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>

                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr className=' text-[#003049] h-[70px] border-b-2 w-full '>
                                                                    <td className='font-semibold text-[15px] py-4 w-[150px] sm:w-[400px]  px-2 sm:px-5 text-start'>
                                                                        ລາຍໄດ້ຈາກການດຳເນີນງານ
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex items-center justify-center'>
                                                                            <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-green-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-green-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-red-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                        <div className=' flex flex-col items-center justify-center'>
                                                                            <p className=' font-semibold'>
                                                                                75.15 B
                                                                            </p>
                                                                            <span className=' text-green-500 text-[14px] font-semibold'>
                                                                                +30.1 %
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>


                                                                <tr className=' text-[#003049] h-[70px] w-full '>

                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )
                                            }

                                            {
                                                showRecieve === 'Cash Flow' && <div className="overflow-x-auto">
                                                    <table className=' w-max min-w-full sm:w-full '>
                                                        <thead>
                                                            <tr className=' text-gray-500 border-b-2 w-full '>
                                                                <th className='font-medium text-[15px] py-4 w-[150px] sm:w-[400px]  px-2 sm:px-5 text-start'>ສະກຸນເງິນ: USD</th>
                                                                <th className='font-semibold text-[16px] py-4 w-[100px]'>2024</th>
                                                                <th className='font-semibold text-[16px] py-4 w-[100px]'>2023</th>
                                                                <th className='font-semibold text-[16px] py-4 w-[100px]'>2022</th>
                                                                <th className='font-semibold text-[16px] py-4 w-[100px]'>2021</th>
                                                                <th className='font-semibold text-[16px] py-4 w-[100px]'>2020</th>
                                                                <th className='font-semibold text-[16px] py-4 w-[100px]'>2019</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className=' text-[#003049] h-[70px] border-b-2 w-full '>
                                                                <td className='font-semibold text-[15px] w-[150px] sm:w-[400px]  px-2 sm:px-5 text-start'>
                                                                    ລາຍໄດ້ລວມ
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex items-center justify-center'>
                                                                        <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                    </div>
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex items-center justify-center'>
                                                                        <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                    </div>
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex flex-col items-center justify-center'>
                                                                        <p className=' font-semibold'>
                                                                            75.15 B
                                                                        </p>
                                                                        <span className=' text-red-500 text-[14px] font-semibold'>
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex flex-col items-center justify-center'>
                                                                        <p className=' font-semibold'>
                                                                            75.15 B
                                                                        </p>
                                                                        <span className=' text-red-500 text-[14px] font-semibold'>
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex flex-col items-center justify-center'>
                                                                        <p className=' font-semibold'>
                                                                            75.15 B
                                                                        </p>
                                                                        <span className=' text-red-500 text-[14px] font-semibold'>
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex flex-col items-center justify-center'>
                                                                        <p className=' font-semibold'>
                                                                            75.15 B
                                                                        </p>
                                                                        <span className=' text-green-500 text-[14px] font-semibold'>
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className=' text-[#003049] h-[70px] border-b-2 w-full '>
                                                                <td className='font-semibold text-[15px] py-4 w-[150px] sm:w-[400px]  px-2 sm:px-5 text-start'>
                                                                    <div className=' flex items-center gap-x-1'>
                                                                        <FiChevronRight size={18} />
                                                                        ລາຍລະອຽດພື້ນຖານ
                                                                    </div>
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex items-center justify-center'>
                                                                        <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                    </div>
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex items-center justify-center'>
                                                                        <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                    </div>
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex flex-col items-center justify-center'>
                                                                        <p className=' font-semibold'>
                                                                            75.15 B
                                                                        </p>

                                                                    </div>
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex flex-col items-center justify-center'>
                                                                        <p className=' font-semibold'>
                                                                            75.15 B
                                                                        </p>

                                                                    </div>
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex flex-col items-center justify-center'>
                                                                        <p className=' font-semibold'>
                                                                            75.15 B
                                                                        </p>

                                                                    </div>
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex flex-col items-center justify-center'>
                                                                        <p className=' font-semibold'>
                                                                            75.15 B
                                                                        </p>

                                                                    </div>
                                                                </td>
                                                            </tr>


                                                            <tr className=' text-[#003049] h-[70px] border-b-2 w-full '>
                                                                <td className='font-semibold text-[15px] py-4 w-[150px] sm:w-[400px]  px-2 sm:px-5 text-start'>
                                                                    <div className=' flex items-center gap-x-1'>
                                                                        <FiChevronRight size={18} />
                                                                        ລາຍລະອຽດ
                                                                    </div>
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex items-center justify-center'>
                                                                        <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                    </div>
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex items-center justify-center'>
                                                                        <MdLockOutline className=' text-[20px] text-gray-500' />
                                                                    </div>
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex flex-col items-center justify-center'>
                                                                        <p className=' font-semibold'>
                                                                            75.15 B
                                                                        </p>

                                                                    </div>
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex flex-col items-center justify-center'>
                                                                        <p className=' font-semibold'>
                                                                            75.15 B
                                                                        </p>

                                                                    </div>
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex flex-col items-center justify-center'>
                                                                        <p className=' font-semibold'>
                                                                            75.15 B
                                                                        </p>

                                                                    </div>
                                                                </td>
                                                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                                                    <div className=' flex flex-col items-center justify-center'>
                                                                        <p className=' font-semibold'>
                                                                            75.15 B
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className=' text-[#003049] h-[70px] w-full '>

                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            }
                                        </div>
                                        <div className=' flex items-center justify-center mt-20'>
                                            <button onClick={handleBackPage}
                                                className=' bg-deep-orange-500 text-[18px]  px-14 py-1.5 rounded-md'>ກັບຄືນໜ້າບໍລິສັດ</button>
                                        </div>
                                    </div>
                                }

                                {
                                    showAnalysis === "ອັດຕາສ່ວນທາງການເງິນ ແລະເງິນປັນຜົນ" && <div className=' h-full w-full  bg-white mb-20'>
                                        <div className='mt-10 sm:mt-16 sm:px-5 md:px-2 md:mt-10'>
                                            <AnalysisFinancial />
                                        </div>

                                        <div className=' flex items-center justify-center mt-20'>
                                            <button onClick={handleBackPage}
                                                className=' bg-deep-orange-500 text-[18px]  px-14 py-1.5 rounded-md'>ກັບຄືນໜ້າບໍລິສັດ</button>
                                        </div>
                                    </div>
                                }
                            </div>

                        </div>
                    )
                ))
            }
        </Navbar>
    )
}
