import { Link } from "react-router-dom";
import SocialMedia from "./socialMedia";


const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white ">
      <div className="w-10/12 m-auto flex flex-col py-14 md:py-24 2xl:py-40 md:flex-row gap-10 md:gap-20 ">
        <div className="md:w-2/5 space-y-5">
          <img src="/logo white.webp" alt="logo" className="h-48 w-auto my-[-40px] mx-auto md:mx-0" />
          <p className="text-start">
            Our mission is to champion sustainable water management solutions that safeguard water security for today’s communities and future generations.
          </p>
          <SocialMedia />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 md:w-3/5">
          <div className="flex flex-col gap-5  ">
            <h3 className="text-primary-500 font-bold">Navigation</h3>
            <Link to="/" className="text-white hover:text-primary-500">Home</Link>
            <Link to="/products" className="text-white hover:text-primary-500">Produits</Link>
            <Link to="/projects" className="text-white hover:text-primary-500">Projects</Link>
            <Link to="/water-credit" className="text-white hover:text-primary-500">Water Credit</Link>
            <Link to="/about-us" className="text-white hover:text-primary-500">About Us</Link>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-primary-500 font-bold">Featured Locations</h3>
            <span className="text-white hover:text-primary-500">Kandy</span >
            <span className="text-white hover:text-primary-500">Anuradhapura</span >
            <span className="text-white hover:text-primary-500">Badulla</span >
            <span className="text-white hover:text-primary-500">Colombo</span >
            <span className="text-white hover:text-primary-500">Kaluthara</span >
          </div>
          <div className="flex flex-col gap-5 ">
            <h3 className="text-primary-500 font-bold">Help</h3>
            <Link to="/faqs" className="text-white hover:text-primary-500">FAQ</Link>
            <Link to="/contact-us" className="text-white hover:text-primary-500">Contact Us</Link>
          </div>
        </div>
      </div>
      <p className="w-10/12 m-auto text-center py-6 border-t border-primary-700 text-primary-700"> &copy; 2024 Hydrodrip. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
