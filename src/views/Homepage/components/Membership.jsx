import React, { useState } from 'react'
import { Navbar } from '../../../components/Navbar'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import bgOverlay from '../../../assets/images/bg.png';
import bgOverlay2 from '../../../assets/images/bg3.png'
import qrBCEL from '../../../assets/qrBcel.png'
import stopWatch from '../../../assets/icons/stopwatch.png'

import { Link } from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im';
import { AiOutlineFileImage } from "react-icons/ai";
import { MdOutlineFileUpload, MdDelete } from "react-icons/md";

export const Membership = () => {
    const [image, setImage] = useState(null)
    const [imagePay, setImagePay] = useState(null)
    const [fileName, setFileName] = useState("ກະລຸນາເລືອກຮູບພາບ")
    const [phone, setPhone] = useState("")

    const [formNo, setFormNo] = useState(1)

    const nextForm = () => {
        setFormNo(formNo + 1)
    }
    const prevForm = () => {
        setFormNo(formNo - 1)
    }

    return (
        <Navbar>
            {
                formNo == 1 && <div className=' bg-[#003049]'>
                    <div className='h-full md:h-full z-0 w-full relative before:absolute sm:before:bg-[#003049]  before:-z-[1] before:w-full sm:before:h-screen before:h-full
                    before:bg-[#002133] md:before:h-full'>
                        <img src={bgOverlay} className="w-full h-full absolute md:block hidden" />
                        <div className='pt-[70px] lg:pb-20 relative flex flex-col items-center justify-center py-20 md:pb-5 container h-full mx-auto max-w-[330px] sm:max-w-[620px] lg:max-w-[900px] text-white z-50'>
                            <div className=' sm:hidden md:flex sm:items-start sm:w-full sm:mt-10 sm:mb-10 hidden'>
                                <Link to={"/news"} className=' flex cursor-pointer items-center justify-start hover:text-[#F97316]'>
                                    <ImArrowLeft className=' text-[24px] mr-5' />
                                    <h1 className='text-[32px]  sm:text-[50px]  font-bold'>ກັບຄືນ</h1>
                                </Link>
                            </div>
                            <h1 className=' text-[40px] font-extrabold mb-10 mt-5 text-[#F97316]'>
                                ສະໝັກສະມາຊິກ
                            </h1>
                            <div className=' w-full h-full bg-white sm:p-16 p-4 rounded-lg'>
                                <form className=' w-full h-full rounded-lg'>
                                    <div className='w-full sm:h-[90%] rounded-lg sm:flex sm:flex-col sm:item-center'>
                                        <div className=' w-full'>
                                            <h4 className=' text-gray-700 text-[18px] sm:text-[22px] font-semibold mb-4'>ເພີ່ມຮູບພາບ</h4>
                                            <div className='sm:w-full flex items-center justify-center sm:block mb-5 w-full sm:p-6 p-2 border-2 rounded-lg border-gray-400'>
                                                <div className=' w-[300px] sm:w-full sm:h-[400px] h-[350px] rounded-lg border-2 border-dashed border-gray-400
                                            flex flex-col items-center justify-center '
                                                >
                                                    <input type="file" accept='image/*' className='input-file'
                                                        hidden onChange={({ target: { files } }) => {
                                                            files[0] && setFileName(files[0].name)
                                                            if (files) {
                                                                setImage(URL.createObjectURL(files[0]))
                                                            }
                                                        }}
                                                    />
                                                    {image ?
                                                        <div className=' w-full h-full relative z-10'>
                                                            <img src={image} className=' w-full h-full object-cover' alt={fileName} />
                                                            <MdDelete onClick={() => setImage(null)}
                                                                className=' cursor-pointer text-red-500 absolute top-2 z-50 right-2 text-[20px]' />
                                                        </div>
                                                        :
                                                        <div onClick={() => document.querySelector('.input-file').click()}
                                                            className=' w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                                                            <MdOutlineFileUpload className=' text-gray-700 text-[100px]' />
                                                            <p className=' text-[24px] text-blue-500 font-semibold'>ເລືອກຮູບພາບ</p>
                                                        </div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' w-full'>
                                            <label className=' text-gray-700 block sm:text-[20px] text-[18px] mb-2 mt-2'>ຊື່ <span className=' text-red-500'>*</span></label>
                                            <input type="text" className=' w-full border px-5 outline-none border-gray-300 bg-gray-100 rounded text-[18px] text-gray-700 sm:py-3 py-2 mb-10'
                                                placeholder='ປ້ອນຊື່...'
                                            />
                                            <label className=' text-gray-700 block sm:text-[20px] text-[18px] mb-2'>ນາມສະກຸນ <span className=' text-red-500'>*</span></label>
                                            <input type="text" className=' w-full border px-5 outline-none border-gray-300 bg-gray-100 rounded text-[18px] text-gray-700 sm:py-3 py-2 mb-10'
                                                placeholder='ປ້ອນນາມສະກຸນ...'
                                            />
                                            <label className=' text-gray-700 block sm:text-[20px] text-[18px] mb-2'>ເບີໂທ <span className=' text-red-500'>*</span></label>
                                            <PhoneInput
                                                country={'la'}
                                                inputStyle={{
                                                    background: '#F3F4F6', // Black background
                                                    width: '100%',
                                                    padding: '26px 0 26px 45px',
                                                    color: '#000', // Light text color
                                                    borderRadius: '4px'
                                                }}
                                                buttonStyle={{
                                                    backgroundColor: '#F3F4F6',
                                                    borderRadius: '5px',
                                                    color: '#000000',
                                                }}
                                                value={phone}
                                                onChange={phone => setPhone(phone)}
                                            />
                                            <label className=' mt-10 text-gray-700 block sm:text-[20px] text-[18px] mb-2'>ອີເມວ </label>
                                            <input type="email" className=' w-full border px-5 outline-none border-gray-300 bg-gray-100 rounded text-[18px] text-gray-700 sm:py-3 py-2 mb-10'
                                                placeholder='ປ້ອນອີເມວ...'
                                            />

                                        </div>
                                    </div>
                                    <div className=' flex justify-end'>
                                        <button onClick={nextForm} className=' bg-[#0C4A6E] px-8 py-2 rounded-md'>Next</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {
                formNo == 2 && <div>
                    <div className=' z-0 w-full relative before:absolute before:bg-[#003049] before:-z-[1] before:w-full before:h-[350px]'>
                        <img src={bgOverlay2} className="w-full h-[350px] bg-bottom bg-cover absolute" />
                        <div className='pt-[70px] relative container h-full mx-auto max-w-[330px] sm:max-w-[620px] lg:max-w-[900px] text-white z-50'>
                            <div className=' h-[280px] relative'>
                                <div onClick={prevForm} className='absolute bottom-4 left-2 flex cursor-pointer items-center hover:text-[#F97316]'>
                                    <ImArrowLeft className=' text-[24px] mr-5' />
                                    <h1 className='text-[32px]  sm:text-[50px]  font-bold'>ກັບຄືນ</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' border-2 mt-20 rounded-lg h-full w-full bg-white mb-20 mx-auto container max-w-[330px] sm:max-w-[620px] lg:max-w-[900px]'>
                        <h1 className=' w-full text-center text-[30px] font-extrabold py-4 bg-[#7AA3B2] text-white rounded-t-lg'>ຊ່ອງທາງການຊຳລະເງິນ</h1>
                        <div className=' bg-white p-16 rounded-lg'>
                            <form className=' w-full h-full rounded-lg'>
                                <div className='w-full h-[90%] rounded-lg flex sm:flex-col md:flex-row items-center justify-between'>
                                    <div className=' w-full flex items-center justify-center'>
                                        <img src={qrBCEL} alt="qr code"
                                            className=' w-[300px]'
                                        />
                                    </div>
                                    <div className=' w-full flex flex-col items-center'>
                                        <h4 className=' text-gray-700 text-center text-[18px] font-semibold mb-4'>ເພີ່ມຮູບພາບ</h4>
                                        <div className='w-[350px] sm:w-[400px] p-6 border-2  rounded-lg border-gray-400'>
                                            <div className=' w-[300px] sm:w-[350px] h-[400px] rounded-lg border-2 border-dashed border-gray-400
                                            flex flex-col items-center justify-center '
                                            >
                                                <input type="file" accept='image/*' className='input-file'
                                                    hidden onChange={({ target: { files } }) => {
                                                        files[0] && setFileName(files[0].name)
                                                        if (files) {
                                                            setImagePay(URL.createObjectURL(files[0]))
                                                        }
                                                    }}
                                                />
                                                {image ?
                                                    <div className=' w-full h-full flex items-center justify-center relative z-10'>
                                                        <img src={imagePay} className=' w-full h-full object-cover' alt={fileName} />
                                                        <MdDelete onClick={() => setImagePay(null)}
                                                            className=' cursor-pointer text-red-500 absolute top-2 z-50 right-2 text-[20px]' />
                                                    </div>
                                                    :
                                                    <div onClick={() => document.querySelector('.input-file').click()}
                                                        className=' w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                                                        <MdOutlineFileUpload className=' text-gray-700 text-[100px]' />
                                                        <p className=' text-[24px] text-blue-500 font-semibold'>ເລືອກຮູບພາບ</p>
                                                    </div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex justify-center mt-14'>
                                    <button onClick={nextForm} className=' bg-[#F97316] font-semibold w-[200px] text-[20px] text-white py-2.5 rounded-md'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }

            {
                formNo == 3 && <div>
                    <div className=' z-0 w-full relative before:absolute before:bg-[#003049] before:-z-[1] before:w-full before:h-[350px]'>
                        <img src={bgOverlay2} className="w-full h-[350px] bg-bottom bg-cover absolute" />
                        <div className='pt-[70px] relative container mx-auto h-full 2xl:max-w-7xl xl:max-w-4xl md:max-w-xl sm:max-w-sm text-white z-50'>
                            <div className=' h-[280px] relative'>
                                {/* <div onClick={prevForm} className='absolute bottom-4 left-2 flex cursor-pointer items-center hover:text-[#F97316]'>
                                    <ImArrowLeft className=' text-[24px] mr-5' />
                                    <h1 className='text-[32px]  sm:text-[50px]  font-bold'>ກັບຄືນ</h1>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className=' border-2 mt-20 rounded-lg h-full w-full bg-white mb-20 mx-auto max-w-[330px] sm:max-w-[620px]'>
                        <div className=' flex flex-col items-center py-10'>
                            <h1 className=' text-[26px] font-bold text-[#F97316]'>
                                ລຳຖ້າການອະມຸມັດການຊຳລະເງິນຈາກແອດມິນ
                            </h1>
                            <div className=' w-[230px] h-[230px] my-12 flex items-center justify-center bg-gray-100 rounded-full'>
                                <img src={stopWatch} alt=""
                                    className=' w-[200px]'
                                />
                            </div>
                            <div className='text-[#F97316] text-center font-medium'>
                                <p>ການອະນຸມັດການຊຳລະເງິນໂດຍຈະໃຊ້ເວລາໂດຍປະມານ 3-5 ມື້</p>
                                <p>ຕ້ອງການການຊ່ວຍເຫຼືອຕິດຕໍ່ 20 55847928</p>
                            </div>
                            <Link to={'/'} className='w-[250px] py-2 font-bold text-white mt-10 text-center rounded-lg bg-[#F97316]'>ກັບໜ້າຫຼັກ</Link>
                        </div>
                    </div>
                </div>
            }
        </Navbar>
    )
}
