import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { FiChevronRight } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import { GoTriangleDown } from "react-icons/go";

export const AnalysisFinancial = () => {
  const option = {
    xAxis: {
      type: "category",
      data: ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017"],
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}%",
      },
      max: 2,
      min: 0,
    },
    tooltip: {
      trigger: "axis",
      formatter: "{b}: {c}%",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#283b56",
        },
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "15%", // Increased bottom margin to accommodate legend
      containLabel: true,
    },
    legend: {
      show: true,
      bottom: "0%", // Positioned at the bottom
      left: "center",
      itemWidth: 15,
      itemHeight: 15,
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    series: [
      {
        name: "ເງິນປັນຜົນ/ຫຸ້ນ",
        stack: "Min Max",
        data: [1.8, 0.7, 1.5, 1, 1.6, 0.3, 2, 1.5],
        type: "bar",
        barWidth: "50%",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 1, color: "#FFF599" },
            { offset: 0.6, color: "#FB923C" },
          ]),
        },
        label: {
          show: true,
          position: "top",
          formatter: "{c}%",
          fontSize: 12,
          distance: 5,
          valueAnimation: true,
        },
      },
    ],
    animationDuration: 0,
    animationDurationUpdate: 2000,
    animationEasing: "linear",
    animationEasingUpdate: "linear",
  };
  return (
    <div className="">
      <div className="h-[250px] rounded-lg pt-5 shadow-md sm:h-[290px] sm:w-full sm:px-5 md:h-[150px] lg:h-[160px]">
        <ul className="grid grid-cols-2 place-items-center gap-y-3 sm:grid-cols-2 sm:gap-y-4 md:grid-cols-4 md:gap-x-10">
          <li className="flex h-[100px] w-[150px] flex-col items-center justify-center rounded-lg bg-[#BFDBFE] px-4 text-black shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] sm:h-[120px] sm:w-[240px] md:w-[160px] lg:w-[210px]">
            <h1 className="text-[24px] font-bold">0.25 USD</h1>
            <hr className="border-1 mb-2 w-full border-[#64748B]" />
            <p className="font-medium">ຈຳນວນເງິນປັນຜົນ</p>
          </li>
          <li className="flex h-[100px] w-[150px] flex-col items-center justify-center rounded-lg bg-[#F5D0FE] px-4 text-black shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] sm:h-[120px] sm:w-[240px] md:w-[160px] lg:w-[210px]">
            <h1 className="text-[24px] font-bold">0.5 %</h1>
            <hr className="border-1 mb-2 w-full border-[#64748B]" />
            <p className="text-center font-medium">
              ອັດຕາເງິນປັນຜົນເປັນເປີເຊັນ
            </p>
          </li>
          <li className="flex h-[100px] w-[150px] flex-col items-center justify-center rounded-lg bg-[#FECACA] px-4 text-black shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] sm:h-[120px] sm:w-[240px] md:w-[160px] lg:w-[210px]">
            <h1 className="text-[24px] font-bold">0.22 USD</h1>
            <hr className="border-1 mb-2 w-full border-[#64748B]" />
            <p className="font-medium">ປັນຜົນຄາດຄະເນ</p>
          </li>
          <li className="flex h-[100px] w-[150px] flex-col items-center justify-center rounded-lg bg-[#FED7AA] px-4 text-black shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] sm:h-[120px] sm:w-[240px] md:w-[160px] lg:w-[210px]">
            <h1 className="text-[24px] font-bold">15 USD</h1>
            <hr className="border-1 mb-2 w-full border-[#64748B]" />
            <p className="font-medium">ລາຄາເໝາະສົມ</p>
          </li>
        </ul>
      </div>

      <div className="mt-10 rounded-lg px-1 py-4 shadow-md sm:px-8">
        <h1 className="font-semibold text-gray-800 sm:text-[20px]">
          ອັດຕາສ່ວນທາງການເງິນ ແລະ ເງິນປັນຜົນ
        </h1>
        <div className="h-[350px] w-full">
          <div>
            <ReactECharts option={option} className="h-full w-full" />
          </div>
        </div>
        <div className="mt-10 overflow-x-auto pb-10">
          <table className="w-max min-w-full sm:w-full sm:min-w-max">
            <thead>
              <tr className="w-full border-b-2 text-gray-500">
                <th className="w-[200px] px-5 py-4 text-start text-[15px] font-medium sm:w-[270px] md:w-[300px]">
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
                <th className="w-[100px] py-4 text-[16px] font-semibold">
                  2018
                </th>
                <th className="w-[100px] py-4 text-[16px] font-semibold">
                  2017
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="relative h-[70px] w-full border-b-2 text-[#003049] after:absolute after:left-[-20px] after:top-[50%] after:z-50 after:h-[90%] after:-translate-y-1/2 after:border-l-[15px] after:border-deep-orange-500 after:content-['']">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-bold">ເງິນປັນຜົນ/ຫຸ້ນ</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-semibold">1,9</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  0,7
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-semibold">1,5</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  1,0
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  1,7
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  0,5
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  2,0
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  1,5
                </td>
              </tr>

              <tr className="relative h-[70px] w-full border-b-2 text-[#003049] after:absolute after:left-[-20px] after:top-[50%] after:z-50 after:h-[90%] after:-translate-y-1/2 after:border-l-[15px] after:border-white after:content-['']">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-bold">ອັດຕາເງິນປັນຜົນເປັນເປີເຊັນ %</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-semibold">1,9</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  0,7
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-semibold">1,5</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  1,0
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  1,7
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  0,5
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  2,0
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  1,5
                </td>
              </tr>
              <tr className="relative h-[70px] w-full border-b-2 text-[#003049] after:absolute after:left-[-20px] after:top-[50%] after:z-50 after:h-[90%] after:-translate-y-1/2 after:border-l-[15px] after:border-white after:content-['']">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-bold">ອັດຕາການຈ່າຍເງີນ</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-semibold">1,9</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  0,7
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-semibold">1,5</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  1,0
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  1,7
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  0,5
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  2,0
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  1,5
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10 rounded-lg px-1 py-4 shadow-md sm:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-[20px] font-bold text-deep-orange-500">
            Financial Ratios
          </h1>
          <button className="flex h-[35px] w-[100px] items-center justify-around rounded-md border-2 border-[#f97316] bg-[#fff] text-[18px] font-medium text-[#f97316]">
            <span>ປະຈຳປີ</span>
            <GoTriangleDown />
          </button>
        </div>

        <div className="mt-10 overflow-x-auto pb-10">
          <table className="w-max min-w-full sm:w-full sm:min-w-max">
            <thead>
              <tr className="w-full border-b-2 text-gray-500">
                <th className="w-[200px] px-5 py-4 text-start text-[15px] font-medium sm:w-[270px] md:w-[300px]">
                  ສະກຸນເງິນ: USD
                </th>
                <th className="w-[120px] py-4 text-[16px] font-semibold sm:text-[15px] sm:font-medium">
                  2024
                </th>
                <th className="w-[120px] py-4 text-[16px] font-semibold sm:text-[15px] sm:font-medium">
                  2023
                </th>
                <th className="w-[120px] py-4 text-[16px] font-semibold sm:text-[15px] sm:font-medium">
                  2022
                </th>
                <th className="w-[120px] py-4 text-[16px] font-semibold sm:text-[15px] sm:font-medium">
                  2021
                </th>
                <th className="w-[120px] py-4 text-[16px] font-semibold sm:text-[15px] sm:font-medium">
                  2020
                </th>
                <th className="w-[120px] py-4 text-[16px] font-semibold sm:text-[15px] sm:font-medium">
                  2019
                </th>
                <th className="w-[120px] py-4 text-[16px] font-semibold sm:text-[15px] sm:font-medium">
                  2018
                </th>
                <th className="w-[120px] py-4 text-[16px] font-semibold sm:text-[15px] sm:font-medium">
                  2017
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-[70px] w-full border-b-2 text-[#003049] sm:h-[50px] md:h-[70px]">
                <td
                  colSpan={9}
                  className="w-[100px] bg-[#4E7D98] pl-5 text-start text-[18px] font-medium text-white sm:text-[16px] md:text-[18px]"
                >
                  <p className="font-bold">ອັດຕາສ່ວນສະພາບຄ່ອງ</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-bold">ອັດຕາສ່ວນສະພາບຄ່ອງ</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-semibold">
                  <p className="font-bold">ອັດຕາສ່ວນດ່ວນ</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-semibold">ອັດຕາສ່ວນເງິນສົດ</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049] sm:h-[50px] md:h-[70px]">
                <td
                  colSpan={9}
                  className="w-[100px] bg-[#4E7D98] pl-5 text-start text-[18px] font-medium text-white sm:text-[16px] md:text-[18px]"
                >
                  <p className="font-bold">ອັດຕາສ່ວນຄວາມສາມາດໃນການທຳກຳໄລ</p>
                </td>
              </tr>
              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-semibold">ອັດຕາກຳໄລຂັ້ນຕົ້ນ</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-semibold">ອັດຕາກຳໄລຈາກການດຳເນີນງານ</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">18.41651%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">18.41651%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">18.41651%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">18.41651%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">18.41651%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">18.41651%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">18.41651%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">18.41651%</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-semibold">ອັດຕາກຳໄລກ່ອນຫັກພາສິ</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-semibold">Profit Margin</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-semibold">ROE ກ່ອນຫັກພາສີ</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-semibold">ຫລັງຫັກພາສີ ROE</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
