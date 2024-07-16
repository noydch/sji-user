import React, { useState, useEffect } from 'react';
import { useLocation, NavLink, Link } from 'react-router-dom';
import { IoClose, IoMenu } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import flagLaos from '../assets/images/flag-laos.png';
import flagUs from '../assets/images/flag-us.png';
import SelectCountry from './SelectCountry';
import Footer from './Footer';
import useLanguageStore from '../store/languageStore';

export const Navbar = ({ children }) => {
    const activeLink = "text-[#F97316] font-bold xl:text-[20px] sm:hover:bg-transparent px-3 md:px-0 sm:px-1 hover:bg-[#005887] py-2  sm:w-fit ";
    const location = useLocation();
    const { t, i18n } = useTranslation();
    const { currentLanguage, changeLanguage } = useLanguageStore()

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [selectedFlag, setSelectedFlag] = useState(i18n.language === 'la' ? flagLaos : flagUs);
    const [isDropdownFlag, setIsDropdownFlag] = useState(false);

    useEffect(() => {
        setSelectedFlag(i18n.language === 'la' ? flagLaos : flagUs);
    }, [i18n.language]);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const dataNav = [
        { title: 'navbar.home', path: '/' },
        { title: 'navbar.ourService', path: '/ourService' },
        { title: 'navbar.news', path: '/news' },
        { title: 'navbar.analysis', path: '/analysis' },
        { title: 'navbar.article', path: '/article' },
        { title: 'navbar.about', path: '/about' },
        { title: 'navbar.contact', path: '/contact' }
    ];

    const pathname = "/" + useLocation().pathname.split("/")[1];
    const isActivePath = (path) => pathname === path;
    // const isHomepage = (path) => path == '/'

    return (
        <nav>
            <div className='bg-[#003049] fixed z-[1000] w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <div className='flex items-center justify-between container mx-auto max-w-[340px] sm:max-w-[620px] lg:max-w-[900px] 
                xl:max-w-6xl 2xl:max-w-7xl h-[70px] sm:h-[60px] xl:h-[70px]'>
                    <NavLink to={'/'}>
                        <img src={logo} alt="logo" className='w-12 sm:w-10 xl:w-14 2xl:w-[65px]' />
                    </NavLink>
                    <ul className={`flex items-start sm:items-center xl:text-[20px] justify-start sm:justify-center md:gap-x-10 gap-x-2 sm:gap-x-2 w-[200px] sm:w-full md:justify-center  py-2 sm:px-0 px-2.5 text-white text-[18px] 
                    sm:text-[14px] font-semibold ${isMenuVisible ? 'absolute gap-y-2 flex flex-col top-[72px] -right-0 bg-[#003049]  w-[220px] items-start' : 'hidden sm:flex'}`}>
                        {dataNav.map((list, index) => (
                            <NavLink
                                to={list.path}
                                key={index}
                                className={isActivePath(list.path) ? activeLink : 'sm:text-[12px]  xl:text-[20px] sm:px-0 px-3 hover:bg-[#005887] sm:hover:bg-transparent  py-2 sm:w-fit duration-300'}
                                onClick={() => setIsMenuVisible(false)}
                            >
                                {t(list.title)}
                            </NavLink>
                        ))}
                        <NavLink to={'/login'} className='sm:hidden px-3 hover:bg-[#005887] w-full py-2 duration-300'>
                            {t('navbar.logout')}
                        </NavLink>
                    </ul>
                    <div className='flex gap-3 sm:gap-x-2 xl:gap-x-3'>
                        <Link to={"/register"}
                            className='text-white flex items-center justify-center xl:text-[18px] text-[16px] sm:text-[14px] py-2 sm:py-[2px] bg-[#FB923C] w-[100px] xl:w-[100px] sm:w-[70px] md:w-[80px] font-semibold sm:font-medium sm:rounded-sm md:rounded-md rounded-md'>
                            {t('navbar.login')}
                        </Link>
                        <div className='relative flex flex-col items-center justify-center md:py-1 w-[120px] xl:w-[120px] sm:w-[80px] gap-x-2 sm:gap-x-1 cursor-pointer border-2 border-white rounded-md'
                            onClick={() => setIsDropdownFlag(!isDropdownFlag)}>
                            <div className='flex items-center justify-center xl:gap-x-2 w-[120px] xl:w-[120px] sm:w-[80px] px-2 sm:px-[2px] cursor-pointer '>
                                <img className='w-8 sm:w-6 mr-1 cursor-pointer border-2 border-white rounded-full' src={selectedFlag} alt="" />
                                <p className=' xl:text-[17px] text-[16px] sm:text-[12px] font-semibold sm:font-medium text-white'>
                                    {t(selectedFlag === flagLaos ? 'language.laos' : 'language.english')}
                                </p>
                            </div>
                            {isDropdownFlag && (
                                <div className='bg-[#003049] absolute w-[120px] xl:w-[120px] xl:gap-x-2 sm:w-[120px] p-2 md:p-0 md:px-3 flex flex-col items-center gap-2 md:gap-0 h-fit top-14 sm:top-11 left-[50%] -translate-x-1/2 border-2 border-white rounded-md'>
                                    <div className='flex items-center justify-center py-[4px]  xl:w-[100px] xl:gap-x-2 w-full md:py-2 cursor-pointer border-b border-white'
                                        onClick={() => { changeLanguage('la'); setIsDropdownFlag(false); }}>
                                        <img className='w-8 sm:w-6 mr-1 cursor-pointer border-2 border-white rounded-full' src={flagLaos} alt="" />
                                        <p className=' text-[17px] sm:text-[14px] font-semibold sm:font-medium text-white'>{t('language.laos')}</p>
                                    </div>
                                    <div className='flex items-center justify-center xl:w-[100px] xl:gap-x-2 py-[4px] w-full md:py-2 cursor-pointer '
                                        onClick={() => { changeLanguage('en'); setIsDropdownFlag(false); }}>
                                        <img className='w-8 sm:w-6 mr-1 cursor-pointer border-2 border-white rounded-full' src={flagUs} alt="" />
                                        <p className=' text-[17px] sm:text-[14px] font-semibold text-white'>{t('language.english')}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className=' cursor-pointer  sm:hidden block text-[40px] text-white' onClick={toggleMenu}>
                            {isMenuVisible ? <IoClose /> : <IoMenu />}
                        </div>
                    </div>
                </div>
            </div>
            {children}
            <Footer />
        </nav>
    );
};