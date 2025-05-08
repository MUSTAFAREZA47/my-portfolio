import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-100 to-black-200 opacity-50" />
      
      <div className="relative z-10">
        <h1 className="heading text-center">
          My <span className="text-purple">approach</span>
        </h1>

        <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <Card
            title="Ideas, Logic, and Creativity"
            icon={<AceternityIcon order="Phase 1" />}
            des="Every project begins with a strong foundation of ideas, logical structuring, and creative vision. I start by understanding the purpose, user needs, and technical requirements. Brainstorming and planning help shape a clear roadmap while ensuring innovation and efficiency in problem-solving."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
            />
          </Card>

          <Card
            title="Development and Problem-Solving"
            icon={<AceternityIcon order="Phase 2" />}
            des="Once the foundation is set, I focus on transforming ideas into reality by writing clean, scalable, and efficient code. I follow best practices, use the right technologies, and tackle challenges with a problem-solving mindset. Debugging, optimizing, and refining are key aspects of this phase."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
              colors={[[255, 166, 158], [221, 255, 247]]}
              dotSize={2}
            />
          </Card>

          <Card
            title="Execution and Deployment"
            icon={<AceternityIcon order="Phase 3" />}
            des="The final phase is about bringing everything together. I test the project thoroughly for performance, security, and usability. Once ready, I deploy the application, ensuring it runs smoothly. Post-launch, I focus on improvements, updates, and user feedback to maintain a high-quality product."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative h-[35rem] w-full rounded-3xl border border-purple/20 bg-black-100/50 backdrop-blur-sm p-4 transition-all duration-300 hover:border-purple/50"
    >
      <Icon className="absolute h-8 w-8 -top-3 -left-3 text-purple/30" />
      <Icon className="absolute h-8 w-8 -bottom-3 -left-3 text-purple/30" />
      <Icon className="absolute h-8 w-8 -top-3 -right-3 text-purple/30" />
      <Icon className="absolute h-8 w-8 -bottom-3 -right-3 text-purple/30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: hovered ? 0 : 1, y: hovered ? -20 : 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          {icon}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="text-2xl md:text-3xl font-bold text-center text-white mb-4"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-sm md:text-base text-white/80 text-center leading-relaxed"
        >
          {des}
        </motion.p>
      </div>
    </motion.div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div className="relative">
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black-100 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-xl md:text-2xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
