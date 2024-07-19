import React from "react"

interface Props {
    description: string;
    bgcolor: string;
    img: string;
}

const HighlightsCard: React.FC<Props> = ({ description, bgcolor, img }) => {
    return (
        <div className={`flex flex-col justify-between p-8 2xl:p-10 h-[276px] rounded-2xl text-white font-bold text-2xl ${bgcolor}`}>
            <div className='w-full h-2/3 rounded-2xl mb-4' style={{
                backgroundImage: `url("${img}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} ></div>
            {description}
        </div>
    )
}



export default HighlightsCard