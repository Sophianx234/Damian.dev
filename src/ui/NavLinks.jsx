import { motion } from "framer-motion";
import { TriggerContext, useTrigger } from "../contexts/StatesContext";

// Using an array keeps the code clean and makes adding/removing links trivial
const links = [
  { name: "Home", href: "#section-hero" },
  { name: "About", href: "#section-about" },
  { name: "Services", href: "#section-services" },
  { name: "Projects", href: "#section-projects" },
  { name: "Contact", href: "#section-contact" },
];

function NavLinks({ type }) {
  const { setIsOpen } = useTrigger(TriggerContext);

  const isMobile = type === "dropdown";

  return (
    <ul
      className={`flex ${
        isMobile
          ? "flex-col items-center justify-center gap-8 w-full py-4"
          : "flex-row items-center gap-10"
      }`}
    >
      {links.map((link, i) => (
        <motion.li
          key={link.name}
          // On mobile, they slide up sequentially. On desktop, they just render.
          initial={isMobile ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4, 
            delay: isMobile ? i * 0.08 : 0, // Staggers the animation on mobile
            ease: "easeOut" 
          }}
        >
          <a
            href={link.href}
            onClick={() => isMobile && setIsOpen(false)}
            className={`
              relative block group transition-colors duration-300
              ${
                isMobile
                  ? "text-3xl md:text-4xl font-bold tracking-tight text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                  : "text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }
            `}
          >
            {link.name}

            {/* Premium Underline Hover Effect (CSS-based for performance) */}
            <span 
              className={`
                absolute -bottom-2 left-0 w-full h-[2px] bg-zinc-900 dark:bg-white 
                scale-x-0 origin-left transition-transform duration-300 ease-out 
                group-hover:scale-x-100
                ${isMobile ? "hidden" : "block"} 
              `} 
            />
          </a>
        </motion.li>
      ))}
    </ul>
  );
}

export default NavLinks;