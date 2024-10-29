import { DiSnapSvg } from "react-icons/di"
import { MdOutlineScreenshotMonitor } from "react-icons/md"

function ServicesSection() {
    return (
        <div className="md:max-w-6xl mx-auto">
        <div className=" sm:px-10 pt-6 flex-col flex  justify-center items-center">
            <h1 className="text-xl text-slate-700 text-center font-semibold ">
                My Services
            </h1>
            <p className="text-center px-6 leading-5 text-slate-600 sm:px-0 dark:text-gray-200 text-sm  pt-3 ">Whether you're looking to create a brand-new digital experience or enhance an existing one, I provide a full range of web development services tailored to meet your unique goals. my work focuses on performance, aesthetics, and usability to ensure your project stands out</p>

        </div>

        <div className="grid grid-cols-2">
        <div className="shadow-md">
        <MdOutlineScreenshotMonitor className="size-32" />
        </div>
        </div>
        </div>
    )
}

export default ServicesSection
