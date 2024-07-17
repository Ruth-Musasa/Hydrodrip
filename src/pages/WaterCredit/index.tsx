import NavBar from "../../components/NavBar";
import IconTitleParagraph from "../../components/iconParagraph";
import ParagraphDescription from "../../components/paragraphDescription";
import TitleWithUnderline from "../../components/titleWithUnderline";
import Btn from "../../components/Button";
import UserTestimonials from "../Home/userTestimonial";
import Contact from "../Home/Contact";
import FAQs from "../Home/faqs";
import { IoMdSpeedometer } from "react-icons/io";
import { Link } from "react-router-dom";
import CardWithIcon from "../AboutUs.tsx/cardWithIcon";

export default function WaterCredit() {
    return (
        <section>
            <div>
                <NavBar />
                <div className="bg-custom-gradient m-auto space-y-6 clip-mountain">
                    <div className="w-10/12 md:flex m-auto py-20 gap-20">
                        <div className="text-white md:w-1/2 m-auto space-y-10">
                            <h1 className="text-5xl font-bold m-auto ">Empower Your Water Usage with <span className="text-secondary-300"> Water Credits</span> </h1>
                            <p className="font-semibold m-auto text-lg ">Drive sustainability while achieving economic benefits.</p>
                        </div>
                        <img src="src/assets/img/2-removebg 3.png" alt="" />
                    </div>
                </div>
            </div>
            <section >
                <div className="py-32">
                    <TitleWithUnderline title="How it work" classe="items-center" />
                    <p className="md:w-1/3 m-auto text-center">HydroWallet is a digital wallet designed for water management. It assists water companies in efficiently scaling their water distribution.</p>
                    <div className="relative flex flex-col md:flex-row gap-10 w-9/12 m-auto justify-evenly">
                        <IconTitleParagraph
                            icon={() => <IoMdSpeedometer className="text-5xl font-bold text-primary-500 " />}
                            title="Measurement"
                            description="Track Your Water Usage with Precision."
                            bgColor="bg-primary-100 w-32 h-32"
                            iconColor="text-white"
                        />
                        <div className="hidden md:block absolute w-1/5 left-1/4 top-1/3  border-t-2 border-dotted border-secondary-300 m-auto" />
                        <IconTitleParagraph
                            icon={() => <IoMdSpeedometer className="text-5xl font-bold text-primary-500 " />}
                            title="Reporting"
                            description="Report and Analyze to Optimize."
                            bgColor="bg-primary-100 w-32 h-32"
                            iconColor="text-white"
                        />
                        <div className="hidden md:block absolute w-1/5 right-1/4 top-1/3 border-t-2 border-dotted border-secondary-300  m-auto" />
                        <IconTitleParagraph
                            icon={() => <IoMdSpeedometer className="text-5xl font-bold text-primary-500 " />}
                            title="Verification"
                            description="Ensure Accuracy with Secure Verification."
                            bgColor="bg-primary-100 w-32 h-32"
                            iconColor="text-white"
                        />
                    </div>
                </div>
                <div className="bg-gray-100 relative flex flex-col md:flex-row relative md:mt-40 h-[520px] ">
                    <img src="src/assets/img/Rectangle 588.png" alt="" className="w-0 md:w-4/12  rotate-180 invisible md:visible " />
                    <div className="m-auto py-8 text-center ">
                        <video
                            className="w-full md:w-2/4 md:inset-x-1/4 md:-top-40 md:h-[495px] md:absolute"
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
                    <img src="src/assets/img/Rectangle 588.png" alt="" className="w-0 invisible md:visible md:w-4/12  " />
                </div>
                <div className="py-20 md:w-10/12 m-auto">
                    <TitleWithUnderline title="Benefits of Water Credits" classe="items-center" />
                    <p className="w-full md:w-2/3 m-auto text-center mb-8">At HydroDrip, our team of experts offers a wide range of services to our clients. With us, you will benefit from top-tier water management solutions provided by local specialists.</p>
                    <div className="grid md:grid-cols-3 md:gap-40 md:flex-row justify-center md:space-x-4 m-auto pb-10">
                        <IconTitleParagraph
                            image="src/assets/img/Icon 1.png"
                            title="Smart Water Meters"
                            description="Accurate and precise monitoring of water usage in real-time"
                        />
                        <IconTitleParagraph
                            image="src/assets/img/Icon 1 (1).png"
                            title="HydroWallet"
                            description="Incentivizing water conservation with water credits"
                        />
                        <IconTitleParagraph
                            image="src/assets/img/Icon 1 (2).png"
                            title="Community Impact"
                            description="Empowering communities through sustainable"
                        />
                    </div>
                </div>
                <div className="bg-primary-100">
                    <CardWithIcon img="src/assets/img/Images.png">
                        <TitleWithUnderline title="Water Credit Marketplace" classe="items-start" />
                        <ParagraphDescription
                            sections={[
                                {
                                    title: "Descriptions",
                                    img: "src/assets/img/List.png",
                                    paragraphs: [
                                        "A platform for trading water credits, promoting economic incentives for water conservation.",
                                    ]
                                },
                                {
                                    title: "How to participe",
                                    img: "src/assets/img/List.png",
                                    paragraphs: [
                                        "Steps for individuals, communities, and businesses to get involved.",
                                    ]
                                },
                            ]}
                        />
                        <Link to="/contact-us">  <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false} >Join now</Btn></Link>
                    </CardWithIcon>
                </div>
                <UserTestimonials />
                <FAQs />
                <Contact bgColor="bg-primary-100" />
            </section>
        </section>

    )
}