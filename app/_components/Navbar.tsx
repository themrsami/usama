'use client';
import Link from 'next/link';
import React, { useContext } from 'react';
import { usePathname } from 'next/navigation';
import { BiHome, BiSolidUser, BiSolidCategoryAlt, BiBlanket, BiPhone } from "react-icons/bi";
import { ThemeContext } from './ThemeContext';
import Topnav from './Topnav';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { isToggled } = useContext(ThemeContext);
  const navring = isToggled ? 'ring-white' : 'ring-black';
  const activenav = isToggled ? 'active-nav-dark' : 'active-nav';
  const inactivenav = isToggled ? 'inactive-nav-dark' : 'inactive-nav';
  const pathname = usePathname();

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  const slideIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 20 } },
  };

  return (
    <>
      <motion.nav 
        initial="hidden" 
        animate="visible" 
        variants={slideIn}
        className={`fixed z-[9999] bottom-8 left-0 right-0 flex justify-center mx-auto items-center max-w-[280px] py-2 mt-6 rounded-full backdrop-blur-md ring-2 ${navring}`}>
        <ul className='flex w-[85%] justify-between mx-auto'>
            <Link href='/' className={pathname === '/' ? activenav : inactivenav}>
              <motion.li className='group' whileHover={{ scale: 1.1 }} transition={spring}>
                <BiHome />
                <span className="absolute text-black -top-8 left-[35%] -translate-x-[85%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  Home
                </span>
              </motion.li>
            </Link>
            <Link prefetch={true} href='/about' className={pathname === '/about' ? activenav : inactivenav}>
              <motion.li className='group' whileHover={{ scale: 1.1 }} transition={spring}>
                <BiSolidUser />
                <span className="absolute text-black -top-8 left-[35%] -translate-x-[20%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  About
                </span>
              </motion.li>
            </Link>
            <Link prefetch={true} href='/services' className={pathname === '/services' ? activenav : inactivenav}>
              <motion.li className='group' whileHover={{ scale: 1.1 }} transition={spring}>
                <BiSolidCategoryAlt />
                <span className="absolute text-black -top-8 left-[50%] -translate-x-[10%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  Services
                </span>
              </motion.li>
            </Link>
            <Link prefetch={true} href='/portfolio' className={pathname === '/portfolio' ? activenav : inactivenav}>
              <motion.li className='group' whileHover={{ scale: 1.1 }} transition={spring}>
                <BiBlanket />
                <span className="absolute text-black -top-8 left-[70%] -translate-x-[10%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  Portfolio
                </span>
              </motion.li>
            </Link>
            <Link prefetch={true} href='/contact' className={pathname === '/contact' ? activenav : inactivenav}>
              <motion.li className='group' whileHover={{ scale: 1.1 }} transition={spring}>
                <BiPhone />
                <span className="absolute text-black -top-8 left-[90%] -translate-x-[10%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  Contact
                </span>
              </motion.li>
            </Link>
        </ul>
      </motion.nav>

      <nav className={`fixed z-[9999] top-1 left-0 right-0 flex justify-center mx-auto items-center w-auto`}>
        <Topnav />
      </nav>
    </>
  );
}

export default Navbar;
