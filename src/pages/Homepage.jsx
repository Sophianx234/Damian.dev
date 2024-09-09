import AboutSection from "../ui/aboutSection"
import Footer from "../ui/Footer"
import Hero from "../ui/Hero"
import TechStack from "../ui/TechStack"

function Homepage() {
    return (
        <div>
            <div >

            <Hero/>
            </div>
            <TechStack/>
            <AboutSection/>
        <footer>
            <Footer/>
        </footer>
        </div>
    )
}

export default Homepage
