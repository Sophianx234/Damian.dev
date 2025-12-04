import { motion } from "framer-motion";
import { Github, Link, Terminal, LayoutGrid } from "lucide-react";
import React from "react";

// Replace old animation libraries with Framer Motion for a unified, modern feel
const projectItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.4, 0, 0.2, 1] // Custom ease for a smooth snap effect
    } 
  },
};

/**
 * A stylized component for displaying a single portfolio project.
 * Uses a modern, asymmetrical layout with depth and dark/light mode support.
 */
function PortfolioItem({name, desc, liveLink = '#', codeLink, emoji, cssFramework = 'Tailwind CSS', image, flow, imageNum}) {
    
    // Determine if the layout should be image-left (default) or image-right (swap)
    const isSwapped = flow === 'swap';

    return (
        <motion.div 
            className="w-full max-w-7xl mx-auto py-12"
            variants={projectItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className={`
                grid gap-12 lg:gap-20 items-center 
                ${isSwapped ? "lg:grid-cols-project-swap" : "lg:grid-cols-project"}
                px-4 md:px-0
            `}>
                
                {/* === PROJECT IMAGE/MOCKUP (Left/Right) === */}
                <div className={`
                    relative w-full aspect-[4/3] rounded-2xl p-4 md:p-6 
                    bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 
                    shadow-2xl dark:shadow-neutral-900/50 transition-all duration-500
                    ${isSwapped ? "order-2 lg:order-2" : "order-1 lg:order-1"}
                `}>
                    {/* Inner Mockup Container with Floating Effect */}
                    <div className="absolute inset-0 transform translate-y-2 translate-x-2 lg:translate-y-4 lg:translate-x-4 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl opacity-50 blur-sm pointer-events-none" />
                    
                    <motion.div 
                        className="relative w-full h-full rounded-xl overflow-hidden shadow-xl border border-neutral-300 dark:border-neutral-700 cursor-pointer"
                        whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                    >
                        {/* Placeholder for Project Image */}
                        <img 
                            src={`./images/p-${imageNum}.png`} 
                            alt={`Mockup for ${name}`} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                        />
                        {/* Optionally use the original image path: `./images/p-${imageNum}.png` */}
                    </motion.div>
                </div>
                
                {/* === PROJECT DETAILS (Right/Left) === */}
                <div className={`
                    flex flex-col space-y-5 
                    text-center ${isSwapped ? "lg:text-right" : "lg:text-left"}
                    ${isSwapped ? "order-1 lg:order-1" : "order-2 lg:order-2"}
                `}>
                    
                    {/* Project Name and Emoji */}
                    <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                        {name} <span className="text-4xl">{emoji}</span>
                    </h2>
                    
                    {/* Project Description (Floating Card Style) */}
                    <p className={`
                        p-6 rounded-xl text-lg leading-relaxed 
                        bg-neutral-100 dark:bg-neutral-800 
                        shadow-md dark:shadow-xl text-neutral-700 dark:text-neutral-300
                    `}>
                        {desc}
                    </p>
                    
                    {/* Tech Stack Pills */}
                    <div className={`flex items-center gap-4 pt-2 font-medium text-sm ${isSwapped ? "justify-center lg:justify-end" : "justify-center lg:justify-start"}`}>
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">
                            <Terminal size={14} />
                            React
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300">
                            <LayoutGrid size={14} />
                            {cssFramework}
                        </span>
                    </div>
                    
                    {/* Links/Actions */}
                    <div className={`flex gap-6 pt-4 ${isSwapped ? "justify-center lg:justify-end" : "justify-center lg:justify-start"}`}>
                        
                        {/* GitHub Link */}
                        <motion.a 
                            href={codeLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-semibold text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github size={24} />
                            Code
                        </motion.a>
                        
                        {/* Live Demo Link */}
                        <motion.a 
                            href={liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/50 hover:bg-indigo-700 transition duration-300 transform hover:-translate-y-0.5" 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Live Demo
                            <Link size={20} />
                        </motion.a>
                    </div>
                </div>

            </div>
            {/* Custom Tailwind utilities for the layout */}
            <style jsx global>{`
                .lg\\:grid-cols-project {
                    grid-template-columns: 1fr 0.8fr;
                }
                .lg\\:grid-cols-project-swap {
                    grid-template-columns: 0.8fr 1fr;
                }
            `}</style>
        </motion.div>
    );
}

export default PortfolioItem;