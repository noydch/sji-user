import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../assets/logo.png'
import flagLaos from '../assets/images/flag-laos.png'
import flagUs from '../assets/images/flag-us.png'
import { Link } from 'react-router-dom'
import SelectCountry from './SelectCountry'

export const Navbar = ({ children }) => {
    const activeLink = "text-[#F97316] font-semibold"

    // select flag function
    // const countries 
    const [selectedFlag, setSelectedFlag] = useState(flagLaos);
    const [isDropdownFlag, setIsDropdownFlag] = useState(false);

    const dataNav = [
        {
            title: 'ໜ້າຫຼັກ',
            path: '/'
        },
        {
            title: 'ບໍລິການຂອງເຮົາ',
            path: '/ourService'
        },
        {
            title: 'ບົດຂ່າວ',
            path: '/news'
        },
        {
            title: 'ບົດວິເຄາະ',
            path: '/analysis'
        },
        {
            title: 'ກ່ຽວກັບພວກເຮົາ',
            path: '/about'
        },
        {
            title: 'ຕິດຕໍ່ເຮົາ',
            path: '/contact'
        }
    ]
    return (
        <div>
            <div className='bg-[#003049] fixed z-[999] w-full'>
                <div className=' flex items-center justify-between container mx-auto max-w-6xl h-[70px] '>
                    <div>
                        <img src={logo} alt="logo"
                            className=' w-12'
                        />
                    </div>
                    <ul className=' flex items-center gap-8 text-white text-[18px] font-semibold'>
                        {
                            dataNav.map((list, index) => {
                                return (
                                    <NavLink to={list.path} key={index} onClick={() => setNavActive(list.title)}
                                        className={({ isActive }) => isActive ? activeLink : ''}
                                    >{list.title}</NavLink>
                                )
                            })
                        }
                    </ul>
                    <div className=' flex gap-5'>
                        <button className=' text-white text-[18px] bg-[#FB923C] px-5 rounded-md'>ເຂົ້າສູ່ລະບົບ</button>
                        <div className=' relative flex flex-col gap-x-3 cursor-pointer border-2 border-white rounded-md'
                            onClick={() => setIsDropdownFlag(!isDropdownFlag)}>
                            <div className=' flex items-center w-[120px] px-2 py-[2px] cursor-pointer'>
                                <img className=' w-8 mr-1 cursor-pointer border-2 border-white rounded-full'
                                    src={selectedFlag} alt="" />
                                <p className=' text-[17px] font-semibold text-white'>Laos</p>
                            </div>
                            {
                                isDropdownFlag && <div className=' absolute w-[120px] flex flex-col gap-2 h-fit top-12 border-2 border-white rounded-md'>
                                    <div className=' flex items-center px-2 py-[2px] cursor-pointer'
                                        onClick={() => setSelectedFlag(flagLaos)}>
                                        <img className=' w-8 mr-1 cursor-pointer border-2 border-white rounded-full'
                                            src={flagLaos} alt="" />
                                        <p className=' text-[17px] font-semibold text-white'>Laos</p>
                                    </div>
                                    <div className=' flex items-center px-2 py-[2px] cursor-pointer'
                                        onClick={() => setSelectedFlag(flagUs)}>
                                        <img className=' w-8 mr-1 cursor-pointer border-2 border-white rounded-full'
                                            src={flagUs} alt="" />
                                        <p className=' text-[17px] font-semibold text-white'>English</p>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}
