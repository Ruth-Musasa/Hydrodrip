import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Btn from '../../components/Button';
import TitleWithUnderline from '../../components/titleWithUnderline';
import ParagraphDescription from '../../components/paragraphDescription';

interface Props {
    title: string;
    imageUrl: string;
    description?: string;
    descriptionTitle?: string;
    sections: {
        title: string;
        paragraphs: string[];
    }[];
    icon: boolean;
    btnAction: string;
}

const Card: React.FC<Props> = ({ imageUrl, sections, icon, title, btnAction, descriptionTitle, description }) => {
    return (
        <div className='py-32'>
            <TitleWithUnderline title={`${title} `} classe="items-center" />
            <div className="flex flex-col md:flex-row gap-20 items-center justify-center md:justify-between px-4 py-8 md:w-10/12 md:m-auto">
                <div className="w-full md:w-5/12">
                    <img src={imageUrl} alt="Image" className="w-full md:h-96 h-[506px] " />
                </div>
                <div className="w-full md:w-1/2 md:pl-8 space-y-4">
                    <h3 className='text-primary-900 text-3xl font-bold'>{descriptionTitle} </h3>
                    <p>{description} </p>
                    <h3 className='text-primary-900 text-3xl font-bold'>{descriptionTitle} </h3>
                    <ParagraphDescription sections={sections} icon={icon} />
                    <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true}>{btnAction}</Btn>
                </div>
            </div>
        </div>
    );
};

export default Card;
