import React from "react";
import TitleWithUnderline from "../../components/titleWithUnderline";

interface Props {
    img: string;
    children: React.ReactNode;
}

const CardWhiteIcon: React.FC<Props> = ({ img, children }) => {
    return (
        <div className="relative pt-72">
            <div className="  py-16  bg-primary-100 h-auto">
                <img src="src/assets/img/Triangle.png" alt="" className="absolute top-0 left-1/2 w-2/12" />
                <div className="w-11/12  m-auto grid grid-cols md:grid-rows justify-items-end gap-8 md:gap-20">
                    <img src={img} className=" md:absolute bottom-10 left-40" alt="" />
                    <div className=" space-y-10 w-full md:w-1/2 bottom-0 left-0">
                        <TitleWithUnderline title="What are Smart Water Meters ?" classe="items-start" />
                        <p> Our Smart Water Meters integrate advanced IoT technology to deliver precise, real-time insights into water usage. They are designed to help households, industries, and municipalities manage water more efficiently, saving costs and promoting sustainable practices.</p>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardWhiteIcon;
