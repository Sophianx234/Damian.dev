import { AiOutlineGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Handles from "./Handles";

function Hero() {
  return (
    <div className="bg-[#F9F9F9] h-dvh  md:px-6 ">

    <div className="md:grid lg:grid-cols-[2fr_1fr] md:grid-cols-[1fr_1fr]  flex-col-reverse flex items-center gap-8 max-w-6xl mx-auto pt-28 relative z-0  ">
      <div className="space-y-7">
        <h1 className="md:text-4xl
        lg:text-7xl antialiased text-zinc-700 sm:text-xl text-center md:text-left  font-bold mt-4 md:w-80 lg:w-full 
         ">

          Front-End React Developer <span className="text-red-400 sm:text-yellow-300 md:text-blue-200">X</span><img src="./images/waving.png" className="w-[4rem] inline" alt="" />
        </h1>
        <p className=" w-[40rem] lg:text-xl md:text-lg font-[Mulish] text-slate-600 ">
          Hi, I'm Damian X. A passionate Front-end React <br /> Developer based in
          Tamale, Ghana. 📍
        </p>

        <Handles/>
      </div>
      <div className="flex justify-center ">
        <img
          src="./images/damian-bg-7.png"
          alt="could not find image"
          className="w-96  rounded-full scale-110  md:self-start "
          />
      </div>
          </div>
    </div>
  );
}

export default Hero;
