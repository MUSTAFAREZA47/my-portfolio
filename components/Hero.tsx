import { FaLocationArrow } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import Image from 'next/image'
import MagicButton from './MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const FloatingIcon = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative w-12 h-12 md:w-16 md:h-16 bg-black-100/50 backdrop-blur-sm rounded-xl border border-purple/20 p-2">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
        />
      </div>
    </motion.div>
  )
}

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen w-full">
            {/* Spotlights */}
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight
                    className="left-80 top-28 h-[80vh] w-[50vw]"
                    fill="blue"
                />
            </div>

            {/* Grid Background */}
            <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white dark:bg-grid-white/[0.06] bg-grid-black-100/[0.2]">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            {/* Floating Tech Icons */}
            <FloatingIcon src="/android.svg" alt="Android" className="lg:top-1/4 lg:left-[120px] top-[200px] left-1/4" />
            <FloatingIcon src="/apple.svg" alt="iOS" className="lg:top-1/3 lg:right-[150px] top-1/4 right-1/4 z-10" />
            <FloatingIcon src="/python.png" alt="Web" className="lg:bottom-[50px] bottom-[100px] lg:left-1/3 left-1/4" />
            <FloatingIcon src="/graphic.svg" alt="Graphic Design" className="lg:bottom-1/4 bottom-[200px] lg:right-1/4 right-1/4" />

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mx-auto">
                {/* Main Heading with Text Effect */}
                <TextGenerateEffect
                    words="Building Scalable & Performant Web Applications"
                    className="text-[32px] sm:text-[36px] md:text-5xl lg:text-6xl font-bold"
                />

                {/* Subtext */}
                <p className="mt-4 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 tracking-wide">
                    Hi! I&apos;m&nbsp;
                    <span className="font-bold text-teal-400">Ahmed</span>, a
                    <span className="text-teal-400"> MERN Stack Developer</span>&nbsp;
                    dedicated to crafting high-performance, user-friendly, and
                    modern web experiences.
                </p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8"
                >
                    <a href="#about" aria-label="See My Work">
                        <MagicButton
                            title="See My Work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
