import NavBar from "../components/NavBar";
import Contact from "./Home/Contact";

export default function FAQs() {
    return (
        <section>
            <div>
                <NavBar />
                <div className="text-white text-center  bg-custom-gradient py-60 m-auto space-y-6 clip-mountain">
                    <h1 className="text-5xl font-bold m-auto ">Contact Us</h1>
                    <p className="font-semibold md:w-1/3 m-auto text-lg ">Advanced solutions for efficient water management</p>
                </div>
            </div>
            <Contact bgColor="bg-primary-100"/>
        </section>
    )

}