import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="bg-primary-900 text-white py-40 ">
            <div className="w-10/12 m-auto flex gap-20 ">
                <div className="w-2/5  space-y-5">
                    <img src="/logo.png" alt="logo" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores eos expedita ducimus, nisi error tempora voluptatum ut omnis quisquam veritatis, soluta iste ipsam magni nihil, in accusantium incidunt maiores provident!</p>
                    <div className="flex gap-4 ">
                        <FaFacebook className="text-white bg-blue-500 rounded-full p-2" size={30} />
                        <FaTwitter className="text-white bg-blue-500 rounded-full p-2" size={30} />
                        <FaYoutube className="text-white bg-blue-500 rounded-full p-2" size={30} />
                        <FaLinkedin className="text-white bg-blue-500 rounded-full p-2" size={30} />
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-1/5">
                    <h3 className="text-primary-500">Navigation </h3>
                    <Link to="/" className="text-white hover:text-primary-500">Home</Link>
                    <Link to="/products" className="text-white hover:text-primary-500">Produits</Link>
                    <Link to="/projects" className="text-white hover:text-primary-500">Projets</Link>
                    <Link to="/water-credit" className="text-white hover:text-primary-500">Water Credit</Link>
                    <Link to="/about-us" className="text-white hover:text-primary-500">About Us</Link>
                </div>
                <div className="flex flex-col gap-5 w-1/5">
                    <h3 className="text-primary-500">Navigation </h3>
                    <Link to="/" className="text-white hover:text-primary-500">Home</Link>
                    <Link to="/products" className="text-white hover:text-primary-500">Produits</Link>
                    <Link to="/projects" className="text-white hover:text-primary-500">Projets</Link>
                    <Link to="/water-credit" className="text-white hover:text-primary-500">Water Credit</Link>
                    <Link to="/about-us" className="text-white hover:text-primary-500">About Us</Link>
                </div>
                <div className="flex flex-col gap-5 w-1/5">
                    <h3 className="text-primary-500">Help</h3>
                    <Link to="/faq" className="text-white hover:text-primary-500">FAQ</Link>
                    <Link to="/contact-us" className="text-white hover:text-primary-500">Contact Us</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
