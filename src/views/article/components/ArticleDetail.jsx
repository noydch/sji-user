import React from "react";
import { Navbar } from "../../../components/Navbar";

import bgOverlay2 from "../../../assets/images/bg3.png";
import { useNavigate } from "react-router-dom/dist";
import { ImArrowLeft } from "react-icons/im";

export const ArticleDetail = () => {
  const navigate = useNavigate();
  return (
    <Navbar>
      <div>
        <div className="relative z-0 h-[200px] w-full before:absolute before:-z-[1] before:h-[200px] before:w-full before:bg-[#003049] sm:h-[300px] sm:before:h-[300px]">
          <img
            src={bgOverlay2}
            className="absolute hidden h-[350px] w-full bg-cover bg-bottom sm:block sm:h-[300px]"
          />
          <div className="container relative z-50 mx-auto h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
            <div className="relative flex h-[150px] items-center justify-center sm:h-[200px]">
              <h1 className="text-[40px] font-bold sm:hidden md:text-[50px]">
                ບົດຄວາມ
              </h1>
              <div
                onClick={() => navigate(-1)}
                className="absolute bottom-4 left-2 hidden cursor-pointer items-center hover:text-[#F97316] sm:bottom-0 sm:left-0 sm:flex sm:w-full sm:justify-center"
              >
                <ImArrowLeft className="mr-5 text-[30px] sm:hidden" />
                <h1 className="text-[40px] font-bold sm:text-[50px]">
                  ບົດຄວາມ
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto h-full w-full max-w-[340px] bg-white sm:mb-20 sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
          <h1 className="text-[24px] font-bold text-black sm:pb-5 sm:pt-7 sm:font-black md:pb-10 md:pt-7 md:text-[30px]">
            TIPS CHOICE BEST AGENCY For <br /> House Decoration
          </h1>
          <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-2">
            <div className="mt-5 rounded-xl px-2 shadow-[6px_6px_13px_4px_#00000024] sm:mb-10 sm:mt-0 sm:h-[280px] sm:w-[300px] sm:px-0 xl:w-[450px]">
              <img
                src="https://www.kaohoon.com/wp-content/uploads/2022/07/2022-07-27_%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%9C8%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87.jpg"
                alt=""
                className="rounded-xl sm:h-[280px] sm:w-[300px] xl:w-full"
              />
            </div>
            <div className="xl: h-full flex-col xl:flex xl:items-center xl:justify-start">
              <p className="mb-5 text-[14px] font-medium md:text-[16px] xl:text-[20px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p className="mb-5 text-[14px] font-medium md:text-[16px] xl:text-[20px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div>
            <p className="mb-5 text-[14px] font-medium md:text-[16px] xl:text-[20px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="mb-5 text-[14px] font-medium md:text-[16px] xl:text-[20px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="mb-5 text-[14px] font-medium md:text-[16px] xl:text-[20px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="mb-5 text-[14px] font-medium md:text-[16px] xl:text-[20px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="mb-5 text-[14px] font-medium md:text-[16px] xl:text-[20px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="mb-5 text-[14px] font-medium md:text-[16px] xl:text-[20px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="mb-5 text-[14px] font-medium md:text-[16px] xl:text-[20px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </Navbar>
  );
};
