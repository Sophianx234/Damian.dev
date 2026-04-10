import { TriggerContext, useTrigger } from "../contexts/StatesContext";
import AboutSection from "../ui/aboutSection";
import ContactSection from "../ui/ContactSection";
import Experience from "../ui/Experience";
import Footer from "../ui/Footer";
import Hero from "../ui/Hero";
import Modal from "../ui/Modal";
import Progress from "../ui/Progress";
import ProjectSection from "../ui/ProjectSection";
import ServicesSection from "../ui/ServicesSection";
import TechStack from "../ui/TechStack";
import TestimonialsSection from "../ui/TestimonialSection";

function Homepage() {
  const { isDark, isOpenModal } = useTrigger(TriggerContext);

  return (
    <div className={` ${isDark && "dark"} `}>
      <Hero /> {/* 1. The Hook: Who you are instantly */}

      <div id="section-main" className="relative dark:bg-[#021526]">
        
        <TechStack /> {/* 3. The Tools: What you build with */}
        {isOpenModal && <Modal />}
        
        
        <Progress /> {/* 4. The Capabilities: How you apply those tools (Mobile, Enterprise, etc.) */}
        <AboutSection /> {/* 2. The Human: Introduce your philosophy early */}
        
        <ProjectSection /> {/* 5. The Proof: Case studies of your actual work */}
        
        <Experience /> {/* 6. The Timeline: Your career history & startup */}
        
        <ServicesSection /> {/* 7. The Offer: Now that they trust you, what can you do for them? */}
        
        {/* Optional: <Testimonials /> or <Articles /> goes here */}
        <TestimonialsSection/>

        <ContactSection /> {/* 8. The CTA: Let's talk */}
        
        <footer>
          <Footer />
        </footer>

      </div>
    </div>
  );
}
export default Homepage;
