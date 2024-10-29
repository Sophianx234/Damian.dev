import { useEffect, useState } from "react"
import { IoCloseOutline } from "react-icons/io5"
import { TriggerContext, useTrigger } from "../contexts/StatesContext"
import Description from "./Description"

function Modal() {
    const {setIsOpenModal } = useTrigger(TriggerContext)

    
    
    function handleClose(e){
        setIsOpenModal(false)
        
    }
    
    return (
        <>
    <div className="backdrop-blur-lg fixed top-0 left-0  right-0 bottom-0 z-[2]  " onClick={handleClose}>
<div className="  md:flex  justify-center items-end lg:mt-[10%] md:mt-[15%]   ">

    <div className="lg:grid md:flex lg:grid-cols-[5fr_1.5fr] md:grid-cols-2 grid-cols-1 items-center hidden  lg:max-w-2xl max-w-2xl   bg-white z-10 lg:pr-9 space-x-4 shadow-lg dark:bg-[#021526] ">

        <img src="./images/damian-1.jpg" alt="" className=" lg:w-screen md:w-72 justify-self-center hidden md:block"/>

        <div className="relative">
            <div className="lg:flex lg:justify-end  ">

            <button onClick={handleClose} className="   absolute lg:-top-[13%] lg:-right-[5%] md:right-[2%] md:top-[-10%] "><IoCloseOutline size={32}  className="size-6   lg:size-7 dark:stroke-white"/></button>
            </div>
            
<Description/>
        
    </div>
    </div>

    </div>
    <div className="flex md:hidden max-w-[32rem]  mx-auto ">
        <div className=" text-lg    z-10 bg-white mx-5  mt-[26%] shadow-lg dark:bg-[#021526] px-10  py-6 rounded-lg  ">

        <Description/>
        </div>
        </div>
</div>
        </>
    )
}

export default Modal
