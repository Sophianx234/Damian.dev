import { HiBars3, HiMiniXMark } from "react-icons/hi2";
import NavLinks from "./NavLinks";
import { TriggerContext, useTrigger } from "../contexts/StatesContext";

function Header() {
    const {isOpen, setIsOpen} = useTrigger(TriggerContext)
  return (
    <div className=" grid grid-cols-2 items-center px-14 pt-8 pb-7 shadow-md ">
      <h1 className="text-2xl font-semibold text-zinc-700 
      ">Damian.dev</h1>
    <div>
    <NavLinks/>
   { isOpen && <NavLinks type='dropdown'/>}

      <div className="flex justify-end md:hidden">
        <button onClick={()=>setIsOpen(isOpen=>!isOpen)}>
    <HiBars3 size={32}/>
        </button>
      </div>
    </div>

    </div>
  );
}

export default Header;
