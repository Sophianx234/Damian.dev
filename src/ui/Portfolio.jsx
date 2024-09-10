import { BsGithub } from "react-icons/bs"
import { GoLinkExternal } from "react-icons/go"

function Portfolio({name, desc, emoji, cssFramework ='CSS', image, flow, imageNum}) {
    return (
        <div>
            <div className={`flex  justify-between   
                
            gap-20 ${flow ==='swap' && "flex-row-reverse"}`}>
                <img src={`./images/p-${imageNum}.png`} alt="" className="w-[40rem] bg-blend-multiply rounded-md" />
                <div className="">
                    <h1 className="text-xl font-bold  text-center pb-4 text-slate-700 uppercase">{name} {emoji}</h1>
                    <p className="text-md text-slate-700 text-center px-10">
                    {desc}
                    </p>
                    <div className="flex items-center justify-center pt-4 gap-10 font-bold text-slate-700">
                        <p className="cursor-pointer">React</p>
                        <p className="cursor-pointer">{cssFramework}</p>
                    </div>
                    <div>
                        <div className="flex gap-28 pt-6 justify-center ">

                            <div className="flex gap-2 items-center font-semibold group
                            cursor-pointer group-hover:text-secondary-purple">
                                <p className="group-hover:text-secondary-purple">Code</p>
                                <BsGithub size={32} className="group-hover:fill-secondary-purple"/>
                            </div>
                            <div className="flex items-center gap-2 font-semibold group cursor-pointer">
                                <p className="group-hover:text-secondary-purple">Live Demo</p>
                                <GoLinkExternal className="group-hover:fill-secondary-purple" size={32}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Portfolio
