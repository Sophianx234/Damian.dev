import Handles from "./Handles";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="section-hero"
      className="bg-[#F9F9F9] md:min-h-screen md:px-6 dark:bg-[#272F38] flex items-center"
    >
      <div
        className="lg:grid-cols-[2fr_1fr] lg:grid flex-col-reverse flex
        items-center gap-12 md:max-w-6xl mx-auto pt-28 pb-16 relative z-0 w-full"
      >
        {/* LEFT SIDE */}
        <div className="flex space-y-4 flex-col sm:space-y-4 items-center
          md:items-start justify-center lg:pt-10"
        >
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:text-6xl lg:text-7xl antialiased text-zinc-700
              sm:text-center sm:text-4xl text-3xl lg:text-left md:text-center 
              font-bold md:w-full lg:w-full mt-8 tracking-tight"
          >
            <span className="dark:text-white headline">
              Front-End React <br /> Developer{" "}
              <img
                src="./images/waving.png"
                className="md:w-[5rem] w-12 inline ml-2"
                alt="Waving hand"
              />
            </span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="md:text-2xl font-[Mulish] lg:text-xl text-lg 
              md:text-center lg:text-left text-center sm:text-center
              text-slate-600 dark:text-gray-300 leading-relaxed"
          >
            Hi, I'm Damian X. A passionate Front-end React <br className="hidden lg:block"/> Developer based
            in Tamale, Ghana. 📍
          </motion.p>

          {/* SOCIAL HANDLES */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="w-full mt-4"
          >
            <Handles />
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="flex justify-center items-center w-full">
          {/* Container dictating the size of the images. 
            Adjust max-w-[...] to make it even bigger or smaller.
          */}
          <div className="relative w-72 sm:w-80 md:w-[28rem] lg:w-[32rem] aspect-square">
            
            {/* LIGHT MODE IMAGE */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              src="./images/damian-bg-7.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-full dark:hidden drop-shadow-2xl"
            />

            {/* DARK MODE IMAGE */}
            <div className="hidden dark:block w-full h-full overflow-hidden rounded-full shadow-2xl bg-zinc-800">
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                src="./images/damian-7.jpg"
                alt="Profile"
                /* If your original image needs zooming, use scale utilities responsibly here.
                  e.g., scale-150. object-cover usually handles this cleaner.
                */
                className="w-full h-full object-cover object-center" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;