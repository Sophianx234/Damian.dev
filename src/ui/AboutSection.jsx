import { useState } from "react"
import { Fade} from "react-awesome-reveal"
import { TriggerContext, useTrigger } from "../contexts/StatesContext"
import Modal from "./Modal"

function AboutSection() {
    const {isOpenModal, setIsOpenModal} = useTrigger(TriggerContext)
    function mountModal(e) {
        document.body.style.overflow = 'hidden';
        setIsOpenModal(true)
    }
    return (
        <section  className="lg:max-w-6xl lg:mx-auto  lg:pb-20 pb-16 md:pb-0  ">
            

            <Fade duration={2000} triggerOnce >
        <div className="
        flex lg:flex-row flex-col  items-center lg:justify-center 
        space-y-9 md:pt-20 md:pb-20 lg:pb-20 lg:pt-0  lg:gap-10  
        ">


            <img src="./images/desktop.png" alt="" className="md:w-[30rem]  w-96 lg:h-[26rem] lg:rounded-md
            rounded-md 
            " />
            <div className="flex flex-col items-center lg:items-start md:px-20 lg:px-10 space-y-7 lg:space-y-3 ">
                <h1 className="text-secondary-purple uppercase font-bold font-[Montserrat]  md:text-lg ">About Me</h1>
                <h2 className="md:text-3xl font-semibold  text-center lg:text-left  text-slate-700 dark:text-slate-100">Front-end Developer <br /> based in Tamale, Ghana 📍 </h2>
                <div className="space-y-6 text-zinc-600 lg:space-y-2 lg:pt-2 px-28 md:px-0">

                <p className="md:text-xl text-center  lg:text-left lg:pb-3 text-sm dark:text-slate-200">
                Hey, my name is Sophian Abdul Rahman, and I'm a Frontend Developer.  My passion lies in creating a clean optimized UI/UX  for my users.
                


                </p>
                <p className="  md:text-xl text-center lg:text-left dark:text-slate-200  text-sm">
                My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.
                </p>
                <div className="text-center lg:text-left">

                <button className="bg-secondary-purple px-5 py-2 text-white justify-self-center rounded-md" onClick={mountModal} >Read More</button>
                </div>
                </div>
            </div>
        </div>
            </Fade>
        </section>
    )
}

export default AboutSection
