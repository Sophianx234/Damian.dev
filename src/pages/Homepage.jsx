import { TriggerContext, useTrigger } from "../contexts/StatesContext"
import AboutSection from "../ui/aboutSection"
import ContactSection from "../ui/ContactSection"
import Footer from "../ui/Footer"
import Hero from "../ui/Hero"
import ProjectSection from "../ui/ProjectSection"
import TechStack from "../ui/TechStack"

function Homepage() {
    const {isDark} = useTrigger(TriggerContext)
    return (
        <div className={`${isDark && 'dark'}`}>
            

            <Hero/>
            
<div id="section-about" className="dark:bg-[#021526]">

            <TechStack/>
            <AboutSection/>
</div>
            <ProjectSection/>
            <ContactSection/>
        <footer>
            <Footer/>
        </footer>
            <div className="hidden">
            </div>
        </div>
    )
}

export default Homepage
