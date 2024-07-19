import React, { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const ImageCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        '../public/img/Rectangle 595.png',
        '../public/img/Rectangle 596.png',
        '../public/img/Rectangle 597.png',
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const getVisibleImages = () => {
        if (images.length < 3) return images;
        const extendedImages = [...images, ...images, ...images];
        return extendedImages.slice(currentIndex + images.length, currentIndex + images.length + 3);
    };

    return (
        <div className="relative w-full md:w-11/12 m-auto flex items-center">
            <button
                onClick={handlePrev}
                className="font-black rounded-full bg-primary-900 text-white p-3 focus:outline-none absolute left-2 z-10"
            >
                <SlArrowLeft />
            </button>
            <div className="flex space-x-4 mx-14 overflow-hidden w-full justify-center">
                {getVisibleImages().map((image, index) => (
                    <div
                        key={index}
                        className="flex-none w-full md:w-1/3 h-auto"
                    >
                        <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <button
                onClick={handleNext}
                className="rounded-full bg-primary-900 text-white p-3 focus:outline-none absolute right-2 z-10"
            >
                <SlArrowRight />
            </button>
        </div>
    );
};

export default ImageCarousel;
