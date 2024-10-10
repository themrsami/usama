'use client'
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

function WordRotate() {
    const skills = [
        "Web Developer",
        "Designer",
        "Freelancer",
        "Tech Enthusiast"
    ];
    
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const skillRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, defaults: { duration: 0.5 } });

        // Initial animation
        tl.fromTo(skillRef.current, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, ease: "power2.out" }
        );

        // Skill change animation
        const interval = setInterval(() => {
            setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);

            tl.to(skillRef.current, { opacity: 0, y: -50, ease: "power2.in" })
              .to(skillRef.current, { opacity: 0, y: 50, ease: "power2.out", duration: 0 }, "-=0.5")
              .to(skillRef.current, { opacity: 1, y: 0, ease: "power2.out" });
        }, 2000); // Change skill every 2 seconds

        return () => clearInterval(interval);
    }, [skills.length]);

    return (
        <h2 
            ref={skillRef}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white max-w-6xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
            <span className="text-black dark:text-white">{skills[currentSkillIndex]}</span>
        </h2>
    );
}

export default WordRotate;
