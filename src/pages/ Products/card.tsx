import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Btn from '../../components/Button';
import TitleWithUnderline from '../../components/titleWithUnderline';
import ParagraphDescription from '../../components/paragraphDescription';
import { Link } from 'react-router-dom';

interface Props {
    title: string;
    imageUrl: string;
    description?: string;
    descriptionTitle?: string;
    sections: {
        title: string;
        icon: boolean;
        paragraphs: string[];
    }[];
    btnAction: string;
    to: string;
}

const Card: React.FC<Props> = ({ imageUrl, sections, title, btnAction, descriptionTitle, description, to }) => {
    return (
        <div className='py-14'>
            <TitleWithUnderline title={`${title} `} classe="items-center" />
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-8 w-11/12 lg:w-10/12 m-auto">
                <div className="w-full md:w-5/12">
                    <img src={imageUrl} alt="Image" className="w-full md:h-80 md:w-auto 2xl:h-[506px] 2xl:w-auto " />
                </div>
                <div className="w-full md:w-1/2 md:pl-8 space-y-2">
                    <h3 className='text-primary-900 text-2xl font-bold'>{descriptionTitle} </h3>
                    <p>{description} </p>
                    <h3 className='text-primary-900 text-2xl font-bold pt-6'>Features </h3>
                    <ParagraphDescription sections={sections} />
                    <Link to={to}>   <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true}>{btnAction}</Btn></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
