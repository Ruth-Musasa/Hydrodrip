import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Btn from './Button';

interface Props {
    title: string;
    imageUrl: string;
    sections: {
        title: string;
        paragraphs: string[];
    }[];
    icon: boolean;
    btnAction:string;
}

const Card: React.FC<Props> = ({ imageUrl, sections, icon, title, btnAction }) => {
    return (
        <div className='py-32'>
            <div>
                <h2 className='text-center text-primary-900 font-bold text-4xl'>{title}</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-20 items-center justify-center md:justify-between px-4 py-8 md:w-10/12 md:m-auto">
                <div className="w-full md:w-1/2">
                    <img src={imageUrl} alt="Image" className="w-full h-auto md:h-96 2xl:h-[528px] " />
                </div>
                <div className="w-full md:w-1/2 md:pl-8">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                            <div className="mb-4">
                                {section.paragraphs.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-gray-700 mb-2">
                                        {icon ? <FaArrowRight className="inline mr-2" /> : null}
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                    <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true}>{btnAction}</Btn>
                </div>
            </div>
        </div>
    );
};

export default Card;
