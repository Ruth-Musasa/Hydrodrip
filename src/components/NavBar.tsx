import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Btn from './Button';


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="relative z-10">
            <header className="flex justify-between items-center w-10/12 m-auto">
                <img src="/logo.png" alt="logo" />
                <div className="flex lg:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </button>
                </div>
                <div className={`hidden lg:flex gap-10 items-center`}>
                    <nav className="flex gap-8 items-center font-bold text-primary-900">
                        <Link to="/" className=" hover:text-primary-500">Home</Link>
                        <Link to="/products" className=" hover:text-primary-500">Products</Link>
                        <Link to="/projects" className=" hover:text-primary-500">Projects</Link>
                        <Link to="/water-credit" className=" hover:text-primary-500">Water Credit</Link>
                        <Link to="/about-us" className=" hover:text-primary-500">About Us</Link>
                    </nav>
                    <Link to="/contact-us">
                        <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false}>Contact Us</Btn>
                    </Link>
                </div>
            </header>
            {isOpen && (
                <div className="lg:hidden w-full bg-white text-white p-4">
                    <nav className="flex flex-col items-center gap-4 font-bold text-primary-900">
                        <Link to="/" className="hover:text-primary-500" onClick={toggleMenu}>Home</Link>
                        <Link to="/products" className="hover:text-primary-500" onClick={toggleMenu}>Products</Link>
                        <Link to="/projects" className="hover:text-primary-500" onClick={toggleMenu}>Projects</Link>
                        <Link to="/water-credit" className="hover:text-primary-500" onClick={toggleMenu}>Water Credit</Link>
                        <Link to="/about-us" className="hover:text-primary-500" onClick={toggleMenu}>About Us</Link>
                        <Link to="/contact-us" onClick={toggleMenu}>
                            <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false}>Contact Us</Btn>
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
}
