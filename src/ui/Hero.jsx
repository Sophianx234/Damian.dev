import Handles from "./Handles";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="section-hero"
      className="bg-[#F9F9F9] md:h-screen md:px-6 dark:bg-[#272F38]"
    >
      <div
        className="lg:grid-cols-[2fr_1fr] lg:grid flex-col-reverse flex
        items-center gap-8 md:max-w-6xl mx-auto pt-28 pb-16 relative z-0"
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
            className="md:text-6xl lg:text-6xl antialiased text-zinc-700
              sm:text-center sm:text-3xl text-2xl lg:text-left md:text-center 
              font-bold md:w-full lg:w-full mt-8"
          >
            <span className="dark:text-white headline">
              Front-End React <br /> Developer{" "}
              <img
                src="./images/waving.png"
                className="md:w-[4rem] w-10 inline"
                alt=""
              />
            </span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="md:text-2xl font-[Mulish] lg:text-xl text-base 
              md:text-center lg:text-left text-center sm:text-center
              text-slate-600 dark:text-gray-200"
          >
            Hi, I'm Damian X. A passionate Front-end React <br /> Developer based
            in Tamale, Ghana. 📍
          </motion.p>

          {/* SOCIAL HANDLES */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="w-full"
          >
            <Handles />
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="flex justify-center">
          {/* LIGHT MODE IMAGE */}
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            src="./images/damian-bg-7.png"
            alt="could not find image"
            className="md:w-80 w-64 rounded-full scale-125 
            md:scale-110 dark:hidden md:self-start"
          />

          {/* DARK MODE IMAGE */}
          <div className="overflow-hidden rounded-full h-80">
            <motion.img
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src="./images/damian-7.jpg"
              alt="could not find image"
              className="md:w-80 w-[20rem] scale-[1.2] hidden dark:block
              object-center md:self-start"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
