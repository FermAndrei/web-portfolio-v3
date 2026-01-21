"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative mt-[-55px] h-screen flex flex-col items-center justify-center">
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-5xl md:text-6xl lg:text-7xl font-bold text-white ">
          {"Hi, I'm".split(" ").map((word, index) => (
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
          ))}{" "}
          <span className="text-[#06b6d4]">Ferm Andrei</span>
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
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-base md:text-lg lg:text-xl font-normal text-white"
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
          <a href="#about">
            <button
              className="w-60 rounded-lg px-6 py-2 font-medium
            text-white dark:text-black
            bg-neutral-800/30 dark:bg-white/70
            backdrop-blur-md backdrop-saturate-150
            border border-cyan-500/20
            shadow-[0_8px_32px_rgba(0,0,0,0.12)]
            transition-all duration-300
            hover:-translate-y-0.5
            hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]
            dark:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
            >
              Explore Now
            </button>
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#06b6d4] rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-[#06b6d4] rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
