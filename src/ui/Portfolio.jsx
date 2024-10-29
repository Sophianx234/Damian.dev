import { Fade, Slide } from "react-awesome-reveal"
import { BsGithub } from "react-icons/bs"
import { GoLinkExternal } from "react-icons/go"

function Portfolio({name, desc,liveLink='#',codeLink, emoji, cssFramework ='CSS', image, flow, imageNum}) {
    return (
        <div>
            <div className={`flex  justify-between
            flex-col  items-center lg:px-10 md:px-10  
            
            gap-20 ${flow ==='swap' ? "lg:flex-row-reverse":"lg:flex-row"}`}>
                <Slide triggerOnce direction={flow ==='swap'? 'right': 'left'}>
                    <Fade triggerOnce>

<div className="mx-16">

                <img src={`./images/p-${imageNum}.png`} alt="" className="  scale-125 lg:w-[110rem]   w-[30rem] bg-blend-multiply rounded-md" />
</div>
                    </Fade>
                </Slide>
                <div className="">
                    <Slide 
                    triggerOnce direction={flow ==='swap'?  'left':'right'}
                    >
                        <Fade triggerOnce>


                    <h1 className="text-xl font-bold  text-center pb-4 text-slate-700 uppercase dark:text-slate-100">{name} {emoji}</h1>
                    <p className="text-base text-slate-700 text-center md:px-10 px-10 dark:text-stone-300">
                    {desc}
                    </p>
                    <div className="flex items-center justify-center pt-4 gap-10 font-bold text-slate-700">
                        <p className="cursor-pointer dark:text-green-100">React</p>
                        <p className="cursor-pointer dark:text-green-100">{cssFramework}</p>
                    </div>
                    <div>
                        <div className="flex gap-28 pt-6 justify-center ">

                            <a href={codeLink} className="flex gap-2 items-center font-semibold group
                            cursor-pointer group-hover:text-secondary-purple">
                                <p className="group-hover:text-secondary-purple dark:text-white">Code</p>
                                <BsGithub size={32} className="group-hover:fill-secondary-purple dark:fill-white"/>
                            </a>
                            <a href={liveLink} className="flex items-center gap-2 font-semibold group cursor-pointer">
                                <p className="group-hover:text-secondary-purple dark:text-white">Live Demo</p>
                                <GoLinkExternal className="group-hover:fill-secondary-purple dark:fill-white" size={32}/>
                            </a>
                        </div>
                    </div>
                        </Fade>
                                </Slide>
                </div>
            </div>
            
        </div>
    )
}

export default Portfolio
