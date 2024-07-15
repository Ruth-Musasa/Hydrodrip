// import React from 'react';

// interface IconTitleParagraphProps {
//   icon: React.ElementType;
//   title: string;
//   description: string;
// }

// const IconTitleParagraph: React.FC<IconTitleParagraphProps> = ({ icon: Icon, title, description }) => {
//   return (
//     <div className="flex flex-col items-center justify-center text-center ">
//       <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 bg-opacity-20 mb-4">
//         <Icon size={30} className="text-blue-500" />
//       </div>
//       <h2 className="text-2xl font-bold mb-2">{title}</h2>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// };

// export default IconTitleParagraph;

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
    iconColor = 'text-blue-500',
    bgColor = 'bg-blue-500 bg-opacity-20'
}) => {
    return (
        <div className="flex flex-col items-center justify-center text-center p-6">
            {Icon ? <div className={`flex items-center justify-center w-16 h-16 rounded-full ${bgColor} mb-4`}> <Icon size={30} className={iconColor} /> </div> : image ? <img src={image} alt={title} className="w-20 h-auto" /> : null}
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default IconTitleParagraph;
