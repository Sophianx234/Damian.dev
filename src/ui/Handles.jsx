import { AiOutlineGithub } from "react-icons/ai"
import { IoLogoLinkedin } from "react-icons/io"
import { NavLink } from "react-router-dom"

function Handles({type}) {
    return (
        <div className="space-x-4 md:space-x-10 md:space-y-3 items-center   flex mt-4 md:w-full justify-center md:flex-col-reverse lg:flex-row md:pr-10 lg:pr-0    
        lg:justify-start ">
            <div className="space-x-4 md:space-x-5 lg:pt-3 md:pl-10 lg:pl-0 md:pt-6  md:justify-center flex  
        ">


            <NavLink to='https://www.linkedin.com/in/sophian-abdul-rahman-909125230/'>

            <IoLogoLinkedin className={`hover:fill-secondary-purple transition-all duration-200 block dark:fill-white  ${type&& 'size-8 inline-block'}`} size={type? 46:36} color={`${type?'#fff':'#3F3F46'}`}/>
            </NavLink>
            <NavLink to='https://github.com/Sophianx234' >
            <AiOutlineGithub className={`hover:fill-secondary-purple transition-all  duration-200 block dark:fill-white ${type&& 'size-8 inline-block'}`} size={type? 46:36} color={`${type?'#fff':'#3F3F46'}`}/>


            </NavLink>
            </div>
           {!type&& <a href="./abdulRahman.pdf" className="font-semibold bg-zinc-700  dark:bg-white dark:text-[#3F3F46] text-white  px-6 py-3 rounded-full dark:hover:scale-105 hover:scale-105 transition-all duration-500 ">Download Resume</a>}
        </div>
    )
}

export default Handles
