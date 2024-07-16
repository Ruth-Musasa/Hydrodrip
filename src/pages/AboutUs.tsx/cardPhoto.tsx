import React from "react";

interface Props {
    img: string;
    children: React.ReactNode;
}

const CardPhoto: React.FC<Props> = ({ img, children }) => {
    return (
        <div className="relative md:pt-24 2xl:pt-60">
            <div className="py-16  bg-primary-100 h-auto">
                <img src="src/assets/img/Triangle.png" alt="" className="absolute hidden md:block top-0 left-1/2 w-1/12 2xl:w-1/10" />
                <div className="w-10/12  m-auto grid grid-cols md:grid-rows justify-items-end gap-8 md:gap-20">
                    <img src={img} className=" md:absolute bottom-10 left-20 2xl:left-40 md:w-5/12 2xl:w-1/3" alt="" />
                    <div className=" space-y-10 w-full md:w-1/2 bottom-0 left-0">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPhoto;
