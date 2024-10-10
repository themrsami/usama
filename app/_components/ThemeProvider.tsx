'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isToggled, setIsToggled] = useState(true);

    // Function to handle theme toggle
    const handleToggle = useCallback(() => {
        setIsToggled(prev => {
            const newTheme = !prev;
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            return newTheme;
        });
    }, []);

    // Effect to check localStorage on initial render
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setIsToggled(storedTheme === 'dark');
        }
    }, []);

    // Effect to add/remove body classes based on theme
    useEffect(() => {
        if (isToggled) {
            document.body.classList.add('dark-body');
            document.body.classList.remove('light-body');
        } else {
            document.body.classList.remove('dark-body');
            document.body.classList.add('light-body');
        }
    }, [isToggled]);

    return (
        <ThemeContext.Provider value={{ isToggled, handleToggle }}>
            {children}
        </ThemeContext.Provider>
    );
};
