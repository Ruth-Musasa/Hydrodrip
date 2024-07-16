import React from "react";

interface Props {
    img: string;
    children: React.ReactNode;
}

const CardWithIcon: React.FC<Props> = ({ img, children }) => {
    return (
        <div className="w-11/12 m-auto">
            <div className="py-16 h-auto">
                {/* <img src="src/assets/img/Triangle.png" alt="" className="absolute top-0 left-1/2 w-2/12" /> */}
                <div className="w-11/12  m-auto flex flex-col md:flex-row gap-8 2xl:gap-32">
                    <div className=" space-y-10 w-full md:w-10/12 bottom-0 left-0 m-auto">
                        <div>
                            {children}
                        </div>
                    </div>
                    <img src={img} className="md:w-5/12 md:h-full md:m-auto 2xl:w-2/3" alt="" />
                </div>
            </div>
        </div>
    );
}

export default CardWithIcon;
