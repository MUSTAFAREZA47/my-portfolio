import { FaLocationArrow, FaGithub, FaLinkedin, FaEnvelope, FaBehance } from "react-icons/fa";
import MagicButton from "./MagicButton";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/MUSTAFAREZA47",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/ahmed-reza-b6926221b/",
      label: "LinkedIn"
    },
    {
      icon: <FaBehance className="w-5 h-5" />,
      href: "https://www.behance.net/mustafareza",
      label: "Behance"
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      href: "mailto:mustafareza47@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="w-full relative" id="contact">
      {/* Background grid */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Ahmed Reza</h3>
            <p className="text-white/60 text-sm">
              Building scalable and performant web applications with modern technologies.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-purple/10 hover:bg-purple/20 text-purple transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'project', 'contact'].map((section) => (
                
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-white/60 hover:text-purple transition-colors duration-300 w-full text-center lg:text-left cursor-pointer"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.button>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {['Web Development','App Development', 'API Development',  'UI/UX Design', 'Graphic Design'].map((service) => (
                <motion.li 
                  key={service}
                  className="text-white/60 hover:text-purple transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Let&apos;s Connect</h3>
            <p className="text-white/60 text-sm mb-4">
              Have a project in mind? Let&apos;s discuss how we can work together.
            </p>
            <motion.div 
              className="inline-block mx-auto md:mx-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="mailto:mustafareza47@gmail.com">
                <MagicButton
                  title="Get in Touch"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left">
          <p className="text-white/60 text-sm">
            © {currentYear} Ahmed Reza. All rights reserved.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-4 md:mt-0">
            <Link 
              href="/privacy-policy" 
              className="text-white/60 hover:text-purple text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-white/60 hover:text-purple text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
