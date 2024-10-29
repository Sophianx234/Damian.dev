import { DiSnapSvg } from "react-icons/di"
import { FaGears } from "react-icons/fa6"
import { MdOutlineScreenshotMonitor } from "react-icons/md"

function ServicesSection() {
    return (
        <div className="md:max-w-6xl mx-auto pb-96">
        <div className=" sm:px-10 pt-6 flex-col flex  justify-center items-center ">
            <h1 className="text-xl text-slate-700 text-center font-semibold ">
                My Services
            </h1>
            <p className="text-center px-6 leading-5 text-slate-600 sm:px-0 dark:text-gray-200 text-sm  pt-3 ">Whether you're looking to create a brand-new digital experience or enhance an existing one, I provide a full range of web development services tailored to meet your unique goals. my work focuses on performance, aesthetics, and usability to ensure your project stands out</p>

        </div>

        <div className="grid grid-cols-2 max-w-2xl gap-14 mx-auto pt-10 ">
        <div className="shadow-md bg-[#F9F9F9] hover:scale-105 transition-all flex   items-center justify-center  rounded-lg py-6 ">
            <div className="flex-col items-center justify-center ">

        <MdOutlineScreenshotMonitor className="size-28 fill-zinc-700 justify-self-center " />
        <div className="pt-2 space-y-1">

        <p className="text-center uppercase font-semibold text-slate-700 font-[Montserrat">Front-end</p>
        <p className="text-center text-zinc-500 font-semibold text-xs px-4">
        Responsive Design, UI/UX, 
Cross-Browser Compatibility 
  
            </p>
        </div>
            </div>
        </div>
        <div className="shadow-md bg-[#F9F9F9] flex items-center justify-center  rounded-lg py-6 transition-all hover:scale-105">
            <div className="flex-col items-center justify-center ">

        <FaGears className="size-28 fill-zinc-700 justify-self-center " />
        <div className="pt-2 space-y-1">

        <p className="text-center uppercase font-semibold text-slate-700 font-[Montserrat]">Back-end</p>
        <p className="text-center text-zinc-500 font-semibold text-xs px-4">
        API Integration, Database Management, Authentication 
            </p>
        </div>
            </div>
        </div>
        <div className="shadow-md bg-[#F9F9F9] flex items-center justify-center  rounded-lg py-6 transition-all hover:scale-105">
            <div className="flex-col items-center justify-center ">

        <FaGears className="size-28 fill-zinc-700 justify-self-center " />
        <div className="pt-2 space-y-1">

        <p className="text-center uppercase font-semibold text-slate-700 font-[Montserrat]">Back-end</p>
        <p className="text-center text-zinc-500 font-semibold text-xs px-4">
        API Integration, Database Management, Authentication 
            </p>
        </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default ServicesSection
