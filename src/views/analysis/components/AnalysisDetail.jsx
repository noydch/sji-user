import React, { useState } from "react";

// data countires
import { dataCountries } from "../dataCountires";

import bgOverlay from "../../../assets/images/bg.png";
import bgOverlay2 from "../../../assets/images/bg3.png";

import usNewyork from "../../../assets/images/countries/1_newyork.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../../components/Navbar";
import { useTranslation } from "react-i18next";

export const AnalysisDetail = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const cid = useParams();
    localStorage.setItem("cid", cid.id);

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
    const dataCompaniesEng = [
        {
            ui: {
                selectCompany: "Select Company",
                backToCompanies: "Back to Companies",
            },
            companies: [
                {
                    id: 1,
                    companyName: "Google",
                    country: "United States",
                    picture:
                        "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png",
                    detail:
                        "Google's IPO stock had an initial price of $85 per share. Google stock opened at $100.00 on its first day of trading on Nasdaq.",
                },
                {
                    id: 2,
                    companyName: "Apple",
                    country: "United States",
                    picture:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png",
                    detail:
                        "In this analysis, you will study the latest long-term price forecasts for Apple stock from analysts, including technical analysis of Apple's stock price.",
                },
                {
                    id: 3,
                    companyName: "Nvidia",
                    country: "United States",
                    picture:
                        "https://w7.pngwing.com/pngs/60/176/png-transparent-nvidia-hd-logo.png",
                    detail:
                        "Currently, Nvidia stock is trading at $126.57, representing a forward P/E of 48.78 times, which is relatively positive compared to its price over the past 12 months.",
                },
                {
                    id: 4,
                    companyName: "Microsoft",
                    country: "United States",
                    picture:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
                    detail:
                        "Recently, Microsoft has begun adjusting its business to connect more with data processing. They've opened up Excel to use Python, which requires cloud processing.",
                },
                {
                    id: 5,
                    companyName: "Meta (Facebook)",
                    country: "United States",
                    picture:
                        "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
                    detail:
                        "Recently, Meta has begun adjusting its business to connect more with data processing. They've opened up Excel to use Python, which requires cloud processing.",
                },
                {
                    id: 6,
                    companyName: "Amazon",
                    country: "United States",
                    picture:
                        "https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
                    detail:
                        "Recently, Amazon has begun adjusting its business to connect more with data processing. They've opened up Excel to use Python, which requires cloud processing.",
                },
                {
                    id: 7,
                    companyName: "Tesla",
                    country: "United States",
                    picture:
                        "https://cdn.logojoy.com/wp-content/uploads/20240110153809/Black-tesla-logo-600x600.png",
                    detail:
                        "Recently, Tesla has begun adjusting its business to connect more with data processing. They've opened up Excel to use Python, which requires cloud processing.",
                },
                {
                    id: 8,
                    companyName: "Pepsi",
                    country: "United States",
                    picture:
                        "https://upload.wikimedia.org/wikipedia/commons/6/68/Pepsi_2023.svg",
                    detail:
                        "Recently, Pepsi has begun adjusting its business to connect more with data processing. They've opened up Excel to use Python, which requires cloud processing.",
                },
                {
                    id: 9,
                    companyName: "ChatGPT",
                    country: "United States",
                    picture:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png",
                    detail:
                        "Recently, ChatGPT has begun adjusting its business to connect more with data processing. They've opened up Excel to use Python, which requires cloud processing.",
                },
                {
                    id: 10,
                    companyName: "Netflix",
                    country: "United States",
                    picture:
                        "https://static.vecteezy.com/system/resources/previews/017/396/814/original/netflix-mobile-application-logo-free-png.png",
                    detail:
                        "Recently, Netflix has begun adjusting its business to connect more with data processing. They've opened up Excel to use Python, which requires cloud processing.",
                },
                {
                    id: 11,
                    companyName: "Broadcom",
                    country: "United States",
                    picture:
                        "https://companieslogo.com/img/orig/AVGO-ceb477a4.png?t=1654488680",
                    detail:
                        "Recently, Broadcom has begun adjusting its business to connect more with data processing. They've opened up Excel to use Python, which requires cloud processing.",
                },
                {
                    id: 12,
                    companyName: "JP Morgan",
                    country: "United States",
                    picture: "https://media2.vault.com/14347007/jp-morgan.png",
                    detail:
                        "Recently, JP Morgan has begun adjusting its business to connect more with data processing. They've opened up Excel to use Python, which requires cloud processing.",
                },
            ],
        },
    ];
    const companiesData =
        i18n.language === "en" ? dataCompaniesEng[0].companies : dataCompanies;
    // kdk
    return (
        <Navbar>
            {dataCountries.map(
                (item, index) =>
                    item.id == cid.id && (
                        <div
                            key={index}
                            className="relative z-0 w-full before:absolute before:-z-[1] before:h-[200px] before:w-full before:bg-[#003049] md:before:h-[350px]"
                        >
                            <img
                                src={bgOverlay2}
                                className="absolute hidden h-[350px] w-full bg-cover bg-bottom md:block"
                            />
                            <div className="container relative z-50 mx-auto h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
                                <div className="relative flex h-[150px] w-full items-center sm:justify-start md:h-[300px] md:items-end">
                                    <div className="left-2 top-8 mb-3 flex w-full items-center justify-center gap-x-4 font-bold text-[#F97316] sm:absolute sm:bottom-4 sm:text-[50px] md:justify-start xl:bottom-10 xl:items-end">
                                        <div className="w-[60px] rounded-full border-2 md:w-[70px]">
                                            <img src={item.flag} alt="" className="h-full w-full" />
                                        </div>
                                        <h1 className="text-[30px] font-bold text-[#F97316] sm:text-[34px] md:text-[50px]">
                                            {item.name}
                                        </h1>
                                    </div>
                                </div>
                                <div className="mb-10 h-full w-full bg-white sm:mb-20 md:mb-14">
                                    <h1 className="pb-4 text-center text-[35px] font-extrabold text-black sm:pb-10 sm:pt-7">
                                        {t("analysis.selectCompany")}
                                    </h1>
                                    <div className="grid grid-cols-2 place-items-center gap-y-3 sm:grid-cols-3 sm:gap-y-5 md:grid-cols-4 md:gap-y-5 lg:gap-y-10 xl:gap-y-7">
                                        {companiesData.map((item, index) => (
                                            <Link
                                                to={`${item.companyName}`}
                                                key={index}
                                                className="flex w-[150px] flex-col items-center gap-y-[2px] rounded-lg p-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:w-[180px] sm:px-5 sm:py-3 md:w-[160px] md:px-3 lg:w-[210px] lg:px-5 xl:w-[250px]"
                                            >
                                                <div className="flex flex-col items-center justify-center">
                                                    <img
                                                        src={item.picture}
                                                        alt=""
                                                        className="h-[80px] w-full object-contain sm:h-[100px] sm:w-[100px] md:h-[70px] md:w-[60px] lg:h-[100px]"
                                                    />
                                                    <h2 className="mt-2 text-center text-[17px] font-semibold text-[#F97316] md:text-[16px] lg:text-[20px]">
                                                        {item.companyName}
                                                    </h2>
                                                </div>
                                                <p className="mt-2 line-clamp-2 text-[14px] font-normal text-black sm:text-[14px]">
                                                    {item.detail}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5 flex items-center justify-center sm:mb-20 sm:mt-10 md:mt-3 lg:mt-10">
                                <button
                                    onClick={handleBackPage}
                                    className="rounded-md bg-deep-orange-500 px-14 py-1.5 text-[18px] text-white"
                                >
                                    {t("analysis.backToCompanies")}
                                </button>
                            </div>
                        </div>
                    ),
            )}
        </Navbar>
    );
};
