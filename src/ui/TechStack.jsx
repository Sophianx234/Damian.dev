import { Fade, Slide } from "react-awesome-reveal"
import HtmlIcon from "./HtmlIcon"
import IconsStack from "./IconsStack"
import JsTsIcon from "./JsTsIcon"
import ReactNextIcon from "./ReactNextIcon"
import TailwindIcon from "./TailwindIcon"
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNode, FaNodeJs, FaReact } from "react-icons/fa"
import { BiLogoTypescript } from "react-icons/bi"
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri"

function TechStack() {
    return (
        <section id='section-tech' className="">


        <div className="flex flex-col items-center gap-6 max-w-6xl py-16  mx-auto  md:flex lg:grid-cols-2 lg:grid md:px-10  md:gap-10 
        
        ">
            <Slide triggerOnce>
                <Fade triggerOnce>


            <p className=" font-semibold text-slate-700 flex md:flex-col lg:flex-row items-center gap-8 lg:gap-8 md:gap-0 dark:text-white">
                <span className="text-xl md:border-b-[3px] 
                border-[#9f9d9d] dark:border-[#fff]
                lg:border-r-[3px] 
                lg:pr-8
                lg:py-1
                md:pb-2 md:border-b-gray-400
                lg:border-b-0
                ">
                    Tech Stack
                   </span>
                </p>
                    </Fade>
            </Slide>
                <div className="">
                <Slide triggerOnce direction="right">

                <Fade triggerOnce>

                    
                    <div className="hidden sm:flex ">

                    <IconsStack>
                        <HtmlIcon/>
                        <JsTsIcon/>
                        <ReactNextIcon/>
                        <TailwindIcon/>
                    </IconsStack>
                    </div>
                    <div className="sm:hidden flex gap-6">
                        <div className="flex items-center gap-[2px]">

                        <FaHtml5 className="size-14 dark:fill-white"/>
                        <FaCss3Alt className="size-14 dark:fill-white" />
                        </div>
                        <div className="flex items-center gap-[2px]">

                        <FaJsSquare className="size-14 dark:fill-white " />
                        <BiLogoTypescript className="size-16 dark:fill-white"/>
                        </div>
                        <div className="flex items-center gap-[2px]">

                        <FaReact className="size-14 dark:fill-white" />
                        <RiNextjsLine className="size-14 dark:fill-white" />
                        </div>
                        <div className="flex items-center gap-[8px]">
                        <RiTailwindCssFill className="size-14 dark:fill-white" />
                        <FaNodeJs className="size-14 dark:fill-white" />
                        </div>
                    </div>
                
                </Fade>
                </Slide>
                
                    </div>
        </div>
        </section>
    )
}

export default TechStack
