import React from "react";
import { motion } from "framer-motion";
import { Building2, Rocket, GraduationCap, Calendar, ChevronRight } from "lucide-react";

// The data array makes it easy to add or edit roles in the future
const experienceData = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Banking & Investment Sector (National Service)",
    date: "Late 2025 - Present",
    location: "Accra, Ghana",
    description: 
      "Developing and maintaining software solutions within a high-stakes banking operations and investment environment. Engineered 'RepublicLunch', a full-stack application that successfully streamlined internal food ordering and administrative tracking for workplace staff.",
    icon: Building2,
  },
  {
    id: 2,
    role: "Founder & Lead Engineer",
    company: "AncoreXHub",
    date: "Early 2026 - Present",
    location: "Accra, Ghana",
    description: 
      "Founded and leading a four-member software engineering startup. Directing weekly team strategy, technical architecture, and the continuous development of modern, scalable web and mobile applications.",
    icon: Rocket,
  },
  {
    id: 3,
    role: "BSc Information Technology",
    company: "University of Ghana",
    date: "Graduated Feb 2026",
    location: "Accra, Ghana",
    description: 
      "Completed comprehensive degree program with a strong focus on modern software development methodologies, preparing for a seamless transition into enterprise engineering.",
    icon: GraduationCap,
  }
];

function Experience() {
  return (
    <section 
      id="section-experience" 
      className="bg-white text-zinc-900 dark:bg-black dark:text-white py-24 md:py-32 px-6 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto w-full z-10">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
          >
            The Journey.
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-zinc-900 dark:bg-white origin-left"
          />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-6 space-y-12 md:space-y-16">
          {experienceData.map((exp, index) => (
            <ExperienceItem key={exp.id} exp={exp} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

function ExperienceItem({ exp, index }) {
  const { role, company, date, location, description, icon: Icon } = exp;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15, 
        ease: "easeOut" 
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative pl-8 md:pl-12 group"
    >
      {/* Timeline Node/Icon */}
      <div className="absolute -left-[20px] top-1 md:top-2 w-10 h-10 rounded-full bg-white dark:bg-black border-2 border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-zinc-900 dark:group-hover:border-white group-hover:scale-110 transition-all duration-300 z-10">
        <Icon className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
      </div>

      {/* Content Card */}
      <div className="flex flex-col space-y-3">
        
        {/* Meta Info (Date & Location) */}
        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{date}</span>
          </div>
          <span className="hidden md:block text-zinc-300 dark:text-zinc-700">•</span>
          <span>{location}</span>
        </div>

        {/* Role & Company */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
            {role}
            <ChevronRight className="w-5 h-5 text-zinc-300 dark:text-zinc-700 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </h3>
          <p className="text-base md:text-lg font-medium text-zinc-600 dark:text-zinc-300 mt-1">
            {company}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-3xl mt-2">
          {description}
        </p>
        
      </div>
    </motion.div>
  );
}

export default Experience;