import React from "react";
import { useTranslation } from "react-i18next";

export const HistoryCompany = ({ companyName }) => {
    const { t, i18n } = useTranslation();
    const dataHistory = [
        {
            id: 1,
            cName: "Google",
            history:
                "ເລື່ອງລາວຂອງ Google ເລີ່ມຕົ້ນໃນປີ 1995 ທີ່ມະຫາວິທະຍາໄລ Stanford, ເມື່ອ Larry Page ພົບກັບ Sergey Brin. Page ກຳລັງພິຈາລະນາເຂົ້າຮຽນທີ່ Stanford ສຳລັບປະລິນຍາເອກດ້ານວິທະຍາການຄອມພິວເຕີ, ແລະ Brin, ຊຶ່ງກຳລັງຮຽນຢູ່ທີ່ນັ້ນແລ້ວ, ໄດ້ຖືກມອບໝາຍໃຫ້ພາ Page ເບິ່ງອ້ອມມະຫາວິທະຍາໄລ",
            picture:
                "https://forbesthailand.com/wp-content/uploads/2021/01/Google-Web.png",
        },
        {
            id: 2,
            cName: "Apple",
            history:
                "ເລື່ອງລາວຂອງ Apple ເລີ່ມຕົ້ນໃນປີ 1995 ທີ່ມະຫາວິທະຍາໄລ Stanford, ເມື່ອ Larry Page ພົບກັບ Sergey Brin. Page ກຳລັງພິຈາລະນາເຂົ້າຮຽນທີ່ Stanford ສຳລັບປະລິນຍາເອກດ້ານວິທະຍາການຄອມພິວເຕີ, ແລະ Brin, ຊຶ່ງກຳລັງຮຽນຢູ່ທີ່ນັ້ນແລ້ວ, ໄດ້ຖືກມອບໝາຍໃຫ້ພາ Page ເບິ່ງອ້ອມມະຫາວິທະຍາໄລ",
            picture:
                "https://www.flashfly.net/wp/wp-content/uploads/2019/07/apple-park-1.jpg",
        },
    ];
    return (
        <div className="rounded-lg bg-white p-4 shadow-md sm:mb-10 sm:mt-0 sm:p-3">
            {dataHistory.map(
                (item, index) =>
                    companyName == item.cName && (
                        <div className="" key={index}>
                            <div className="mb-3 sm:mb-0 sm:hidden">
                                <img src={item.picture} alt="" className="rounded-lg" />
                                <h4 className="mt-2 text-center text-[14px] font-semibold text-[#1F2937] sm:mb-3 sm:text-[18px]">
                                    {i18n.language == "la" && t("analysis.picture")} {item.cName}{" "}
                                    {i18n.language == "en" && t("analysis.picture")}
                                </h4>
                            </div>
                            <div className="mb-3 md:mb-0 hidden sm:gap-x-2 justify-between sm:flex">
                                <div className="w-full">
                                    <img
                                        src={item.picture}
                                        alt=""
                                        className="rounded-lg sm:h-[230px] xl:w-full"
                                    />
                                    <h4 className="mt-2 text-center text-[12px] font-normal md:font-medium text-[#1F2937] sm:mb-3 md:text-[14px]">
                                        ຮູບພາບບໍລິສັດ {item.cName}
                                    </h4>
                                </div>
                                <div className="w-full flex md:flex md:flex-col text-[18px] sm:text-[15px] sm:px-2 lg:p-ป4">
                                    <p className=" text-[#1F2937]">
                                        Google ໄດ້ຖືກສ້າງຕັ້ງໃນວັນທີ 4 ກັນຍາ 1998 ໂດຍ Larry Page ແລະ
                                        Sergey Brin, ນັກສຶກສາປະລິນຍາເອກທີ່ມະຫາວິທະຍາໄລ Stanford.
                                        Page ແລະ Brin ໄດ້ພົບກັນທີ່ Stanford ໃນປີ 1995 ແລະ
                                        ເລີ່ມເຮັດວຽກຮ່ວມກັນໃນໂຄງການຄົ້ນຄວ້າ.
                                        ພວກເຂົາໄດ້ພັດທະນາເຄື່ອງມືຄົ້ນຫາທີ່ເອີ້ນວ່າ "BackRub"
                                        ເຊິ່ງຕໍ່ມາໄດ້ກາຍເປັນ Google.
                                    </p>
                                    <p className=" hidden md:block text-[#1F2937]">
                                        Google ໄດ້ຖືກສ້າງຕັ້ງໃນວັນທີ 4
                                        ກັນຍາ 1998 ໂດຍ Larry Page ແລະ Sergey Brin,
                                        ນັກສຶກສາປະລິນຍາເອກທີ່ມະຫາວິທະຍາໄລ Stanford. Page ແລະ Brin
                                        ໄດ້ພົບກັນທີ່ Stanford ໃນປີ 1995 ແລະ
                                        ເລີ່ມເຮັດວຽກຮ່ວມກັນໃນໂຄງການຄົ້ນຄວ້າ.
                                    </p>
                                </div>
                            </div>
                            <p className="text-[#1F2937] text-[18px] sm:text-[15px]">
                                {item.history}
                            </p>
                        </div>
                    ),
            )}
        </div>
    );
};
