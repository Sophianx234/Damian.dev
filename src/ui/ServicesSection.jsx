import React from "react";
import { motion } from "framer-motion";
import { 
  MonitorSmartphone, 
  Server, 
  Box, // Imported Box to represent Docker/Containers
  Database, 
  ArrowUpRight 
} from "lucide-react";

// Updated to match your Next.js, Node, and DevOps ecosystem
const services = [
  {
    id: "01",
    title: "Front-end Architecture",
    description: "Building fast and beautiful websites that look great on any device. I focus on making sure your site is easy to use, ranks well on search engines, and provides a smooth experience for every visitor.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    Icon: MonitorSmartphone,
  },
  {
    id: "02",
    title: "Back-end Engineering",
    description: "Designing strong and secure background systems that keep your applications running safely. I build the reliable foundation needed to support and power your complex business operations.",
    tags: ["ASP.NET", "Node.js", "Express", "TypeScript"],
    Icon: Server,
  },
  {
    id: "03",
    title: "Database Management",
    description: "Organizing and managing your data so it is always secure, accurate, and quick to access. I make sure your information is stored efficiently and is always available whenever you need it.",
    tags: ["MongoDB", "PostgreSQL", "Redis"],
    Icon: Database,
  },
  {
    id: "04",
    title: "Cloud & DevOps",
    description: "Setting up reliable hosting and deployment systems so your applications stay online without interruption. I make sure your software runs perfectly and can easily scale as your business grows.",
    tags: ["Docker", "Kubernetes", "CI/CD"],
    Icon: Box, // Replaced the Bug icon
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

function ServicesSection() {
  return (
    <section 
      id="section-services"
      className="w-full bg-[#F9F9F9] dark:bg-[#111111] text-zinc-900 dark:text-white py-24 md:py-32 px-6 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
            >
              Services.
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
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base md:text-md text-zinc-600 dark:text-zinc-400 max-w-sm "
          >
            Delivering complete and reliable web solutions built to help your business grow and keep your users happy.
          </motion.p>
        </div>

        {/* 1px Grid Layout: 
          The parent has a dark background and a 1px gap. 
          The children have their own backgrounds. 
          This creates a perfect, razor-thin grid line between items.
        */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function ServiceCard({ id, title, description, tags, Icon }) {
  return (
    <motion.div 
      variants={cardVariants}
      className="group relative p-8 md:p-12 bg-white dark:bg-[#111111] hover:bg-[#F9F9F9] dark:hover:bg-[#1A1A1A] transition-colors duration-500 overflow-hidden flex flex-col h-full"
    >
      
      {/* Top Row: ID & Icon */}
      <div className="flex items-start justify-between mb-12">
        <span className="text-sm font-mono tracking-widest text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
          {id}
        </span>
        <div className="text-zinc-900 dark:text-white">
          <Icon className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
          {title}
        </h3>
        <p className="text-base md:text-md text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
          {description}
        </p>
      </div>

      {/* Bottom Row: Tags & Arrow */}
      <div className="flex items-end justify-between mt-auto pt-8 border-t border-zinc-100 dark:border-zinc-800/50">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-mono uppercase tracking-widest px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <ArrowUpRight className="w-6 h-6 text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-900 dark:group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0 ml-4" />
      </div>

      {/* Left accent border that expands on hover */}
      <div className="absolute top-0 left-0 w-1 h-full bg-zinc-900 dark:bg-white scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out" />
    </motion.div>
  );
}

export default ServicesSection;