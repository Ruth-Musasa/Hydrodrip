import { Link } from "react-router-dom";
import SocialMedia from "./socialMedia";


const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white py-20 md:py-40">
      <div className="w-10/12 m-auto flex flex-col md:flex-row gap-10 md:gap-20 ">
        <div className="md:w-2/5 space-y-5">
          <img src="/logo.png" alt="logo" />
          <p>
            Our mission is to champion sustainable water management solutions that safeguard water security for today’s communities and future generations.
          </p>
          <SocialMedia />
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 md:w-3/5">
          <div className="flex flex-col gap-5 md:w-1/3 ">
            <h3 className="text-primary-500 font-bold">Navigation</h3>
            <Link to="/" className="text-white hover:text-primary-500">Home</Link>
            <Link to="/products" className="text-white hover:text-primary-500">Produits</Link>
            <Link to="/projects" className="text-white hover:text-primary-500">Projects</Link>
            <Link to="/water-credit" className="text-white hover:text-primary-500">Water Credit</Link>
            <Link to="/about-us" className="text-white hover:text-primary-500">About Us</Link>
          </div>
          <div className="flex flex-col gap-5 md:w-1/3 ">
            <h3 className="text-primary-500 font-bold">Featured Locations</h3>
            <span className="text-white hover:text-primary-500">Kandy</span >
            <span className="text-white hover:text-primary-500">Anuradhapura</span >
            <span className="text-white hover:text-primary-500">Badulla</span >
            <span className="text-white hover:text-primary-500">Colombo</span >
            <span className="text-white hover:text-primary-500">Kaluthara</span >
          </div>
          <div className="flex flex-col gap-5 md:w-1/3 ">
            <h3 className="text-primary-500 font-bold">Help</h3>
            <Link to="/faqs" className="text-white hover:text-primary-500">FAQ</Link>
            <Link to="/contact-us" className="text-white hover:text-primary-500">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
