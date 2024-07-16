import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";
import { MdDelete, MdOutlineFileUpload } from 'react-icons/md';

import stopWatch from '../../../assets/icons/stopwatch.png'

import qrBCEL from '../../../assets/qrBcel.png'
import { useNavigate } from 'react-router-dom';

export const FormBuyCourse = () => {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("")
    const [phone, setPhone] = useState("")
    const handleOpen = () => setOpen((cur) => !cur);

    const [formNo, setFormNo] = useState(1)

    const nextForm = () => {
        setFormNo(formNo + 1)
    }
    const prevForm = () => {
        setFormNo(formNo - 1)
    }
    return (
        <div className='h-full'>
            <Button onClick={handleOpen} style={{
                background: '#FB923C',
                width: '100%', fontFamily: 'Noto sans lao',
                fontSize: '18px', fontWeight: '600'
            }}>ສະໝັກ</Button>
            <Dialog
                size="lg"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-h-[90vh] overflow-y-auto" style={{ fontFamily: 'Noto sans lao' }}>
                    {
                        formNo == 1 && <div>
                            <CardBody className="flex flex-col gap-4" >
                                <Typography variant="h4" color="orange" style={{ fontFamily: 'Noto sans lao', width: '100%', textAlign: 'center' }}>
                                    ຂໍ້ມູນຜູ້ສະໝັກຄອຣ໌ສ
                                </Typography>
                                <div className=' flex flex-col md:flex-row md:justify-between'>
                                    <div className=' w-full'>
                                        <h4 className=' text-gray-700 text-[18px] font-semibold mb-4'>ເພີ່ມຮູບພາບ</h4>
                                        <div className='w-full md:w-[350px] p-3 md:p-6 border-2 rounded-lg border-gray-400'>
                                            <div className='w-full md:w-[300px] h-[300px] md:h-[400px] rounded-lg border-2 border-dashed border-gray-400
                                            flex flex-col items-center justify-center '
                                            >
                                                <input type="file" accept='image/*' className='input-file'
                                                    hidden onChange={({ target: { files } }) => {
                                                        files[0] && setFileName(files[0].name)
                                                        if (files) {
                                                            setImage(URL.createObjectURL(files[0]))
                                                        }
                                                    }}
                                                />
                                                {image ?
                                                    <div className=' w-full h-full relative z-10'>
                                                        <img src={image} className=' w-full h-full object-cover' alt={fileName} />
                                                        <MdDelete onClick={() => setImage(null)}
                                                            className=' cursor-pointer text-red-500 absolute top-2 z-50 right-2 text-[20px]' />
                                                    </div>
                                                    :
                                                    <div onClick={() => document.querySelector('.input-file').click()}
                                                        className=' w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                                                        <MdOutlineFileUpload className=' text-gray-700 text-[100px]' />
                                                        <p className=' text-[24px] text-blue-500 font-semibold'>ເລືອກຮູບພາບ</p>
                                                    </div>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className=' w-full'>
                                        <div className=' mt-10'>
                                            <Typography style={{ fontFamily: 'Noto sans lao' }} className="mb-2" variant="h6">
                                                ຊື່
                                            </Typography>
                                            <Input label="Email" size="lg" />
                                        </div>
                                        <div>
                                            <Typography style={{ fontFamily: 'Noto sans lao', marginTop: '20px' }} className="mb-2" variant="h6">
                                                ນາມສະກຸນ
                                            </Typography>
                                            <Input label="ນາມສະກຸນ" size="lg" />
                                        </div>
                                        <div className=' mt-[20px]'>
                                            <p className=' text-md font-bold'>ເບີໂທ</p>
                                            <PhoneInput
                                                country={'la'}
                                                inputStyle={{
                                                    background: '#F3F4F6',
                                                    width: '100%',
                                                    padding: '20px 0 20px 45px',
                                                    color: '#000',
                                                    borderRadius: '4px'
                                                }}
                                                buttonStyle={{
                                                    backgroundColor: '#F3F4F6',
                                                    borderRadius: '5px',
                                                    color: '#000000',

                                                }}
                                                value={phone}
                                                onChange={phone => setPhone(phone)}
                                            />
                                        </div>
                                        <div>
                                            <Typography style={{ fontFamily: 'Noto sans lao', marginTop: '20px' }} className="mb-2" variant="h6">
                                                ອີເມວ
                                            </Typography>
                                            <Input label="ອີເມວ" size="lg" />
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div className=' flex justify-end'>
                                    <button onClick={nextForm} className=' bg-[#0C4A6E] px-8 py-2 text-white rounded-md'>Next</button>
                                </div>
                            </CardFooter>
                        </div>
                    }

                    {
                        formNo == 2 && <div>
                            <CardBody className="flex flex-col gap-4 " >
                                <Typography variant="h4" color="orange" style={{ fontFamily: 'Noto sans lao', width: '100%', textAlign: 'center' }}>
                                    ຊ່ອງທາງການຊຳລະ
                                </Typography>
                                <div className=' flex justify-between'>
                                    <div className=' w-full flex flex-col items-center'>
                                        <h4 className=' text-gray-700 text-[18px] font-semibold mb-4'>ເພີ່ມຮູບພາບ</h4>
                                        <div className='w-[350px] sm:w-[280px] sm:h-[330px] sm:flex sm:items-center sm:justify-center p-6 sm:px-3 border-2 rounded-lg border-gray-400'>
                                            <div className=' w-[300px] h-[400px] sm:h-[300px] sm:w-[290px] rounded-lg border-2 border-dashed border-gray-400
                                            flex flex-col items-center justify '
                                            >
                                                <input type="file" accept='image/*' className='input-file'
                                                    hidden onChange={({ target: { files } }) => {
                                                        files[0] && setFileName(files[0].name)
                                                        if (files) {
                                                            setImage(URL.createObjectURL(files[0]))
                                                        }
                                                    }}
                                                />
                                                {image ?
                                                    <div className=' w-full h-full relative z-10'>
                                                        <img src={image} className=' w-full h-full object-cover' alt={fileName} />
                                                        <MdDelete onClick={() => setImage(null)}
                                                            className=' cursor-pointer text-red-500 absolute top-2 z-50 right-2 text-[20px]' />
                                                    </div>
                                                    :
                                                    <div onClick={() => document.querySelector('.input-file').click()}
                                                        className=' w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                                                        <MdOutlineFileUpload className=' text-gray-700 text-[100px]' />
                                                        <p className=' text-[24px] text-blue-500 font-semibold'>ເລືອກຮູບພາບ</p>
                                                    </div>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className=' w-full'>
                                        <div className=' w-full h-full flex items-center justify-center'>
                                            <img src={qrBCEL} alt="qr code"
                                                className=' w-[300px]'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div className=' flex justify-around'>
                                    <button onClick={prevForm} className=' bg-[#003049] px-8 py-2 text-white rounded-md font-semibold'>ກັບຄືນ</button>
                                    <button onClick={nextForm} className=' bg-[#FB923C] px-8 py-2 text-white rounded-md font-semibold'>Submit</button>
                                </div>
                            </CardFooter>
                        </div>
                    }

                    {
                        formNo == 3 && <div>
                            <CardBody className="flex flex-col gap-4 items-center" >
                                <Typography variant="h4" color="orange" style={{ fontFamily: 'Noto sans lao', width: '100%', textAlign: 'center' }}>
                                    ລໍຖ້າການອະນຸມັດການຊຳລະເງິນຈາກແອດມິນ
                                </Typography>

                                <div className=' w-[230px] h-[230px] my-12 flex items-center justify-center bg-gray-100 rounded-full'>
                                    <img src={stopWatch} alt=""
                                        className=' w-[200px]'
                                    />
                                </div>
                                <div className='text-[#F97316] text-center font-medium'>
                                    <p>ການອະນຸມັດການຊຳລະເງິນໂດຍຈະໃຊ້ເວລາໂດຍປະມານ 3-5 ມື້</p>
                                    <p>ຕ້ອງການການຊ່ວຍເຫຼືອຕິດຕໍ່ 20 55847928</p>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div className=' flex justify-around'>
                                    <button onClick={() => navigate('/ourService/course')} className=' bg-[#003049] px-8 py-2 text-white rounded-md font-semibold'>ກັບໜ້າຄອຣ໌ສ</button>
                                    <button onClick={() => navigate('/home')} className=' bg-[#FB923C] px-8 py-2 text-white rounded-md font-semibold'>ກັບໜ້າຫຼັກ</button>
                                </div>
                            </CardFooter>
                        </div>
                    }
                </Card>
            </Dialog>
        </div>
    )
}