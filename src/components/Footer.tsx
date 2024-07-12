import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">HydroWallet</h2>
            <p className="text-sm">Redefining Water Conservation</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p>Email: info@hydrowallet.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="list-none">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400"><FaTwitter size={24} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-sm">
          &copy; {new Date().getFullYear()} HydroWallet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
