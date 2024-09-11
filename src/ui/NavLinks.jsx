import { useContext, useState } from "react"
import { HiMiniXMark } from "react-icons/hi2"
import { NavLink } from "react-router-dom"
import { TriggerContext,  useTrigger } from "../contexts/StatesContext"

function NavLinks({type}) {
    
    const {setIsOpen, isOpen} = useTrigger(TriggerContext)
    console.log(isOpen)

    

    return (

        <ul className={`${type==='dropdown'? 'flex flex-col absolute  left-0 right-0 h-screen justify-center items-center bg-white  transition-all animate-slidein ease-in duration-300':' hidden justify-end '}  items-center gap-6 text-xl z-10  font-medium text-zinc-700  lg:flex 
        `}>
           { isOpen && <button className="z-auto absolute right-10 top-10"
            onClick={()=>setIsOpen(isOpen=>!isOpen)}>

         <HiMiniXMark size={32}/>
            </button>}
        <li>
          <NavLink to="/home" className='hover:text-secondary-purple transition-all duration-[.3s] [&.active]:text-secondary-purple'>
            Home
            
            </NavLink>
        </li>
        <li>
          <NavLink to="/about" className='hover:text-secondary-purple transition-all duration-[.3s] [&.active]:text-secondary-purple'>About</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className='hover:text-secondary-purple transition-all duration-[.3s] [&.active]:text-secondary-purple'>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/resume" className='hover:text-secondary-purple transition-all duration-[.3s] [&.active]:text-secondary-purple'>Resume</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className='hover:text-secondary-purple transition-all duration-[.3s] [&.active]:text-secondary-purple'>Contact</NavLink>
        </li>
      </ul>

      
    )
}

export default NavLinks
