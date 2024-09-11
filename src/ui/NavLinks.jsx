import { useContext, useState } from "react"
import { HiMiniXMark } from "react-icons/hi2"
import { NavLink } from "react-router-dom"
import { TriggerContext,  useTrigger } from "../contexts/StatesContext"
import { WiMoonAltWaxingCrescent4 } from "react-icons/wi"
import { GoSun } from "react-icons/go"

function NavLinks({type}) {
    
    const {setIsOpen, isOpen, isDark, setIsDark} = useTrigger(TriggerContext)
    console.log(isOpen)

    function handleClose(){
      setIsOpen(false)
    }

    return (

        <ul className={`${type==='dropdown'? 'flex flex-col absolute  left-0 right-0 h-screen justify-center items-center bg-white  transition-all animate-slidein ease-in duration-300':' hidden justify-end '}  items-center gap-6 text-xl z-10  font-medium text-zinc-700  lg:flex dark:bg-dark-color dark:text-white
        `}>
           { isOpen && <button className="z-auto absolute right-10 top-10"
            onClick={()=>setIsOpen(isOpen=>!isOpen)}>

         <HiMiniXMark size={32}/>
            </button>}
        <li>
          <a href="#section-hero" className='hover:text-secondary-purple transition-all duration-[.3s] [&.active]:text-secondary-purple' onClick={handleClose}>
            Home
            
            </a>
        </li>
        <li>
          <a  href='#section-about' className='hover:text-secondary-purple transition-all duration-[.3s] [&.active]:text-secondary-purple' onClick={handleClose}>
            
            About</a>
        </li>
        <li>
          <a href="#section-projects" className='hover:text-secondary-purple transition-all duration-[.3s] [&.active]:text-secondary-purple'
          onClick={handleClose}>Projects</a>
        </li>
        <li>
          <NavLink to="/resume" className='hover:text-secondary-purple transition-all duration-[.3s] [&.active]:text-secondary-purple'
          onClick={handleClose}>Resume</NavLink>
        </li>
        <li>
          <a href="#section-contact" className='hover:text-secondary-purple transition-all duration-[.3s] [&.active]:text-secondary-purple'
          onClick={handleClose}>Contact</a>
        </li>
        <li className={`flex ${type === 'dropdown' && 'hidden'} `}>

        <div className="flex">
          
          <button onClick={()=>setIsDark(dark=>!dark)}>

        { isDark?<GoSun  size={32} className="dark:fill-white"/>:
          <WiMoonAltWaxingCrescent4 size={32} className="fill-neutral-900" />
        }  
          </button>

        </div>
        </li>
      
      </ul>

      
    )
  }


export default NavLinks
