import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import bgAuth from "../../assets/bg-register.jpg";
import logo from "../../assets/logo.png";
import googleLogo from "../../assets/icons/google.png";
import facebookLogo from "../../assets/icons/facebook.png";
import { Link } from "react-router-dom";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
      <div className="col-span-8 hidden w-full md:col-span-6 md:block lg:col-span-7">
        <img src={bgAuth} alt="" className="h-screen w-full object-cover" />
      </div>
      <div className="col-span-4 w-full p-8 md:col-span-6 lg:col-span-5 lg:px-4 lg:py-8">
        <div className="flex items-center gap-x-3">
          <img src={logo} alt="logo" className="w-7" />
          <h2>ສອນເຈົ້າລົງທຶນ</h2>
        </div>
        <form
          className="mt-7 w-full px-3 py-6 sm:px-5 lg:mt-5 lg:px-5"
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <div>
              <h1 className="text-[30px] font-bold">ລົງທະບຽນ</h1>
              <p className="text-[14px] font-semibold text-gray-400">
                ກະລຸນາລົງທະບຽນເພື່ອເຂົ້າສູ່ລະບົບ
              </p>
            </div>
          </div>
          <div className="mb-3">
            <Input
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              color="orange"
            />
            {errors.username && (
              <p className="text-xs text-red-500">{errors.username}</p>
            )}
          </div>
          <div className="mb-3">
            <Input
              label="Phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              color="orange"
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone}</p>
            )}
          </div>
          <div className="mb-3">
            <Input
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              color="orange"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="relative mt-3 flex items-center">
            <Input
              label="Password"
              name="password"
              type={showPassword ? "password" : "text"}
              value={formData.password}
              onChange={handleChange}
              color="orange"
            />
            <div
              className="absolute right-2 cursor-pointer text-[24px]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </div>
          </div>
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password}</p>
          )}
          <div className="relative mt-3 flex items-center">
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type={showPassword ? "password" : "text"}
              value={formData.confirmPassword}
              onChange={handleChange}
              color="orange"
            />
            <div
              className="absolute right-2 cursor-pointer text-[24px]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </div>
          </div>
          {errors.confirmPassword && (
            <p className="text-xs text-red-500">{errors.confirmPassword}</p>
          )}
          <Link to={'/login'}
            className="mt-4 flex items-center justify-center w-full rounded-lg bg-[#FF6500] py-2 font-semibold text-white">
            Register
          </Link>
          <div className="relative mt-5 flex w-full items-center justify-center">
            <p className="absolute bg-white px-2 text-gray-500">or</p>
            <hr className="w-full border border-gray-300" />
          </div>
          <button className="mt-5 flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-300 py-2">
            <span className="text-[16px] font-semibold">
              Sign up with Google
            </span>
            <img src={googleLogo} alt="google" className="w-6" />
          </button>
          <button className="mt-4 flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-300 py-2">
            <span className="text-[16px] font-semibold">
              Sign up with Facebook
            </span>
            <img src={facebookLogo} alt="google" className="w-6" />
          </button>
          <p className="mt-2 text-center text-[14px]">
            Have an account ?{" "}
            <Link to="/login" className="text-orange-500 underline">
              Click here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
