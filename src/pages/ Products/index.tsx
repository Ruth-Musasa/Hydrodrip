import NavBar from "../../components/NavBar";
import Divider from "../../components/divider";
import Contact from "../Home/Contact";
import Card from "./card";

export default function Product() {
    return (
        <div>
            <NavBar />
            <div className="text-white text-center  bg-custom-gradient py-60 m-auto space-y-6 clip-mountain">
                <h1 className="text-5xl font-bold m-auto ">Our Innovative Products</h1>
                <p className="font-semibold md:w-1/3 m-auto text-lg ">Discover cutting-edge solutions designed to revolutionize water management and conservation.</p>
            </div>
            <section className="bg-white ">
                <Card
                    title="Smart Water Meters"
                    btnAction="Read more"
                    imageUrl="src/assets/img/Image.png"
                    descriptionTitle="Description"
                    description="Utilize state-of-the-art technology to monitor and manage water usage with precision. Our smart water meters are designed for reliability and seamless integration with existing systems."
                    sections={[
                        {
                            title: "Section 1",
                            icon:true,
                            paragraphs: [
                                "Premier paragraphe de la section 1.",
                            ]
                        },
                        {
                            title: "Section 2",
                            icon:true,
                            paragraphs: [
                                "Premier paragraphe de la section 2.",
                            ]
                        },
                        {
                            title: "Section 2",
                            icon:true,
                            paragraphs: [
                                "Premier paragraphe de la section 2.",
                            ]
                        }
                    ]}
                />
                <Divider />
                <Card
                    title="Smart Water Meters"
                    btnAction="Read more"
                    imageUrl="src/assets/img/Image (1).png"
                    descriptionTitle="Description"
                    description="Utilize state-of-the-art technology to monitor and manage water usage with precision. Our smart water meters are designed for reliability and seamless integration with existing systems."
                    sections={[
                        {
                            title: "Section 1",
                            icon:true,
                            paragraphs: [
                                "Premier paragraphe de la section 1.",
                            ]
                        },
                        {
                            title: "Section 2",
                            icon:true,
                            paragraphs: [
                                "Premier paragraphe de la section 2.",
                            ]
                        },
                        {
                            title: "Section 2",
                            icon:true,
                            paragraphs: [
                                "Premier paragraphe de la section 2.",
                            ]
                        }
                    ]}
                />
                <Divider />
                <Card
                    title="Smart Water Meters"
                    btnAction="Read more"
                    imageUrl="src/assets/img/Image (2).png"
                    descriptionTitle="Description"
                    description="Utilize state-of-the-art technology to monitor and manage water usage with precision. Our smart water meters are designed for reliability and seamless integration with existing systems."
                    sections={[
                        {
                            title: "Section 1",
                            icon:true,
                            paragraphs: [
                                "Premier paragraphe de la section 1.",
                            ]
                        },
                        {
                            title: "Section 2",
                            icon:true,
                            paragraphs: [
                                "Premier paragraphe de la section 2.",
                            ]
                        },
                    ]}
                />
            </section>
            <Contact bgColor="bg-primary-100" />
        </div>
    )
}