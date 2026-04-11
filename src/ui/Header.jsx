import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react"; // Swapped to match the rest of the site
import NavLinks from "./NavLinks";
import { TriggerContext, useTrigger } from "../contexts/StatesContext";

function Header() {
  const { isOpen, setIsOpen, isDark, setIsDark } = useTrigger(TriggerContext);

  return (
    <header className={`${isDark ? "dark" : ""} w-full fixed top-0 z-50`}>
      
      {/* Main Nav Bar 
        Removed the soft shadows and replaced them with a sharp bottom border 
        and a clean frosted glass effect.
      */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          flex items-center justify-between
          px-6 md:px-12 py-5 
          bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md
          border-b border-zinc-200 dark:border-zinc-800
          transition-colors duration-500
        "
      >
        {/* LOGO */}
        <motion.h1
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white cursor-pointer select-none"
        >
          Damian.dev
        </motion.h1>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <NavLinks classy />
        </div>

        {/* Desktop Controls (Theme Toggle) */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setIsDark((prev) => !prev)}
            className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        {/* Mobile Controls (Theme Toggle & Menu) */}
        <div className="flex lg:hidden items-center gap-4">
          
          {/* Mobile Dark/Light Toggle */}
          <button
            onClick={() => setIsDark((prev) => !prev)}
            className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors focus:outline-none"
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* Mobile Menu Toggle (Switches to an X when open) */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 text-zinc-900 dark:text-white transition-colors focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown 
        Wrapped in AnimatePresence so the exit animation actually fires.
      */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="
              lg:hidden overflow-hidden
              bg-white/95 dark:bg-[#111111]/95 backdrop-blur-xl
              border-b border-zinc-200 dark:border-zinc-800
            "
          >
            <div className="px-6 py-8">
              <NavLinks type="dropdown" classy />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </header>
  );
}

export default Header;