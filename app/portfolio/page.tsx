'use client';
import { HoverEffect } from "@/components/ui/card-hover-effect"
import {projects} from "./projects"
import {useContext} from 'react';
import { ThemeContext } from '@/app/_components/ThemeContext';

export default function Portfolio() {
  const { isToggled } = useContext(ThemeContext);
  const theme = isToggled ? '' : 'dark';
  const heading = isToggled ? 'text-white' : 'text-black';
  return (
    <div className={`${theme} max-w-5xl mx-auto px-8 pb-20`}>
      <h1 className={`${heading} text-4xl font-bold text-center mt-10`}>Recent Projects</h1>
      <h2 className={`${heading} text-md font-light text-center my-2`}>Click on any project to see more</h2>
      <HoverEffect items={projects} />
    </div>
  );
}
