import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Send } from "lucide-react";
import React, { useState } from "react";

// Framer Motion Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
};

/**
 * A stylized card component for a single piece of contact information.
 */
function ContactCard({ Icon, title, value, link }) {
    return (
        <motion.a 
            href={link}
            target={link.startsWith('http') ? "_blank" : "_self"}
            className="group flex items-start gap-4 p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-transparent 
                       transition-all duration-300 transform hover:bg-white dark:hover:bg-neutral-900 hover:shadow-lg hover:border-indigo-400 dark:hover:border-indigo-600"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
        >
            {/* Icon Circle */}
            <div className="p-3 mt-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex-shrink-0">
                <Icon size={24} className="text-indigo-600 dark:text-indigo-400" strokeWidth={2} />
            </div>
            
            {/* Title and Value */}
            <div className="text-left overflow-hidden">
                <h4 className="text-lg font-bold text-neutral-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {title}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 font-medium break-all truncate">
                    {value}
                </p>
            </div>
        </motion.a>
    );
}

/**
 * The Contact Form component with stylish inputs.
 */
function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // Placeholder for API submission logic
        alert("Thank you for your message! This is a demo submission.");
        setFormData({ name: '', email: '', message: '' });
    };

    const inputClasses = "w-full p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 placeholder-neutral-400 dark:placeholder-neutral-500";

    return (
        <motion.form 
            onSubmit={handleSubmit} 
            className="p-6 md:p-8 bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 space-y-5"
            variants={itemVariants}
        >
            <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-white text-left mb-4">
                Send a Message
            </h3>
            
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="John Doe"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="john@example.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Project Details
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell me about your project, goals, and timeline..."
                />
            </div>

            <motion.button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 mt-4 px-10 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/50 hover:bg-indigo-700 transition duration-300 transform hover:-translate-y-0.5"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
            >
                Send Inquiry
                <Send size={20} />
            </motion.button>
        </motion.form>
    );
}

/**
 * A professional and stylish Contact Section inspired by Dribbble designs.
 */
function ContactSection() {
    
    const contactInfo = [
        { 
            Icon: MapPin, 
            title: "Location", 
            value: "Tamale, Ghana",
            link: "https://maps.app.goo.gl/YourLocationPlaceholder", // Placeholder link
        },
        { 
            Icon: Mail, 
            title: "Mail", 
            value: "dx4336969@gmail.com",
            link: "mailto:dx4336969@gmail.com",
        },
    ];

    return (
        <section id="section-contact" className="bg-neutral-50 dark:bg-neutral-950 py-24 px-6 overflow-hidden">
            <motion.div 
                className="max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >

                {/* Main Header and Call-to-Action */}
                <div className="text-center mb-16">
                    <motion.h2 
                        className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2"
                        variants={itemVariants}
                    >
                        Contact
                    </motion.h2>
                    <motion.h1 
                        className="text-4xl md:text-5xl font-extrabold leading-tight text-neutral-900 dark:text-white"
                        variants={itemVariants}
                    >
                        Ready to collaborate?
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mt-4 font-light"
                        variants={itemVariants}
                    >
                        Let's connect and discuss your project. Use the form below or reach out directly.
                    </motion.p>
                </div>

                {/* Contact Content Grid (Info + Form) */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Left Column: Contact Information Cards */}
                    <div className="space-y-6">
                        <motion.h3 
                            className="text-2xl font-extrabold text-neutral-900 dark:text-white text-left"
                            variants={itemVariants}
                        >
                            Direct Details
                        </motion.h3>
                        {contactInfo.map((item, index) => (
                            <ContactCard key={index} {...item} />
                        ))}
                        
                        {/* More/Secondary Call-to-Action (Creative element) */}
                        <motion.a 
                            href="https://linkedin.com/in/yourprofile" // Placeholder
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-6 rounded-2xl border-2 border-dashed border-indigo-300 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition duration-300 mt-6"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="text-lg font-semibold">Connect on LinkedIn</span>
                            <ArrowRight size={24} />
                        </motion.a>
                    </div>

                    {/* Right Column: Contact Form */}
                    <ContactForm />
                </div>
            </motion.div>
        </section>
    );
}

export default ContactSection;