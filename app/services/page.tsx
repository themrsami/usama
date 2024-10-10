"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { ThemeContext } from '@/app/_components/ThemeContext'; 
import { useContext } from 'react';

export default function Services() {
  const { isToggled } = useContext(ThemeContext);
  const headings = isToggled ? 'text-white' : 'text-black';
  const tabs = [
    {
      title: "Business",
      value: "business",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>Business Websites</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Blog",
      value: "blog",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>Blog Website</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Ecommerce",
      value: "ecommerce",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>Ecommerce Website</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Portfolio",
      value: "portfolio",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>Portfolio Website</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Custom",
      value: "custom",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>Custom Website</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <>
    <div className={`h-[40rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start ${isToggled ? 'dark' : ''}`}>
      <h1 className={`text-4xl font-bold text-center flex justify-center mx-auto mt-4 ${headings}`}>Services</h1>
      <h2 className={`text-md font-light w[90%] text-center my-2 mx-auto ${headings}`}>
        Offering a variety of websites to chose from.
      </h2>
      <Tabs tabs={tabs} />
      
    </div>
    </>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/image.png"
      alt="Website Image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[80%] md:h-[90%] absolute md:-bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
