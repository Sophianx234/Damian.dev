import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

// Realistic placeholders tailored to your enterprise & startup trajectory
const testimonials = [
  {
    id: "01",
    quote: "Damian doesn't just write code; he architects solutions. His ability to translate our complex operational requirements into a streamlined, high-performance internal tool was exceptional.",
    author: "Operations Director",
    context: "Banking & Investment Sector",
  },
  {
    id: "02",
    quote: "Working with Damian at AncoreXHub has been a masterclass in modern engineering. He has a rare grasp of both scalable backend systems and pixel-perfect mobile interfaces.",
    author: "Co-Founder & Product Lead",
    context: "AncoreXHub",
  },
  {
    id: "03",
    quote: "A remarkably forward-thinking engineer. His deployment of containerized architecture for the PropTech platform demonstrated a level of maturity usually seen in senior enterprise architects.",
    author: "Technical Advisor",
    context: "WunkateHomes Project",
  }
];

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Animation variants for the cross-fade/slide
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section 
      id="section-testimonials"
      className="w-full bg-white dark:bg-[#111111] text-zinc-900 dark:text-white py-24 md:py-32 px-6 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
          >
            Endorsements.
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-zinc-900 dark:bg-white origin-left"
          />
        </div>

        {/* Carousel Container */}
        <div className="relative border-t border-b border-zinc-200 dark:border-zinc-800 py-16 md:py-24 min-h-[400px] flex flex-col justify-center">
          
          <div className="absolute top-16 left-0 text-zinc-200 dark:text-zinc-800 pointer-events-none">
            <Quote className="w-24 h-24 md:w-40 md:h-40 rotate-180 opacity-50" fill="currentColor" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto w-full">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-8 md:gap-12"
              >
                {/* Quote Text */}
                <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug tracking-tight text-zinc-900 dark:text-white">
                  "{testimonials[activeIndex].quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono tracking-widest text-zinc-400 dark:text-zinc-600">
                    {testimonials[activeIndex].id}
                  </span>
                  <span className="h-[1px] w-8 bg-zinc-300 dark:bg-zinc-700" />
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-sm font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mt-1">
                      {testimonials[activeIndex].context}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8">
          <p className="text-sm font-mono tracking-widest text-zinc-500 dark:text-zinc-400">
            {activeIndex + 1} / {testimonials.length}
          </p>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrev}
              className="group p-4 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors duration-300 focus:outline-none"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
            </button>
            <button 
              onClick={handleNext}
              className="group p-4 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors duration-300 focus:outline-none"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;