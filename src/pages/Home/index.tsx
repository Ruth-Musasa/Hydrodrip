import Btn from "../../components/Button";
import NavBar from "../../components/NavBar";
import UserTestimonials from "./userTestimonial";
import IconTitleParagraph from "../../components/iconParagraph";
import TitleWithUnderline from "../../components/titleWithUnderline";
import DynamicNumber from "../AboutUs.tsx/dynamicNumber";
import Contact from "./Contact";
import Divider from "../../components/divider";
import FAQs from "./faqs";
import ParagraphDescription from "../../components/paragraphDescription";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div>
      <div className="sticky top-0 w-full z-50 bg-primary-100">
        <NavBar />
      </div>
      <div>
        <div className="bg-primary-100 clip-mountain overflow-hidden">
          <div className="relative ">
            <img src="../img/splash-164963_1920-removebg-preview 4.png" className="absolute left-0 md:w-2/12 opacity-30 lg:opacity-100" alt="" />
            <div className="w-10/12 m-auto space-y-10 py-20 2xl:py-48  relative z-10 ">
              <h1 className="text-5xl 2xl:text-6xl text-primary-900 font-semibold lg:font-black lg:w-8/12 2xl:w-8/12 lg:leading-normal ">Redefining Water Conservation with HydroWallet</h1>
              <p className="w-full lg:w-6/12 pb-10">HydroWallet isn't just a tool; it’s a transformative force in water management. <span className="hidden md:inline ">Our innovative platform enables water suppliers to distribute water more efficiently and sustainably, ushering in a new era of responsible water use and stewardship.</span> </p>
              <Link to="/about-us"><Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true}>Read more</Btn></Link>
            </div>
            <img src="../img/splash-164963_1920 2.png" className="absolute right-0 top-0 opacity-30 lg:opacity-100 md:w-1/2" alt="" />
          </div>
        </div>
      </div>
      <section>
        <div className="w-10/12 m-auto flex flex-col md:flex-row lg:gap-20 py-14 lg:py-20">
          <div className="relative w-full m-auto lg:m-0 lg:w-1/2">
            <div className="mb-0 bg-primary-900 rounded-full w-60 h-60 lg:w-96 lg:h-96 m-auto lg:m-0">
              <img src="../img/Triangle.png" alt="" className="absolute -bottom-2 left-0 w-1/4 lg:-bottom-0 2xl:w-1/6" />
              <img src="../img/openart-image_H1J3jG7x_1718278217971_raw-removebg-preview 1.png" className="absolute -right-6 -bottom-10 lg:-right-20 lg:bottom-0 2xl:-right-0 2xl:-bottom-28" alt="" />
            </div>
          </div>
          <div className="m-auto pt-10 space-y-10 w-full md:pt-0 lg:w-1/2">
            <TitleWithUnderline title="Who are we?" classe="items-center md:items-start" />
            <p className="text-justify md:text-start">At HydroDrip, we’re not just innovators; we’re catalysts for change in water management. Driven by a commitment to sustainable practices, our groundbreaking HydroWallet system offers smart solutions that conserve water and ensure its equitable distribution, empowering both urban and rural communities.</p>
            <p className="border-l-4 border-primary-500 pl-4 font-bold text-justify  md:text-start">Our mission is to champion sustainable water management solutions that safeguard water security for today’s communities and future generations.</p>
            <div className="flex gap-6 pb-10">
              <img className="w-[70px] h-[70px] rounded-full object-cover object-center" src="../img/photo3.png" alt="avatar" />
              <div className="px-4 py-2 items-center text-base">
                <p className="text-sm text-primary-400 font-semibold">Executive Director</p>
                <h4 className="font-semibold">Robbins Lens</h4>
              </div>
            </div>
            <Link to="/about-us"> <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true}>Read more</Btn></Link>
          </div>
        </div>
        <div className="bg-gray-100 relative flex flex-col md:flex-row">
          <img src="../img/Rectangle 588.png" alt="" className="w-0 md:w-4/12 2xl:w-1/2 rotate-180 invisible md:visible " />
          <div className="w-10/12 md:w-full m-auto py-14 text-center">
            <TitleWithUnderline title="Hear From Our Satisfied Users" classe="items-center" />
            <p className="mb-8 ">See HydroWallet in action. Watch our short documentary to see how we’re leading the revolution in water management, promoting sustainability and efficiency across diverse landscapes.</p>
            <div className="object-center">
              <Link to="/about-us">  <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true} classe="m-auto">Watch video</Btn></Link>
            </div>
          </div>
          <img src="../img/Rectangle 588.png" alt="" className="w-0 invisible md:visible md:w-4/12 2xl:w-1/2 " />
        </div>
        <div className="py-14 bg-zinc-200 md:bg-white lg:py-32">
          <div className="w-10/12 m-auto text-center">
            <TitleWithUnderline title="Serving Our Customers" classe="items-center" />
            <p className="w-full md:w-6/12 m-auto mb-8">Explore our project portfolio to see the tangible impacts of HydroWallet in enhancing water conservation efforts globally. From small communities to large industries, see how our solutions are making a difference.</p>
            <Link to="/projects">   <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true} classe="m-auto">Our projects</Btn></Link>
          </div>
        </div>
        <Divider classe='hidden md:block' />
        <div className="py-14  lg:py-20 w-10/12 m-auto">
          <TitleWithUnderline title="Why choose our services" classe="text-center items-center" />
          <p className="w-10/12 md:w-6/12 m-auto text-center mb-8">At HydroDrip, our team of experts offers a wide range of services to our clients. With us, you will benefit from top-tier water management solutions provided by local specialists.</p>
          <div className="grid md:grid-cols-3 lg:gap-40 justify-center lg:space-x-4 m-auto pb-10">
            <IconTitleParagraph
              image="../img/Icon 1.png"
              title="Smart Water Meters"
              description="Accurate and precise monitoring of water usage in real-time"
            />
            <IconTitleParagraph
              image="../img/Icon 1 (1).png"
              title="HydroWallet"
              description="Incentivizing water conservation with water credits"
            />
            <IconTitleParagraph
              image="../img/Icon 1 (2).png"
              title="Community Impact"
              description="Empowering communities through sustainable"
            />
          </div>
          <Link to="/products"> <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true} classe="m-auto">Learn more</Btn></Link>
        </div>
        <div className="py-14 bg-primary-100">
          <div className="w-10/12 m-auto flex flex-col lg:flex-row gap-8 lg:gap-20">
            <img src="../img/Images.png" className="w-full lg:w-1/2" alt="" />
            <div className="m-auto space-y-10 w-full lg:w-1/2">
              <TitleWithUnderline title="Water credit" classe="items-start" />
              <p>At HydroDrip, we are pioneers in the field of water management, dedicated to delivering innovative solutions that ensure efficient water use and conservation. Our mission is to empower communities and industries with advanced technologies that promote sustainable water practices and secure water resources for future generations</p>
              <ParagraphDescription
                sections={[
                  {
                    title: "Section 1",
                    icon: true,
                    paragraphs: ["Premier paragraphe de la section 1.",]
                  },
                  {
                    title: "Section 2",
                    icon: true,
                    paragraphs: ["Premier paragraphe de la section 2."]
                  },
                ]}
              />
              <div>
                <Link to="/water-credit" > <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true}>Read more</Btn></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary-300 py-14">
          <div className="grid gap-4 md:grid-cols-2 w-10/12 m-auto lg:gap-20">
            <div className="m-auto md:w-3/4">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white text-center lg:leading-normal ">Trust our quality technicians buy now a Smart Water Meters</h2>
              <Link to="/contact-us" > <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false} classe="m-auto">Contact us</Btn></Link>
            </div>
            <img src="../img/Group 33578.png" alt="" />
          </div>
        </div>
        <div className="w-10/12 m-auto py-14 space-y-10 " >
          <TitleWithUnderline title="Join millions of users today" classe="text-center items-center" />
          <h3 className="text-center text-primary-500 font-bold text-3xl">Ready to Take Control of Your Water Usage?</h3>
          <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false} classe="m-auto">Dowload Now</Btn>
        </div>
        <DynamicNumber />
        <UserTestimonials />
        <Contact bgColor="bg-gray-100" />
        <FAQs />
      </section>
    </div>
  );
}
