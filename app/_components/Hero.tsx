"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useContext } from "react";
import { ThemeContext } from "@/app/_components/ThemeContext";
import WordRotate from "./Wordrotate";
import TypeEffect from "./TypeEffect";
export default function Hero() {
    const { isToggled } = useContext(ThemeContext);
    const theme = isToggled ? 'dark' : '';
    const border = isToggled ? '' : 'border-black';
  return (
    <div className={`${theme} w-full border ${border} rounded-[20px]`}>
        <HeroHighlight>
        <motion.h1
            initial={{
            opacity: 0,
            y: 20,
            }}
            animate={{
            opacity: 1,
            y: [20, -5, 0],
            }}
            transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white max-w-6xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
            Transforming Concepts into Seamless
            <br/>
            <Highlight className="text-black dark:text-white">
                User Experiences
            </Highlight>
        </motion.h1>
        </HeroHighlight>
        <TypeEffect/>
    </div>
  );
}

