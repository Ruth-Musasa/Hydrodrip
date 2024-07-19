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
    bgColor?: string;
}

const Card: React.FC<Props> = ({ imageUrl, sections, title, btnAction, descriptionTitle, description, to, bgColor }) => {
    return (
        <div className='py-14'>
            <TitleWithUnderline title={`${title} `} classe="items-center" />
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-8 w-11/12 lg:w-10/12 m-auto">
                <div className="md:flex gap-20 w-full ">
                    <div className={`${bgColor} mb-4 w-auto h-64 w-auto lg:w-1/2 lg:h-auto relative xl:h-[506px] img-div m-auto `} >
                        <div className='w-auto h-full img-div bg-no-repeat' style={{
                            backgroundImage: `url("${imageUrl}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'top',
                        }} ></div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8 space-y-2 my-auto">
                        <h3 className='text-primary-900 text-2xl font-bold'>{descriptionTitle} </h3>
                        <p>{description} </p>
                        <h3 className='text-primary-900 text-2xl font-bold pt-6'>Features </h3>
                        <ParagraphDescription sections={sections} />
                        <Link to={to}>   <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true}>{btnAction}</Btn></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
