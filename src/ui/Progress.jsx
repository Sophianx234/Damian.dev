import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Smartphone, Server, Box, Database, Plus, Minus } from "lucide-react";

// Updated to include your full-stack web capabilities alongside enterprise & mobile
const capabilitiesData = [
  {
    id: "01",
    title: "Modern Web Applications",
    icon: Layout,
    tech: "Next.js • Node.js • TypeScript • Tailwind",
    description: "Building fast, SEO-optimized, and highly responsive web applications. Leveraging server-side rendering, type-safe logic, and utility-first styling for premium user experiences."
  },
  {
    id: "02",
    title: "Cross-Platform Mobile",
    icon: Smartphone,
    tech: "React Native • Expo • TypeScript",
    description: "Architecting fluid, native-feeling mobile applications for iOS and Android. Focused on high performance, complex state management, and seamless native module integration."
  },
  {
    id: "03",
    title: "Enterprise Backends",
    icon: Server,
    tech: ".NET Core • C# • REST APIs",
    description: "Designing robust, highly scalable server-side architectures. Building secure APIs and microservices tailored for banking operations, investment platforms, and large-scale data processing."
  },
  {
    id: "04",
    title: "Cloud & DevOps",
    icon: Box,
    tech: "Docker • Kubernetes • CI/CD",
    description: "Containerizing applications for consistent deployment across environments. Orchestrating scalable infrastructure to ensure zero-downtime deployments and high availability."
  },
  {
    id: "05",
    title: "Data Architecture",
    icon: Database,
    tech: "SQL Server • MongoDB • Redis",
    description: "Structuring complex relational and NoSQL databases. Optimizing queries, managing state, and ensuring data integrity for high-stakes business logic and user platforms."
  }
];

function CapabilitiesSection() {
  const [openId, setOpenId] = useState("01");

  return (
    <section className="bg-white text-zinc-900 dark:bg-[#111111] dark:text-white py-24 md:py-32 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        
        {/* LEFT SIDE: Sticky Header */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Capabilities.
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-zinc-900 dark:bg-white origin-left mt-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-8 text-lg font-medium text-zinc-500 dark:text-zinc-400 leading-relaxed"
          >
            I architect end-to-end solutions—from scalable enterprise backends and containerized infrastructure to high-performance web and mobile interfaces.
          </motion.p>
        </div>

        {/* RIGHT SIDE: Interactive Accordion */}
        <div className="lg:w-2/3 border-t border-zinc-200 dark:border-zinc-800">
          {capabilitiesData.map((item, index) => (
            <AccordionItem 
              key={item.id} 
              item={item} 
              isOpen={openId === item.id} 
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function AccordionItem({ item, isOpen, onClick, index }) {
  const { id, title, icon: Icon, tech, description } = item;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-zinc-200 dark:border-zinc-800"
    >
      <button 
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between group focus:outline-none"
      >
        <div className="flex items-center gap-6 md:gap-8 text-left">
          <span className="text-sm md:text-base font-mono text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
            {id}
          </span>
          <h3 className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? "text-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white"}`}>
            {title}
          </h3>
        </div>
        
        {/* Toggle Icon */}
        <div className="text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors ml-4 shrink-0">
          {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-12 md:pl-16 pr-4 flex flex-col md:flex-row gap-6 md:gap-12 text-zinc-500 dark:text-zinc-400">
              <div className="shrink-0">
                <Icon className="w-10 h-10 text-zinc-900 dark:text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-mono uppercase tracking-widest text-zinc-900 dark:text-white mb-3">
                  {tech}
                </p>
                <p className="text-base md:text-lg leading-relaxed max-w-xl">
                  {description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default CapabilitiesSection;