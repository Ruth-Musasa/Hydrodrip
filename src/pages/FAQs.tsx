


import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Contact from './Home/Contact';
import TitleWithUnderline from '../components/titleWithUnderline';

type FAQItem = {
    question: string;
    answer: string;
};

const faqData: FAQItem[] = [
    {
        question: 'What is Hydrodrip?',
        answer: 'Hydrodrip is a smart water monitoring system that helps you track your water usage in real-time.'
    },
    {
        question: 'How does Hydrodrip work?',
        answer: 'Hydrodrip connects to your home’s Wi-Fi network and transmits water usage data to your Hydrodrip app.'
    },
    {
        question: 'How can I install Hydrodrip?',
        answer: 'Hydrodrip is installed by professional technicians to ensure optimal performance and accuracy.'
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <div>
                <NavBar />
                <div className="text-white text-center  bg-custom-gradient py-60 m-auto space-y-6 clip-mountain">
                    <h1 className="text-5xl font-bold m-auto ">Contact Us</h1>
                    <p className="font-semibold md:w-1/3 m-auto text-lg ">Advanced solutions for efficient water management</p>
                </div>
            </div>
            <div className="w-4/5 mx-auto p-6 ">
                <TitleWithUnderline title="Have questions ?" classe="items-center" />
                <p className='text-center text-xl pb-10 font-bold text-primary-900'>Find answers to frequently asked questions about installation, usage, and benefits.</p>
                {faqData.map((item, index) => (
                    <div key={index} className="mb-4">
                        <button
                            className="w-full px-4 py-2 text-left text-lg font-medium text-white bg-primary-900 rounded-md hover:bg-primary-950 focus:outline-none"
                            onClick={() => handleToggle(index)}
                        >
                            {item.question}
                        </button>
                        {openIndex === index && (
                            <div className="mt-2 p-4 bg-white border border-blue-500 rounded-md">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Contact bgColor="bg-primary-100" />
        </div>
    );
};

export default FAQ;
