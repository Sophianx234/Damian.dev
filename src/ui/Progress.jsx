import React from "react";
import { motion } from "framer-motion";
import { Zap, Activity, Code, Layout, TrendingUp, Wind, Target } from "lucide-react";

const skillsData = [
  { 
    name: "HTML5 & Semantic Markup", 
    level: 95, 
    Icon: Layout, 
    secondaryMetric: "15+ Projects",
    color: "from-orange-400 to-amber-500"
  },
  { 
    name: "CSS3 & Tailwind Mastery", 
    level: 90, 
    Icon: Wind, 
    secondaryMetric: "Advanced Custom Styling",
    color: "from-cyan-400 to-blue-500"
  },
  { 
    name: "JavaScript (ES6+) & Logic", 
    level: 88, 
    Icon: Code, 
    secondaryMetric: "Complex Algorithm Design",
    color: "from-yellow-400 to-yellow-600"
  },
  { 
    name: "React & Modern Ecosystem", 
    level: 92, 
    Icon: Activity, 
    secondaryMetric: "State Management (Context/Zustand)",
    color: "from-sky-400 to-indigo-600"
  },
  { 
    name: "Node.js & Backend Logic", 
    level: 85, 
    Icon: Zap, 
    secondaryMetric: "API/Microservice Development",
    color: "from-green-400 to-lime-500"
  },
];

// Animation variants for staggered appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15
    }
  },
};

const barVariants = {
  hidden: { width: "0%" },
  visible: (level) => ({
    width: `${level}%`,
    transition: {
      duration: 1.8,
      ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for smooth finish
    },
  }),
};

function ProgressSection() {
  return (
    // Updated: Base background is white, dark mode background is dark
    <section className="w-full bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-200 py-24 px-6 relative overflow-hidden">
      
      {/* Background radial gradient for professional depth */}
      {/* Updated: Subtle light mode gradient, distinct dark mode gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-color-neutral-100)_0%,_transparent_50%)] opacity-50 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-color-neutral-800)_0%,_transparent_50%)] dark:opacity-30" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // Updated: Light mode colors for the badge
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 text-xs font-semibold uppercase tracking-widest text-blue-600 border border-neutral-300 dark:bg-neutral-800 dark:text-blue-400 dark:border-neutral-700/50"
          >
            <Target size={14} className="text-blue-500" strokeWidth={2.5} />
            Mastery & Expertise
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            // Updated: Light mode text color
            className="text-4xl md:text-5xl font-extrabold tracking-tighter text-neutral-900 dark:text-white"
          >
            Deep Dive: Technical Proficiency
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            // Updated: Light mode text color
            className="text-neutral-600 dark:text-neutral-400 max-w-lg text-lg leading-relaxed font-light"
          >
            A metric-driven overview of my core competencies, reflecting both learned knowledge and real-world application experience.
          </motion.p>
        </div>

        {/* Progress Grid/List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-4"
        >
          {skillsData.map((skill, index) => (
            <SkillBar key={index} {...skill} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function SkillBar({ name, level, Icon, secondaryMetric, color }) {
  // Extracting the tailwind color utility suffix (e.g., 'amber', 'blue') for dynamic styling
  const colorSuffix = color.split('-').slice(-1)[0];

  return (
    <motion.div 
      // Updated: Light mode background and border. Shadow is subtle in light mode, pronounced in dark.
      className="p-4 md:p-6 rounded-2xl bg-white border border-neutral-200 shadow-lg dark:bg-neutral-900 dark:border-neutral-800 dark:shadow-2xl hover:shadow-xl dark:hover:border-neutral-700/80 transition-all duration-500 cursor-default relative overflow-hidden group"
      variants={itemVariants} 
    >
      {/* Subtle border glow on hover */}
      {/* Updated: Light mode hover color is deeper, dark mode is lighter */}
      <div className={`absolute inset-0 border-2 border-transparent transition-all duration-500 rounded-2xl group-hover:border-b-4 group-hover:border-b-${colorSuffix}-600 dark:group-hover:border-b-${colorSuffix}-500`} />

      <div className="flex flex-col gap-3">
        {/* Skill Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            {/* Updated: Light mode icon container bg and icon text color */}
            <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-xl">
              <Icon size={24} className={`text-${colorSuffix}-600 dark:text-${colorSuffix}-400`} strokeWidth={1.8} />
            </div>
            {/* Updated: Light mode title text color */}
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">
              {name}
            </h3>
          </div>
          {/* Updated: Light mode level text color */}
          <span className="text-2xl font-extrabold text-neutral-900 dark:text-white">
            {level}<span className="text-base text-neutral-500 dark:text-neutral-400 font-medium">%</span>
          </span>
        </div>

        {/* Custom Progress Bar Implementation */}
        <div className="relative w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden mt-2">
          <motion.div
            custom={level}
            variants={barVariants}
            className={`h-full bg-gradient-to-r ${color} shadow-lg rounded-full`}
            style={{
                // Ensure the animation target style is set
                width: '0%', 
            }}
          />
        </div>

        {/* Secondary Detail Metric */}
        <div className="text-right mt-1">
          {/* Updated: Light mode secondary text color */}
          <p className="text-xs font-mono tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
            {secondaryMetric}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ProgressSection;