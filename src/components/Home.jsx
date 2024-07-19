import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";

import bgOverlay from "../assets/images/bg.png";
import stockImg from "../assets/images/stock.jpg";
import MosueWheelSlider from "./MosueWheelSlider";
import SliderHome from "../views/Homepage/SliderHome";

// image
import graphImg from "../assets/images/graph.png";
import aiyA from "../assets/images/aiy-a.png";
import SliderHomeMB from "../views/Homepage/SliderHomeMB";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useLanguageStore from "../store/languageStore";
import SliderHomeMD from "../views/Homepage/SliderHomeMD";

export const Home = () => {
    const { t, i18n } = useTranslation();
    const { currentLanguage, changeLanguage } = useLanguageStore();
    // package active
    const packageActiveStyle = "border border-orange-400 bg-[#FFEDD5]";
    const [packageActive, setPackageActive] = useState(false);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Navbar>
            <div className="bg-[#002133] md:bg-[#003049]">
                <div className="relative z-0 h-full w-full before:absolute before:-z-[1] before:h-[300px] before:w-full before:bg-[#002133] sm:h-[700px] sm:before:h-[700px] sm:before:bg-[#002133] xl:h-screen xl:before:h-screen">
                    <img
                        src={bgOverlay}
                        className="absolute hidden sm:block sm:h-full sm:w-full xl:h-screen"
                    />
                    <div className="container relative z-50 mx-auto mb-5 h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] md:max-w-[700px] lg:mb-0 lg:max-w-[900px] xl:max-w-6xl">
                        <div className="flex items-center justify-between md:mt-5">
                            <div className="sm:flex sm:flex-[2] sm:flex-col sm:items-start sm:gap-y-4 md:w-full md:flex-[2] lg:w-full xl:flex-[3]">
                                <h1 className="mb-1 mt-3 text-[40px] font-bold text-[#F97316]">
                                    {t("home.title")}
                                </h1>
                                <p className="text-[14px]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Voluptates culpa temporibus
                                    <br /> facere quam sequi <br /> adipisci voluptatum illo velit
                                    in quod nulla minus vitae, nam rem ipsum eaque consequatur
                                    assumenda explicabo!
                                </p>
                                <button className="mt-5">
                                    <Link
                                        to={"/home/membership"}
                                        className="rounded bg-[#FB923C] px-5 py-2 font-semibold"
                                    >
                                        {t("home.premium")}
                                    </Link>
                                </button>
                            </div>
                            <div className="mt-5 flex flex-col items-center gap-y-5 sm:flex-[2] md:flex-[2]">
                                {windowWidth > 480 && <MosueWheelSlider />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white pb-10">
                    <div className="container mx-auto h-full max-w-[340px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
                        <div className="flex justify-center">
                            <h2 className="pb-0 pt-7 text-[28px] font-extrabold text-[#1F2937] sm:text-[34px]">
                                {t("home.ourServices")}
                            </h2>
                        </div>
                        <div className="relative block h-full w-full">
                            {windowWidth < 700 && <SliderHomeMB />}
                            {windowWidth > 800 && <SliderHome />}
                            {windowWidth < 800 && windowWidth > 700 && <SliderHomeMD />}
                        </div>

                        <div className="flex justify-center">
                            <h2 className="pb-5 pt-7 text-[24px] font-extrabold text-[#1F2937] sm:pb-2 sm:text-[34px]">
                                {t("home.briefInfo")}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2">
                            <div className="flex w-full justify-center sm:w-[300px] sm:rounded-lg lg:w-[380px]">
                                <img
                                    src={graphImg}
                                    alt=""
                                    className="h-[400px] w-[500px] rounded-xl object-cover sm:w-[320px] lg:w-full"
                                />
                            </div>
                            <div className="flex justify-between gap-x-6">
                                <div className="flex flex-col items-center gap-y-4">
                                    <div className="flex flex-col items-center">
                                        <h1 className=" text-[28px] sm:text-[28px] md:text-[30px] font-bold text-orange-600">
                                            6Y
                                        </h1>
                                        <p className="text-[16px] sm:text-[18px] font-bold text-center">
                                            {t("home.investmentExperience")}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <h1 className=" text-[28px] sm:text-[28px] md:text-[30px] font-bold text-orange-600">
                                            4Y
                                        </h1>
                                        <p className="text-[16px] sm:text-[18px] font-bold text-center">
                                            {t("home.teachingExperience")}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-y-4">
                                    <div className="flex flex-col items-center">
                                        <h1 className=" text-[28px] sm:text-[28px] md:text-[30px] font-bold text-orange-600">
                                            6Y
                                        </h1>
                                        <p className="text-[16px] sm:text-[18px] font-bold text-center">
                                            {t("home.investmentExperience")}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <h1 className=" text-[28px] sm:text-[28px] md:text-[30px] font-bold text-orange-600">
                                            4Y
                                        </h1>
                                        <p className="text-[16px] sm:text-[18px] font-bold text-center">
                                            {t("home.teachingExperience")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-1 place-items-center sm:grid-cols-2">
                            <div className="flex justify-center sm:hidden lg:hidden lg:w-full">
                                <div className="flex h-[370px] w-[350px] cursor-pointer items-end justify-center rounded-xl bg-[#457B9D] hover:shadow-md sm:h-[340px] sm:w-[300px] lg:w-full">
                                    <img
                                        src={aiyA}
                                        alt=""
                                        className="h-[350px] w-[300px] rounded-xl object-cover sm:h-[320px] sm:w-[280px]"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <div className="mb-0 mt-5 sm:mt-0 sm:mb-5 flex flex-col items-center justify-center py-4">
                                    <h2 className="text-[24px] font-bold text-[#6B7280]">
                                        {t("home.ourExperience")}
                                    </h2>
                                    <hr className="w-[150px] border-b-2 border-b-[#FF6500]" />
                                </div>
                                <div className="flex justify-between gap-x-6">
                                    <div className="flex flex-col items-center gap-y-4">
                                        <div className="flex flex-col items-center">
                                            <h1 className=" text-[28px] sm:text-[28px] md:text-[30px] font-bold text-orange-600">
                                                6Y
                                            </h1>
                                            <p className="text-[16px] sm:text-[18px] font-bold text-center">
                                                {t("home.investmentExperience")}
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <h1 className=" text-[28px] sm:text-[28px] md:text-[30px] font-bold text-orange-600">
                                                4Y
                                            </h1>
                                            <p className="text-[16px] sm:text-[18px] font-bold text-center">
                                                {t("home.teachingExperience")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-y-4">
                                        <div className="flex flex-col items-center">
                                            <h1 className=" text-[28px] sm:text-[28px] md:text-[30px] font-bold text-orange-600">
                                                6Y
                                            </h1>
                                            <p className="text-[16px] sm:text-[18px] font-bold text-center">
                                                {t("home.investmentExperience")}
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <h1 className=" text-[28px] sm:text-[28px] md:text-[30px] font-bold text-orange-600">
                                                4Y
                                            </h1>
                                            <p className="text-[16px] sm:text-[18px] font-bold text-center">
                                                {t("home.teachingExperience")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden justify-center sm:flex lg:flex xl:w-full">
                                <div className="flex h-[370px] w-[350px] cursor-pointer items-end justify-center rounded-xl bg-[#457B9D] hover:shadow-md sm:h-[340px] sm:w-[300px] lg:w-full">
                                    <img
                                        src={aiyA}
                                        alt=""
                                        className="h-[350px] w-[300px] rounded-xl object-cover sm:h-[320px] sm:w-[280px]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* package */}
                        <div className="mt-10">
                            <div className="flex justify-center">
                                <h2 className="pb-5 pt-5 text-[24px] font-extrabold text-[#1F2937] sm:text-[34px]">
                                    {t("home.membershipPackages")}
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 place-items-center gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-x-1">
                                <div className="flex h-[420px] w-[300px] cursor-pointer flex-col rounded-lg border border-[#CBD5E1] px-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:h-[380px] sm:w-[300px] md:w-[225px] lg:w-[290px]">
                                    <h2 className="my-4 text-center text-[24px] font-bold text-[#FB923C]">
                                        Gold
                                    </h2>
                                    <p className="mb-5 w-full text-[18px]">
                                        {t("home.freePackageDesc")}
                                    </p>
                                    <ul className="list-inside list-disc text-[18px]">
                                        <li>{t("home.membershipRegistration")}</li>
                                        <li>{t("home.registration")}</li>
                                        <li>{t("home.able")}</li>
                                    </ul>
                                    <div className="mb-5 flex h-full w-full items-end">
                                        <button className="h-[40px] w-full rounded-md border border-orange-400 py-1 text-[20px] font-bold text-orange-400">
                                            {t("home.tryNow")}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex h-[420px] w-[300px] cursor-pointer flex-col rounded-lg border border-orange-400 bg-[#FFEDD5] px-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:h-[380px] sm:w-[300px] md:w-[225px] lg:w-[290px]">
                                    <h2 className="my-4 text-center  text-[28px] sm:text-[28px] md:text-[30px] font-bold text-[#FB923C]">
                                        Free Package
                                    </h2>
                                    <p className="mb-5 w-full text-[18px]">
                                        {t("home.freePackageDesc")}
                                    </p>
                                    <ul className="list-inside list-disc text-[18px]">
                                        <li>{t("home.membershipRegistration")}</li>
                                        <li>{t("home.registration")}</li>
                                        <li>{t("home.able")}</li>
                                    </ul>
                                    <div className="mb-5 flex h-full w-full items-end">
                                        <button className="h-[40px] w-full rounded-md border border-orange-400 bg-orange-400 py-1 text-[20px] font-bold text-white">
                                            {t("home.tryNow")}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex h-[420px] w-[300px] cursor-pointer flex-col rounded-lg border border-[#CBD5E1] px-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:h-[380px] sm:w-[300px] md:w-[225px] lg:w-[290px]">
                                    <h2 className="my-4 text-center  text-[28px] sm:text-[28px] md:text-[30px] font-bold text-[#FB923C]">
                                        {t("home.premium")}
                                    </h2>
                                    <p className="mb-5 w-full text-[18px]">
                                        {t("home.freePackageDesc")}
                                    </p>
                                    <ul className="list-inside list-disc text-[18px]">
                                        <li>{t("home.membershipRegistration")}</li>
                                        <li>{t("home.registration")}</li>
                                        <li>{t("home.able")}</li>
                                    </ul>
                                    <div className="mb-5 flex h-full w-full items-end">
                                        <button className="h-[40px] w-full rounded-md border border-orange-400 py-1 text-[20px] font-bold text-orange-400">
                                            {t("home.tryNow")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-16 mt-14 text-center">
                            <h5 className="text-[16px] sm:text-[18px]">
                                {t("home.note")} <br className="sm:hidden" />
                                <span className="text-orange-400 sm:ml-2">
                                    {t("home.consultationNote")}
                                </span>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    );
};
