import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";
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
            <div className="sticky w-full bg-white top-0 z-10">
                <NavBar />
            </div>
            <div>
                <div className="text-white text-center  bg-custom-gradient py-40 2xl:py-60 m-auto space-y-6 clip-mountain">
                    <h1 className="w-11/12 m-auto text-5xl font-bold m-auto ">Contact Us</h1>
                    <p className="font-semibold md:w-1/3 m-auto text-lg ">Advanced solutions for efficient water management</p>
                </div>
            </div>
            <div className="pt-10 lg:py-20 lg:mb-10">
                <TitleWithUnderline title="Write a message to Hydrodrip" classe="w-10/12 items-center" />
                <Form />
                <Divider classe="hidden lg:block" />
            </div>
            <CardPhoto img="../img/Rectangle 589.png">
                <TitleWithUnderline title="Our contact details" classe="items-center lg:items-start" />
                <div className="md:w-2/3 space-y-6 ">
                    <div >
                        <h3 className="text-2xl font-bold mb-2 text-primary-900">Address</h3>
                        <div className='flex gap-2'>
                            <MdPlace className="text-primary-400" size={30} />
                            <a href="#map" className='text-primary-900 font-semibold '> 1010 Avenue Jouhanesbourg, RSA.</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-primary-900">Email</h3>
                        <div className='flex gap-2'>
                            <FaMailBulk className="text-primary-400" size={20} />
                            <a href="mailto:connect@hydrodrip.com " className="text-primary-900 font-semibold items-center">connect@hydrodrip.com</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-primary-900">Number</h3>
                        <div className='flex gap-2'>
                            <FaPhoneAlt className='text-primary-400' size={20} />
                            <a href="tel:+1234567890" className="text-primary-900 font-semibold items-center">+1234567890</a>
                        </div>
                    </div>
                </div>
            </CardPhoto>
            <div id="map">
                <MapSection />
            </div>
        </section>
    )
}