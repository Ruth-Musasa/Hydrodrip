import React from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Button';
import TitleWithUnderline from '../../components/titleWithUnderline';

interface Props {
    imageUrl: string;
    title: string;
    date?: string;
    btnAction: string;
    sections: {
        title: string;
        paragraphs: string[];
    }[];
}

const ProjectsCard: React.FC<Props> = ({ sections, imageUrl, title, btnAction}) => {
    return (
        <div className='md:py-14'>
            <div className='w-10/12 m-auto '>
                <TitleWithUnderline title={`${title} `} classe="text-center items-center" />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-8 md:w-10/12 md:m-auto">
                <div className="w-full md:w-5/12">
                    <div className='w-full h-80 md:w-auto xl:h-[400px] 2xl:h-[400px] 2xl:w-auto img-div m-auto' style={{
                        backgroundImage: `url("${imageUrl}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }} ></div>
                </div>
                <div className="w-full py-4  md:w-1/2 md:pl-8 space-y-10">
                    {
                        sections.map((section, index) => (
                            <div key={index}>
                                <div className="mb-6 flex items-center gap-10">
                                    {section.paragraphs.map((paragraph, pIndex) => (
                                        <div key={pIndex} className="text-gray-700 space-y-4">
                                            <h2 className="font-bold text-primary-900 text-2xl">{section.title}</h2>
                                            <p>{paragraph}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                    <Link to={`/projects/${title}`}>
                        <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true}>{btnAction}</Btn>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard;
