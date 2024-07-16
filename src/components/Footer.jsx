import React from 'react'
import { Navbar } from './Navbar'

// icons
import { FaLinkedinIn, FaArrowLeft, FaArrowDown, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaAngleRight, FaAngleDown, FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

// images
import midiLogo from '../assets/images/midi-logo.jpg';
import investingLogo from '../assets/images/investing-logo.jpg';

export default function Footer() {
    return (
        <footer className=' w-full lg:h-[370px] lg:pt-5 bg-[#003049] relative z-[999] py-5'>
            <div className=' h-full container mx-auto max-w-[330px] sm:max-w-[620px] lg:max-w-[900px]'>
                <div className=' flex justify-between px-2 gap-x-4 '>
                    <div className=' flex flex-col sm:flex-row lg:mb-5 items-center gap-x-4'>
                        <img src={midiLogo} alt=""
                            className=' w-10 h-10 lg:w-11 lg:h-11 object-cover rounded-full'
                        />
                        <h5 className=' uppercase text-[16px] lg:text-[20px] text-white font-semibold mt-2'>Midi Technology</h5>
                    </div>
                    <div className=' flex flex-col sm:flex-row items-center gap-x-4'>
                        <img src={investingLogo} alt=""
                            className=' w-10 h-10 lg:w-11 lg:h-11 rounded-full object-cover border-[2px] border-[#F97316]'
                        />
                        <h5 className=' text-white text-[16px] lg:text-[20px] font-semibold mt-2'>ສອນເຈົ້າລົງທຶນ</h5>
                    </div>
                </div>

                <div className=' grid grid-cols-1 md:grid-cols-2'>
                    <div className=' '>
                        <h2 className=' tracking-[2px] mt-3 md:mb-1 uppercase text-white font-extrabold 
                        text-[20px] lg:text-[24px]'>
                            INFORMATION
                        </h2>
                        <p className='lg:mb-5 mb-4 text-white text-[14px] lg:text-[16px]'>
                            Lorem ipsum dolor sit amet, consectetur <br />
                            adipiscing elit.
                            Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar
                            dapibus leo.
                        </p>
                        <div className=' flex items-center gap-x-4'>
                            <div className=' bg-white p-1 rounded-md'>
                                <FaFacebookF className=' text-[20px] sm:text-[18px]' />
                            </div>
                            <div className=' bg-white p-1 rounded-md'>
                                <FaTwitter className=' text-[20px] sm:text-[18px]' />
                            </div>
                            <div className=' bg-white p-1 rounded-md'>
                                <FaInstagram className=' text-[20px] sm:text-[18px]' />
                            </div>
                            <div className=' bg-white p-1 rounded-md'>
                                <FaLinkedinIn className=' text-[20px] sm:text-[18px]' />
                            </div>
                        </div>
                    </div>
                    <div className=' flex justify-between gap-x-5'>
                        <div className=' flex flex-col items-start'>
                            <h2 className=' tracking-[2px] mt-3 mb-1 uppercase text-white font-extrabold 
                            text-[20px] lg:text-[24px]'>
                                NAVIGATION
                            </h2>
                            <ul className=' flex flex-col gap-y-2'>
                                <li className=' flex items-center text-white gap-x-1'>
                                    <FaAngleRight className=' text-[#757575]' />
                                    <p className=' text-[14px] xs:text-[12px] font-sans'>Homepage</p>
                                </li>
                                <li className=' flex items-center text-white gap-x-1'>
                                    <FaAngleRight className=' text-[#757575]' />
                                    <p className=' text-[14px] xs:text-[12px] font-sans'>About Us</p>
                                </li>
                                <li className=' flex items-center text-white gap-x-1'>
                                    <FaAngleRight className=' text-[#757575]' />
                                    <p className=' text-[14px] xs:text-[12px] font-sans'>Services</p>
                                </li>
                                <li className=' flex items-center text-white gap-x-1'>
                                    <FaAngleRight className=' text-[#757575]' />
                                    <p className=' text-[14px] xs:text-[12px] font-sans'>Project</p>
                                </li>
                            </ul>
                        </div>
                        <div className=' flex flex-col items-start'>
                            <h2 className='tracking-[2px] mt-3 mb-1 uppercase text-white font-extrabold 
                            text-[20px] lg:text-[24px]'>
                                CONTACT US
                            </h2>
                            <ul className=' flex flex-col gap-y-2'>
                                <li className=' flex items-center gap-x-2'>
                                    <FaLocationDot className=' text-[#757575] text-[18px] md:text-[16px]' />
                                    <p className=' text-white lg:text-[16px] text-[14px]'>Lumbung Hidup East Java</p>
                                </li>
                                <li className=' flex items-center gap-x-2'>
                                    <IoMdMail className=' text-[#757575] text-[18px] md:text-[16px]' />
                                    <p className=' text-white md:text-[12px] lg:text-[16px] text-[14px]'>Hello@Homco.com</p>
                                </li>
                                <li className=' flex items-center gap-x-2'>
                                    <FaPhoneAlt className=' text-[#757575] text-[18px] md:text-[16px]' />
                                    <p className=' text-white md:text-[12px] lg:text-[16px] text-[14px]'>+856 20 99281020</p>
                                </li>
                                <li className=' flex items-center gap-x-2'>
                                    <FaPhoneAlt className=' text-[#757575] text-[18px] md:text-[16px]' />
                                    <p className=' text-white md:text-[12px] text-[14px]'>+856 20 99281020</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
