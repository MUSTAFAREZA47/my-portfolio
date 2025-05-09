'use client'

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBehance, FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import MagicButton from "./MagicButton";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      content: "mustafareza47@gmail.com",
      link: "mailto:mustafareza47@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Location",
      content: "New Delhi, India",
      link: "https://maps.google.com/?q=New Delhi, India"
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      content: "+91 8800753674",
      link: "tel:+918800753674"
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: "GitHub",
      link: "https://github.com/MUSTAFAREZA47"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/ahmed-reza-b6926221b/"
    },
    {
      icon: <FaBehance className="w-6 h-6" />,
      title: "Behance",
      link: "https://www.behance.net/mustafareza47"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      link: "https://wa.me/918800753674" 
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Purple gradient circles */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple/30 rounded-full blur-3xl" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple/30 rounded-full blur-3xl" />
        {/* <div className="absolute top-1/2 -right-20 w-96 h-96 bg-purple/20 rounded-full blur-3xl" /> */}
        {/* <div className="absolute -bottom-40 left-1/3 w-72 h-72 bg-purple/25 rounded-full blur-3xl" /> */}
        
        {/* Animated gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black-100/10 via-black-100/50 to-black-100" /> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="heading">
              Get In{' '}
              <span className="text-purple">Touch</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-black-200/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-white/80 hover:text-purple transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center text-purple">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{info.title}</h4>
                      <p>{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-black-200/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Connect with Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center text-purple hover:bg-purple/20 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.title}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-black-200/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-black-100/50 border border-white/10 text-white focus:border-purple focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-black-100/50 border border-white/10 text-white focus:border-purple focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-black-100/50 border border-white/10 text-white focus:border-purple focus:outline-none transition-colors duration-300 resize-none"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <MagicButton
                  title="Send Message"
                  icon={<FaEnvelope />}
                  position="right"
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 