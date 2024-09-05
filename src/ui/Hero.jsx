import { AiOutlineGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Handles from "./Handles";

function Hero() {
  return (
    <div className="bg-[#F9F9F9] h-screen">

    <div className="md:grid md:grid-cols-[2fr_1fr]  flex-col-reverse flex items-center gap-8 max-w-6xl mx-auto pt-28 relative z-0  ">
      <div className="space-y-7">
        <h1 className="md:text-7xl antialiased text-zinc-700 text-4xl text-center md:text-left  font-bold mt-4 ">
          Front-End React Developer <img src="./images/waving.png" className="w-[4rem] inline" alt="" />
        </h1>
        <p className=" w-[40rem] text-xl font-[Mulish] text-slate-600 ">
          Hi, I'm Damian X. A passionate Front-end React <br /> Developer based in
          Tamale, Ghana. 📍
        </p>

        <Handles/>
      </div>
      <div className="flex justify-center ">
        <img
          src="./images/damian-bg-7.png"
          alt="could not find image"
          className="w-96  rounded-full scale-110 "
          />
      </div>
          </div>
    </div>
  );
}

export default Hero;
