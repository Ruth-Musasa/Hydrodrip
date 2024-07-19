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
        <div className="relative max-w-lg mx-auto bg-primary-800 shadow-lg rounded-lg overflow-hidden min-h-[400px] px-8">
            <div className="flex gap-3 pt-16 ">
                <FaQuoteRight className="absolute top-6 right-6 text-primary-300 text-4xl" />
                <img className="w-[70px] h-[70px] rounded-full object-cover object-center" src={imageUrl} alt="avatar" />
                <div className="text-white items-center text-base my-auto">
                    <p className="text-sm text-primary-400 ">{position}</p>
                    <h2 className="font-semibold">{name}</h2>
                </div>
            </div>
            <div className=" py-6">
                <p className=" text-white">{message}</p>
            </div>
        </div>
    );
};

export default Testimonial;
