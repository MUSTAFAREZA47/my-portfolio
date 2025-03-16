import Image from 'next/image'

const About = () => {
    return (
        <section id="about" className="py-20 flex flex-col items-center">
            {/* Section Heading */}
            <h1 className="heading text-center">
                Brief <span className="text-purple">Introduction</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-10 mt-16 max-w-6xl w-full px-6">
                {/* Left Content */}
                <div className="text-left md:w-1/2 max-w-xl lg:p-10">
                    <h2 className="text-4xl font-bold text-teal-400 mb-10">
                        Hey 👋 , I'm Ahmed!
                    </h2>

                    <p className="text-lg text-gray-300 leading-relaxed">
                        I'm a{' '}
                        <span className="text-teal-300 font-semibold">
                            MERN Stack Developer
                        </span>{' '}
                        with a strong foundation in{' '}
                        <span className="text-teal-300 font-semibold">
                            React.js, Node.js, Express.js, and MongoDB
                        </span>
                        . I specialize in crafting{' '}
                        <span className="text-teal-300 font-semibold">
                            high-performance, scalable, and user-friendly web
                            applications
                        </span>{' '}
                        that deliver seamless digital experiences.
                    </p>

                    <p className="text-lg text-gray-300 leading-relaxed mt-4">
                        With a background in{' '}
                        <span className="text-teal-300 font-semibold">
                            graphic design
                        </span>
                        , I blend aesthetics and functionality in my projects.
                        My expertise extends beyond MERN stack to include{' '}
                        <span className="text-teal-300 font-semibold">
                            JavaScript (ES6+), Python, Tailwind CSS,
                            Material-UI, and Next.js
                        </span>
                        .
                    </p>

                    <p className="text-lg text-gray-300 leading-relaxed mt-4">
                        I'm always eager to{' '}
                        <span className="text-teal-300 font-semibold">
                            learn new technologies
                        </span>{' '}
                        and stay ahead of industry trends. Currently, I&apos;m
                        diving deeper into{' '}
                        <span className="text-teal-300 font-semibold">
                            Next.js and Web3
                        </span>{' '}
                        to build the future of the web.
                    </p>

                    <p className="text-lg text-gray-300 leading-relaxed mt-4">
                        Let&apos;s connect and create something amazing
                        together! 🚀
                    </p>
                </div>

                {/* Right Side Image */}
                <div className="flex items-center justify-center md:w-1/2">
                    <Image
                        src="/about.jpg"
                        alt="Ahmed's Image"
                        width={450}
                        height={450}
                        priority
                        className="rounded-lg object-cover shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}

export default About
