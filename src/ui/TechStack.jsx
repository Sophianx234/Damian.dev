import React from "react";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  Server, 
  Box, 
  Network,
  Database,
  Code2,
  GitMerge,
  Terminal,
  Atom,
  Triangle,
  Braces
} from "lucide-react";

// Updated to reflect an Enterprise, DevOps, and Mobile architecture
const techItems = [
  { name: "Next.js", role: "React Framework", Icon: Triangle },
  { name: "React", role: "Core UI Library", Icon: Atom },
  { name: "TypeScript", role: "Type Safety", Icon: Braces },
  { name: "Node.js", role: "Backend Runtime", Icon: Server },
  { name: "React Native", role: "Mobile Architecture", Icon: Smartphone },
  { name: ".NET Core", role: "Enterprise Backend", Icon: Server },
  { name: "Docker", role: "Containerization", Icon: Box },
  { name: "Kubernetes", role: "Orchestration", Icon: Network },
  { name: "C#", role: "Primary Language", Icon: Code2 },
  { name: "PostgreSQL", role: "Relational Database", Icon: Database },
  { name: "CI/CD", role: "Deployment Pipeline", Icon: Terminal },
  { name: "Git Workflow", role: "Version Control", Icon: GitMerge },
];

function TechStack() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#F9F9F9] text-zinc-900 dark:bg-[#111111] dark:text-white py-24 md:py-32 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto w-full z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold tracking-tighter"
            >
              The Arsenal.
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-zinc-900 dark:bg-white origin-left"
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base md:text-lg font-medium text-zinc-500 dark:text-zinc-400 max-w-sm md:text-right"
          >
            Engineering scalable enterprise backends, containerized infrastructure, and seamless cross-platform mobile experiences.
          </motion.p>
        </div>

        {/* Minimalist Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {techItems.map((item, index) => (
            <TechCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCard({ item, index }) {
  const { name, role, Icon } = item;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05, // Staggered reveal
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className="group relative flex flex-col justify-between p-6 md:p-8 h-48 md:h-56 bg-white dark:bg-[#1A1A1A] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-all duration-300 overflow-hidden"
    >
      {/* Background Icon that scales up on hover */}
      <div className="absolute -bottom-6 -right-6 text-zinc-100 dark:text-zinc-900 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-500 z-0">
        <Icon 
          className="w-32 h-32 md:w-40 md:h-40 opacity-50 group-hover:opacity-10 dark:opacity-50 dark:group-hover:opacity-10 transform group-hover:scale-110 transition-transform duration-700 ease-out" 
          strokeWidth={1} 
        />
      </div>

      {/* Top Section: Small Icon */}
      <div className="z-10 text-zinc-900 dark:text-white">
        <Icon className="w-8 h-8" strokeWidth={1.5} />
      </div>

      {/* Bottom Section: Text */}
      <div className="z-10 mt-auto">
        <p className="text-xs font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-1 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
          {role}
        </p>
        <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {name}
        </span>
      </div>
      
      {/* Subtle top border highlight on hover */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-zinc-900 dark:bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-20" />
    </motion.div>
  );
}

export default TechStack;