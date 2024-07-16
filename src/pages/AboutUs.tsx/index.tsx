import Btn from "../../components/Button";
import NavBar from "../../components/NavBar";
import Divider from "../../components/divider";
import ParagraphDescription from "../../components/paragraphDescription";
import TitleWithUnderline from "../../components/titleWithUnderline";
import Contact from "../Home/Contact";
import FAQs from "../Home/faqs";
import CardPhoto from "./cardPhoto";
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
{/* <Cardwhith */}
                <Divider />
                <CardPhoto img="src/assets/img/Rectangle 5.png">
                    <TitleWithUnderline title="Our services" classe="items-start" />
                    <p>Tailored solutions for real-time water management.</p>
                    <ParagraphDescription
                        img="src/assets/img/List.png"
                        sections={[
                            {
                                title: "Real-Time Monitoring",
                                paragraphs: [
                                    "Track water usage dynamically to detect leaks and patterns, ensuring optimal water management.",
                                ]
                            },
                            {
                                title: "Accurate Data",
                                paragraphs: [
                                    "Receive data you can trust with our high-precision meters that ensure billing accuracy and water usage transparency.",
                                ]
                            },
                            {
                                title: "Alerts and Notifications",
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