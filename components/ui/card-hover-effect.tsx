'use client'
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiJupyter } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    tech: string[];
    details: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          target="_blank"
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-black block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardTech tech={item.tech} />
            <CardDetails>{item.details}</CardDetails>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black dark:bg-white border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 dark:text-zinc-900 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 dark:text-zinc-700 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardTech = ({
  tech,
  className,
}: {
  tech: string[];
  className?: string;
}) => {
  return (
    <ul className={cn("flex flex-wrap gap-4 mt-8", className)}>
      {tech.map((item) => (
        <li key={item} className="flex items-center">
          {item === "React Native"? (
            <TbBrandReactNative className="text-zinc-100 dark:text-zinc-900 mr-2" />
          ) : item === "JavaScript"? (
            <IoLogoJavascript className="text-zinc-100 dark:text-zinc-900 mr-2" />
          ) : item === "Python" ? (
            <FaPython className="text-zinc-100 dark:text-zinc-900 mr-2" />
          ) : item === "React"? (
            <FaReact className="text-zinc-100 dark:text-zinc-900 mr-2" />
          ) : item === "Jupyter Notebook"? (
            <SiJupyter className="text-zinc-100 dark:text-zinc-900 mr-2" />
          ) : item === "HTML"? (
            <FaHtml5 className="text-zinc-100 dark:text-zinc-900 mr-2" />
          ) : (
            <></>
          )}
          <span className="text-zinc-100 dark:text-zinc-900">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export const CardDetails = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 dark:text-zinc-700 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};