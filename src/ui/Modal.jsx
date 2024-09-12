import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"
import { TriggerContext, useTrigger } from "../contexts/StatesContext"

function Modal() {
    const {setIsOpenModal } = useTrigger(TriggerContext)

    
    
    function dismountModal() {
        document.body.style.overflow = 'unset';
    }
    function handleClose(e){
        setIsOpenModal(false)
        
    }
    return (
    <div className="backdrop-blur-lg fixed top-0 left-0 right-0 bottom-0 z-[2]  ">
<div className="  flex justify-center items-end mt-40   ">

    <div className="grid grid-cols-[1fr_1.5fr] items-center  max-w-6xl  bg-white z-10 px-20 py-10 shadow-lg ">
        <img src="./images/damian-1.jpg" alt="" className="w-72 justify-self-center"/>

        <div className="relative">
            <div className="flex justify-end">

            <button onClick={handleClose} className="relative right-[-4rem] top-[-2rem]"><IoCloseOutline size={32} color="#000"/></button>
            </div>

        <p className="font-[Mulish] w-[38rem] text-justify  text-slate-800 z-20 ">

I'm Sophian Abdul Rahman also known as Damian X, a Front-end React Developer based in Ghana. With a strong foundation in HTML, CSS, JavaScript, and React, I specialize in building dynamic, responsive, and user-friendly web applications. My passion lies in crafting seamless digital experiences that not only look great but also perform optimally.
<br />
Since starting my journey in web development, I've focused on honing my skills and staying updated with the latest technologies and trends. My expertise in React allows me to create interactive and scalable applications that meet the needs of modern web users. Whether it's developing a new feature, optimizing performance, or debugging, I approach each challenge with enthusiasm and a problem-solving mindset.
<br />
I'm always eager to take on new projects and collaborate with others who share my passion for creating innovative web solutions. If you're looking for a dedicated developer to bring your ideas to life, feel free to reach out.

                </p>
    </div>
    </div>
</div>
        </div>
    )
}

export default Modal
