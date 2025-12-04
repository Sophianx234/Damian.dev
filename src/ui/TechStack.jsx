import React from "react";
import { motion } from "framer-motion";
import { 
  Atom, 
  Braces, 
  Code2, 
  FileCode, 
  Layers, 
  Server, 
  Triangle, 
  Wind 
} from "lucide-react";

const techItems = [
  { name: "HTML5", Icon: FileCode },
  { name: "CSS3", Icon: Layers },
  { name: "JavaScript", Icon: Code2 },
  { name: "TypeScript", Icon: Braces },
  { name: "React", Icon: Atom },
  { name: "Next.js", Icon: Triangle }, // Represents Vercel/Next.js architecture
  { name: "Tailwind", Icon: Wind },
  { name: "Node.js", Icon: Server },
];

function TechStack() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-white text-black dark:bg-black dark:text-white py-24 relative overflow-hidden transition-colors duration-500">
      
      {/* Abstract Artistic Background Elements - Monochrome */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
         <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-black dark:bg-white rounded-full blur-[100px] translate-x-[-20%] translate-y-[-20%]" />
         <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-black dark:bg-white rounded-full blur-[120px] translate-x-[20%] translate-y-[20%]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-center mb-6"
          >
            THE STACK
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-black dark:bg-white"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-sm font-mono tracking-widest uppercase opacity-60"
          >
            Engineering • Design • Performance
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {techItems.map((item, index) => (
            <TechCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCard({ item, index }) {
  const { name, Icon } = item;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className="group relative flex flex-col items-center justify-center p-8 md:p-12 border border-neutral-200 dark:border-neutral-800 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-500 cursor-crosshair overflow-hidden"
    >
        {/* Hover overlay effect (optional layered depth) */}
        <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-10" />

        <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="mb-6 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
        >
            {/* Lucide icons are stroke-based, so we control strokeWidth and remove fill-current */}
            <Icon className="w-full h-full" strokeWidth={1.5} />
        </motion.div>

        <span className="text-lg font-medium tracking-tight font-mono">
            {name}
        </span>
        
        {/* Artistic Corner Accents on Hover */}
        <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-current opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-current opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export default TechStack;