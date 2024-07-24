import { FaMailBulk, FaPhone } from "react-icons/fa";
import NavBar from "../../components/NavBar";
import TitleWithUnderline from "../../components/titleWithUnderline";
import CardPhoto from "../AboutUs.tsx/cardPhoto";
import Form from "./form";
import Divider from "../../components/divider";
import MapSection from "./map";
import { MdPlace } from "react-icons/md";

export default function ContactUs() {
    return (
        <section>
            <div>
                <div className="sticky w-full bg-white top-0 z-10">
                    <NavBar />
                </div>
                <div className="text-white text-center  bg-custom-gradient py-40 2xl:py-60 m-auto space-y-6 clip-mountain">
                    <h1 className="text-5xl font-bold m-auto ">Contact Us</h1>
                    <p className="font-semibold md:w-1/3 m-auto text-lg ">Advanced solutions for efficient water management</p>
                </div>
            </div>
            <div className="pt-10 md:py-20 md:mb-10">
                <TitleWithUnderline title="Write a message to Hydrodrip" classe="items-center" />
                <Form />
                <Divider />
            </div>
            <CardPhoto img="../img/Rectangle 589.png">
                <TitleWithUnderline title="Our contact details" classe="items-start" />
                <div className="md:w-2/3 space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-primary-900">Address</h3>
                        <div className='flex gap-2'>
                            <MdPlace className="text-primary-400" size={30} />
                            <span className='text-primary-900 font-bold '>1010 Avenue Jouhanesbourg, RSA.</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-primary-900">Email</h3>
                        <div className='flex gap-2'>
                            <FaMailBulk className="text-primary-400" size={20} />
                            <span className='text-primary-900 font-bold '>connect@hydrodrip.com</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-primary-900">Number</h3>
                        <div className='flex gap-2'>
                            <FaPhone className='text-primary-400' size={20} />
                            <span className='text-primary-900 font-bold '>+1234567890</span>
                        </div>
                    </div>
                </div>
            </CardPhoto>
            <div>
                <MapSection />
            </div>
        </section>
    )
}