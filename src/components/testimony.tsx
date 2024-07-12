import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

interface TestimonialProps {
    imageUrl: string;
    name: string;
    position: string;
    message: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ imageUrl, name, position, message }) => {
    return (
        <div className="max-w-lg mx-auto bg-primary-800 shadow-lg rounded-lg overflow-hidden p-10 h-[400px] ">
            <div className="flex relative gap-6">
                <FaQuoteRight className="absolute top-0 right-0 text-primary-300 text-4xl" />
                <img className="w-[70px] h-[70px] rounded-full object-cover object-center" src={imageUrl} alt="avatar" />
                <div className="text-white px-4 py-2 items-center text-base">
                    <p className="text-sm text-primary-400 w-2/3">{position}</p>
                    <h2 className="font-semibold">{name}</h2>
                </div>
            </div>
            <div className="px-6 py-4">
                <p className="mt-2 text-white">{message}</p>
            </div>
        </div>
    );
};

export default Testimonial;
