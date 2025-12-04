import Portfolio from "./Portfolio";
import { Slide } from "react-awesome-reveal";

function ProjectSection() {
  return (
    <section
      id="section-projects"
      className="bg-[#F9F9F9] dark:bg-[#272F38]
        
        "
    >
      <div
        className="lg:max-w-6xl lg:mx-auto md:pt-24 pt-10 pb-20 lg:pt-20  
        "
      >
        <Slide triggerOnce>
          <h1 className="text-secondary-purple uppercase font-bold font-[Montserrat]  md:text-lg text-center lg:text-left">
            Portfolio
          </h1>
          <h2 className="md:text-3xl font-semibold  text-center lg:text-left  text-slate-700 md:px-10 lg:px-0 text-2xl dark:text-slate-100">
            Each project is a unique piece of development 🧩
          </h2>
        </Slide>

        <div className="space-y-40  pt-20 ">
          <Portfolio 
  name="Dasaug"
  liveLink="https://dasaug.vercel.app/"
  desc="DASAUG is a dedicated platform built for the Dagbon Students Association, University of Ghana Chapter. It serves as a central hub for students to stay connected, access important information, explore cultural activities, and engage with the community. The platform is designed to strengthen unity, preserve tradition, and support the academic and social growth of Dagbon students on campus."
  emoji="🍿"
  codeLink="https://github.com/Sophianx234/dasa-web"
  imageNum={1}
/>

          <Portfolio   
  name="ACFITC"
  liveLink="https://acfitc.vercel.app/"
  desc="ACFITC is a platform built for a nonprofit foundation dedicated to empowering underserved communities. It highlights the foundation’s mission, ongoing projects, impact stories, and ways people can get involved. The site serves as a central space for raising awareness, connecting supporters, and driving meaningful social change."
  emoji="🌍"
  codeLink="https://github.com/Sophianx234/acfitc"
  imageNum={2}
/>
         <Portfolio  
  name="Wunkat Estate"
  liveLink="https://wunkathomes.vercel.app/"
  desc="Wunkat Estate is a clean and modern real estate platform designed to showcase premium properties with clarity and style. It provides users with an easy way to explore listings, view property details, and get a feel for available homes and apartments. The platform focuses on simplicity, smooth navigation, and a professional look—perfect for anyone searching for a future home or investment opportunity."
  emoji="🏡"
  codeLink="https://github.com/Sophianx234/wunkat-estate"
  imageNum={3}
/>

          <Portfolio   
  name="Rammys Closet"
  liveLink="https://rammys-closet.vercel.app/"
  desc="Rammys Closet is a sleek and user-friendly cosmetics website that allows users to explore, select, and order a wide range of beauty products. The platform features curated collections, detailed product information, and a smooth shopping experience, making it easy for customers to discover and purchase their favorite cosmetics online."
  emoji="👗"
  codeLink="https://github.com/Sophianx234/rammys-closet"
  imageNum={4}
/>

        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
