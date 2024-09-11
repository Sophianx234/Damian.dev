import AboutSection from "../ui/aboutSection"
import ContactSection from "../ui/ContactSection"
import Footer from "../ui/Footer"
import Hero from "../ui/Hero"
import ProjectSection from "../ui/ProjectSection"
import TechStack from "../ui/TechStack"

function Homepage() {
    return (
        <div>
            

            <Hero/>
            

            <TechStack/>
            <AboutSection/>
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
