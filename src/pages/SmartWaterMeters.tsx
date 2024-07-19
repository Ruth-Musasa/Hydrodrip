import { Link } from "react-router-dom";
import Btn from "../components/Button";
import NavBar from "../components/NavBar";
import IconTitleParagraph from "../components/iconParagraph";
import ParagraphDescription from "../components/paragraphDescription";
import TitleWithUnderline from "../components/titleWithUnderline";
import FAQs from "./Home/faqs";
import Contact from "./Home/Contact";
import UserTestimonials from "./Home/userTestimonial";


export default function SmartWaterMetter() {
    return (
        <section>
            <div>
                <NavBar />
                <div className="bg-custom-gradient m-auto space-y-6 clip-mountain">
                    <div className="w-11/12 lg:w-10/12 md:flex m-auto py-10 2xl:py-20 lg:gap-20">
                        <div className="text-white md:w-1/2 m-auto space-y-10">
                            <h1 className="text-4xl lg:text-5xl font-bold m-auto ">Optimize Your Water Usage with <span className="text-secondary-300"> Smart Water Meters</span> </h1>
                            <p className="font-semibold m-auto text-lg ">Empowering you with real-time monitoring and complete control over your water consumption.                    </p>
                        </div>
                        <img src="../img/2-removebg 2.png" alt="" />
                    </div>
                </div>
            </div>
            <section >
                <div className="py-16 w-11/12 lg:w-10/12 m-auto flex flex-col md:flex-row  2xl:gap-20">
                    <img src="../img/Section 1-image.png" className="w-full md:w-1/2 md:h-auto" alt="" />
                    <div className="m-auto space-y-5 2xl:space-y-10 w-full md:w-1/2">
                        <TitleWithUnderline title="What are Smart Water Meters ?" classe="items-start" />
                        <p >Our Smart Water Meters integrate advanced IoT technology to deliver precise, real-time insights into water usage. They are designed to help households, industries, and municipalities manage water more efficiently, saving costs and promoting sustainable practices.</p>
                        <div>
                            <TitleWithUnderline title="Key Features" classe="items-start" />
                            <ParagraphDescription
                                sections={[
                                    {
                                        title: "Real-Time Monitoring",
                                        img: "../img/List.png",
                                        paragraphs: [
                                            "Track water usage dynamically to detect leaks and patterns, ensuring optimal water management.",
                                        ]
                                    },
                                    {
                                        title: "Accurate Data",
                                        img: "../img/List.png",
                                        paragraphs: [
                                            "Receive data you can trust with our high-precision meters that ensure billing accuracy and water usage transparency.",
                                        ]
                                    },
                                    {
                                        title: "Alerts and Notifications",
                                        img: "../img/List.png",
                                        paragraphs: [
                                            "Stay informed with instant alerts on leaks, potential over-usage, or system malfunctions to promptly address any issues.",
                                        ]
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-primary-200 py-32">
                    <TitleWithUnderline title="How it works" classe="items-center" />
                    <div className="relative flex flex-col md:flex-row gap-10 w-11/12  m-auto justify-evenly">
                        <IconTitleParagraph
                            icon={() => <span className="text-2xl font-bold text-white">1</span>}
                            title="Installation"
                            description="Our Smart Water Meters are installed by professional technicians to ensure optimal performance and accuracy."
                            bgColor="bg-primary-900"
                            iconColor="text-white"
                        />
                        <div className="hidden md:block  w-1/3  h-1 border-t-2 border-dashed border-primary-900 mt-14" />
                        <IconTitleParagraph
                            icon={() => <span className="text-2xl font-bold text-white">2</span>}
                            title="Connection"
                            description="Once installed, the meter connects to your home’s Wi-Fi network and begins transmitting data to your Hydrodrip app."
                            bgColor="bg-primary-900"
                            iconColor="text-white"
                        />
                        <div className="hidden md:block  w-1/3  h-1 border-t-2 border-dashed border-primary-900 mt-14" />
                        <IconTitleParagraph
                            icon={() => <span className="text-2xl font-bold text-white">3</span>}
                            title="Monitoring"
                            description="Use the app to monitor your water usage in real-time, set usage goals, and receive alerts for any irregularities."
                            bgColor="bg-primary-900"
                            iconColor="text-white"
                        />
                    </div>
                </div>
                <div className="bg-primary-300 py-20">
                    <div className="grid lg:grid-cols-2 w-10/12 m-auto gap-20">
                        <img src="../img/Image9s.png" alt="" className="" />
                        <div className="m-auto w-3/4">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Trust our quality technicians buy now a Smart Water Meters            </h2>
                            <Link to="/contact-us" ><Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false} classe="m-auto">Contact us</Btn></Link>
                        </div>
                    </div>
                </div>
                <UserTestimonials />
                <Contact bgColor="bg-primary-100" />
                <FAQs />
            </section>
        </section>

    )
}