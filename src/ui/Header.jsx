import { HiBars3 } from "react-icons/hi2";
import NavLinks from "./NavLinks";
import { TriggerContext, useTrigger } from "../contexts/StatesContext";
import { WiMoonAltWaxingCrescent4 } from "react-icons/wi";
import { GoSun } from "react-icons/go";

function Header() {
  
  const {isOpen, setIsOpen, isDark, setIsDark} = useTrigger(TriggerContext)
  return (
    <div className={`w-screen ${isDark && 'dark'} z-30 `}>

    <div className=" flex justify-between items-center px-8 md:px-14 pt-8 pb-7 shadow-md w-full  fixed left-0 right-0  z-10 bg-white dark:bg-dark-color">
      <h1 className="md:text-2xl  font-semibold text-base text-zinc-700 dark:text-white
      ">Damian.dev</h1>
    <div>
    <NavLinks/>
    
  {isOpen && <NavLinks type='dropdown'/>}


      <div className="flex   lg:hidden  justify-end gap-4">
        <button className="" onClick={()=>setIsOpen(isOpen=>!isOpen)}>
    <HiBars3 size={32} className="dark:fill-white"/>
        </button>
        <li className="flex">
          { isDark?
          <button onClick={()=>setIsDark(dark=>!dark)}>

        <GoSun  size={32} className="dark:fill-white"/>
          </button>:
          <button onClick={()=>setIsDark(dark=>!dark)}>

        <WiMoonAltWaxingCrescent4 size={32} className="fill-neutral-900" />
          </button>
      }
        </li>
      </div>
    </div>

    </div>
    </div>
  );
}

export default Header;
