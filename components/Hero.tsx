import { FaLocationArrow } from 'react-icons/fa6'
import MagicButton from './MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen max-w-7xl w-full">
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
            <div
                className="absolute inset-0 flex items-center justify-center 
                   dark:bg-black-100 bg-white 
                   dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]"
            >
                <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none 
                     dark:bg-black-100 bg-white 
                     [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
                {/* Main Heading with Text Effect */}
                <TextGenerateEffect
                    words="Building Scalable & Performant Web Applications"
                    className="text-[32px] sm:text-[36px] md:text-5xl lg:text-6xl font-bold"
                />

                {/* Subtext */}
                <p className="mt-4 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 tracking-wide">
                    Hi! I'm{' '}
                    <span className="font-bold text-teal-400">Ahmed</span>, a
                    <span className="text-teal-400"> MERN Stack Developer</span>{' '}
                    dedicated to crafting high-performance, user-friendly, and
                    modern web experiences.
                </p>

                {/* CTA Button */}
                <a href="#about" className="mt-6">
                    <MagicButton
                        title="See My Work"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
        </section>
    )
}

export default Hero
