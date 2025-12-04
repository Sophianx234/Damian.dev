import React from "react";
import { motion } from "framer-motion";
import { 
  Monitor, 
  Settings2, 
  Bug, 
  Database, 
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    title: "Front-end Development",
    description: "Building responsive, pixel-perfect user interfaces with a focus on motion and micro-interactions.",
    tags: ["React", "Tailwind", "Framer Motion"],
    Icon: Monitor,
  },
  {
    title: "Back-end Architecture",
    description: "Designing robust server-side logic, API integrations, and scalable microservices.",
    tags: ["Node.js", "Express", "GraphQL"],
    Icon: Settings2,
  },
  {
    title: "Testing & Debugging",
    description: "Ensuring application stability through rigorous performance profiling and automated testing.",
    tags: ["Jest", "Cypress", "Performance"],
    Icon: Bug,
  },
  {
    title: "Database Management",
    description: "Architecting efficient data schemas and managing high-availability storage solutions.",
    tags: ["PostgreSQL", "MongoDB", "Supabase"],
    Icon: Database,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
};

function ServicesSection() {
  return (
    <section className="min-h-screen w-full bg-neutral-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-neutral-100 py-24 px-6 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 text-xs font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            What I Do
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white max-w-2xl"
          >
            Crafting digital <br />
            <span className="text-neutral-400 dark:text-neutral-600">experiences that matter.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 dark:text-neutral-400 max-w-xl text-lg leading-relaxed"
          >
            From conceptualization to deployment, I deliver comprehensive web solutions tailored to your unique goals, focusing on performance, aesthetics, and usability.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function ServiceCard({ title, description, tags, Icon }) {
  return (
    <motion.div 
      variants={cardVariants}
      className="group relative p-8 md:p-10 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-2xl hover:shadow-neutral-200/50 dark:hover:shadow-black/50 transition-all duration-500"
    >
      <div className="relative z-10 flex flex-col h-full justify-between gap-8">
        
        {/* Top Row: Icon & Action */}
        <div className="flex items-start justify-between">
          <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
            <Icon size={28} strokeWidth={1.5} />
          </div>
          <ArrowUpRight className="text-neutral-300 group-hover:text-neutral-900 dark:text-neutral-700 dark:group-hover:text-white transition-colors duration-300" />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-neutral-900 dark:text-white group-hover:translate-x-1 transition-transform duration-300">
            {title}
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-transparent group-hover:border-neutral-200 dark:group-hover:border-neutral-700 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent dark:from-blue-900/10 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}

export default ServicesSection;