import { TriggerContext, useTrigger } from "../contexts/StatesContext";
import AboutSection from "../ui/aboutSection";
import ContactSection from "../ui/ContactSection";
import Footer from "../ui/Footer";
import Hero from "../ui/Hero";
import Modal from "../ui/Modal";
import ProjectSection from "../ui/ProjectSection";
import TechStack from "../ui/TechStack";

function Homepage() {
  const { isDark, isOpenModal } = useTrigger(TriggerContext);

  return (
    <div className={` ${isDark && "dark"} `}>
<div className="hidden">
      <Hero />

      <div id="section-about" className=" relative dark:bg-[#021526]">
        <TechStack />
        <AboutSection />
        {isOpenModal && <Modal />}
      </div>
      <ProjectSection />
      <ContactSection />
      <footer>
        <Footer />
      </footer>
      <div className="hidden"></div>
</div>
    </div>
  );
}

export default Homepage;
