import { FaArrowRight } from 'react-icons/fa';

interface Props {
    sections: {
        title: string;
        paragraphs: string[];
    }[];
    icon?: boolean;
    img?: string;
}

const ParagraphDescription: React.FC<Props> = ({ sections, icon, img }) => {
    return (
        <div>
            {
                sections.map((section, index) => (
                    <div key={index}>
                        <div className="mb-2 flex items-center gap-10">
                            {icon ? <FaArrowRight className="inline mr-2 text-primary-300" /> : null}
                            {img ? <img src={img} alt="image icon" /> : null}
                            {section.paragraphs.map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-gray-700 mb-2">
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