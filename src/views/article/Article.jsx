import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";

import bgOverlay from "../../assets/images/bg.png";
import { Link } from "react-router-dom/dist";

export const Article = () => {
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 12;

  const dataArticle = [
    {
      id: 1,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 2,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 3,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 4,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 5,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 6,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 7,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 8,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 9,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 10,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 11,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 12,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 13,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 14,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 15,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 16,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 17,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 18,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 19,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
    {
      id: 20,
      title: "10 TRENDS HOME DECORATION FOR BEST HOUSE",
      picture:
        "https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg",
      desc: "By Rene Reyna, Brett BoorThe world of technology has long been fascinated with biomimicry, ideas that source their innovations from nature.",
    },
  ];

  const displayedArticle = showAll
    ? dataArticle
    : dataArticle.slice(0, initialDisplayCount);

  const handleLearnMore = () => {
    setShowAll(!showAll);
  };
  return (
    <Navbar>
      <div className="relative z-0 h-full w-full before:absolute before:-z-[1] before:h-full before:w-full before:bg-[#003049] sm:h-[800px] sm:before:h-[800px] md:h-[850px] md:before:h-[850px] lg:before:h-full">
        <img
          src={bgOverlay}
          className="absolute hidden h-screen w-full sm:block sm:h-[800px] md:h-[850px] md:opacity-55"
        />
        <div className="container relative z-50 mx-auto h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
          <div className="mt-5 flex flex-col pb-5 sm:pb-0">
            <h1 className="mb-5 lg:mb-0 text-[35px] font-bold text-[#F97316] sm:text-[40px] md:text-[40px]">
              ບົດຄວາມ
            </h1>
            <h4 className="mb-5 text-[18px] font-semibold uppercase sm:text-[20px]">
              Building more efficient portfolios with ETFs
            </h4>
            <div className="rounded-lg border-2 sm:border-4">
              <img
                src="https://thunhoon.com/cache/image/article/268969/f9d1fd94-6a5f-46c2-b403-978e7ea32b2b.jpeg"
                alt=""
                className="h-[250px] w-full object-cover sm:h-[300px] md:h-[350px]"
              />
            </div>
            <div className="mt-5 h-fit w-full rounded-lg bg-white/30 px-2 py-2 sm:px-10 sm:py-5">
              <p className="text-[16px] sm:text-[16px] md:text-[18px]">
                Exchange Traded Funds (ETFs) have become essential building
                blocks used extensively by financial professionals in
                constructing diversified investment portfolios. ETFs can offer
                broad or targeted, precision exposure to a wide range of asset
                classes providing investors with levers to pull when tailoring
                bespoke investment strategies to meet their varied investment
                goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto h-full max-w-[340px] pb-5 sm:max-w-[620px] sm:pb-20 md:max-w-[700px] md:pb-10 lg:max-w-[900px] xl:max-w-6xl">
        <div className="py-4 sm:py-10">
          <div className="grid grid-cols-2 place-items-center gap-y-3 sm:grid-cols-2 sm:gap-7 md:grid-cols-3 md:gap-x-3 md:gap-y-5 xl:grid-cols-4">
            {displayedArticle.map((item, index) => (
              <Link
                to={`${item.id}`}
                key={index}
                className="w-[170px] cursor-pointer rounded-lg px-2 py-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:h-[350px] sm:w-[300px] sm:px-4 sm:py-4 md:w-[220px] md:px-2 md:py-3 lg:w-[290px] xl:h-[370px] xl:w-[280px]"
              >
                <h4 className="mb-2 text-[14px] font-bold text-gray-800 sm:mb-3 sm:text-[16px] md:text-[14px] lg:text-[16px]">
                  {item.title}
                </h4>
                <img className="mb-2 rounded-lg" src={item.picture} />
                <p className="mb-2 text-[12px] text-gray-800 sm:text-[14px]">
                  {item.desc}
                </p>
                <span className="text-[12px] text-gray-400">
                  20,ພຶດສະພາ,2024
                </span>
              </Link>
            ))}
          </div>
          {dataArticle.length > initialDisplayCount && (
            <div className="mt-14 flex justify-center">
              <button
                onClick={handleLearnMore}
                className="w-[170px] rounded-lg bg-[#FB923C] py-2 text-[20px] font-semibold text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:w-[200px]"
              >
                {showAll ? "ປິດອ່ານເພີ່ມເຕີມ" : "ອ່ານເພີ່ມເຕີມ"}
              </button>
            </div>
          )}
        </div>
      </div>
    </Navbar>
  );
};
