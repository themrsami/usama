'use client';
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { items } from "./items";
import { useContext } from 'react';
import { ThemeContext } from '@/app/_components/ThemeContext';

export default function About() {
  const { isToggled } = useContext(ThemeContext);
  const theme = isToggled ? 'dark' : '';

  return (
    <div className={`${theme} max-w-6xl mx-auto pb-40 pt-10`}>
      <h1 className={`text-4xl font-bold text-center mb-8 ${isToggled ? 'text-white' : 'text-black'}`}>
        About Me
      </h1> {/* Centered and color adjusted based on theme */}
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
