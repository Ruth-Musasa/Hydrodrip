import Btn from "../../components/Button";
import TitleWithUnderline from "../../components/titleWithUnderline";

interface Props {
    imageUrl: string;
    title: string;
    btnAction: string;
    sections: {
        title: string;
        paragraphs: string[];
    }[];
}

const ProjectsCard: React.FC<Props> = ({ sections, imageUrl, title, btnAction }) => {
    return (
        <div>
            <div className='py-14'>
                <TitleWithUnderline title={`${title} `} classe="items-center" />
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-8 md:w-10/12 md:m-auto">
                    <div className="w-full md:w-5/12">
                        <img src={imageUrl} alt="Image" className="w-full md:h-96 2xl:h-[500px] " />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8 space-y-10">
                        {
                            sections.map((section, index) => (
                                <div key={index}>
                                    <div className="mb-2 flex items-center gap-10">
                                        {section.paragraphs.map((paragraph, pIndex) => (
                                            <div key={pIndex} className="text-gray-700 space-y-4">
                                                <h2 className="font-bold text-primary-900 text-2xl">{section.title}</h2>
                                                <p > {paragraph} </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                        <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true}>{btnAction}</Btn>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectsCard