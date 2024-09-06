import { AiOutlineGithub } from "react-icons/ai"
import { IoLogoLinkedin } from "react-icons/io"
import { NavLink } from "react-router-dom"

function Handles({type}) {
    return (
        <div className="space-x-4 items-center flex mt-4 ">
            <NavLink to='https://www.linkedin.com/in/sophian-abdul-rahman-909125230/'>

            <IoLogoLinkedin className={`hover:fill-secondary-purple transition-all duration-200 ${type&& 'size-8 inline-block'}`} size={type? 46:36} color={`${type?'#fff':'#3F3F46'}`}/>
            </NavLink>
            <NavLink to='https://github.com/Sophianx234' >
            <AiOutlineGithub className={`hover:fill-secondary-purple transition-all  duration-200   ${type&& 'size-8 inline-block'}`} size={type? 46:36} color={`${type?'#fff':'#3F3F46'}`}/>

            </NavLink>
        </div>
    )
}

export default Handles
