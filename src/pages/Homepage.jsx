import AboutSection from "../ui/aboutSection"
import ContactSection from "../ui/ContactSection"
import Footer from "../ui/Footer"
import Hero from "../ui/Hero"
import ProjectSection from "../ui/ProjectSection"
import TechStack from "../ui/TechStack"

function Homepage() {
    return (
        <div>
            <div >

            <Hero/>
            </div>
            <TechStack/>
            <AboutSection/>
            <ProjectSection/>
            <ContactSection/>
        <footer>
            <Footer/>
        </footer>
        </div>
    )
}

export default Homepage
