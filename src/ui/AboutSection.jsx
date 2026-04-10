import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, ArrowRight, X } from "lucide-react";

// Minimalist, high-contrast modal
const CustomModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-zinc-900 dark:bg-white p-8 md:p-12 w-full max-w-2xl shadow-2xl z-10"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-zinc-400 dark:text-zinc-500 hover:text-white dark:hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white dark:text-zinc-900 tracking-tight">
              Engineering Philosophy.
            </h3>
            
            <div className="space-y-6 text-zinc-300 dark:text-zinc-600 text-base md:text-lg leading-relaxed">
              <p>
                My approach extends beyond writing code. I am deeply invested in mastering the "software business language"—understanding product lifecycles, user needs, and pitching technical architecture effectively to stakeholders and clients.
              </p>
              <p>
                Whether I am engineering internal corporate tools for banking operations or architecting media streaming APIs, my goal is always to bridge the gap between complex backend infrastructure and seamless, accessible user interfaces. I thrive on leading feature development from concept to deployment within modern, scalable ecosystems.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Framer Motion Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.8, staggerChildren: 0.2 } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function AboutSection() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <section 
      id="section-about"
      className="bg-white text-zinc-900 dark:bg-[#111111] dark:text-white py-24 md:py-32 px-6 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* === LEFT COLUMN: EDITORIAL IMAGE === */}
          <motion.div 
            className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] group"
            variants={itemVariants}
          >
            {/* Minimalist offset border */}
            <div className="absolute inset-0 border border-zinc-200 dark:border-zinc-800 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            
            {/* Main Image Container */}
            <div className="relative w-full h-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden z-10">
              <img 
                src="https://res.cloudinary.com/dtytb8qrc/image/upload/v1755998216/damian-1_tmzjhd.jpg" 
                alt="Damian - Software Engineer" 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
            
            {/* Stark Typography Badge */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 z-20 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 p-6 md:p-8 shadow-xl">
              <span className="block text-sm font-mono uppercase tracking-widest mb-1 opacity-70">
                Current Focus
              </span>
              <span className="block text-xl md:text-2xl font-bold tracking-tight">
                Enterprise & Mobile
              </span>
            </div>
          </motion.div>

          {/* === RIGHT COLUMN: TEXT CONTENT === */}
          <motion.div 
            className="flex flex-col text-left"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm font-mono text-zinc-500 dark:text-zinc-400">About</span>
              <span className="h-[1px] w-12 bg-zinc-300 dark:bg-zinc-700" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8">
              Software Engineer & Founder.
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-10">
              <span className="flex items-center gap-2 text-zinc-900 dark:text-white">
                <MapPin size={16} />
                Accra, Ghana
              </span>
              <span className="flex items-center gap-2">
                <Briefcase size={16} />
                Full-time / Startup
              </span>
            </div>

            <div className="space-y-6 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12">
              <p>
                I am a Software Engineer specializing in scalable enterprise infrastructure and cross-platform mobile applications. Currently operating within the banking and investment sector, I focus on translating complex business requirements into secure, high-performance systems.
              </p>
              <p>
                As the Founder and Lead Engineer at AncoreXHub, I direct technical architecture and team strategy, bridging the gap between modern front-end ecosystems and robust, containerized backends to deliver end-to-end solutions.
              </p>
            </div>
            
            <div>
              <motion.button 
                onClick={() => setIsOpenModal(true)}
                className="group flex items-center gap-4 py-4 pr-6 text-lg font-bold tracking-tight text-zinc-900 dark:text-white uppercase transition-opacity hover:opacity-70 border-b-2 border-zinc-900 dark:border-white w-fit"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                Read Full Philosophy
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </motion.button>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Modal Component */}
      <CustomModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </section>
  );
}

export default AboutSection;