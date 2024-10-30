import { useState } from "react"
import { Fade, Slide} from "react-awesome-reveal"
import { TriggerContext, useTrigger } from "../contexts/StatesContext"
import Modal from "./Modal"

function AboutSection({flow}) {
    const {isOpenModal, setIsOpenModal} = useTrigger(TriggerContext)
    function mountModal(e) {
        setIsOpenModal(true)
        
    }
    
    return (
        <section  className="lg:max-w-5xl lg:mx-auto  lg:pb-20 pb-16 md:pb-0  ">
            

            <Fade duration={2000} triggerOnce >
        <div className="
        flex lg:flex-row flex-col  items-center lg:justify-center 
        space-y-9 md:pt-20 md:pb-20 lg:pb-20 lg:pt-0  lg:gap-10  
        ">
            <Slide 
                    triggerOnce direction={ 'left'}
                  >


            <img src="./images/d-2.png" alt="" className="md:w-[30rem]  w-96 lg:h-[24rem]  lg:rounded-md
            rounded-md 
            " />
            </Slide>
            <Slide 
                    triggerOnce direction={flow ==='swap'?  'left':'right'}
                  >

            <div className="flex flex-col items-center lg:items-start md:px-20 lg:px-10 space-y-7 lg:space-y-3 ">
                <h1 className="text-secondary-purple uppercase font-bold font-[Montserrat]  md:text-lg ">About Me</h1>
                <h2 className="md:text-3xl font-semibold  text-center lg:text-left  text-slate-700 dark:text-slate-100">Front-end Developer <br /> based in Tamale, Ghana 📍 </h2>
                <div className="space-y-6 text-zinc-600 lg:space-y-1 lg:pt-2 px-28 md:px-0">

                <p className="md:text-base text-center  lg:text-left lg:pb-3 text-sm dark:text-slate-200">
                Hey, my name is Sophian Abdul Rahman, and I'm a Frontend Developer.  My passion lies in creating a clean optimized UI/UX  for my users.
                


                </p>
                <p className="  md:text-base text-center lg:text-left dark:text-slate-200  text-sm">
                My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.
                </p>
                <div className="text-center lg:text-left">

                <button className="bg-secondary-purple px-5 py-2 text-white justify-self-center rounded-md" onClick={mountModal} >Read More</button>
                </div>
                </div>
            </div>
                  </Slide>
        </div>
            </Fade>
        </section>
    )
}

export default AboutSection
