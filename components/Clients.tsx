'use client'

import React from 'react'
import Image from 'next/image'
import { companies, testimonials } from '@/data'
import { InfiniteMovingCards } from './ui/InfiniteCards'
import { motion } from 'framer-motion'

const Clients = () => {
    return (
        <section id="testimonials" className="py-20 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black-100 to-black-200 opacity-50" />
            
            <div className="relative z-10">
                <h1 className="heading text-center">
                    Kind words from
                    <span className="text-purple"> satisfied clients</span>
                </h1>

                <div className="flex flex-col items-center mt-10 md:mt-16">
                    {/* Testimonials Section */}
                    <div className="w-full max-w-7xl mx-auto px-4">
                        <div className="h-[50vh] md:h-[30rem] rounded-2xl flex flex-col antialiased items-center justify-center relative overflow-hidden bg-black-100/50 backdrop-blur-sm border border-purple/20">
                            <InfiniteMovingCards
                                items={testimonials}
                                direction="right"
                                speed="slow"
                            />
                        </div>
                    </div>

                    {/* Companies Section */}
                    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                        <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 text-white-100">
                            Trusted by Industry Leaders
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center max-w-6xl mx-auto">
                            {companies.map((company) => (
                                <motion.div
                                    key={company.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: company.id * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-black-100/30 backdrop-blur-sm border border-purple/10 hover:border-purple/30 transition-all duration-300"
                                >
                                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                                        <Image
                                            src={company.img}
                                            alt={company.name}
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                    <div className="relative h-6 md:h-8 w-auto">
                                        <Image
                                            src={company.nameImg}
                                            alt={company.name}
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients
