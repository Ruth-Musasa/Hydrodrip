import { FaArrowRight } from "react-icons/fa";
import Btn from "../../components/Button";
import NavBar from "../../components/NavBar";
import UserTestimonials from "./userTestimonial";
import IconTitleParagraph from "../../components/iconParagraph";
import TitleWithUnderline from "../../components/titleWithUnderline";
import DynamicNumber from "../AboutUs.tsx/dynamicNumber";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <section>
        <div className="bg-primary-100 clip-mountain">
          <div className="relative">
            <NavBar />
            <img src="src/assets/img/splash-164963_1920-removebg-preview 4.png" className="absolute left-0" alt="" />
            <div className="w-11/12 md:w-10/12 m-auto space-y-10 pb-20 pt-4 lg:pb-48 lg:pt-36">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary-900 font-bold lg:w-6/12 lg:leading-normal ">Redefining Water Conservation with HydroWallet</h1>
              <p className="w-full md:w-6/12">HydroWallet isn't just a tool; it’s a transformative force in water management. Our innovative platform enables water suppliers to distribute water more efficiently and sustainably, ushering in a new era of responsible water use and stewardship.</p>
              <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true}>Read more</Btn>
            </div>
            <img src="../src/assets/img/splash-164963_1920 2.png" className="absolute right-0 top-0" alt="" />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="w-11/12 md:w-10/12 m-auto flex flex-col md:flex-row gap-8 md:gap-20">
          <img src="../src/assets/img/Section 1-image.png" className="w-full md:w-1/2" alt="" />
          <div className="m-auto space-y-10 w-full md:w-1/2">
            <TitleWithUnderline title="Who are you" classe="items-start" />
            <p>At HydroDrip, we’re not just innovators; we’re catalysts for change in water management. Driven by a commitment to sustainable practices, our groundbreaking HydroWallet system offers smart solutions that conserve water and ensure its equitable distribution, empowering both urban and rural communities.</p>
            <p className="border-l-4 border-primary-500 pl-4 font-bold">Our mission is to champion sustainable water management solutions that safeguard water security for today’s communities and future generations.</p>
            <div className="flex gap-6">
              <img className="w-[70px] h-[70px] rounded-full object-cover object-center" src="src/assets/img/photo3.png" alt="avatar" />
              <div className="px-4 py-2 items-center text-base">
                <p className="text-sm text-primary-400 font-semibold">Executive Director</p>
                <h4 className="font-semibold">Robbins Lens</h4>
              </div>
            </div>
            <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true}>Read more</Btn>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 relative flex flex-col md:flex-row">
        <img src="src/assets/img/Rectangle 588.png" alt="" className="w-0 md:w-5/12 rotate-180 invisible md:visible " />
        <div className="m-auto p-8 text-center">
          <TitleWithUnderline title="Hear From Our Satisfied Users" classe="items-center" />
          <p className="mb-8 ">See HydroWallet in action. Watch our short documentary to see how we’re leading the revolution in water management, promoting sustainability and efficiency across diverse landscapes.</p>
          <div className="object-center">
            <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true} classe="m-auto">Watch video</Btn>
          </div>
        </div>
        <img src="src/assets/img/Rectangle 588.png" alt="" className="w-0 invisible md:visible md:w-5/12 " />
      </section>
      <section className="py-16">
        <div className="w-11/12 md:w-10/12 m-auto text-center">
          <TitleWithUnderline title="Serving Our Customers" classe="items-center" />
          <p className="w-full md:w-5/12 m-auto mb-8">Explore our project portfolio to see the tangible impacts of HydroWallet in enhancing water conservation efforts globally. From small communities to large industries, see how our solutions are making a difference.</p>
          <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true} classe="m-auto">Our projects</Btn>
        </div>
      </section>
      <div className="border-t w-8/12 m-auto"></div>
      <section className="py-20 md:w-10/12 m-auto">
        <TitleWithUnderline title="Why choose our services" classe="items-center" />
        <p className="w-full md:w-2/3 m-auto text-center mb-8">At HydroDrip, our team of experts offers a wide range of services to our clients. With us, you will benefit from top-tier water management solutions provided by local specialists.</p>
        <div className="grid md:grid-cols-3 md:gap-40 md:flex-row justify-center md:space-x-4 m-auto">
          <IconTitleParagraph
            image="src/assets/img/Icon 1.png"
            title="Smart Water Meters"
            description="Accurate and precise monitoring of water usage in real-time"
          />
          <IconTitleParagraph
            image="src/assets/img/Icon 1 (1).png"
            title="HydroWallet"
            description="Incentivizing water conservation with water credits"
          />
          <IconTitleParagraph
            image="src/assets/img/Icon 1 (2).png"
            title="Community Impact"
            description="Empowering communities through sustainable"
          />
        </div>
      </section>
      <section className="py-16 bg-primary-100">
        <div className="w-11/12 md:w-10/12 m-auto flex flex-col md:flex-row gap-8 md:gap-20">
          <img src="../src/assets/img/Images.png" className="w-full md:w-1/2" alt="" />
          <div className="m-auto space-y-10 w-full md:w-1/2">
            <TitleWithUnderline title="Water credit" classe="items-start" />
            <p>At HydroDrip, we are pioneers in the field of water management, dedicated to delivering innovative solutions that ensure efficient water use and conservation. Our mission is to empower communities and industries with advanced technologies that promote sustainable water practices and secure water resources for future generations</p>
            <div className="flex">
              <FaArrowRight className="inline mr-2 items-center" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="flex">
              <FaArrowRight className="inline mr-2 items-center" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true}>Read more</Btn>
          </div>
        </div>
      </section>
      <section className="bg-primary-300 py-20">
        <div className="grid lg:grid-cols-2 w-10/12 m-auto gap-20">
          <div className="m-auto w-3/4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Trust our quality technicians buy now a Smart Water Meters            </h2>
            <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false} classe="m-auto">Contact us</Btn>
          </div>
          <img src="src/assets/img/Group 33578.png" alt="" />
        </div>
      </section>
      <section className="py-28 space-y-10 " >
        <TitleWithUnderline title="Join millions of users today" classe="items-center" />
        <h3 className="text-center text-primary-500 font-bold text-3xl">Ready to Take Control of Your Water Usage?</h3>
        <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false} classe="m-auto">Contact us</Btn>
      </section>
      <section className="bg-primary-800 py-28 space-y-10 md:space-y-20">
        <h2 className="text-3xl md:text-4xl font-bold  text-white text-center">Hydrodrip in numbers</h2>
        <DynamicNumber />
      </section>
      <UserTestimonials />
      <Contact />
      <section className=" bg-cover bg-center py-20 bg-[url('src/assets/img/Rectangle 580.png')] " style={{ backgroundImage: `url(https:/encpted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZutnGq2nOq2bCccLG1PqB8HZ8Sk2rlZicSpAcZoc6iNaxsIA2)` }}>
        <div className="flex flex-col items-center text-center">
          <TitleWithUnderline title="Join millions of users today" classe="items-center md:w-2/12 m-auto text-center" />
          <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true} classe="m-auto">Consult FAQs</Btn>
        </div>
      </section>
    </div>
  )
}
