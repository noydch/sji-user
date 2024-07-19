import React from "react";
import { Navbar } from "../../components/Navbar";
import bgOverlay from "../../assets/images/bg.png";
import SliderNews from "./components/SliderNews";

import newsImg1 from "../../assets/images/news/gold.jpg";
import newsImg2 from "../../assets/images/news/rate.jpg";
import newsImg3 from "../../assets/images/news/calendar.jpg";
import newsImg4 from "../../assets/images/news/analysis.jpg";
import newsImg5 from "../../assets/images/news/money.jpg";
import newsImg6 from "../../assets/images/news/yuan.jpg";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const News = () => {
  const { t } = useTranslation();
  return (
    <Navbar>
      <div>
        <div className="relative z-0 h-full w-full bg-[#002133] before:absolute before:-z-[1] before:w-full sm:h-[650px] sm:before:h-[650px] sm:before:bg-[#003049] xl:h-screen xl:before:h-screen">
          <img
            src={bgOverlay}
            className="absolute hidden h-screen w-full object-cover sm:block sm:h-[650px] xl:h-screen"
          />
          <div className="container relative z-50 mx-auto h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
            <h1 className="top-14 mt-10 flex items-start text-[30px] font-bold text-[#F97316] sm:relative sm:mt-0 sm:text-[35px] md:text-[40px]">
              {t("news.title")}
            </h1>
            <div className="relative flex items-center">
              <SliderNews />
            </div>
          </div>
        </div>
        <div className="container mx-auto h-full max-w-[340px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
          <h1 className="mb-3 mt-10 flex items-start text-[28px] font-bold text-[#1F2937] sm:mb-7 sm:text-[30px] lg:text-[35px]">
            Lastest News
          </h1>
          <div className="mb-10 grid grid-cols-1 place-items-center gap-y-5 sm:grid-cols-2 sm:place-items-center sm:gap-y-5 md:grid-cols-3 md:gap-y-4 xl:grid-cols-4">
            <Link
              to={"/news/gold"}
              className="w-[320px] cursor-pointer rounded-md p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:h-[400px] sm:w-[290px] md:h-[360px] md:w-[220px] lg:h-[420px] lg:w-[280px] xl:h-[430px] xl:w-[270px] xl:p-3"
            >
              <img
                src={newsImg1}
                alt=""
                className="w-[320px] md:h-[150px] lg:h-fit"
              />
              <h4 className="my-2 text-[20px] font-semibold leading-[1.1] md:text-[20px] lg:text-[20px]">
                10 TRENDS HOME DECORATION For Best House
              </h4>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Link>
            <div className="w-[320px] cursor-pointer rounded-md p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:h-[400px] sm:w-[290px] md:h-[360px] md:w-[220px] lg:h-[420px] lg:w-[280px] xl:h-[430px] xl:w-[270px] xl:p-3">
              <img
                src={newsImg2}
                alt=""
                className="w-[320px] md:h-[150px] lg:h-fit"
              />
              <h4 className="my-2 text-[20px] font-semibold leading-[1.1] md:text-[20px] lg:text-[20px]">
                HOW TO CLEANING OWN HOME For Best Cleaning
              </h4>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="w-[320px] cursor-pointer rounded-md p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:h-[400px] sm:w-[290px] md:h-[360px] md:w-[220px] lg:h-[420px] lg:w-[280px] xl:h-[430px] xl:w-[270px] xl:p-3">
              <img
                src={newsImg3}
                alt=""
                className="w-[320px] md:h-[150px] lg:h-fit"
              />
              <h4 className="my-2 text-[20px] font-semibold leading-[1.1] md:text-[20px] lg:text-[20px]">
                US Stock Market Holidays 2024
              </h4>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="w-[320px] cursor-pointer rounded-md p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:h-[400px] sm:w-[290px] md:h-[360px] md:w-[220px] lg:h-[420px] lg:w-[280px] xl:h-[430px] xl:w-[270px] xl:p-3">
              <img
                src={newsImg4}
                alt=""
                className="w-[320px] md:h-[150px] lg:h-fit"
              />
              <h4 className="my-2 text-[20px] font-semibold leading-[1.1] md:text-[20px] lg:text-[20px]">
                HOW TO DRAW HOME DESIGN For Consystency
              </h4>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="w-[320px] cursor-pointer rounded-md p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:h-[400px] sm:w-[290px] md:h-[360px] md:w-[220px] lg:h-[420px] lg:w-[280px] xl:h-[430px] xl:w-[270px] xl:p-3">
              <img
                src={newsImg5}
                alt=""
                className="w-[320px] md:h-[150px] lg:h-fit"
              />
              <h4 className="my-2 text-[20px] font-semibold leading-[1.1] md:text-[20px] lg:text-[20px]">
                TIPS MODELING DECORATION HOME modern
              </h4>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="w-[320px] cursor-pointer rounded-md p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:h-[400px] sm:w-[290px] md:h-[360px] md:w-[220px] lg:h-[420px] lg:w-[280px] xl:h-[430px] xl:w-[270px] xl:p-3">
              <img
                src={newsImg6}
                alt=""
                className="w-[320px] md:h-[150px] lg:h-fit"
              />
              <h4 className="my-2 text-[20px] font-semibold leading-[1.1] md:text-[20px] lg:text-[20px]">
                HOW TO IMPROVE HOME DESIGN For Future
              </h4>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="mb-10 mt-16 flex w-full justify-center">
            <button className="rounded-md bg-orange-400 px-6 py-2 text-[18px] font-semibold text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:px-10 sm:py-[10px] sm:text-[20px]">
              {t("news.learnMore")}
            </button>
          </div>
        </div>
      </div>
      {Outlet}
    </Navbar>
  );
};
