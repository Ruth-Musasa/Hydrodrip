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
        <div>
            <header className="flex justify-between items-center p-4 w-10/12 m-auto">
                <div className="text-2xl font-bold">
                    <img src="/logo.png" alt="logo" />
                </div>
                <div className="flex md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </button>
                </div>
                <div className={`hidden md:flex gap-10 items-center`}>
                    <nav className="flex gap-8 items-center ">
                        <Link to="/" className="text-gray-700 hover:text-primary-500">Home</Link>
                        <Link to="/products" className="text-gray-700 hover:text-primary-500">Produits</Link>
                        <Link to="/projects" className="text-gray-700 hover:text-primary-500">Projets</Link>
                        <Link to="/water-credit" className="text-gray-700 hover:text-primary-500">Water Credit</Link>
                        <Link to="/about-us" className="text-gray-700 hover:text-primary-500">About Us</Link>
                    </nav>
                    <Link to="/contact-us">
                        <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false}  >Contact Us</Btn>
                    </Link>
                </div>
            </header>
            {isOpen && (
                <div className="md:hidden w-full bg-gray-800 text-white p-4">
                    <nav className="flex flex-col items-center gap-4">
                        <Link to="/" className="hover:text-primary-500" onClick={toggleMenu}>Home</Link>
                        <Link to="/products" className="hover:text-primary-500" onClick={toggleMenu}>Produits</Link>
                        <Link to="/projects" className="hover:text-primary-500" onClick={toggleMenu}>Projets</Link>
                        <Link to="/water-credit" className="hover:text-primary-500" onClick={toggleMenu}>Water Credit</Link>
                        <Link to="/about-us" className="hover:text-primary-500" onClick={toggleMenu}>About Us</Link>
                        <Link to="/contact-us" onClick={toggleMenu}>
                            <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false}  >Contact Us</Btn>
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
}