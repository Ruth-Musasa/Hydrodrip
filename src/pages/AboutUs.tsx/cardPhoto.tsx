import React from "react";

interface Props {
    img: string;
    children: React.ReactNode;
}

const CardPhoto: React.FC<Props> = ({ img, children }) => {
    return (
        <div className="relative md:pt-24 2xl:pt-60">
            <div className="py-16  bg-primary-100 h-auto">
                <img src="src/assets/img/Triangle.png" alt="" className="absolute hidden lg:block top-0 left-1/2 w-1/12 2xl:w-1/10" />
                <div className="w-10/12  m-auto grid grid-cols lg:grid-rows justify-items-end gap-8 lg:gap-20">
                    <img src={img} className=" w-0  md:absolute hidden lg:block bottom-20 left-20 2xl:left-40 lg:w-5/12 2xl:w-1/3" alt="" />
                    <div className=" space-y-10 w-full lg:pl-6 lg:w-6/12">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPhoto;
