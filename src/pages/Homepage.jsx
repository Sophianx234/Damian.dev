import { TriggerContext, useTrigger } from "../contexts/StatesContext";
import AboutSection from "../ui/aboutSection";
import ContactSection from "../ui/ContactSection";
import Footer from "../ui/Footer";
import Hero from "../ui/Hero";
import Modal from "../ui/Modal";
import Progress from "../ui/Progress";
import ProjectSection from "../ui/ProjectSection";
import ServicesSection from "../ui/ServicesSection";
import TechStack from "../ui/TechStack";

function Homepage() {
  const { isDark, isOpenModal } = useTrigger(TriggerContext);

  return (
    <div className={` ${isDark && "dark"} `}>
      <Hero />

      <div id="section-about" className=" relative dark:bg-[#021526]">
        <TechStack />
        <ServicesSection/>
        <Progress/>
<div className="hidden">
        <AboutSection />
        {isOpenModal && <Modal />}
      <ProjectSection />
      <ContactSection />
      <footer>
        <Footer />
      </footer>
      <div className="hidden"></div>
      </div>
</div>
    </div>
  );
}

export default Homepage;
