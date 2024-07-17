import React from 'react'
import { Navbar } from '../../components/Navbar'

// images
import bgOverlay from '../../assets/images/bg.png';
import personImg from '../../assets/images/emp.jpg'
import aiyA from '../../assets/images/aiy-a.png';
import aiyB from '../../assets/images/aiy-b.png';
import visionImg from '../../assets/images/vision.png'
import visionImg2 from '../../assets/images/vision2.jpg'
import visionImg3 from '../../assets/images/vision3.jpg'

// icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const AboutUs = () => {
    return (
        <Navbar>
            <div>
                <div className='h-full lg:h-[650px] xl:h-screen z-0 w-full relative before:absolute sm:before:bg-[#003049] before:bg-[#002133]  before:-z-[1] before:w-full sm:before:h-[600px] md:before:h-[600px] lg:before:h-[650px] xl:before:h-screen before:h-full'>
                    <img src={bgOverlay} className="sm:block sm:h-[600px] lg:h-[650px] xl:h-screen sm:object-cover hidden w-full h-screen absolute" />
                    <div className='pt-[70px] relative container mx-auto h-full max-w-[340px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl text-white z-50'>
                        <div className=' grid grid-cols-1 sm:gap-x-3 mt-5 gap-y-4 pb-5 sm:pb-0 sm:mt-0 sm:grid-cols-12 items-center h-full'>
                            <div className=' md:flex xl:items-start md:items-center md:justify-center md:flex-col sm:col-span-6'>
                                <h1 className='text-[34px] text-center sm:text-[40px] md:mt-5 lg:text-[50px] mb-3 font-bold'>ກ່ຽວກັບພວກເຮົາ</h1>
                                <img src={personImg} className='  rounded-lg h-[300px] md:h-[370px] md:w-[330px] lg:w-[380px] lg:h-[400px] w-full xl:w-[400px] sm:w-[500px] sm:h-[400px] object-cover' alt="" />
                            </div>
                            <div className=' sm:col-span-6'>
                                <h2 className=' text-[30px] text-center sm:text-[40px] xl:text-[50px] mb-3 font-medium'>ຂໍ້ມູນຫຍໍ້</h2>
                                <p className=' my-4 xl:text-[20px]'>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                                <p className=' xl:text-[20px]'>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' pb-20 container mx-auto h-full max-w-[340px] sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl'>
                    {/* ຜູ້ກໍ່ຕັ້ງ */}
                    <div className=' bg-white w-full sm:mt-10'>
                        <div className=' flex justify-center items-center'>
                            <h2 className=' inline-block py-4 md:py-2 md:mt-10 px-5 my-5 font-semibold text-[#374151] text-[40px] border-b-4 border-orange-600'>
                                ຜຸ້ຮ່ວມກໍ່ຕັ້ງ
                            </h2>
                        </div>
                        <div className=' grid grid-cols-1 sm:grid-cols-2 w-full gap-16 sm:gap-x-8 my-10 '>
                            <div className=' flex  w-full  bg-[#FB923C] h-[300px] rounded-md border-[2px] border-[#FB923C] shadow-[0_3px_10px_rgb(0,0,0,0.2)]' >
                                <div className='bg-white rounded-md w-[400px]  sm:w-full sm:px-0 px-2 h-full flex items-end'>
                                    <img src={aiyA} alt="" className=' w-[250px] h-[270px]  object-cover ' />
                                </div>
                                <div className=' w-full h-full flex flex-col sm:items-start justify-around ml-5'>
                                    <div>
                                        <p>Name</p>
                                        <p>Position</p>
                                    </div>
                                    <div className=' flex text-[28px] gap-x-5'>
                                        <FaFacebookF className='hover:text-[#FB923C] cursor-pointer' />
                                        <FaTwitter className='hover:text-[#FB923C] cursor-pointer' />
                                        <FaLinkedinIn className='hover:text-[#FB923C] cursor-pointer' />
                                    </div>
                                </div>
                            </div>

                            <div className=' flex w-full bg-[#FB923C] h-[300px] rounded-md border-[2px] border-[#FB923C] shadow-[0_3px_10px_rgb(0,0,0,0.2)]' >
                                <div className='bg-white rounded-md w-[400px] sm:px-0 sm:w-full px-2 h-full flex items-end'>
                                    <img src={aiyB} alt="" className=' w-[300px] h-[310px]  object-cover ' />
                                </div>
                                <div className=' w-full h-full flex flex-col justify-around items-start ml-5'>
                                    <div>
                                        <p>Name</p>
                                        <p>Position</p>
                                    </div>
                                    <div className=' flex text-[28px] gap-x-5'>
                                        <FaFacebookF className='hover:text-[#FB923C] cursor-pointer' />
                                        <FaTwitter className='hover:text-[#FB923C] cursor-pointer' />
                                        <FaLinkedinIn className='hover:text-[#FB923C] cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ວິໄສທັດ */}
                    <div className=' bg-white w-full'>
                        <div className=' flex justify-center items-center'>
                            <h2 className=' inline-block py-4 px-5 sm:my-5 font-semibold text-[#374151] text-[30px] sm:text-[40px]'>
                                ວິໃສທັດຂອງພວກເຮົາ
                            </h2>
                        </div>
                        <div className=' grid grid-cols-1 sm:grid-cols-2 sm:place-items-center gap-x-10 w-full mb-5 sm:mb-10'>
                            <div className=' flex mb-3 sm:mb-0'>
                                <img src={visionImg} className=' rounded-lg w-full h-[300px] sm:w-[550px] sm:h-[400px] object-cover' alt="" />
                            </div>
                            <div>
                                <h4 className=' text-[#F97316] text-[28px] xl:text-[34px] font-semibold mt-3 sm:mt-0 sm:mb-4'>
                                    ຈຸດປະສົງຂອງພວກເຮົາ
                                </h4>
                                <p className=' text-[#374151] xl:text-[18px] text-[16px] sm:text-[16px] font-semibold'>
                                    ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                                    ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                                    ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                                    ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                                    ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ
                                    ການເງິນທີ່ເກັ່ງຂື້ນ
                                </p>
                                <p className=' text-[#374151] xl:text-[18px] text-[16px] sm:text-[16px] font-semibold my-2'>
                                    ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                                    ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                                    ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                                    ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                                    ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ
                                    ການເງິນທີ່ເກັ່ງຂື້ນ
                                </p>
                                <p className=' text-[#374151] xl:text-[18px] text-[16px] sm:text-[16px] font-semibold'>
                                    ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                                    ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                                    ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                                    ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                                    ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ
                                    ການເງິນທີ່ເກັ່ງຂື້ນ
                                </p>
                            </div>
                        </div>
                        <div className=' grid grid-cols-1 sm:grid-cols-2 gap-x-10 sm:place-items-center w-full mb-5 sm:mb-10'>
                            <div>
                                <h4 className=' text-[#F97316]  xl:text-[34px] text-[28px] font-semibold mt-3 sm:mt-0 sm:mb-4'>
                                    ວິໃສທັດຂອງພວກເຮົາ
                                </h4>
                                <p className=' text-[#374151] xl:text-[18px] text-[16px] sm:text-[16px] font-semibold'>
                                    ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                                    ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                                    ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                                    ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                                    ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ
                                    ການເງິນທີ່ເກັ່ງຂື້ນ
                                </p>
                                <p className=' text-[#374151] xl:text-[18px] text-[16px] sm:text-[16px] font-semibold my-2'>
                                    ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                                    ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                                    ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                                    ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                                    ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ
                                    ການເງິນທີ່ເກັ່ງຂື້ນ
                                </p>
                                <p className=' text-[#374151] xl:text-[18px] text-[16px] sm:text-[16px] font-semibold'>
                                    ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                                    ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                                    ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                                    ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                                    ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ
                                    ການເງິນທີ່ເກັ່ງຂື້ນ
                                </p>
                            </div>
                            <div className=' flex '>
                                <img src={visionImg2} className=' hidden sm:block rounded-lg w-full h-[300px] sm:w-[550px] sm:h-[400px] object-cover' alt="" />
                            </div>
                        </div>
                        <div className=' grid grid-cols-1 sm:grid-cols-2 sm:place-items-center gap-x-10 w-full'>
                            <div className=' flex '>
                                <img src={visionImg3} className='rounded-lg w-full h-[300px] sm:w-[550px] sm:h-[400px] object-cover' alt="" />
                            </div>
                            <div>
                                <h4 className=' text-[#F97316]  xl:text-[34px] text-[28px] font-semibold mb-4'>
                                    ເປົ້າໝາຍຂອງພວກເຮົາ
                                </h4>
                                <p className=' text-[#374151] xl:text-[18px] text-[16px] sm:text-[16px] font-semibold'>
                                    ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                                    ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                                    ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                                    ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                                    ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ
                                    ການເງິນທີ່ເກັ່ງຂື້ນ
                                </p>
                                <p className=' text-[#374151] xl:text-[18px] text-[16px] sm:text-[16px] font-semibold my-2'>
                                    ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                                    ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                                    ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                                    ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                                    ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ
                                    ການເງິນທີ່ເກັ່ງຂື້ນ
                                </p>
                                <p className=' text-[#374151] xl:text-[18px] text-[16px] sm:text-[16px] font-semibold'>
                                    ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                                    ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                                    ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                                    ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                                    ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ
                                    ການເງິນທີ່ເກັ່ງຂື້ນ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}
