import { AiOutlineGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Handles from "./Handles";

function Hero() {
  return (
    <div className="bg-[#F9F9F9] lg:h-dvh  md:px-6 ">

    <div className=" lg:grid-cols-[2fr_1fr] lg:grid flex-col-reverse flex items-center gap-8 md:max-w-6xl mx-auto md:pt-28 md:pb-16 relative z-0 
     ">

      <div className="md:space-y-10 flex space-y-4 flex-col sm:space-y-4 items-center 
      md:items-start justify-center lg:pt-10">
        <h1 className="md:text-6xl 
        lg:text-7xl antialiased text-zinc-700 sm:text-center  sm:text-3xl text-2xl  lg:text-left md:text-center  font-bold  md:w-full lg:w-full mt-8
         ">

          <span>
             Front-End React <br /> Developer
              <img src="./images/waving.png" className="md:w-[4rem] w-10 inline" alt="" />
            </span>
        </h1>
        <p className="   md:text-2xl font-[Mulish] text-base md:text-center lg:text-left text-center sm:text-center text-slate-600  ">
          Hi, I'm Damian X. A passionate Front-end React <br /> Developer based in
          Tamale, Ghana. 📍
        </p>

        <Handles/>
      </div>
      <div className="flex justify-center ">
        <img
          src="./images/damian-bg-7.png"
          alt="could not find image"
          className="md:w-80 w-64 rounded-full scale-125 md:scale-125  md:self-start "
          />
      </div>
          </div>
    </div>
  );
}

export default Hero;
