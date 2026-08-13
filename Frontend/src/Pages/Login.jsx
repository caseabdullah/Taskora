import React, { useRef, useState } from "react";
import {X,EyeOff,Eye,Trophy,ShieldAlert} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import Loader from "../components/layout/Loader";


const Login = () => {

  const navigate=useNavigate();

  const usernameEmailRef=useRef();
  const passwordRef=useRef();
  
  const [showPassword, setshowPassword] = useState(false);
  const [loading, setloading] = useState(false);
  const [alert, setalert] = useState(null);

  const success={
    icon:Trophy,
    back:"#C8FF00",
  }
  const fail={
    icon:ShieldAlert,
    back:"#FF9F0A",
  }

  const submitHandler =async(e)=>{

    e.preventDefault();

    const data={
      username_email:usernameEmailRef.current.value,
      password:passwordRef.current.value
    }
    setloading(true);

  try{
    const response=await api.post("/auth/login",data);
    setalert({
      message: response.data.message,
      icon: success.icon,
      back: success.back,
      });
    setTimeout(() => {
        setalert(null)
        setloading(false)
        navigate('/dashboard')
    }, 1500);
  }
  catch(err){
    setalert({
      message: err.response.data.message || "Something went wrong",
      icon: fail.icon,
      back: fail.back,
    });
    setTimeout(() => {
      setloading(false)
      setalert(null)
    }, 1500);
  }

  }

  return (
    <div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative register bg-[#121212] w-130 rounded-3xl shadow-2xl px-10 py-5">
        {loading && (
          <div className="absolute inset-0 rounded-3xl z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
             <Loader />
          </div>
       )}
        <div>
        <div className="flex justify-between items-center flex-row">
          <h1 className="top text-3xl font-bold text-white">Welcome back!</h1>
          <div
          onClick={()=>{
            navigate("/")
          }}
            className="bg-[#18181B] hover:bg-[#131313]  transition border-2 border-[#222222] cursor-pointer duration-300 p-2 rounded-xl inline-flex">
              <X size={25} color="#8E8E93"/>
          </div>
        </div>

          <p className="text-lg font-medium text-gray-400">
            Please Enter your Details to Sign In
          </p>
        </div>

        <form
        onSubmit={(e)=>{
          submitHandler(e)
        }} 
        className="mt-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-[#8E8E93]">
              Username or E-mail address
            </label>

            <input
            required
            ref={usernameEmailRef}
              type="text"
              placeholder="@username/user@gmail.com"
              className="border-2 text-white caret-white placeholder:text-gray-400 bg-[#1A1A1A] border-[#2D2D2D]  rounded-xl px-4 py-3 outline-none focus:border-[#E0FF22] transition-colors duration-300"
            />
          </div>

          <div className="relative flex flex-col gap-2">
            <label className="font-medium text-[#8E8E93]">
              Password
            </label>

            <input
            ref={passwordRef}
              required
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="border-2 text-white caret-white placeholder:text-gray-400 bg-[#1A1A1A] border-[#2D2D2D]  rounded-xl px-4 py-3 outline-none focus:border-[#E0FF22] transition-colors duration-300"
            />
            <button
            type="button"
            onClick={() => setshowPassword(!showPassword)}
            className="absolute text-[#E0FF22] right-3 bottom-[3%] -translate-y-1/2"
            >
            {showPassword ? <EyeOff size={25}/>:<Eye size={25} />}
            </button>
          </div>

          <button
            type="submit"
            className="mt-3 rounded-xl bg-[#E0FF22] py-3 text-black font-[650] text-xl hover:opacity-90 transition-opacity duration-300 cursor-pointer"
          >
            Sign In
          </button>
          
        </form>
        <p className="text-gray-400 mt-4">
          Don't have an account?
          <Link to="/signup" className=" pl-1.5 text-[#E0FF22] underline cursor-pointer hover:underline">
             Sign up
          </Link>
        </p>
      </div>
      {alert && (
    <div
    className="fixed top-5 right-5 z-9999 flex gap-6 items-center justify-between py-3 px-4 rounded-xl text-white bg-[#121212] shadow-2xl border-[0.5px] animate-slide-in"
    style={{ borderColor: alert.back }}>
    <div className="p-2 rounded-xl" style={{backgroundColor:`${alert.back}1A`}}><alert.icon size={30} color={alert.back} />
    </div>

    <p className="font-medium text-lg">
      {alert.message}
    </p>
  </div>
    )}
    </div>
  );
};

export default Login;