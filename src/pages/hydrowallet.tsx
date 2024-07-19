import { IoMdSpeedometer } from "react-icons/io";
import NavBar from "../components/NavBar";
import TitleWithUnderline from "../components/titleWithUnderline";
import IconTitleParagraph from "../components/iconParagraph";
import { Link } from "react-router-dom";
import Btn from "../components/Button";
import CardWithIcon from "./AboutUs.tsx/cardWithIcon";
import ParagraphDescription from "../components/paragraphDescription";
import FAQs from "./Home/faqs";
import UserTestimonials from "./Home/userTestimonial";
import Divider from "../components/divider";
import CardDescription from "./AboutUs.tsx/cardDescription";
import { FiDownload } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { BsBarChartLine } from "react-icons/bs";


export default function Hydrowallet() {
    return (
        <section>
            <div>
                <NavBar />
                <div className="bg-custom-gradient m-auto space-y-6 clip-mountain">
                    <div className="w-10/12 md:flex m-auto py-10 2xl:py-20 gap-20">
                        <div className="text-white md:w-1/2 m-auto space-y-10">
                            <h1 className="text-5xl font-bold m-auto ">Manage Your Water Smarter with  <span className="text-secondary-300"> HydroWallet</span> </h1>
                            <p className="font-semibold m-auto text-lg pb-10">Intuitive water management directly from your device.</p>
                            <Link to="/">  <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false} >Download Now</Btn></Link>
                        </div>
                        <img src="src/assets/img/2-removebg 4.png" alt="" />
                    </div>
                </div>
            </div>
            <section >
                <div className="py-28">
                    <TitleWithUnderline title="How it work" classe="items-center" />
                    <p className="md:w-1/3 m-auto text-center">HydroWallet is a digital wallet designed for water management. It assists water companies in efficiently scaling their water distribution.</p>
                    <div className="relative flex flex-col md:flex-row gap-10 w-9/12 m-auto justify-evenly pt-10">
                        <IconTitleParagraph
                            icon={() => <FiDownload className="text-5xl font-bold text-secondary-500 " />}
                            title="Install the app"
                            description='Visit the App Store (iOS) or Google Play Store (Android) on your smartphone and search for "HydroWallet." Download and install the app.'
                            bgColor="bg-secondary-100 w-32 h-32"
                            iconColor="text-white"
                        />
                        <div className="hidden md:block w-1/4 border-t-2 border-dashed border-primary-900 mt-20" />
                        <IconTitleParagraph
                            icon={() => <RxPerson  className="text-5xl font-bold text-secondary-500 " />}
                            title="Set Up Your Profile"
                            description="After creating your account, set up your profile with details like your water provider. Follow the prompts to start using HydroWallet."
                            bgColor="bg-secondary-100 w-32 h-32"
                            iconColor="text-white"
                        />
                        <div className="hidden md:block w-1/4 border-t-2 border-dashed border-primary-900  mt-20" />
                        <IconTitleParagraph
                            icon={() => <BsBarChartLine  className="text-5xl font-bold text-secondary-500 " />}
                            title="Start Managing Water"
                            description="Start managing your water usage today with HydroWallet for a more sustainable and efficient tomorrow, ensuring smarter water consumption and conservation."
                            bgColor="bg-secondary-100 w-32 h-32"
                            iconColor="text-white"
                        />
                    </div>
                </div>
                <Divider />
                <CardDescription bgColor="bg-secondary-300" img="src/assets/img/2-removebg 4.png" btnAction="Download the app" title="Pay Your Subscription and Monitor Your Consumption with One Click"
                    description="HydroWallet simplifies and enhances water usage management by offering seamless payment options, real-time monitoring, and an intuitive user interface. With just a few clicks, users can manage their water subscription payments and avoid late fees. The app provides real-time data on water usage, helping users identify areas to save water and reduce costs. Its user-friendly design ensures easy access to all features, while notifications and alerts keep users informed about payment status and any unusual consumption patterns. Advanced security measures protect personal and payment information, giving users peace of mind." />
                <Divider />
                <CardWithIcon img="src/assets/img/Image7.png">
                    <TitleWithUnderline title="Benefits" classe="items-start" />
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
                <UserTestimonials />
                <FAQs />
                <div className="py-28 space-y-10 bg-primary-100" >
                    <TitleWithUnderline title="Join millions of users today" classe="items-center" />
                    <h3 className="text-center text-primary-500 font-bold text-3xl">Ready to Take Control of Your Water Usage?</h3>
                    <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false} classe="m-auto">Dowload Now</Btn>
                </div>
            </section>
        </section>

    )
}