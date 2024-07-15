import NavBar from "../../components/NavBar";

export default function AboutUs() {
    return (
        <div>
            <NavBar />
            <div className="text-white text-center  bg-custom-gradient py-60 m-auto space-y-6 clip-mountain">
                <h1 className="text-5xl font-bold m-auto ">Our Impactful Projects</h1>
                <p className="font-semibold m-auto text-lg ">Driving sustainable water management through innovative projects</p>
            </div>
        </div>
    )
}