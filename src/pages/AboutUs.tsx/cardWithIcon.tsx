import React from "react";

interface Props {
    img: string;
    children: React.ReactNode;
}

const CardWithIcon: React.FC<Props> = ({ img, children }) => {
    return (
        <div className="py-10 md:py-0 w-11/12 m-auto">
            <div className=" h-auto">
                <div className="w-11/12  m-auto flex flex-col lg:flex-row gap-8 2xl:gap-32">
                    <div className=" space-y-10 w-full md:w-10/12 bottom-0 left-0 m-auto">
                        <div>
                            {children}
                        </div>
                    </div>
                    <img src={img} className="md:w-2/3 lg:w-5/12 md:h-full md:m-auto 2xl:w-2/3" alt="" />
                </div>
            </div>
        </div>
    );
}

export default CardWithIcon;
