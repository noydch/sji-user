import React from "react";

import { Navbar } from "../../components/Navbar";

// data countires
import { dataCountries } from "./dataCountires";

import bgOverlay from "../../assets/images/bg.png";
import bgOverlay2 from "../../assets/images/bg3.png";

import usNewyork from "../../assets/images/countries/1_newyork.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Analysiss = () => {
  const { t } = useTranslation();
  return (
    <Navbar>
      <div className="relative z-0 w-full before:absolute before:-z-[1] before:h-[200px] before:w-full before:bg-[#003049] sm:before:h-[350px]">
        <img
          src={bgOverlay2}
          className="absolute hidden h-[350px] w-full bg-cover bg-bottom sm:block"
        />
        <div className="container relative z-50 mx-auto h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl">
          <div className="relative flex h-[150px] items-center justify-center sm:h-[280px]">
            <h1 className="bottom-4 left-2 mb-3 flex text-[40px] font-bold text-[#F97316] sm:absolute sm:text-[50px]">
              {t("analysis.title")}
            </h1>
          </div>
          <div className="mb-10 h-full w-full bg-white">
            <h1 className="p-4 text-center text-[35px] font-extrabold text-black sm:pb-10 sm:pt-7">
              {t("analysis.foreignAnalysis")}
            </h1>
            <div className="grid grid-cols-2 place-items-center gap-3 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 xl:gap-y-5">
              {dataCountries.map((item, index) => {
                return (
                  <Link
                    to={`country/${item.id}`}
                    key={index}
                    className="ease before:content-['*] relative z-0 flex h-[100px] w-[160px] cursor-pointer items-center justify-center rounded bg-cover bg-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-300 before:absolute before:-z-[1] before:h-full before:w-full before:rounded before:bg-black before:opacity-30 hover:scale-[1.02] sm:h-[180px] sm:w-[200px] md:h-[140px] lg:h-[160px] lg:w-[220px] xl:w-[270px]"
                    style={{ backgroundImage: `url(${item.locationImg})` }}
                  >
                    <div className="flex flex-col items-center leading-loose">
                      <img src={item.flag} alt="" className="w-[50px]" />
                      <h4 className="text-[15px] font-semibold sm:text-[20px]">
                        {item.name}
                      </h4>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};
