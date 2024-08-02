import NavBar from "../../components/NavBar";
import IconTitleParagraph from "../../components/iconParagraph";
import ParagraphDescription from "../../components/paragraphDescription";
import TitleWithUnderline from "../../components/titleWithUnderline";
import Btn from "../../components/Button";
import UserTestimonials from "../Home/userTestimonial";
import Contact from "../Home/Contact";
import FAQs from "../Home/faqs";
import { Link } from "react-router-dom";
import CardWithIcon from "../AboutUs.tsx/cardWithIcon";
import { TbReport, TbReportSearch } from "react-icons/tb";
import { GiSpeedometer } from "react-icons/gi";

export default function WaterCredit() {
    return (
        <section>
            <div className="sticky w-full bg-white top-0 z-40">
                <NavBar />
            </div>
            <div>
                <div className="bg-custom-gradient m-auto space-y-6 clip-mountain">
                    <div className="w-11/12 lg:w-10/12 md:flex m-auto py-10 2xl:py-20 lg:gap-20">
                        <div className="text-white md:w-1/2 m-auto space-y-10">
                            <h1 className="text-4xl font-bold m-auto ">Empower Your Water Usage with <span className="text-secondary-300"> Water Credits</span> </h1>
                            <p className="font-semibold m-auto text-lg ">Drive sustainability while achieving economic benefits.</p>
                        </div>
                        <img src="../img/2-removebg 3.png" alt="" />
                    </div>
                </div>
            </div>
            <section >
                <div className="py-14 w-10/12 m-auto lg:py-32 ">
                    <TitleWithUnderline title="How it work" classe="items-center" />
                    <p className="lg:w-1/3 m-auto text-center py-5">HydroWallet is a digital wallet designed for water management. It assists water companies in efficiently scaling their water distribution.</p>
                    <div className="relative flex flex-col md:flex-row md:gap-10 lg:w-9/12 m-auto justify-evenly">
                        <IconTitleParagraph
                            icon={() => <GiSpeedometer className="text-5xl font-bold text-primary-500 " />}
                            title="Measurement"
                            description="Track Your Water Usage with Precision."
                            bgColor="bg-primary-100 w-24 h-24 lg:w-32 lg:h-32"
                            iconColor="text-white"
                        />
                        <div className="hidden md:block w-1/4 border-t-2 border-dashed border-secondary-300 mt-20" />
                        <IconTitleParagraph
                            icon={() => <TbReport className="text-5xl font-bold text-primary-500 " />}
                            title="Reporting"
                            description="Report and Analyze to Optimize."
                            bgColor="bg-primary-100 w-24 h-24 lg:w-32 lg:h-32"
                            iconColor="text-white"
                        />
                        <div className="hidden md:block  w-1/4  border-t-2 border-dashed border-secondary-300 mt-20" />
                        <IconTitleParagraph
                            icon={() => <TbReportSearch className="text-5xl font-bold text-primary-500 " />}
                            title="Verification"
                            description="Ensure Accuracy with Secure Verification."
                            bgColor="bg-primary-100 w-24 h-24 lg:w-32 lg:h-32"
                            iconColor="text-white"
                        />
                    </div>
                </div>
                <div className="bg-gray-100 relative flex flex-col md:flex-row relative lg:mt-40 h-[520px] ">
                    <img src="../img/Rectangle 588.png" alt="" className="w-0 md:w-4/12  rotate-180 invisible md:visible " />
                    <div className="m-auto py-8 text-center ">
                        <video
                            className="w-full lg:w-2/4 md:inset-x-1/4 md:-top-40 lg:h-[495px] lg:absolute"
                            controls
                            poster="path/to/your/poster.jpg"
                        >
                            <source src="https://www.youtube.com/watch?v=kkbDgUAVyRc" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="md:absolute md:bottom-10 md:inset-x-1/4">
                            <p className="my-4 ">Serving our customers</p>
                            <div className="object-cente">
                                <Link to="/projects">  <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true} classe="m-auto">Our projects</Btn></Link>
                            </div>
                        </div>
                    </div>
                    <img src="../img/Rectangle 588.png" alt="" className="w-0 invisible md:visible md:w-4/12  " />
                </div>
                <div className="w-10/12 m-auto">
                    <div className="py-14 md:pb-10 lg:py-20 lg:w-10/12 m-auto">
                        <TitleWithUnderline title="Benefits of Water Credits" classe="text-center items-center" />
                        <p className="w-full md:w-2/3 m-auto text-center mb-8">At HydroDrip, our team of experts offers a wide range of services to our clients. With us, you will benefit from top-tier water management solutions provided by local specialists.</p>
                        <div className="grid md:grid-cols-3 gap-10 lg:gap-40 justify-center lg:space-x-4 m-auto pb-10">
                            <IconTitleParagraph
                                image="../img/Icon 14.png"
                                title="For Consumers"
                                description="Reduced water bills and rewards for sustainable practices."
                            />
                            <IconTitleParagraph
                                image="../img/Icon 1 (1)4.png"
                                title="For Communities"
                                description="Funding for new water infrastructure projects."
                            />
                            <IconTitleParagraph
                                image="../img/Icon 1 (2)4.png"
                                title=" For Industries"
                                description="Offset water consumption and improve ESG scores."
                            />
                        </div>
                    </div>
                </div>
                <div className="py-10 md:pt-20 lg:py-0 bg-primary-100">
                    <CardWithIcon img="../img/Images.png">
                        <TitleWithUnderline title="Water Credit Marketplace" classe="text-center items-center md:items-start" />
                        <ParagraphDescription
                            sections={[
                                {
                                    title: "Descriptions",
                                    img: "../img/List.png",
                                    paragraphs: [
                                        "A platform for trading water credits, promoting economic incentives for water conservation.",
                                    ]
                                },
                                {
                                    title: "How to participe",
                                    img: "../img/List.png",
                                    paragraphs: [
                                        "Steps for individuals, communities, and businesses to get involved.",
                                    ]
                                },
                            ]}
                        />
                        <Link to="/contact-us">  <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false} classe="w-9/12 m-auto lg:w-auto" >Join now</Btn></Link>
                    </CardWithIcon>
                </div>
                <UserTestimonials />
                <FAQs />
                <Contact description="Ready to Transform Your Water Management?" bgColor="bg-primary-100" />
            </section>
        </section>

    )
}