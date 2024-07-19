import React from 'react';
import TitleWithUnderline from '../../components/titleWithUnderline';
import Btn from '../../components/Button';

interface Props {
    bgColor?: string;
    img: string;
    title: string;
    description: string;
    btnAction: string;
}

const CardDescription: React.FC<Props> = ({
    img,
    title,
    description,
    btnAction,
    bgColor, }) => {

    return (
        <div className="lg:flex w-10/12 md:w-9/12 lg:w-10/12 m-auto lg:gap-20 2xl:gap-40 py-20 lg:pb-20 lg:pt-40 ">
            <div className={`${bgColor} w-auto h-64 md:h-96 lg:w-1/2 lg:h-auto relative xl:h-[506px] img-div m-auto `} >
                <div className='w-auto h-full img-div m-auto'style={{
                backgroundImage: `url("${img}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} ></div>
                <img src="public/img/Triangle.png" className='w-1/2 absolute -top-20  md:-top-40 2xl:-top-60' alt="" />
            </div>
            <div className="w-full lg:w-1/2 m-auto pt-10">
                <TitleWithUnderline title={title} classe="items-start" />
                <p className="mb-10">{description} </p>
                <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true}>{btnAction}</Btn>
            </div>
        </div>
    );
};

export default CardDescription;
