import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import { BiMoon, BiSun } from 'react-icons/bi';
import { useToast } from '@/components/ui/use-toast';

const Toggletheme = () => {
  const { isToggled, handleToggle } = useContext(ThemeContext);
  const { toast } = useToast();

  const toggleTheme = () => {
    handleToggle();
    toast({
      title: `Switched to ${isToggled ? 'light' : 'dark'} mode`,
      description: isToggled ? 'You are now in light mode.' : 'You are now in dark mode.',
      duration: 1000,
    });
  };

  return (
    <div>
      <button id="toggle-theme" aria-label="toggle-theme" className='flex justify-center items-center' onClick={toggleTheme}>
        {isToggled ? (
          <BiSun className='text-5xl h-6 text-white' />
        ) : (
          <BiMoon className='text-5xl h-6 text-black' />
        )}
      </button>
    </div>
  );
};

export default Toggletheme;
