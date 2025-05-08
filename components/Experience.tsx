import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Experience = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                { name: "HTML5", icon: "/html-5.png" },
                { name: "CSS3", icon: "/css.png" },
                { name: "JavaScript", icon: "/js.png" },
                { name: "TypeScript", icon: "/typescript.png" },
                { name: "React.js", icon: "/react.png" },
                { name: "Next.js", icon: "/next.png" },
                { name: "Tailwind CSS", icon: "/tailwind.png" },
                { name: "Redux", icon: "/redux.png" },
                { name: "ShadCN", icon: "/shadcn.png" },
            ]
        },
        {
            title: "Backend Development",
            skills: [
                { name: "Node.js", icon: "/node.png" },
                { name: "Express.js", icon: "/express.png" },
                { name: "Python", icon: "/python.png" },
                { name: "Django", icon: "/django.svg" },
                { name: "MongoDB", icon: "/mongo.svg" },
                { name: "MySQL", icon: "/mysql.png" },
                { name: "NextAuth", icon: "/nextauth.png" },
                { name: "JWT", icon: "/jwt.png" }
            ]
        },
        {
            title: "Database Management",
            skills: [
                { name: "MongoDB", icon: "/mongo.svg" },
                // { name: "MongoDB Atlas", icon: "/mongodb-atlas.png" },
                { name: "MySQL", icon: "/mysql.png" },
                // { name: "Data Validation", icon: "/validation.png" }
            ]
        },
        {
            title: "Tools & Deployment",
            skills: [
                { name: "Git", icon: "/git.png" },
                { name: "GitHub", icon: "/github.svg" },
                { name: "Vercel", icon: "/vercel.png" },
                { name: "npm", icon: "/npm.svg" },
                { name: "Postman", icon: "/postman.png" },
                { name: "Jest", icon: "/jest.png" }
            ]
        },
        {
            title: "Design & Other Skills",
            skills: [
                { name: "Photoshop", icon: "/photoshop.png" },
                { name: "Illustrator", icon: "/illustrator.png" },
                { name: "figma", icon: "/figma.png" },
                { name: "indesign", icon: "/indesign.png" }
            ]
        }
    ]

    return (
        <div className="w-full">
            <h1 className="heading">
                Technical <span className="text-purple">Skills</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-8">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-black-100 p-8 rounded-2xl border border-purple/20 hover:border-purple/50 transition-all duration-300"
                    >
                        <h2 className="text-2xl font-bold text-purple mb-6">
                            {category.title}
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex flex-col items-center p-4 bg-black-200 rounded-xl hover:bg-purple/10 transition-all duration-300"
                                >
                                    <div className="relative w-12 h-12 mb-2">
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="text-sm text-center text-white-100">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Experience
