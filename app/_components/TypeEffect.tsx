"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "Together.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <h2 className="flex flex-col items-center justify-center h-[5rem] w-full mb-4">
      <TypewriterEffectSmooth words={words} />
    </h2>
  );
}
