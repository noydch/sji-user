import React, { useState } from 'react'
import { Navbar } from '../../components/Navbar'

import bgOverlay from '../../assets/images/bg.png';
import { Link } from 'react-router-dom/dist';

export const Article = () => {
    const [showAll, setShowAll] = useState(false)
    const initialDisplayCount = 12;

    const dataArticle = [
        {
            id: 1,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 2,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 3,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        }
        , {
            id: 4,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 5,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 6,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 7,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 8,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 9,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 10,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 11,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 12,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 13,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 14,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 15,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 16,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 17,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 18,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 19,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
        {
            id: 20,
            title: '10 TRENDS HOME DECORATION FOR BEST HOUSE',
            picture: 'https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg',
            desc: 'By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.'
        },
    ]

    const displayedArticle = showAll ? dataArticle : dataArticle.slice(0, initialDisplayCount);

    const handleLearnMore = () => {
        setShowAll(!showAll)
    }
    return (
        <Navbar>
            <div className='h-full sm:h-[800px] z-0 w-full relative before:absolute before:bg-[#003049] before:-z-[1] before:w-full  sm:before:h-[800px] md:before:h-full before:h-full'>
                <img src={bgOverlay} className="w-full h-screen sm:h-[800px] hidden sm:block absolute" />
                <div className='pt-[70px] relative container mx-auto h-full max-w-[330px] sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl text-white z-50'>
                    <div className=' flex flex-col mt-5 pb-5 sm:pb-0'>
                        <h1 className='text-[35px] text-[#F97316] sm:text-[40px] md:text-[50px] mb-3 font-bold'>ບົດຄວາມ</h1>
                        <h4 className=' uppercase text-[18px] sm:text-[24px] font-semibold mb-5'>
                            Building more efficient portfolios with ETFs
                        </h4>
                        <div className=' border-2 sm:border-4 rounded-lg'>
                            <img src="https://thunhoon.com/cache/image/article/268969/f9d1fd94-6a5f-46c2-b403-978e7ea32b2b.jpeg" alt=""
                                className=' w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover'
                            />
                        </div>
                        <div className=' w-full h-fit py-2 px-2 sm:py-5 sm:px-10 bg-white/30 mt-5 rounded-lg'>
                            <p className=' text-[16px] sm:text-[16px] md:text-[18px]'>
                                Exchange Traded Funds (ETFs) have become essential building blocks used extensively by financial professionals in
                                constructing diversified investment portfolios. ETFs can offer broad or targeted, precision exposure to a wide range of
                                asset classes providing investors with levers to pull when tailoring bespoke investment strategies to meet their varied
                                investment goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' pb-5 sm:pb-20 container mx-auto h-full max-w-[330px] sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl'>
                <div className=' py-4 sm:py-10'>
                    <div className=' grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-3 place-items-center sm:gap-7 md:gap-y-5'>
                        {
                            displayedArticle.map((item, index) => (
                                <Link to={`${item.id}`} key={index} className=' w-[170px] sm:w-[300px] md:w-[290px] sm:h-[350px] xl:w-[280px] xl:h-[370px] py-2 sm:py-4 rounded-lg sm:px-4 px-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer'>
                                    <h4 className=' text-[14px] sm:text-[16px] font-bold mb-2 sm:mb-3 text-gray-800'>
                                        {item.title}
                                    </h4>
                                    <img className=' mb-2 rounded-lg'
                                        src={item.picture} />
                                    <p className=' text-[12px] sm:text-[14px] text-gray-800 mb-2'>
                                        {item.desc}
                                    </p>
                                    <span className='text-gray-400 text-[12px]'>20,ພຶດສະພາ,2024</span>
                                </Link>
                            ))
                        }
                    </div>
                    {
                        dataArticle.length > initialDisplayCount && (
                            <div className=' mt-14 flex justify-center'>
                                <button onClick={handleLearnMore}
                                    className=' bg-[#FB923C] w-[170px] sm:w-[200px] text-[20px] py-2 rounded-lg font-semibold 
                            text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
                                    {
                                        showAll ? 'ປິດອ່ານເພີ່ມເຕີມ' : 'ອ່ານເພີ່ມເຕີມ'
                                    }
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </Navbar>
    )
}
