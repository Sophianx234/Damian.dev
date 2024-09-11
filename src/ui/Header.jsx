import { HiBars3 } from "react-icons/hi2";
import NavLinks from "./NavLinks";
import { TriggerContext, useTrigger } from "../contexts/StatesContext";

function Header() {
    const {isOpen, setIsOpen} = useTrigger(TriggerContext)
  return (
    <div className="w-screen">

    <div className=" flex justify-between items-center px-14 pt-8 pb-7 shadow-md w-full  fixed left-0 right-0  z-10 bg-white">
      <h1 className="md:text-2xl  font-semibold text-base text-zinc-700 
      ">Damian.dev</h1>
    <div>
    <NavLinks/>
    
  {isOpen && <NavLinks type='dropdown'/>}


      <div className="flex  lg:hidden  justify-end">
        <button className="" onClick={()=>setIsOpen(isOpen=>!isOpen)}>
    <HiBars3 size={32}/>
        </button>
      </div>
    </div>

    </div>
    </div>
  );
}

export default Header;
