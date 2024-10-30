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
            name="Use Popcorn "
            liveLink="https://usepopcornx.netlify.app/"
            desc="Use Popcorn is a sleek and user-friendly React application that allows users to search for any movie and access detailed information, including IMDb ratings, plots, released year and much more. Additionally, users can rate movies based on their personal viewing experiences."
            emoji="🍿"
            codeLink="https://github.com/Sophianx234/usePopcorn"
            imageNum={1}
          />
          <Portfolio
            name="World Wise "
            desc="World Wise is an intuitive and engaging React application designed to provide users with a dynamic global map to explore.World Wise allows you to mark the locations you've visited and add personalized notes to capture your memories and experiences. "
            imageNum={2}
            emoji="✈️"
            liveLink="https://worldwisex.netlify.app/"
            codeLink="https://github.com/Sophianx234/worldWise"
            flow="swap"
          />
          <Portfolio
            name="Fast Pizza "
            desc="Fast Pizza is a user-friendly web application that offers users the convenience of browsing through a wide selection of delicious pizzas. The app is equipped with a GPS feature that accurately tracks the user's location, ensuring timely and efficient delivery. With just a few clicks, users can easily place their orders and enjoy their favorite pizzas."
            imageNum={3}
            codeLink="https://github.com/Sophianx234/fast-react-pizza"
            cssFramework="Tailwind"
            emoji="🍕"
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
