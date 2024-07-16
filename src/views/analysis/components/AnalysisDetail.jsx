import React, { useState } from 'react'


// data countires
import { dataCountries } from '../dataCountires';

import bgOverlay from '../../../assets/images/bg.png';
import bgOverlay2 from '../../../assets/images/bg3.png'

import usNewyork from '../../../assets/images/countries/1_newyork.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Navbar } from '../../../components/Navbar';


export const AnalysisDetail = () => {
    const navigate = useNavigate()
    const cid = useParams()
    console.log();
    localStorage.setItem('cid', cid.id)

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
                dataCountries.map((item, index) => (
                    item.id == cid.id && <div className=' z-0 w-full relative before:absolute before:bg-[#003049] before:-z-[1] before:w-full md:before:h-[350px] before:h-[200px]'>
                        <img src={bgOverlay2} className="w-full hidden md:block h-[350px] bg-bottom bg-cover absolute" />
                        <div className='pt-[70px] relative container mx-auto h-full max-w-[340px] sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl text-white z-50'>
                            <div className=' h-[150px] md:h-[300px] relative w-full flex items-center sm:justify-start'>
                                <div className=' sm:absolute w-full top-8 sm:bottom-4 xl:bottom-10 xl:items-end left-2 flex items-center md:justify-start justify-center gap-x-4 sm:text-[50px] text-[#F97316] mb-3 font-bold'>
                                    <div className=' rounded-full border-2 md:w-[70px] w-[60px]'>
                                        <img src={item.flag} alt="" className=' w-full h-full' />
                                    </div>
                                    <h1 className='text-[30px] sm:text-[34px] md:text-[50px] text-[#F97316] font-bold'>
                                        {item.name}
                                    </h1>
                                </div>

                            </div>
                            <div className=' h-full w-full bg-white mb-10 sm:mb-20'>
                                <h1 className=' text-[35px] text-black font-extrabold text-center pb-4 sm:pb-10 sm:pt-7'>
                                    ເລືອກບໍລິສັດ
                                </h1>
                                <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center gap-y-3 sm:gap-y-5 md:gap-y-10 xl:gap-y-7'>
                                    {
                                        dataCompanies.map((item, index) => (
                                            <Link to={`${item.companyName}`} key={index}
                                                className=' sm:py-3 sm:px-5 p-2 rounded-lg w-[150px] sm:w-[180px] lg:w-[210px] xl:w-[250px] flex flex-col gap-y-[2px] items-center
                                                shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
                                                <div className=' flex flex-col justify-center items-center'>
                                                    <img src={item.picture} alt=""
                                                        className=' w-full h-[80px] sm:w-[100px] sm:h-[100px] object-contain'
                                                    />
                                                    <h2 className=' mt-2 text-[#F97316] text-[17px] sm:text-[17px] md:text-[20px] font-semibold text-center'>
                                                        {item.companyName}
                                                    </h2>
                                                </div>
                                                <p className=' text-black line-clamp-2 mt-2 font-medium sm:text-[16px] text-[14px]'>
                                                    {item.detail}
                                                </p>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-center justify-center mb-5 sm:mb-20 sm:mt-10'>
                            <button onClick={handleBackPage}
                                className=' bg-deep-orange-500 text-[18px]  px-14 py-1.5 rounded-md text-white'>ກັບຄືນໜ້າບໍລິສັດ</button>
                        </div>
                    </div>
                ))
            }
        </Navbar>
    )
}
