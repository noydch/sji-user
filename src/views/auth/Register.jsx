import React, { useState } from 'react';
import { Input } from "@material-tailwind/react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import bgAuth from '../../assets/bg-register.jpg';
import logo from '../../assets/logo.png';
import googleLogo from '../../assets/icons/google.png';
import facebookLogo from '../../assets/icons/facebook.png';
import { Link } from 'react-router-dom';

export const Register = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let errors = {};

        if (!formData.username) {
            errors.username = "Username is required";
        }

        if (!formData.phone) {
            errors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = "Phone number must be 10 digits";
        }

        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }

        if (!formData.password) {
            errors.password = "Password is required";
        } else if (formData.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        if (!formData.confirmPassword) {
            errors.confirmPassword = "Confirm password is required";
        } else if (formData.confirmPassword !== formData.password) {
            errors.confirmPassword = "Passwords do not match";
        }

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Submit form
            console.log('Form submitted', formData);
        }
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-12'>
            <div className='col-span-8 md:col-span-6 lg:col-span-7  w-full hidden md:block'>
                <img src={bgAuth} alt="" className='w-full h-screen object-cover' />
            </div>
            <div className='col-span-4 md:col-span-6 lg:col-span-5 w-full p-8 lg:py-8 lg:px-4'>
                <div className='flex items-center gap-x-3'>
                    <img src={logo} alt="logo" className='w-7' />
                    <h2>ສອນເຈົ້າລົງທຶນ</h2>
                </div>
                <form className='w-full px-10 lg:px-5 sm:px-5 py-6 mt-7 lg:mt-5' onSubmit={handleSubmit}>
                    <div className='mb-5'>
                        <div>
                            <h1 className='text-[30px] font-bold'>ລົງທະບຽນ</h1>
                            <p className='text-[14px] text-gray-400 font-semibold'>ກະລຸນາລົງທະບຽນເພື່ອເຂົ້າສູ່ລະບົບ</p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <Input
                            label="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            color='orange'
                        />
                        {errors.username && <p className="text-red-500 text-xs ">{errors.username}</p>}
                    </div>
                    <div className="mb-3">
                        <Input
                            label="Phone number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            color='orange'
                        />
                        {errors.phone && <p className="text-red-500 text-xs ">{errors.phone}</p>}
                    </div>
                    <div className="mb-3">
                        <Input
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            color='orange'
                        />
                        {errors.email && <p className="text-red-500 text-xs ">{errors.email}</p>}
                    </div>
                    <div className=" mt-3  flex items-center relative">
                        <Input
                            label="Password"
                            name="password"
                            type={showPassword ? 'password' : 'text'}
                            value={formData.password}
                            onChange={handleChange}
                            color='orange'
                        />
                        <div className='right-2 absolute text-[24px] cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                        </div>
                    </div>
                    {errors.password && <p className="text-red-500 text-xs ">{errors.password}</p>}
                    <div className="mt-3 flex items-center relative">
                        <Input
                            label="Confirm Password"
                            name="confirmPassword"
                            type={showPassword ? 'password' : 'text'}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            color='orange'
                        />
                        <div className='right-2 absolute text-[24px] cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                        </div>
                    </div>
                    {errors.confirmPassword && <p className="text-red-500 text-xs ">{errors.confirmPassword}</p>}
                    <button className='bg-[#FF6500] w-full py-2 rounded-lg text-white mt-4 font-semibold'>Register</button>
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
                    <p className='text-[14px] text-center mt-2'>Have an account ? <Link to="/login" className='underline text-orange-500'>Click here</Link></p>
                </form>
            </div>
        </div>
    );
};
