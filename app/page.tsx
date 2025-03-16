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

const Home = () => {
    return (
        <main className="relative bg-black-100 overflow-hidden mx-auto sm:px-10 px-5 scroll-smooth">
            <div className="max-w-7xl w-full flex flex-col items-center">
                <FloatingNav navItems={navItems} />

                <section id='home'>
                    <Hero />
                </section>
                <section id='about'>
                    <About />
                </section>
                <section id='project'>
                    <RecentProjects />
                </section>
                <section>
                    <Experience />
                </section>
                <section id='contact'>
                    <Approach />
                </section>

                <Footer />
            </div>
        </main>
    )
}

export default Home
