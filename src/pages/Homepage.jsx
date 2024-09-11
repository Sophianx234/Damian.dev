import AboutSection from "../ui/aboutSection"
import ContactSection from "../ui/ContactSection"
import Footer from "../ui/Footer"
import Hero from "../ui/Hero"
import ProjectSection from "../ui/ProjectSection"
import TechStack from "../ui/TechStack"

function Homepage() {
    return (
        <div className="dark">
            

            <Hero/>
            
<div className="dark:bg-[#021526]">

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
