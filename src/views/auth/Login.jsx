import React, { useState } from 'react';
import { Input, Checkbox } from "@material-tailwind/react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import bgAuth from '../../assets/bg-register.jpg';
import logo from '../../assets/logo.png';
import googleLogo from '../../assets/icons/google.png';
import facebookLogo from '../../assets/icons/facebook.png';
import { Link } from 'react-router-dom';

export const Login = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let errors = {};
        if (!formData.username) {
            errors.username = "Username is required";
        }
        if (!formData.password) {
            errors.password = "Password is required";
        }
        return errors;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Submit form
            console.log('Form submitted', formData);
        }
    }
    // ll
    return (
        <div className='grid md:grid-cols-12 grid-cols-1'>
            <div className='col-span-8 md:col-span-7 w-full md:block hidden'>
                <img src={bgAuth} alt=""
                    className='w-full h-screen object-cover'
                />
            </div>
            <div className='col-span-4 md:col-span-5 w-full p-8'>
                <div className='flex items-center gap-x-3'>
                    <img src={logo} alt="logo"
                        className='w-7'
                    />
                    <h2>ສອນເຈົ້າລົງທຶນ</h2>
                </div>
                <form className='w-full px-2 md:px-4 sm:px-2 py-8 mt-10 lg:mt-5' onSubmit={handleSubmit}>
                    <div className='mb-10 text-center'>
                        <div>
                            <h1 className='text-[30px] font-bold'>ເຂົ້າສູ່ລະບົບ</h1>
                            <p className='text-[14px] text-gray-400 font-semibold'>ກະລຸນາລົງທະບຽນເພື່ອເຂົ້າສູ່ລະບົບ</p>
                        </div>
                    </div>
                    <div className=" mb-5">
                        <Input
                            label="Username"
                            name="username"
                            onChange={handleChange}
                            value={formData.username}
                            color='orange'
                        />
                        {errors.username && <p className='text-red-500 text-xs'>{errors.username}</p>}
                    </div>
                    <div className="mt-3 flex items-center relative">
                        <Input
                            label="Password"
                            name="password"
                            type={showPassword ? 'password' : 'text'}
                            onChange={handleChange}
                            value={formData.password}
                            color='orange'
                        />
                        <div className='right-2 absolute text-[24px] cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                        </div>
                    </div>
                    {errors.password && <p className='text-red-500 text-xs'>{errors.password}</p>}
                    <div className=' mb-3 flex items-center mt-1'>
                        <Checkbox color='orange' />
                        <label>ຈື່ຂ້ອຍ</label>
                    </div>
                    <button type='submit' className='bg-[#FF6500] w-full py-2 rounded-lg text-white font-semibold'>
                        Login
                    </button>
                    <div className='w-full flex justify-center items-center relative mt-5'>
                        <p className='absolute bg-white px-2 text-gray-500'>or</p>
                        <hr className='border border-gray-300 w-full' />
                    </div>
                    <button className='mt-5 border border-gray-300 py-2 gap-x-2 flex w-full items-center justify-center rounded-lg'>
                        <span className='text-[16px] font-semibold'>Sign up with Google</span>
                        <img src={googleLogo} alt="google" className='w-6' />
                    </button>
                    <button className='mt-4 border border-gray-300 py-2 gap-x-2 flex w-full items-center justify-center rounded-lg'>
                        <span className='text-[16px] font-semibold'>Sign up with Facebook</span>
                        <img src={facebookLogo} alt="google" className='w-6' />
                    </button>
                    <p className='text-[14px] text-center mt-2'>Don't have an account ? <Link to="/register" className='underline text-orange-500'>Click here</Link></p>
                </form>
            </div>
        </div>
    );
}
