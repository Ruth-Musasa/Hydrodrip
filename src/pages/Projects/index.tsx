import NavBar from "../../components/NavBar";
import Divider from "../../components/divider";
import TitleWithUnderline from "../../components/titleWithUnderline";
import Contact from "../Home/Contact";
import UserTestimonials from "../Home/userTestimonial";
import Carousel from "./galleryImage";
import ProjectsCard from "./projectsCard";

export default function Projects() {
    return (
        <div>
            <NavBar />
            <div className="text-white text-center  bg-custom-gradient py-40 2xl:py-60 m-auto space-y-6 clip-mountain">
                <h1 className="text-5xl font-bold m-auto ">Our Impactful Projects</h1>
                <p className="font-semibold m-auto text-lg ">Driving sustainable water management through innovative projects</p>
            </div>
            <section className="bg-white py-16">
                <ProjectsCard
                    title="University of Johannesburg Pilot"
                    btnAction="Explore more"
                    imageUrl="../img/Rectangle 584.png"
                    sections={[
                        {
                            title: "Overview",
                            paragraphs: [
                                "Implementing HydroWallet to foster sustainable water usage among students.",
                            ]
                        },
                        {
                            title: "Goals",
                            paragraphs: [
                                "Reduce overall water consumption and foster a culture of sustainability.",
                            ]
                        },
                        {
                            title: "Outcomes",
                            paragraphs: [
                                "Significant reduction in water usage, increased awareness among the student",
                            ]
                        }
                    ]}
                />
                <Divider />
                <ProjectsCard
                    title="Community Water Conservation Initiatives"
                    btnAction="Explore more"
                    imageUrl="../img/Rectangle 500.png"
                    sections={[
                        {
                            title: "Overview",
                            paragraphs: [
                                "Tailored projects across diverse communities utilizing HydroWallet to enhance water efficiency.",
                            ]
                        },
                        {
                            title: "Goals",
                            paragraphs: [
                                "Equip communities with tools to manage water wisely and sustainably.",
                            ]
                        },
                        {
                            title: "Outcomes",
                            paragraphs: [
                                "Marked improvements in water conservation, community engagement in sustainable practices.",
                            ]
                        }
                    ]}
                />
            </section>
            <div className="bg-zinc-100 py-32 space-y-16">
                <TitleWithUnderline title="Galery" classe="text-center items-center" />
                <Carousel />
            </div>
            <UserTestimonials />
            <Contact bgColor="bg-primary-100" />
        </div>
    )
}