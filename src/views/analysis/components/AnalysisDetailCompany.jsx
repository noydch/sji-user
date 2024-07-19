import React, { useState } from "react";

// data countires
import { dataCountries } from "../dataCountires";

import bgOverlay from "../../../assets/images/bg.png";
import bgOverlay2 from "../../../assets/images/bg3.png";

import usNewyork from "../../../assets/images/countries/1_newyork.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../../components/Navbar";

import { IoSearchOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import { AnalysisFinancial } from "./AnalysisFinancial";
import { HistoryCompany } from "./HistoryCompany";
import { useTranslation } from "react-i18next";
import GraphChart from "./GraphChart";

export const AnalysisDetailCompany = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [showRecieve, setShowRecieve] = useState("Income Statement");
    const [showAnalysis, setShowAnalysis] = useState("ປະຫວັດບໍລິສັດ");
    const cName = useParams();
    // const cid = localStorage.getItem('cid')

    const handleBackPage = () => {
        navigate(-1);
    };

    const dataCompanies = [
        {
            id: 1,
            companyName: "Google",
            country: "United States",
            picture:
                "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png",
            detail:
                "ຮຸ້ນ IPO ຂອງ Google ມີລາຄາເລີ່ມຕົ້ນທີ່ 85$ຕໍ່ຮຸ້ນ ຮຸ້ນGoogle ເປີດຂາຍວັນແລກໃນ Nasdaq ທີ່ 100.00",
        },
        {
            id: 2,
            companyName: "Apple",
            country: "United States",
            picture:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png",
            detail:
                "ໃນບົດວິເຄາະນີ້ ເຈົ້າຈະໄດ້ສຶກສາລາຄາຄາດການຂອງຮຸ້ນ Apple ໃນໄລຍະຍາວລ່າສຸດຈາກນັກວິເຄາະ ລວມເຖິງການວິເຄາະເຊີງເທັກນິກຂອງລາຄາຮຸ້ນ Apple",
        },
        {
            id: 3,
            companyName: "Nvidia",
            country: "United States",
            picture:
                "https://w7.pngwing.com/pngs/60/176/png-transparent-nvidia-hd-logo.png",
            detail:
                "ປັດຈຸບັນຮຸ້ນ Nvidia ຊື້ຂາຍຢູ່ທີ່ລາຄາ 126.57$ ຄິດເປັນ PE ລ່ວງໜ້າ 48.78ເທົ່າ ເຊິ່ງເປັນມູນຄ່າທີ່ຄ່ອນຂ້າງຕີງຕົວບວກກັບລາຄາໃນຮອບ12ເດືອນທີ່ຜ່ານມາ",
        },
        {
            id: 4,
            companyName: "Microsoft",
            country: "United States",
            picture:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
            detail:
                "ລ່າສຸດຮຸ້ນ Microsoft ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ",
        },
        {
            id: 5,
            companyName: "Meta (Facebook)",
            country: "United States",
            picture:
                "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
            detail:
                "ລ່າສຸດຮຸ້ນ Meta ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ",
        },
        {
            id: 6,
            companyName: "Amazon",
            country: "United States",
            picture:
                "https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
            detail:
                "ລ່າສຸດຮຸ້ນ Amazon ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ",
        },
        {
            id: 7,
            companyName: "Tesla",
            country: "United States",
            picture:
                "https://cdn.logojoy.com/wp-content/uploads/20240110153809/Black-tesla-logo-600x600.png",
            detail:
                "ລ່າສຸດຮຸ້ນ Tesla ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ",
        },
        {
            id: 8,
            companyName: "Pepsi",
            country: "United States",
            picture:
                "https://upload.wikimedia.org/wikipedia/commons/6/68/Pepsi_2023.svg",
            detail:
                "ລ່າສຸດຮຸ້ນ Pepsi ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ",
        },
        {
            id: 9,
            companyName: "ChatGPT",
            country: "United States",
            picture:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png",
            detail:
                "ລ່າສຸດຮຸ້ນ ChatGPT ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ",
        },
        {
            id: 10,
            companyName: "Netflix",
            country: "United States",
            picture:
                "https://static.vecteezy.com/system/resources/previews/017/396/814/original/netflix-mobile-application-logo-free-png.png",
            detail:
                "ລ່າສຸດຮຸ້ນ ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ",
        },
        {
            id: 11,
            companyName: "Broadcom",
            country: "United States",
            picture:
                "https://companieslogo.com/img/orig/AVGO-ceb477a4.png?t=1654488680",
            detail:
                "ລ່າສຸດຮຸ້ນ ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ",
        },
        {
            id: 11,
            companyName: "JP Morgan",
            country: "United States",
            picture: "https://media2.vault.com/14347007/jp-morgan.png",
            detail:
                "ລ່າສຸດຮຸ້ນ ເລີ່ມປັບທຸລະກິດໃຫ້ເຊື່ອມຕໍ່ກັບການປະມວນຜົນຂໍ້ມູນເພີ່ມຂຶ້ນ ມີການເປີດໃຫ້ Excel ນຳ Python ມາໃຊ້ງານ ເຊິ່ງຕ້ອງປະມວນຜົນຜ່ານຄລາວ",
        },
    ];
    return (
        <Navbar>
            {dataCompanies.map(
                (item, index) =>
                    item.companyName == cName.company && (
                        <div
                            key={index}
                            className="relative z-0 w-full before:absolute before:-z-[1] before:h-[350px] before:w-full before:bg-[#003049] sm:before:h-[300px] md:before:h-[320px]"
                        >
                            <img
                                src={bgOverlay2}
                                className="absolute hidden h-[350px] md:h-[320px] sm:h-[300px] w-full bg-cover bg-bottom sm:block sm:opacity-50"
                            />
                            <div className="container relative z-50 mx-auto h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
                                <div className="pt-0 flex h-full flex-col items-center justify-center sm:relative sm:h-[250px] md:h-[280px] md:mt-0 md:justify-center">
                                    <div className="mb-5 mt-3 flex w-full items-center justify-center gap-x-4 font-bold text-[#F97316] sm:absolute sm:left-[50%] sm:top-5 sm:mt-5 sm:-translate-x-1/2 sm:flex-row sm:justify-normal sm:text-[50px] md:top-14 md:mb-5 md:mt-0 lg:top-10">
                                        <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-white p-4 sm:h-[50px] sm:w-[50px] sm:p-2">
                                            <img
                                                src={item.picture}
                                                alt=""
                                                className="w-[50px] sm:w-[40px]"
                                            />
                                        </div>
                                        <h1 className="text-[20px] font-semibold text-[#fff] sm:text-[24px] md:text-[28px]">
                                            {i18n.language == "la" && t("analysis.companyName")}{" "}
                                            {item.companyName}
                                        </h1>
                                    </div>
                                    <div className="mb-5 md:mb-0 lg:mb-5 xl:mb-0 flex flex-col items-center xl:justify-end gap-x-3 sm:mt-20 sm:w-full md:flex-col xl:flex-col">
                                        <div className="relative w-full md:mb-5 lg:w-[450px] xl:w-[600px] xl:mb-5">
                                            <div className="absolute left-[6px] top-[50%] flex h-[26px] w-[26px] -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-[#F97316] text-[20px] text-[#F97316]">
                                                <IoSearchOutline />
                                            </div>
                                            <input
                                                type="text"
                                                className="h-[35px] w-full rounded-md py-1 pl-9 text-[16px] text-black outline-none placeholder:text-[14px] sm:text-[18px] sm:h-[40px] lg:w-[380px] xl:w-[600px] md:pl-10"
                                                placeholder={t("analysis.searchPlaceholder")}
                                            />
                                            <button className="absolute right-0 h-[35px] rounded-r-md bg-[#F97316] px-5 sm:h-[40px]">
                                                {t("analysis.searchButton")}
                                            </button>
                                        </div>
                                        <div className="mt-5 grid grid-cols-2 gap-2 sm:flex sm:items-center sm:justify-between md:mt-0  sm:w-full xl:gap-x-3 xl:flex">
                                            <button
                                                onClick={() => setShowAnalysis("ປະຫວັດບໍລິສັດ")}
                                                className={` lg:w-[180px] lg:py-2 xl:w-full ${i18n.language == "en" ? "sm:px-4.5 sm:text-[14px] md:py-[2px] md:h-[40px] md:px-3.5 md:text-[12px] md:font-normal md:leading-[1.2] lg:py-2" : ""} rounded-md px-5 py-2 text-[16px] font-normal md:py-0 md:text-[16px] ${showAnalysis === "ປະຫວັດບໍລິສັດ" ? "bg-[#f97316]" : "bg-white text-[#F97316]"}`}
                                            >
                                                {t("analysis.companyHistory")}
                                            </button>
                                            <button
                                                onClick={() => setShowAnalysis("ງົບການເງິນ")}
                                                className={` lg:w-[200px] lg:py-2 xl:w-full ${i18n.language == "en" ? "sm:px-4.5 sm:text-[14px] md:py-[2px] md:h-[40px] md:px-3.5 md:text-[12px] md:font-normal md:leading-[1.2] lg:py-2" : ""} rounded-md px-5 py-2 text-[16px] font-normal md:py-0 md:text-[16px] ${showAnalysis === "ງົບການເງິນ" ? "bg-[#f97316]" : "bg-white text-[#F97316]"}`}
                                            >
                                                {t("analysis.financialStatements")}
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setShowAnalysis("ອັດຕາສ່ວນທາງການເງິນ ແລະເງິນປັນຜົນ")
                                                }
                                                className={` lg:w-[280px] lg:py-2 xl:w-full ${i18n.language == "en" ? "sm:px-4.5 sm:text-[14px] md:py-[2px] md:h-[40px] md:px-3.5 md:text-[12px] md:font-normal md:leading-[1.2] lg:py-2" : ""} rounded-md px-2 py-2 text-[16px] font-normal md:py-0 md:text-[16px] lg:col-span-1 ${showAnalysis === "ອັດຕາສ່ວນທາງການເງິນ ແລະເງິນປັນຜົນ" ? "bg-[#f97316]" : "bg-white text-[#F97316]"}`}
                                            >
                                                {t("analysis.financialRatiosAndDividends")}
                                            </button>
                                            <button
                                                onClick={() => setShowAnalysis("ເບິ່ງກຣາຟ")}
                                                className={` lg:w-[200px] lg:py-2 xl:w-full ${i18n.language == "en" ? "sm:px-4.5 sm:text-[14px] md:py-[2px] md:h-[40px] md:px-3.5 md:text-[12px] md:font-normal md:leading-[1.2] lg:py-2" : ""} rounded-md px-5 py-2 text-[16px] font-normal md:py-0 md:text-[16px] ${showAnalysis === "ເບິ່ງກຣາຟ" ? "bg-[#f97316]" : "bg-white text-[#F97316]"}`}
                                            >
                                                {t("analysis.viewGraph")}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {showAnalysis === "ປະຫວັດບໍລິສັດ" && (
                                    <div className=" my-10 sm:my-0">
                                        <HistoryCompany companyName={item.companyName} />
                                    </div>
                                )}

                                {showAnalysis === "ງົບການເງິນ" && (
                                    <div className="mb-20 mt-10 h-full w-full bg-white sm:mt-0">
                                        <div className="flex flex-col items-center justify-between sm:mt-10 sm:flex-row sm:px-0 md:w-full md:justify-between md:px-0">
                                            <div className="mb-3 flex w-full items-center justify-between gap-x-3 sm:mb-0 md:gap-x-2">
                                                <button
                                                    onClick={() => setShowRecieve("Income Statement")}
                                                    className={`rounded-md px-2 py-1 text-[12px] font-medium sm:h-[35px] sm:w-[180px] sm:px-5 sm:text-[14px] md:h-[40px] md:w-[200px] md:px-2 ${showRecieve == "Income Statement" ? "bg-[#f97316]" : "border-2 border-[#f97316] text-[#f97316]"}`}
                                                >
                                                    Income Statement
                                                </button>
                                                <button
                                                    onClick={() => setShowRecieve("Balance Sheet")}
                                                    className={`rounded-md px-2 py-1 text-[12px] font-medium sm:h-[35px] sm:w-[150px] sm:px-5 sm:text-[14px] md:h-[40px] md:w-[180px] md:px-2 ${showRecieve == "Balance Sheet" ? "bg-[#f97316]" : "border-2 border-[#f97316] text-[#f97316]"}`}
                                                >
                                                    Balance Sheet
                                                </button>
                                                <button
                                                    onClick={() => setShowRecieve("Cash Flow")}
                                                    className={`rounded-md px-2 py-1 text-[12px] font-medium sm:h-[35px] sm:w-[130px] sm:px-5 sm:text-[14px] md:h-[40px] md:w-[160px] md:px-2 ${showRecieve == "Cash Flow" ? "bg-[#f97316]" : "border-2 border-[#f97316] text-[#f97316]"}`}
                                                >
                                                    Cash Flow
                                                </button>
                                            </div>
                                            <div className="flex w-full justify-end">
                                                <button className="flex w-[100px] items-center justify-around rounded-md border-2 border-[#f97316] bg-[#fff] text-[18px] font-medium text-[#f97316] sm:h-[35px] md:h-[40px]">
                                                    <span>ປະຈຳປີ</span>
                                                    <GoTriangleDown />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-8 w-full rounded-lg p-6 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                                            {showRecieve === "Income Statement" && (
                                                <div className="overflow-x-auto">
                                                    <table className="w-max min-w-full sm:w-full">
                                                        <thead>
                                                            <tr className="w-full border-b-2 text-gray-500">
                                                                <th className="w-[150px] px-2 py-4 text-start text-[15px] font-medium sm:w-[400px] sm:px-5">
                                                                    ສະກຸນເງິນ: USD
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2024
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2023
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2022
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2021
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2020
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2019
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                                                                <td className="sm w-[150px] px-2 text-start text-[15px] font-semibold sm:w-[400px] sm:px-5">
                                                                    ລາຍໄດ້ລວມ
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-red-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-red-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-red-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                                                                <td className="w-[150px] px-2 py-4 text-start text-[15px] font-semibold sm:w-[400px] sm:px-5">
                                                                    <div className="flex items-center gap-x-1">
                                                                        <FiChevronRight size={18} />
                                                                        ລາຍລະອຽດພື້ນຖານ
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                                                                <td className="w-[150px] px-2 py-4 text-start text-[15px] font-semibold sm:w-[400px] sm:px-5">
                                                                    ກຳໄລຂັ້ນຕ່ຳ
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-red-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                                                                <td className="w-[150px] px-2 py-4 text-start text-[15px] font-semibold sm:w-[400px] sm:px-5">
                                                                    <div className="flex items-center gap-x-1">
                                                                        <FiChevronRight size={18} />
                                                                        ລາຍລະອຽດ
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                                                                <td className="w-[150px] px-2 py-4 text-start text-[15px] font-semibold sm:w-[400px] sm:px-5">
                                                                    ລາຍໄດ້ຈາກການດຳເນີນງານ
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-red-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                                                                <td className="w-[150px] px-2 py-4 text-start text-[15px] font-semibold sm:w-[400px] sm:px-5">
                                                                    <div className="flex items-center gap-x-1">
                                                                        <FiChevronRight size={18} />
                                                                        ລາຍລະອຽດ
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                                                                <td className="w-[150px] px-2 py-4 text-start text-[15px] font-semibold sm:w-[400px] sm:px-5">
                                                                    ລາຍໄດ້ກ່ອນຫັກພາສີ
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-red-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="h-[70px] w-full text-[#003049]"></tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}

                                            {showRecieve === "Balance Sheet" && (
                                                <div className="overflow-x-auto">
                                                    <table className="w-max min-w-full sm:w-full">
                                                        <thead>
                                                            <tr className="w-full border-b-2 text-gray-500">
                                                                <th className="w-[150px] px-2 py-4 text-start text-[15px] font-medium sm:w-[400px] sm:px-5">
                                                                    ສະກຸນເງິນ: USD
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2024
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2023
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2022
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2021
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2020
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2019
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                                                                <td className="w-[150px] px-2 text-start text-[15px] font-semibold sm:w-[400px] sm:px-5">
                                                                    ລາຍໄດ້ລວມ
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-red-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-red-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-red-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                                                                <td className="w-[150px] px-2 py-4 text-start text-[15px] font-semibold sm:w-[400px] sm:px-5">
                                                                    <div className="flex items-center gap-x-1">
                                                                        <FiChevronRight size={18} />
                                                                        ລາຍລະອຽດພື້ນຖານ
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                                                                <td className="w-[150px] px-2 py-4 text-start text-[15px] font-semibold sm:w-[400px] sm:px-5">
                                                                    ກຳໄລຂັ້ນຕ່ຳ
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-red-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                                                                <td className="w-[150px] px-2 py-4 text-start text-[15px] font-semibold sm:w-[400px] sm:px-5">
                                                                    <div className="flex items-center gap-x-1">
                                                                        <FiChevronRight size={18} />
                                                                        ລາຍລະອຽດ
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                                                                <td className="w-[150px] px-2 py-4 text-start text-[15px] font-semibold sm:w-[400px] sm:px-5">
                                                                    ລາຍໄດ້ຈາກການດຳເນີນງານ
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-red-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="h-[70px] w-full text-[#003049]"></tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}

                                            {showRecieve === "Cash Flow" && (
                                                <div className="overflow-x-auto">
                                                    <table className="w-max min-w-full sm:w-full">
                                                        <thead>
                                                            <tr className="w-full border-b-2 text-gray-500">
                                                                <th className="w-[150px] px-2 py-4 text-start text-[15px] font-medium sm:w-[400px] sm:px-5">
                                                                    ສະກຸນເງິນ: USD
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2024
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2023
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2022
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2021
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2020
                                                                </th>
                                                                <th className="w-[100px] py-4 text-[16px] font-semibold">
                                                                    2019
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                                                                <td className="w-[150px] px-2 text-start text-[15px] font-semibold sm:w-[400px] sm:px-5">
                                                                    ລາຍໄດ້ລວມ
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-red-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-red-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-red-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                        <span className="text-[14px] font-semibold text-green-500">
                                                                            +30.1 %
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                                                                <td className="w-[150px] px-2 py-4 text-start text-[15px] font-semibold sm:w-[400px] sm:px-5">
                                                                    <div className="flex items-center gap-x-1">
                                                                        <FiChevronRight size={18} />
                                                                        ລາຍລະອຽດພື້ນຖານ
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                                                                <td className="w-[150px] px-2 py-4 text-start text-[15px] font-semibold sm:w-[400px] sm:px-5">
                                                                    <div className="flex items-center gap-x-1">
                                                                        <FiChevronRight size={18} />
                                                                        ລາຍລະອຽດ
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex items-center justify-center">
                                                                        <MdLockOutline className="text-[20px] text-gray-500" />
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                                <td className="w-[100px] text-center text-[15px] font-medium">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <p className="font-semibold">75.15 B</p>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="h-[70px] w-full text-[#003049]"></tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}
                                        </div>
                                        <div className="mt-20 flex items-center justify-center">
                                            <button
                                                onClick={handleBackPage}
                                                className="rounded-md bg-deep-orange-500 px-14 py-1.5 text-[18px]"
                                            >
                                                ກັບຄືນໜ້າບໍລິສັດ
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {showAnalysis === "ອັດຕາສ່ວນທາງການເງິນ ແລະເງິນປັນຜົນ" && (
                                    <div className="mb-20 h-full w-full bg-white">
                                        <div className="mt-10 sm:mt-16 sm:px-5 md:mt-10 md:px-2">
                                            <AnalysisFinancial />
                                        </div>

                                        <div className="mt-20 flex items-center justify-center">
                                            <button
                                                onClick={handleBackPage}
                                                className="rounded-md bg-deep-orange-500 px-14 py-1.5 text-[18px]"
                                            >
                                                ກັບຄືນໜ້າບໍລິສັດ
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* candlestick */}
                                {
                                    showAnalysis === 'ເບິ່ງກຣາຟ' && (
                                        <div className=" my-10 sm:my-0">
                                            <GraphChart />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ),
            )}
        </Navbar>
    );
};
