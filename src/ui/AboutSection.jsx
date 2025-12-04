import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";

// Placeholder for the external modal function
const CustomModalPlaceholder = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4" onClick={onClose}>
            <div 
                className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-2xl max-w-lg w-full transform transition-all duration-300 scale-100 dark:text-neutral-200"
                onClick={e => e.stopPropagation()} // Stop propagation to prevent closing when clicking inside
            >
                <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">A Deeper Look</h3>
                <p className="mb-6 text-neutral-700 dark:text-neutral-300">
                    My approach extends beyond just coding; I specialize in performance optimization, architecture design, and leading feature development from concept to deployment. I thrive on translating complex business requirements into elegant, scalable front-end solutions. This includes focusing on accessibility (WCAG), modern tooling (Vite/Webpack), and advanced testing methodologies.
                </p>
                <button 
                    onClick={onClose} 
                    className="flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition duration-200"
                >
                    Close Details
                </button>
            </div>
        </div>
    );
};

// Framer Motion Variants
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.8, 
            ease: "easeOut",
            staggerChildren: 0.2
        } 
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};


function AboutSection() {
    // Replaced custom context with local state for the modal
    const [isOpenModal, setIsOpenModal] = useState(false);

    function mountModal() {
        setIsOpenModal(true);
    }
    
    return (
        <section className="lg:max-w-6xl mx-auto py-24 px-6 bg-white dark:bg-neutral-950 overflow-hidden">
            <motion.div 
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                
                {/* === LEFT COLUMN: IMAGE & ACCENT CARD === */}
                <motion.div 
                    className="relative w-full h-96 md:h-[30rem] lg:h-[35rem] flex items-center justify-center p-6"
                    variants={itemVariants}
                >
                    {/* Floating Accent Card (Dribbble/Pinterest inspiration) */}
                    <div className="absolute top-0 left-0 lg:top-10 lg:left-10 w-full h-full bg-indigo-50 dark:bg-neutral-900 rounded-3xl shadow-xl border border-indigo-100 dark:border-neutral-800 transform -rotate-1 skew-y-1 transition-all duration-500 ease-in-out group-hover:rotate-0 group-hover:skew-y-0" />

                    {/* Image Container */}
                    <motion.div 
                        className="relative w-full h-full p-2 bg-white dark:bg-neutral-950 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-10 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500"
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* Placeholder for the user's image URL */}
                        <img 
                            src="https://res.cloudinary.com/dtytb8qrc/image/upload/v1755998216/damian-1_tmzjhd.jpg" 
                            alt="Professional Developer Profile" 
                            className="w-full h-full object-cover rounded-2xl"
                            // If the user's original image is preferred, uncomment the line below:
                            // src="./images/d-2.png" 
                        />
                    </motion.div>
                    
                    {/* Small Stat Badge (Aesthetics) */}
                    <div className="absolute bottom-10 right-0 md:right-10 z-20 p-4 bg-indigo-600 text-white rounded-xl shadow-2xl shadow-indigo-500/50">
                        <span className="text-3xl font-extrabold tracking-tight">5+</span>
                        <p className="text-sm font-light uppercase">Years Exp.</p>
                    </div>
                </motion.div>

                {/* === RIGHT COLUMN: TEXT CONTENT === */}
                <motion.div 
                    className="flex flex-col space-y-7 lg:space-y-4 text-center lg:text-left"
                    variants={itemVariants}
                >
                    <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                        Who I Am
                    </h2>
                    
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-neutral-900 dark:text-white">
                        Senior Front-End Architect & Engineer
                    </h1>
                    
                    <div className="flex items-center justify-center lg:justify-start space-x-6 text-neutral-700 dark:text-neutral-300 font-medium">
                        <span className="flex items-center gap-2">
                            <MapPin size={18} className="text-indigo-500" />
                            Tamale, Ghana
                        </span>
                        <span className="flex items-center gap-2">
                            <Briefcase size={18} className="text-indigo-500" />
                            Full-time / Remote
                        </span>
                    </div>

                    <div className="space-y-6 text-neutral-600 dark:text-neutral-400 pt-4">
                        <p className="md:text-lg leading-relaxed">
                            As a dedicated Senior Front-end Developer, I specialize in crafting high-performance, user-centric applications using the modern React/Next.js ecosystem. My focus is on robust state management, scalable architecture, and pixel-perfect responsiveness with Tailwind CSS.
                        </p>
                        <p className="md:text-lg leading-relaxed">
                            My expertise is translating complex design requirements into clean, optimized code that delivers exceptional UI/UX, ensuring maximum accessibility and maintainability across all projects.
                        </p>
                    </div>
                    
                    <div className="pt-4">
                        <motion.button 
                            className="inline-flex items-center gap-3 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/50 hover:bg-indigo-700 transition duration-300 transform hover:-translate-y-0.5" 
                            onClick={mountModal}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Read Full Bio
                            <ArrowRight size={20} />
                        </motion.button>
                    </div>
                </motion.div>

            </motion.div>
            
            {/* Modal placeholder component */}
            <CustomModalPlaceholder isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
        </section>
    );
}

export default AboutSection;