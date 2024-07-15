import NavBar from "../../components/NavBar";
import Card from "../../components/card";

export default function Projects() {
    return (
        <div>
            <NavBar />
            <div className="text-white text-center  bg-custom-gradient py-60 m-auto space-y-6 clip-mountain">
                <h1 className="text-5xl font-bold m-auto ">Our Impactful Projects</h1>
                <p className="font-semibold m-auto text-lg ">Driving sustainable water management through innovative projects</p>
            </div>
            <section className="bg-white py-16">
                <div className="w-11/12 md:w-10/12 m-auto">
                    <Card
                        title="Titre1"
                        btnAction="Read more"
                        icon={true}
                        imageUrl="../src/assets/img/Rectangle 584.png"
                        sections={[
                            {
                                title: "Section 1",
                                paragraphs: [
                                    "Premier paragraphe de la section 1.",
                                    "Deuxième paragraphe de la section 1.",
                                ]
                            },
                            {
                                title: "Section 2",
                                paragraphs: [
                                    "Premier paragraphe de la section 2.",
                                    "Deuxième paragraphe de la section 2.",
                                ]
                            }
                        ]}
                    />
                </div>
            </section>
            <section className="bg-white py-16">
                <div className="w-11/12 md:w-10/12 m-auto">
                    <Card
                        title="Titre1"
                        btnAction="Read more"
                        icon={true}
                        imageUrl="../src/assets/img/Rectangle 584.png"
                        sections={[
                            {
                                title: "Section 1",
                                paragraphs: [
                                    "Premier paragraphe de la section 1.",
                                    "Deuxième paragraphe de la section 1.",
                                ]
                            },
                            {
                                title: "Section 2",
                                paragraphs: [
                                    "Premier paragraphe de la section 2.",
                                    "Deuxième paragraphe de la section 2.",
                                ]
                            }
                        ]}
                    />
                </div>
            </section>
        </div>
    )
}