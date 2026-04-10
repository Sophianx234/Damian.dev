import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Linkedin, Github } from "lucide-react";

function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      alert("Message received. I'll be in touch shortly.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const inputClasses = "w-full py-4 bg-transparent border-b border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors rounded-none";

  return (
    <section 
      id="section-contact" 
      className="bg-white text-zinc-900 dark:bg-[#111111] dark:text-white py-24 md:py-32 px-6 transition-colors duration-500"
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
            Initiate.
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-zinc-900 dark:bg-white origin-left"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: Copy & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                Let's build something scalable.
              </h3>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
                Whether you are looking to architect an enterprise backend, launch a cross-platform mobile application, or discuss a potential role, my inbox is open.
              </p>
            </div>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-center gap-4 group">
                <MapPin className="w-6 h-6 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                <span className="text-lg font-medium text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                  Accra, Ghana
                </span>
              </div>
              
              {/* Email */}
              <a href="mailto:dx4336969@gmail.com" className="flex items-center gap-4 group w-fit">
                <Mail className="w-6 h-6 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                <span className="text-lg font-medium text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors border-b border-transparent group-hover:border-zinc-900 dark:group-hover:border-white">
                  dx4336969@gmail.com
                </span>
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/Sophianx234" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Minimalist Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="group relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Name"
                />
              </div>

              <div className="group relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Email Address"
                />
              </div>

              <div className="group relative">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} resize-none`}
                  placeholder="Project details or inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-4 py-4 pr-6 text-lg font-bold tracking-tight text-zinc-900 dark:text-white uppercase transition-opacity hover:opacity-70 disabled:opacity-50"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Transmitting..." : "Send Dispatch"}
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </motion.button>
              
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;