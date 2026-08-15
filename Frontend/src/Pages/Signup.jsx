import React, { useRef, useState } from "react";
import { ShieldAlert, X, Trophy, EyeOff, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import Loader from "../components/layout/Loader";

const Signup = () => {
  const navigate = useNavigate();

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [alert, setalert] = useState(null);
  const [showPassword, setshowPassword] = useState(false);
  const [loading, setloading] = useState(false);

  const success = {
    icon: Trophy,
    back: "#C8FF00",
  };

  const fail = {
    icon: ShieldAlert,
    back: "#FF9F0A",
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    setloading(true);

    try {
      const response = await api.post("/auth/register", data);

      setalert({
        message: response.data.message,
        icon: success.icon,
        back: success.back,
      });

      setTimeout(() => {
        setalert(null);
        setloading(false);
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      setalert({
        message: err.response?.data?.message || "Something went wrong",
        icon: fail.icon,
        back: fail.back,
      });

      setTimeout(() => {
        setloading(false);
        setalert(null);
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4 overflow-y-auto">

      {/* Register Card */}
      <div className="relative register bg-[#121212] w-full max-w-130 rounded-3xl shadow-2xl px-5 sm:px-8 md:px-10 py-5 sm:py-7">

        {/* Loader */}
        {loading && (
          <div className="absolute inset-0 rounded-3xl z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <Loader />
          </div>
        )}

        {/* Header */}
        <div>
          <div className="flex justify-between items-center gap-4">
            <h1 className="top text-2xl sm:text-3xl font-bold text-white">
              Create your Account
            </h1>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="shrink-0 bg-[#18181B] hover:bg-[#131313] transition border-2 border-[#222222] cursor-pointer duration-300 sm:p-1 sm:ml-1 p-2 rounded-xl"
            >
              <X
              color="#8E8E93"
              className="w-5 h-5 sm:w-6.25 sm:h-6.25"/>
            </button>
          </div>

          <p className="text-base sm:text-lg font-medium text-gray-400 mt-1">
            Get started with Tasker today
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="mt-5 flex flex-col gap-4 sm:gap-5"
        >

          {/* Username */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-[#8E8E93]">
              Username
            </label>

            <input
              required
              ref={usernameRef}
              type="text"
              placeholder="@username"
              className="w-full border-2 caret-white text-white placeholder:text-gray-400 bg-[#1A1A1A] border-[#2D2D2D] rounded-xl px-4 py-3 outline-none focus:border-[#E0FF22] transition-colors duration-300"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-[#8E8E93]">
              Email address
            </label>

            <input
              required
              ref={emailRef}
              type="email"
              placeholder="user@gmail.com"
              className="w-full border-2 caret-white text-white placeholder:text-gray-400 bg-[#1A1A1A] border-[#2D2D2D] rounded-xl px-4 py-3 outline-none focus:border-[#E0FF22] transition-colors duration-300"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-[#8E8E93]">
              Password
            </label>

            <div className="relative">
              <input
                ref={passwordRef}
                required
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full border-2 caret-white text-white placeholder:text-gray-400 bg-[#1A1A1A] border-[#2D2D2D] rounded-xl px-4 py-3 pr-12 outline-none focus:border-[#E0FF22] transition-colors duration-300"
              />

              <button
                type="button"
                onClick={() => setshowPassword(!showPassword)}
                className="absolute cursor-pointer text-[#E0FF22] right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff size={23} />
                ) : (
                  <Eye size={23} />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 sm:mt-3 rounded-xl bg-[#E0FF22] py-3 text-black font-[650] text-lg sm:text-xl hover:opacity-90 transition-opacity duration-300 cursor-pointer"
          >
            Create Account
          </button>
        </form>

        {/* Login */}
        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Already have an account?
          <Link
            to="/login"
            className="pl-1.5 text-[#E0FF22] underline cursor-pointer hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>

      {/* Alert */}
      {alert && (
        <div
          className="
            fixed
            top-4
            right-4
            left-4
            sm:left-auto
            sm:right-5
            z-9999
            flex
            gap-3
            sm:gap-6
            items-center
            py-3
            px-3
            sm:px-4
            rounded-xl
            text-white
            bg-[#121212]
            shadow-2xl
            border-[0.5px]
            max-w-[calc(100%-2rem)]
            sm:max-w-105
            animate-slide-in
          "
          style={{ borderColor: alert.back }}
        >
          <div
            className="shrink-0 p-2 rounded-xl"
            style={{ backgroundColor: `${alert.back}1A` }}
          >
            <alert.icon size={26} color={alert.back} />
          </div>

          <p className="font-medium text-sm sm:text-lg wrap-break-word">
            {alert.message}
          </p>
        </div>
      )}
    </div>
  );
};

export default Signup;