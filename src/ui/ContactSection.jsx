import { Slide } from "react-awesome-reveal"
import { LuMail } from "react-icons/lu"
import {  TbMapSearch } from "react-icons/tb"

function ContactSection() {
    return (
        <section id="section-contact" className="dark:bg-[rgb(2,21,38)]">
            <Slide triggerOnce>

        <div className="max-w-6xl pt-16 mx-auto lg:h-[32rem] lg:flex lg:items-center md:py-24 lg:py-0  pb-20">
            <div className=" space-y-4 ">

            <h1 className="text-secondary-purple uppercase font-bold font-[Montserrat] text-center 
            lg:text-left text-lg">
                Contact
            </h1>
            <h2 className="md:text-3xl font-semibold text-2xl text-center lg:text-left   text-slate-700 px-24 lg:px-0 dark:text-slate-200">Let’s connect and create something amazing! 🚀👇 </h2>
            <div className="flex items-center gap-20 flex-col lg:flex-row pt-16">
                <div className="flex flex-col 
                lg:flex-row items-center md:items-center justify-center gap-8 ">

                <div className="shadow-sm   w-fit p-2 rounded-full
                shadow-slate-400
                ">


                <TbMapSearch size={40}
                color="#4F46E5"
                />
                </div>
                <div>
                    <h4 className="text-xl font-semibold text-slate-700 text-center lg:text-left dark:text-slate-200">Location</h4>
                    <p className="text-lg text-slate-700 hover:text-secondary-purple transition-all duration-100 cursor-pointer dark:text-gray-300">Tamale, Ghana</p>
                </div>
                </div>
                <div className="flex items-center gap-4 flex-col lg:flex-row">

                <div className="shadow-sm   w-fit p-2 rounded-full
                shadow-slate-400">

                <LuMail
                size={40}
                color="#4F46E5"
                />
                </div>
                <div className="">
                    <h4 className="text-xl font-semibold  text-center lg:text-left text-slate-700 dark:text-slate-200">Mail</h4>
                    <a 
                    className="text-lg text-slate-700 hover:text-secondary-purple transition-all duration-100 cursor-pointer dark:text-gray-300" href="mailto:dx4336969@gmail.com"
                     >dx4336969@gmail.com</a>
                </div>
                </div>
            </div>
        </div>
                </div>
                </Slide>
            </section>
    )
}

export default ContactSection
