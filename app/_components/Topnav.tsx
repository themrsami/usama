import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import Toggletheme from './Toggletheme';
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function Topnav() {
    const { isToggled } = useContext(ThemeContext);
    const theme = isToggled ? 'text-white' : 'text-black';
    const border = isToggled ? "border-white" : "border-black";

  return (
    <div className={`relative max-w-full`}>
      <Dock direction="middle" className={`border max-w-96 ${border}`}>
        <DockIcon>
          <Link href="https://www.github.com/themrsami" target="_blank" aria-label="Github">
            <Icons.gitHub className={`${theme} size-6`} />
          </Link>
        </DockIcon>
        
          <DockIcon>
            <Link href="https://wa.me/923124156411" target="_blank" aria-label="Whatsapp">
              <Icons.whatsapp className={`${theme} size-6`} />
            </Link>
          </DockIcon>
        
          <DockIcon>
            <Link href="https://www.instagram.com/themrsami" target="_blank" aria-label="Instagram">
              <Icons.instagram className={`${theme} size-6`} />
            </Link>
          </DockIcon>
        
          <DockIcon>
            <Link href="mailto:usamanazir13@gmail.com" target="_blank" aria-label="Mail">
              <Icons.email className={`${theme} size-6`} />
            </Link>
          </DockIcon>
        
        <DockIcon>
            <Link href="https://www.linkedin.com/in/usama-nazir" target="_blank" aria-label="LinkedIn">
            <Icons.linkedin className={`${theme} size-6`} />
            </Link>
        </DockIcon>
        <DockIcon>
          <Toggletheme />
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  gitHub: (props: IconProps) => (
    <FaGithub {...props}/>
  ),
  notion: (props: IconProps) => (
    <SiNotion {...props} />
  ),
  instagram: (props: IconProps) => (
    <AiFillInstagram {...props} />
  ),
  whatsapp: (props: IconProps) => (
    <IoLogoWhatsapp {...props} />
  ),
  email: (props: IconProps) => (
    <MdEmail {...props} />
  ),
    linkedin: (props: IconProps) => (
        <FaLinkedin {...props} />
    ),
};
