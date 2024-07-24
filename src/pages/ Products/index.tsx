import NavBar from "../../components/NavBar";
import Divider from "../../components/divider";
import Contact from "../Home/Contact";
import Card from "./card";

export default function Product() {
    return (
        <div>
            <div className="sticky w-full bg-white top-0 z-10">
                <NavBar />
            </div>
            <div className="text-white text-center  bg-custom-gradient py-40 2xl:py-60 m-auto space-y-6 clip-mountain">
                <h1 className="text-5xl font-bold m-auto ">Our Innovative Products</h1>
                <p className="w-10/12 font-semibold md:w-1/3 m-auto text-lg ">Discover cutting-edge solutions designed to revolutionize water management and conservation.</p>
            </div>
            <section className="bg-white ">
                <Card
                    title="Smart Water Meters"
                    btnAction="Learn more"
                    to="/smart-water-metter"
                    imageUrl="../img/2-removebg 2.png"
                    bgColor="bg-primary-800"
                    descriptionTitle="Description"
                    description="Utilize state-of-the-art technology to monitor and manage water usage with precision. Our smart water meters are designed for reliability and seamless integration with existing systems."
                    sections={[
                        {
                            title: "Real-time data",
                            icon: true,
                            paragraphs: [
                                "Immediate insights into water consumption patterns.",
                            ]
                        },
                        {
                            title: "High accuracy",
                            icon: true,
                            paragraphs: [
                                "Ensure precise measurements for billing and monitoring.",
                            ]
                        },
                        {
                            title: "Easy integration",
                            icon: true,
                            paragraphs: [
                                "Compatible with existing water supply systems.",
                            ]
                        }
                    ]}
                />
                <Divider classe='py-0' />
                <Card
                    title="Hydrowallet"
                    btnAction="Learn more"
                    to="/hydrowallet"
                    imageUrl="../img/2-removebg 4.png"
                    bgColor="bg-secondary-300"
                    descriptionTitle="Description"
                    description="Our innovative HydroWallet platform automates water credit transactions, empowering users to manage their water consumption more effectively."
                    sections={[
                        {
                            title: "Mobile tracking",
                            icon: true,
                            paragraphs: [
                                "Monitor your water usage on-the-go.",
                            ]
                        },
                        {
                            title: "Water credits",
                            icon: true,
                            paragraphs: [
                                "Earn credits for reduced consumption.",
                            ]
                        },
                        {
                            title: "Blockchain verification",
                            icon: true,
                            paragraphs: [
                                "Secure and transparent transactions.",
                            ]
                        }
                    ]}
                />
                <Divider classe="py-0" />
                <Card
                    title="Water Credit Model"
                    btnAction="Learn more"
                    to="/water-credit"
                    imageUrl="../img/Image (2).png"
                    bgColor="bg-zinc-100"
                    descriptionTitle="Description"
                    description="Our Water Credit Model introduces a transformative approach to water management, allowing users and businesses to trade water credits for conserving water"
                    sections={[
                        {
                            title: "Trading platform",
                            icon: true,
                            paragraphs: [
                                "A robust marketplace for buying and selling water credits.",
                            ]
                        },
                        {
                            title: "Community benefits",
                            icon: true,
                            paragraphs: [
                                "Supports local water conservation initiatives.",
                            ]
                        },
                    ]}
                />
            </section>
            <Contact titleDescription="Get in Touch" description="We're eager to hear from you. Whether you have a question or need assistance, our team is ready to help." bgColor="bg-primary-100" />
        </div>
    )
}