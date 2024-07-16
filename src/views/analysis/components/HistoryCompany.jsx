import React from 'react'

export const HistoryCompany = ({ companyName }) => {
    const dataHistory = [
        {
            id: 1,
            cName: "Google",
            history: "ເລື່ອງລາວຂອງ Google ເລີ່ມຕົ້ນໃນປີ 1995 ທີ່ມະຫາວິທະຍາໄລ Stanford, ເມື່ອ Larry Page ພົບກັບ Sergey Brin. Page ກຳລັງພິຈາລະນາເຂົ້າຮຽນທີ່ Stanford ສຳລັບປະລິນຍາເອກດ້ານວິທະຍາການຄອມພິວເຕີ, ແລະ Brin, ຊຶ່ງກຳລັງຮຽນຢູ່ທີ່ນັ້ນແລ້ວ, ໄດ້ຖືກມອບໝາຍໃຫ້ພາ Page ເບິ່ງອ້ອມມະຫາວິທະຍາໄລ",
            picture: "https://forbesthailand.com/wp-content/uploads/2021/01/Google-Web.png"
        },
        {
            id: 2,
            cName: "Apple",
            history: "ເລື່ອງລາວຂອງ Apple ເລີ່ມຕົ້ນໃນປີ 1995 ທີ່ມະຫາວິທະຍາໄລ Stanford, ເມື່ອ Larry Page ພົບກັບ Sergey Brin. Page ກຳລັງພິຈາລະນາເຂົ້າຮຽນທີ່ Stanford ສຳລັບປະລິນຍາເອກດ້ານວິທະຍາການຄອມພິວເຕີ, ແລະ Brin, ຊຶ່ງກຳລັງຮຽນຢູ່ທີ່ນັ້ນແລ້ວ, ໄດ້ຖືກມອບໝາຍໃຫ້ພາ Page ເບິ່ງອ້ອມມະຫາວິທະຍາໄລ",
            picture: "https://www.flashfly.net/wp/wp-content/uploads/2019/07/apple-park-1.jpg"
        }
    ]
    return (
        <div className=' shadow-md sm:p-8 p-4 sm:my-10'>
            {
                dataHistory.map((item, index) => (
                    companyName == item.cName && (
                        <div className='' key={index}>
                            <div className=' mb-3 sm:mb-0 xl:hidden'>
                                <img src={item.picture} alt=""
                                    className='rounded-lg '
                                />
                                <h4 className='text-[#1F2937] font-semibold text-center mt-2 sm:mb-3 text-[14px] sm:text-[18px]'>
                                    ຮູບພາບບໍລິສັດ {item.cName}
                                </h4>
                            </div>
                            <div className=' mb-3 hidden xl:flex justify-between'>
                                <div className=' w-full'>
                                    <img src={item.picture} alt=""
                                        className='rounded-lg xl:w-full'
                                    />
                                    <h4 className='text-[#1F2937] font-semibold text-center mt-2 sm:mb-3 text-[14px] sm:text-[18px]'>
                                        ຮູບພາບບໍລິສັດ {item.cName}
                                    </h4>
                                </div>
                                <div className='w-full p-4 '>
                                    <p className='text-[#1F2937] text-[20px]'>
                                        Google ໄດ້ຖືກສ້າງຕັ້ງໃນວັນທີ 4 ກັນຍາ 1998 ໂດຍ Larry Page ແລະ Sergey Brin, ນັກສຶກສາປະລິນຍາເອກທີ່ມະຫາວິທະຍາໄລ Stanford. Page ແລະ Brin ໄດ້ພົບກັນທີ່ Stanford ໃນປີ 1995 ແລະ ເລີ່ມເຮັດວຽກຮ່ວມກັນໃນໂຄງການຄົ້ນຄວ້າ.
                                        ພວກເຂົາໄດ້ພັດທະນາເຄື່ອງມືຄົ້ນຫາທີ່ເອີ້ນວ່າ "BackRub" ເຊິ່ງຕໍ່ມາໄດ້ກາຍເປັນ Google.
                                        Google ໄດ້ຖືກສ້າງຕັ້ງໃນວັນທີ 4 ກັນຍາ 1998 ໂດຍ Larry Page ແລະ Sergey Brin, ນັກສຶກສາປະລິນຍາເອກທີ່ມະຫາວິທະຍາໄລ Stanford. Page ແລະ Brin ໄດ້ພົບກັນທີ່ Stanford ໃນປີ 1995 ແລະ ເລີ່ມເຮັດວຽກຮ່ວມກັນໃນໂຄງການຄົ້ນຄວ້າ.
                                    </p>
                                </div>
                            </div>
                            <p className=' text-[#1F2937] text-[18px] sm:text-[20px]'>
                                {item.history}
                            </p>
                        </div>
                    )
                ))
            }
        </div>
    )
}
