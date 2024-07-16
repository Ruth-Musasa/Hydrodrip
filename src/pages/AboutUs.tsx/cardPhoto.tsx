import React from "react";

interface Props {
    img: string;
    children: React.ReactNode;
}

const CardPhoto: React.FC<Props> = ({ img, children }) => {
    return (
        <div className="relative pt-60">
            <div className="  py-16  bg-primary-100 h-auto">
                <img src="src/assets/img/Triangle.png" alt="" className="absolute top-0 left-1/2 w-1/10" />
                <div className="w-11/12  m-auto grid grid-cols md:grid-rows justify-items-end gap-8 md:gap-20">
                    <img src={img} className=" md:absolute bottom-10 left-40 md:w-1/3" alt="" />
                    <div className=" space-y-10 w-full md:w-1/2 bottom-0 left-0">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPhoto;
