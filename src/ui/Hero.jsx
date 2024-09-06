import { AiOutlineGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Handles from "./Handles";

function Hero() {
  return (
    <div className="bg-[#F9F9F9] h-dvh  md:px-6 ">

    <div className="md:grid lg:grid-cols-[2fr_1fr] md:grid-cols-[1fr_1fr]  flex-col-reverse flex items-center gap-8 md:max-w-6xl mx-auto md:pt-28 relative z-0 
     ">

      <div className="md:space-y-7 flex space-y-4 flex-col sm:space-y-4 items-center 
      md:items-start justify-center">
        <h1 className="md:text-4xl
        lg:text-7xl antialiased text-zinc-700 sm:text-center  sm:text-3xl text-2xl  text-center md:text-left  font-bold  md:w-80 lg:w-full mt-8
         ">

          <span>
             Front-End React <br /> Developer
              <img src="./images/waving.png" className="md:w-[4rem] w-10 inline" alt="" />
            </span>
        </h1>
        <p className="  lg:text-xl md:text-lg font-[Mulish] text-base md:text-left text-center sm:text-center text-slate-600 md:pl-1 ">
          Hi, I'm Damian X. A passionate Front-end React <br /> Developer based in
          Tamale, Ghana. 📍
        </p>

        <Handles/>
      </div>
      <div className="flex justify-center ">
        <img
          src="./images/damian-bg-7.png"
          alt="could not find image"
          className="md:w-96 w-64 rounded-full scale-125 md:scale-110  md:self-start "
          />
      </div>
          </div>
    </div>
  );
}

export default Hero;
