"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative mt-[-55px] h-screen flex flex-col items-center justify-center">
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl dark:text-slate-300">
          {"HI, I'M FERM ANDREI".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-white dark:text-neutral-400"
        >
          I'm a developer with 2 years of experience in front-end web and app
          development. I enjoy turning ideas into real projects and growing my
          skills through meaningful work.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            className="w-60 rounded-lg px-6 py-2 font-medium
                        text-white dark:text-black
                        bg-neutral-800/30 dark:bg-white/70
                        backdrop-blur-md backdrop-saturate-150
                        border border-white/5
                        shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]
                        dark:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
          >
            Explore Now
          </button>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-slate-200 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
