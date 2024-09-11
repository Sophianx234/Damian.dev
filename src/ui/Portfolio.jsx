import { BsGithub } from "react-icons/bs"
import { GoLinkExternal } from "react-icons/go"

function Portfolio({name, desc,liveLink='#',codeLink, emoji, cssFramework ='CSS', image, flow, imageNum}) {
    return (
        <div>
            <div className={`flex  justify-between
            flex-col  items-center lg:px-0 md:px-10  
                
            gap-20 ${flow ==='swap' ? "lg:flex-row-reverse":"lg:flex-row"}`}>
                <img src={`./images/p-${imageNum}.png`} alt="" className="md:w-[40rem]  w-[30rem] bg-blend-multiply rounded-md" />
                <div className="">
                    <h1 className="text-xl font-bold  text-center pb-4 text-slate-700 uppercase">{name} {emoji}</h1>
                    <p className="text-base text-slate-700 text-center md:px-10 px-20 ">
                    {desc}
                    </p>
                    <div className="flex items-center justify-center pt-4 gap-10 font-bold text-slate-700">
                        <p className="cursor-pointer">React</p>
                        <p className="cursor-pointer">{cssFramework}</p>
                    </div>
                    <div>
                        <div className="flex gap-28 pt-6 justify-center ">

                            <a href={codeLink} className="flex gap-2 items-center font-semibold group
                            cursor-pointer group-hover:text-secondary-purple">
                                <p className="group-hover:text-secondary-purple">Code</p>
                                <BsGithub size={32} className="group-hover:fill-secondary-purple"/>
                            </a>
                            <a href={liveLink} className="flex items-center gap-2 font-semibold group cursor-pointer">
                                <p className="group-hover:text-secondary-purple">Live Demo</p>
                                <GoLinkExternal className="group-hover:fill-secondary-purple" size={32}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Portfolio
