import { HiBars3 } from "react-icons/hi2";
import NavLinks from "./NavLinks";
import { TriggerContext, useTrigger } from "../contexts/StatesContext";
import { WiMoonAltWaxingCrescent4 } from "react-icons/wi";
import { GoSun } from "react-icons/go";
import { motion } from "framer-motion";

function Header() {
  const { isOpen, setIsOpen, isDark, setIsDark } = useTrigger(TriggerContext);

  return (
    <header className={`${isDark ? "dark" : ""} w-full fixed top-0 z-50`}>
      {/* Floating Artistic Header */}
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="
          flex items-center justify-between
          px-6 md:px-12 py-4 
          
           shadow-md

          backdrop-blur-2xl bg-white/40 dark:bg-[#1e2530]/40
          border border-white/20 dark:border-white/10
          ring-1 ring-black/5 dark:ring-white/5
        "
      >
        {/* LOGO — Artistic Gradient Text */}
        <motion.h1
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="
            text-2xl md:text-3xl font-extrabold 
            tracking-tight dark:text-white cursor-pointer select-none
             
            
          "
        >
          Damian.dev
        </motion.h1>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <NavLinks classy />
        </div>

        {/* Desktop Controls */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setIsDark((prev) => !prev)}
            className="
              p-3 rounded-full 
              backdrop-blur-xl bg-white/30 dark:bg-white/10
              hover:bg-white/50 dark:hover:bg-white/20
              transition-all shadow-sm
            "
          >
            {isDark ? (
              <GoSun size={24} className="text-white" />
            ) : (
              <WiMoonAltWaxingCrescent4 size={27} className="text-gray-700" />
            )}
          </motion.button>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Dark/Light Toggle */}
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setIsDark((prev) => !prev)}
            className="
              p-3 rounded-full 
              backdrop-blur-xl bg-white/40 dark:bg-white/10
              hover:bg-white/60 dark:hover:bg-white/20
              transition-all shadow-lg
            "
          >
            {isDark ? (
              <GoSun size={26} className="text-yellow-400" />
            ) : (
              <WiMoonAltWaxingCrescent4 size={28} className="text-gray-700" />
            )}
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              p-3 rounded-full 
              backdrop-blur-xl bg-white/40 dark:bg-white/10
              hover:bg-white/60 dark:hover:bg-white/20
              transition-all shadow-lg
            "
          >
            <HiBars3 size={28} className="dark:fill-white" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="
            lg:hidden mt-4 
            bg-white/70 dark:bg-[#1e2530]/70
            backdrop-blur-xl 
            rounded-xl mx-6 shadow-xl border border-white/20
          "
        >
          <NavLinks type="dropdown" classy />
        </motion.div>
      )}
    </header>
  );
}

export default Header;
