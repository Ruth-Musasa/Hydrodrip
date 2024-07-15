import { FaArrowRight } from "react-icons/fa";
import Btn from "../../components/Button";
import NavBar from "../../components/NavBar";
import UserTestimonials from "./userTestimonial";
import GroupIconParagraph from "./GroupIconParagraph";
import IconTitleParagraph from "../../components/iconParagraph";

export default function Home() {
  return (
    <div>
      <section>
        <div className="bg-primary-100 clip-mountain">
          <div className="relative">
            <NavBar />
            <img src="src/assets/img/splash-164963_1920-removebg-preview 4.png" className="absolute left-0" alt="" />
            <div className="w-11/12 md:w-10/12 m-auto space-y-10 py-44">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary-900 font-bold w-2/3">Redefining Water Conservation with HydroWallet</h1>
              <p className="w-full md:w-2/3">HydroWallet isn't just a tool; it’s a transformative force in water management. Our innovative platform enables water suppliers to distribute water more efficiently and sustainably, ushering in a new era of responsible water use and stewardship.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-900">Who are you</h2>
            <p>At HydroDrip, we’re not just innovators; we’re catalysts for change in water management. Driven by a commitment to sustainable practices, our groundbreaking HydroWallet system offers smart solutions that conserve water and ensure its equitable distribution, empowering both urban and rural communities.</p>
            <p className="border-l-4 border-primary-500 pl-4 font-bold">Our mission is to champion sustainable water management solutions that safeguard water security for today’s communities and future generations.</p>
            <div className="flex gap-6">
              <img className="w-[70px] h-[70px] rounded-full object-cover object-center" src="src/assets/img/photo3.png" alt="avatar" />
              <div className="px-4 py-2 items-center text-base">
                <p className="text-sm text-primary-400 font-semibold">Executive Director</p>
                <h2 className="font-semibold">Robbins Lens</h2>
              </div>
            </div>
            <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true}>Read more</Btn>
          </div>
        </div>
      </section>
      <section className="invisible md:visible bg-gray-100 relative flex flex-col md:flex-row">
        <img src="src/assets/img/Rectangle 588.png" alt="" className="w-full md:w-1/2 rotate-180" />
        <div className="m-auto p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-900">Hear From Our Satisfied Users</h2>
          <p className="mb-8 ">See HydroWallet in action. Watch our short documentary to see how we’re leading the revolution in water management, promoting sustainability and efficiency across diverse landscapes.</p>
          <div className="object-center">
            <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true} classe="m-auto">Watch video</Btn>
          </div>
        </div>
        <img src="src/assets/img/Rectangle 588.png" alt="" className="invisible md:visible  w-full md:w-1/2" />
      </section>
      <section className="py-16">
        <div className="w-11/12 md:w-10/12 m-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-900">Serving Our Customers</h2>
          <p className="w-full md:w-5/12 m-auto mb-8">Explore our project portfolio to see the tangible impacts of HydroWallet in enhancing water conservation efforts globally. From small communities to large industries, see how our solutions are making a difference.</p>
          <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true} classe="m-auto">Our projects</Btn>
        </div>
      </section>
      <div className="border-t w-8/12 m-auto"></div>
      <section className="py-20 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-900 text-center">Why choose our services</h2>
        <p className="w-full md:w-2/3 m-auto text-center mb-8">At HydroDrip, our team of experts offers a wide range of services to our clients. With us, you will benefit from top-tier water management solutions provided by local specialists.</p>
        <div className="flex flex-col md:flex-row justify-center md:space-x-4 m-auto">
          <IconTitleParagraph
            image="src/assets/img/Icon 1 (1).png"
            title="Step 1"
            description="Ceci est la description pour l'étape 1."
          />
          <IconTitleParagraph
            image="src/assets/img/Icon 1 (1).png"
            title="Step 1"
            description="Ceci est la description pour l'étape 1."
          />
          <IconTitleParagraph
            image="src/assets/img/Icon 1 (1).png"
            title="Step 1"
            description="Ceci est la description pour l'étape 1."
          />
        </div>
      </section>
      <section className="py-16 bg-primary-100">
        <div className="w-11/12 md:w-10/12 m-auto flex flex-col md:flex-row gap-8 md:gap-20">
          <img src="../src/assets/img/Images.png" className="w-full md:w-1/2" alt="" />
          <div className="m-auto space-y-10 w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-900">Who are you</h2>
            <p>At HydroDrip, we’re not just innovators; we’re catalysts for change in water management. Driven by a commitment to sustainable practices, our groundbreaking HydroWallet system offers smart solutions that conserve water and ensure its equitable distribution, empowering both urban and rural communities.</p>
            <div className="flex">
              <FaArrowRight className="inline mr-2 items-center" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="flex">
              <FaArrowRight className="inline mr-2 items-center" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
      </section>
      <UserTestimonials />
    </div>
  )
}
