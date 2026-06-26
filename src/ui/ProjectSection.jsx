import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

// Your actual projects injected into the new data structure
const projectsData = [
  {
    id: "01",
    name: "Dasaug",
    category: "Community Platform",
    description: "A dedicated platform built for the Dagbon Students Association at the University of Ghana. It acts as a central hub where students can easily stay connected, find important updates, explore cultural events, and engage with their community.",
    tech: ["React", "Tailwind CSS", "Node.js"], // You can adjust these
    liveLink: "https://dasaug.netlify.app/",
    githubLink: "https://github.com/Sophianx234/dasa-web",
    image: "./images/p-1.png" 
  },
  {
    id: "02",
    name: "ACFITC",
    category: "Nonprofit Foundation",
    description: "A welcoming platform created for a nonprofit foundation focused on empowering underserved communities. It clearly shares the foundation's mission, showcases ongoing projects and success stories, and offers easy ways for visitors to get involved and help make a difference.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"], // You can adjust these
    liveLink: "https://acfitc.vercel.app/",
    githubLink: "https://github.com/Sophianx234/acfitc",
    image: "./images/p-2.png"
  },
  {
    id: "03",
    name: "Wunkat Estate",
    category: "Real Estate & PropTech",
    description: "A clean and modern real estate platform designed to beautifully showcase premium properties. It gives users a simple and enjoyable way to browse listings, check out property details, and experience smooth and professional navigation.",
    tech: ["React", "Tailwind CSS", "Express"], // You can adjust these
    liveLink: "https://wunkathomes.vercel.app/",
    githubLink: "https://github.com/Sophianx234/wunkat-estate",
    image: "./images/p-3.png"
  },
  {
    id: "04",
    name: "BKC Engineering Solutions",
    category: "Renewable Energy & Clean Tech",
    description: "A premium and modern website built for a top solar energy company in Ghana. It features smooth scrolling, a layout that works perfectly on any device, an interactive product catalog, and easy navigation to beautifully display their solar products and engineering services.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveLink: "https://bkcengineering.vercel.app/", // Update with the actual deployed link
    githubLink: "https://github.com/Sophianx234/bkc-engineering-v2", // Update with your actual repo
    image: "/images/p-5.png" // Update with a screenshot of the BKC site
  },
  {
    id: "05",
    name: "Rammys Closet",
    category: "E-Commerce",
    description: "A sleek and easy-to-use cosmetics website where visitors can explore, choose, and order from a wide variety of beauty products. It features carefully selected collections, clear product details, and a completely smooth shopping experience.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"], // You can adjust these
    liveLink: "https://rammys-closet.vercel.app/",
    githubLink: "https://github.com/Sophianx234/rammys-closet",
    image: "./images/p-4.png"
  }
];

function ProjectSection() {
  return (
    <section 
      id="section-projects" 
      className="bg-[#F9F9F9] text-zinc-900 dark:bg-[#272F38] dark:text-white py-24 md:py-32 px-6 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
          >
            Selected Works.
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-zinc-900 dark:bg-white origin-left"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 text-lg font-medium text-slate-600 dark:text-gray-300"
          >
            A collection of my favorite projects, each built carefully from the ground up.
          </motion.p>
        </div>

        {/* Project List */}
        <div className="space-y-24 md:space-y-40">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  // Alternates the layout left/right based on the array index
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col gap-8 md:gap-16 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}
    >
      
      {/* Image Container */}
      <div className="w-full lg:w-3/5 group relative overflow-hidden bg-zinc-200 dark:bg-zinc-800 aspect-[4/3] sm:aspect-video lg:aspect-[4/3] shadow-lg dark:shadow-2xl">
        <img 
          src={project.image} 
          alt={`Screenshot of ${project.name}`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        
        {/* Number & Category */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-mono text-slate-500 dark:text-gray-400">
            {project.id}
          </span>
          <span className="h-[1px] w-12 bg-slate-300 dark:bg-gray-600" />
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-gray-400">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-white">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-600 dark:text-gray-300 leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Tech Stack List */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 border-l-2 border-slate-200 dark:border-gray-700 pl-4">
          {project.tech.map((t) => (
            <span key={t} className="text-sm font-medium text-zinc-800 dark:text-gray-200">
              {t}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-8">
          {project.liveLink && project.liveLink !== "#" && (
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white hover:opacity-70 transition-opacity"
            >
              Live Demo
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          )}
          
          {project.githubLink && project.githubLink !== "#" && (
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Source Code
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
}

export default ProjectSection;