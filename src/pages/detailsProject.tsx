import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './Projects/projectData';
import NavBar from '../components/NavBar';

const ProjectDetails: React.FC = () => {
    const { title } = useParams<{ title: string }>();
    const project = projectsData.find(p => p.title === title);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <NavBar />
            <div className="text-white text-center  bg-custom-gradient py-40 2xl:py-60 m-auto space-y-6 clip-mountain">
                <h1 className="text-5xl font-bold m-auto ">{project.title}</h1>
                <p className="font-semibold m-auto text-lg ">{project.date}</p>
            </div>
            <div className=" w-11/12 md:w-9/12 m-auto lg:gap-20 2xl:gap-40 pb-20 pt-10 lg:py-20">
                <div className='w-auto h-[500px] 2xl:h-[710px] m-auto rounded-xl' style={{
                    backgroundImage: `url("${project.imageUrl}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} ></div>
                <div className="w-full m-auto pt-10 text-center">
                    {project.sections.map((section, index) => (
                        <div key={index} className="mb-10">
                            <h2 className="font-bold text-primary-900 text-2xl">{section.title}</h2>
                            {section.paragraphs.map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-gray-700 space-y-4">{paragraph}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default ProjectDetails;
