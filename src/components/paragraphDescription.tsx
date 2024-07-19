import { FaArrowRight } from 'react-icons/fa';

interface Props {
    sections: {
        title: string;
        paragraphs: string[];
        icon?: boolean;
        img?: string;
    }[];
   
}

const ParagraphDescription: React.FC<Props> = ({ sections}) => {
    return (
        <div>
            {
                sections.map((section, index) => (
                    <div key={index}>
                        <div className="pb-4 flex items-center gap-8">
                            {section.icon ? <FaArrowRight className="inline mr-2 text-primary-300" /> : null}
                            {section.img ? <img src={section.img} alt="image icon" className='w-16 items-center' /> : null}
                            {section.paragraphs.map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-gray-700 mb-4">
                                    <h2 className="font-bold ">{section.title}</h2>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ParagraphDescription