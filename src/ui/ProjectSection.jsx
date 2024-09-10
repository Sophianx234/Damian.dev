import { BsGithub } from "react-icons/bs"
import { GoLinkExternal } from "react-icons/go"
import Portfolio from "./Portfolio"

function ProjectSection() {
    return (
        
        <div className="bg-[#F9F9F9]
        
        ">
        <div className="lg:max-w-6xl lg:mx-auto  lg:pb-20">
            <h1 className="text-secondary-purple uppercase font-bold font-[Montserrat]  md:text-lg  ">Portfolio</h1>
            <h2 className="md:text-3xl font-semibold  text-center lg:text-left  text-slate-700">Each project is a unique piece of development 🧩</h2>

            <Portfolio
            name = 'Use Popcorn '
             desc ='Use Popcorn is a sleek and user-friendly React application that allows users to search for any movie and access detailed information, including IMDb ratings, plots, released year and much more. Additionally, users can rate movies based on their personal viewing experiences.'
              emoji ='🍿'
            />
            <Portfolio
            name = 'Use Popcorn '
             desc ="World Wise is an intuitive and engaging React application designed to provide users with a dynamic global map to explore.World Wise allows you to mark the locations you've visited and add personalized notes to capture your memories and experiences. "
              emoji ='🍿'
              flow='swap'
            />
            </div>
        </div>
    )
}

export default ProjectSection
