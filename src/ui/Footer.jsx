import Handles from "./Handles"; // Assuming Handles is your social media icons component

function Footer({ type }) {
  // Define link data for easy mapping
  const quickLinks = [
    { name: "Home", href: "#section-home" },
    { name: "About Me", href: "#section-about" },
    { name: "Projects", href: "#section-projects" },
    { name: "Contact", href: "#section-contact" },
  ];

  const services = [
    { name: "Web Development", href: "/services#webdev" },
    { name: "UI/UX Design", href: "/services#uiux" },
    { name: "Consulting", href: "/services#consulting" },
    { name: "Portfolio Review", href: "/services#review" },
  ];

  return (
    // Use relative positioning for the stylish separator line
    <footer
      id="section-footer"
      className="bg-[#2D2E32] text-white relative footer-separator"
    >
      {/* Container for main footer content (Logo/Links) */}
      <div
        className={`md:max-w-6xl mx-auto py-12 md:py-16 px-6 md:px-10 ${
          type ? "pb-6" : "pb-16"
        }`}
      >
        {/* Main Grid Layout for the footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16">
          {/* Column 1: Logo & Brief Description */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-[#8C98A7]">
              Damian X
            </h3>{" "}
            {/* Logo/Brand Name */}
            <p className="text-sm text-[#A0A2A8] leading-relaxed">
              Creating fast, beautiful, and easy-to-use digital
              experiences. Let's build something amazing together.
            </p>
          </div>

          {/* Column 2: Quick Links */}

          {/* Column 3: Services / Categories */}
          
        </div>
      </div>

      {/* Footer Bottom Bar: Copyright and Socials */}
      {/* Separator line is applied here via a custom class or inline element if not using a custom class */}
      <div className="relative border-t border-[#3D3E42] py-6">
        <div className="md:max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Copyright */}
          <p className="text-[#A0A2A8] font-light text-xs md:text-sm order-2 md:order-1 mt-4 md:mt-0">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>

          {/* Handles (Social Icons) and Attribution */}
          <div className="flex items-center gap-6 order-1 md:order-2">
            <Handles type="footer" />
            <p className="text-white antialiased font-medium text-sm md:text-base hidden md:block">
              <span className="text-[#A0A2A8] mr-1">Designed by</span> Damian X
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;