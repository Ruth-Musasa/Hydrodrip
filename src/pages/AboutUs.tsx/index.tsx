import Btn from "../../components/Button";
import NavBar from "../../components/NavBar";
import Divider from "../../components/divider";
import ParagraphDescription from "../../components/paragraphDescription";
import TitleWithUnderline from "../../components/titleWithUnderline";
import Contact from "../Home/Contact";
import FAQs from "../Home/faqs";
import CardPhoto from "./cardPhoto";
import CardWithIcon from "./cardWithIcon";
import DynamicNumber from "./dynamicNumber";

export default function AboutUs() {
    return (
        <div>
            <section>
                <NavBar />
                <div className="text-white text-center  bg-custom-gradient py-60 m-auto space-y-6 clip-mountain">
                    <h1 className="text-5xl font-bold m-auto ">Presentation of Hydrodrip</h1>
                    <p className="font-semibold m-auto text-lg ">Leading the wave in advanced water management solutions</p>
                </div>
            </section>
            <section>
                <CardWithIcon img="src/assets/img/Image6.png">
                    <TitleWithUnderline title="Our mission" classe="items-start" />
                    <p className="mb-12"> Our smart water meters and HydroWallet app make water usage tracking and payments as seamless as possible, facilitating a hassle-free experience for all users.</p>
                    <ParagraphDescription
                        sections={[
                            {
                                title: "Easy Payment Solutions",
                                img: "src/assets/img/Icon 5.png",
                                paragraphs: [
                                    "Our smart water meters and HydroWallet app make water usage tracking and payments as seamless as possible, facilitating a hassle-free experience for all users.",
                                ]
                            },
                            {
                                title: "Rewards and Loyalty Programs",
                                img: "src/assets/img/Icon 2.png",
                                paragraphs: [
                                    "Earn rewards for conserving water. Our HydroWallet app allows users to collect water credits that can be redeemed or used to pay water bills, fostering a culture of conservation.",
                                ]
                            },
                            {
                                title: "Conservation and Trading",
                                img: "src/assets/img/Icone 3.png",
                                paragraphs: [
                                    "Hydrodrip enables users to trade water credits on a secure platform, promoting responsible water consumption and supporting community-wide conservation efforts.",
                                ]
                            },
                        ]}
                    />
                </CardWithIcon>
                <Divider />
                <CardPhoto img="src/assets/img/Rectangle 5.png">
                    <TitleWithUnderline title="Our services" classe="items-start" />
                    <p>Tailored solutions for real-time water management.</p>
                    <ParagraphDescription
                        sections={[
                            {
                                title: "Real-Time Monitoring",
                                img: "src/assets/img/List.png",
                                paragraphs: [
                                    "Track water usage dynamically to detect leaks and patterns, ensuring optimal water management.",
                                ]
                            },
                            {
                                title: "Accurate Data",
                                img: "src/assets/img/List.png",
                                paragraphs: [
                                    "Receive data you can trust with our high-precision meters that ensure billing accuracy and water usage transparency.",
                                ]
                            },
                            {
                                title: "Alerts and Notifications",
                                img: "src/assets/img/List.png",
                                paragraphs: [
                                    "Stay informed with instant alerts on leaks, potential over-usage, or system malfunctions to promptly address any issues.",
                                ]
                            },
                        ]}
                    />
                    <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true}>Learn more</Btn>
                </CardPhoto>
                <DynamicNumber />
                <Contact />
                <FAQs />
            </section>
        </div>
    )
}