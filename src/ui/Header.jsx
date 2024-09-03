import { HiBars3 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className=" grid grid-cols-2 items-center px-14 pt-8 pb-7 shadow-md ">
      <h1 className="text-2xl font-semibold text-zinc-700 
      ">Damian.dev</h1>
    <div>

      <ul className="flex items-center gap-6 text-xl self-end justify-end font-medium text-zinc-700 sm:hidden md:flex ">
        <li>
          <NavLink to="/home" className='hover:text-secondary-purple transition-all duration-[.3s] [&.active]:text-secondary-purple'>Home</NavLink>
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
      <div className="self-end">

      <HiBars3 size={32}/>
      </div>
    </div>

    </div>
  );
}

export default Header;
