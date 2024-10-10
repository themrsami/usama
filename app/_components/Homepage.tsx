'use client';
import React, { useContext, useEffect, useState } from 'react';
import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoPhp, BiLogoPython } from "react-icons/bi";
import { ThemeContext } from './ThemeContext'; // Import the ThemeContext
import Link from 'next/link';
import { CoolMode } from "@/components/magicui/cool-mode";
import type { Metadata } from "next";
import Hero from "./Hero";

export const metadata: Metadata = {
    title: "Homepage",
    description: "Homepage section including projects and preferred web technologies",
  };

const Homepage = () => {
    const { isToggled } = useContext(ThemeContext); // Use the useContext hook to access isToggled
    const buttonclasses = isToggled ? 'text-white border hover:ring-white' : 'text-black border border-black hover:ring-black'
    const textcolorandborder = isToggled ? 'text-white' : 'text-black border-black'

  return (
    
    <section className="mb-1 pt-10 w-full h-[80%]">
        <div className="container mx-auto px-4">
            <div className="w-full space-y-4 mx-auto">
                <Hero/>
                <div className={`animate p-7 border rounded-[20px] ${textcolorandborder}`}>
                    <div className="block text-lg sm:text-2xl font-bold leading-6 text-center">Preferred Web Technologies</div>
                        <div className='flex sm:flex-row md:flex-row flex-col justify-center items-center'>
                            <BiLogoHtml5 className='text-8xl hover:scale-110 duration-200 hover:text-orange-600 hover:cursor-pointer'/>
                            <BiLogoCss3 className='text-8xl hover:scale-110 duration-200 hover:text-blue-800 hover:cursor-pointer'/>
                            <BiLogoJavascript className='text-8xl hover:scale-110 duration-200 hover:text-yellow-400 hover:cursor-pointer'/>
                            <BiLogoReact className='text-8xl hover:text-blue-400 hover:cursor-pointer animate-slow-spin'/>
                            <BiLogoPhp className='text-8xl hover:scale-110 duration-200 hover:text-purple-700 hover:cursor-pointer'/>
                            <BiLogoPython className='text-8xl hover:scale-110 duration-200 hover:cursor-pointer hover:text-orange-400'/>
                        </div>
                    </div> 
                </div>
                <div className='animate flex flex-col sm:flex-row gap-4 mt-12 mx-auto justify-center items-center mb-32'>
                    <CoolMode>
                        <Link className={`inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${buttonclasses} shadow h-10 px-8 md:flex group relative gap-1 overflow-hidden rounded-full font-semibold tracking-tighter transform-gpu transition-all duration-300 ease-out hover:ring-1  hover:ring-offset-1`} href="/portfolio">Portfolio</Link>
                    </CoolMode>
                    <CoolMode>
                        <Link className={`inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${buttonclasses} shadow h-10 px-8 md:flex group relative gap-1 overflow-hidden rounded-full font-semibold tracking-tighter transform-gpu transition-all duration-300 ease-out hover:ring-1  hover:ring-offset-1`} href="./Resume.pdf">Resume<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1"><path d="m9 18 6-6-6-6"></path></svg></Link>
                    </CoolMode>
                </div>
            </div>
        </section>
  )
}

export default Homepage