'use client'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

const FAQAccordion = () => {
    const { isToggled } = useContext(ThemeContext);

    const contenttext = isToggled ? 'text-white' : 'text-black';

    return (
        <>
            <div className={`text-center text-2xl font-bold mb-4 ${contenttext}`}>Frequently Asked Questions</div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What services do you offer?</AccordionTrigger>
                    <AccordionContent>
                        I offer web development and mobile app development services, including front-end and back-end development, responsive design, and more.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How can I contact you?</AccordionTrigger>
                    <AccordionContent>
                        You can contact me via the contact form on this page, or email me directly at usamanazir13@gmail.com.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>What technologies do you use?</AccordionTrigger>
                    <AccordionContent>
                        I use a variety of technologies including React, Next.js, Node.js, Tailwind CSS, and more.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Do you provide maintenance services?</AccordionTrigger>
                    <AccordionContent>
                        Yes, I provide ongoing maintenance and support services for the projects I work on.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default FAQAccordion;
