import React from 'react';

interface IconTitleParagraphProps {
    icon?: React.ElementType;
    image?: string;
    title: string;
    description: string;
    iconColor?: string;
    bgColor?: string;
}

const IconTitleParagraph: React.FC<IconTitleParagraphProps> = ({
    icon: Icon,
    image,
    title,
    description,
    iconColor = 'text-primary-500',
    bgColor = 'bg-primary-500 bg-opacity-20'
}) => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-4">
            {Icon ? <div className={`flex items-center justify-center w-16 h-16 rounded-full ${bgColor} mb-2`}> <Icon size={30} className={iconColor} /> </div> : image ? <img src={image} alt={title} className="w-20 h-auto items-center" /> : null}
            <h2 className="md:w-10/12 m-auto text-2xl font-bold mb-2 md:w-full ">{title}</h2>
            <p className="md:w-10/12 m-auto text-gray-600 md:w-full">{description}</p>
        </div>
    );
};

export default IconTitleParagraph;
