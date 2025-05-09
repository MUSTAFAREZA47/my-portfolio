import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="w-full py-20 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black-100 to-black-200 opacity-50" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="heading text-center mb-16">
                    About <span className="text-purple">Me</span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full aspect-square max-w-md mx-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-purple/5 rounded-2xl transform rotate-3" />
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-purple/20">
                            <Image
                                src="/hero-image.png" // Replace with your photo path
                                alt="Ahmed Reza"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            MERN Stack Developer
                        </h2>
                        
                        <p className="text-white/80 text-lg leading-relaxed">
                            I&apos;m a passionate MERN Stack Developer with a strong foundation in building scalable and performant web applications. My journey in web development has equipped me with expertise in both frontend and backend technologies, allowing me to create seamless, full-stack solutions.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="bg-black-100/50 backdrop-blur-sm p-4 rounded-xl border border-purple/20">
                                <h3 className="text-purple font-semibold mb-2">Frontend</h3>
                                <p className="text-white/80 text-sm">
                                    React, Next.js, TypeScript, Tailwind CSS
                                </p>
                            </div>
                            <div className="bg-black-100/50 backdrop-blur-sm p-4 rounded-xl border border-purple/20">
                                <h3 className="text-purple font-semibold mb-2">Backend</h3>
                                <p className="text-white/80 text-sm">
                                    Node.js, Express, MongoDB, REST APIs
                                </p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-purple/10 hover:bg-purple/20 text-purple px-6 py-3 rounded-full transition-all duration-300"
                            >
                                Let's Connect
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                    />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
