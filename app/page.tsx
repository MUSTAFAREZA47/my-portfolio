'use client'

import { navItems } from '@/data'
import Hero from '@/components/Hero'
import About from '@/components/About'
import RecentProjects from '@/components/RecentProjects'
import Clients from '@/components/Clients'
import Experience from '@/components/Experience'
import Approach from '@/components/Approach'
import Footer from '@/components/Footer'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import Contact from '@/components/Contact'

const Home = () => {
    return (
        <main className="relative bg-black-100 overflow-hidden mx-auto scroll-smooth">
            <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
                {/* Navigation */}
                <FloatingNav navItems={navItems} />

                {/* Hero Section */}
                <section id='home' className="w-full">
                    <Hero />
                </section>

                {/* About Section */}
                <section id='about' className="w-full py-20">
                    <About />
                </section>

                {/* Projects Section */}
                <section id='project' className="w-full py-20">
                    <RecentProjects />
                </section>

                {/* Experience Section */}
                <section id='experience' className="w-full py-20">
                    <Experience />
                </section>

                {/* Clients Section */}
                {/* <section id='clients' className="w-full py-20">
                    <Clients />
                </section> */}

                {/* Approach Section */}
                <section id='approach' className="w-full py-20">
                    <Approach />
                </section>

                {/* Contact Section */}
                <section id='contact' className="w-full py-20">
                    <Contact />
                </section>

                {/* Footer */}
                <Footer />
            </div>
        </main>
    )
}

export default Home
