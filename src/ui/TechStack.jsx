import HtmlIcon from "./HtmlIcon"
import IconsStack from "./IconsStack"
import JsTsIcon from "./JsTsIcon"
import ReactNextIcon from "./ReactNextIcon"
import TailwindIcon from "./TailwindIcon"

function TechStack() {
    return (
        <div className="">


        <div className="flex flex-col items-center gap-6 max-w-6xl py-16  mx-auto  md:grid md:grid-cols-2 md:px-10 ">
            <p className=" font-semibold text-slate-700 flex items-center gap-8">
                <span className="text-xl">
                    Tech Stack
                    </span> 
                     <span className="text-slate-400 font-extralight  text-4xl hidden md:block">&#124;</span>
                </p>
                <div className="">
                    

                    <IconsStack>
                        <HtmlIcon/>
                        <JsTsIcon/>
                        <ReactNextIcon/>
                        <TailwindIcon/>
                    </IconsStack>
                
                
                    </div>
        </div>
        </div>
    )
}

export default TechStack
