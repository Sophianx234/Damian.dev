import HtmlIcon from "./HtmlIcon"
import IconsStack from "./IconsStack"
import JsTsIcon from "./JsTsIcon"
import ReactNextIcon from "./ReactNextIcon"
import TailwindIcon from "./TailwindIcon"

function TechStack() {
    return (
        <div className="bg-[#F9F9F9]">


        <div className="max-w-6xl py-16 mb-8 mx-auto mt-16 md:grid md:grid-cols-2">
            <p className=" font-semibold text-slate-700 flex items-center gap-8">
                <span className="text-xl">
                    Tech Stack
                    </span> 
                     <span className="text-slate-400 font-extralight  text-4xl">&#124;</span>
                </p>
                <div>
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
