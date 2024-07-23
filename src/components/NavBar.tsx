import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Btn from './Button';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (path: string) => {
        setActiveLink(path);
        setIsOpen(false);
    };

    const getLinkClassName = (path: string) => {
        return activeLink === path ? 'text-primary-500' : 'text-primary-900';
    };

    return (
        <div className="relative z-10">
            <header className="flex justify-between items-center w-10/12 m-auto ">
                <img src="/logo.png" alt="logo" className='hidden lg:flex '/>
                <img src="/logo-removebg-preview.png" alt="logo" className='lg:hidden flex '/>
                <div className="flex lg:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <IoMdClose size={30} /> : <AiOutlineMenu size={30} />}
                    </button>
                </div>
                <div className={`hidden lg:flex gap-10 items-center`}>
                    <nav className="flex gap-8 items-center font-bold">
                        <Link to="/" className={`${getLinkClassName('/')} hover:text-primary-500`} onClick={() => handleLinkClick('/')}>Home</Link>
                        <Link to="/products" className={`${getLinkClassName('/products')} hover:text-primary-500`} onClick={() => handleLinkClick('/products')}>Products</Link>
                        <Link to="/projects" className={`${getLinkClassName('/projects')} hover:text-primary-500`} onClick={() => handleLinkClick('/projects')}>Projects</Link>
                        <Link to="/water-credit" className={`${getLinkClassName('/water-credit')} hover:text-primary-500`} onClick={() => handleLinkClick('/water-credit')}>Water Credit</Link>
                        <Link to="/about-us" className={`${getLinkClassName('/about-us')} hover:text-primary-500`} onClick={() => handleLinkClick('/about-us')}>About Us</Link>
                    </nav>
                    <Link to="/contact-us">
                        <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false}>Contact Us</Btn>
                    </Link>
                </div>
            </header>
            {isOpen && (
                <div className="lg:hidden fixed top-0 z-50 h-screen bg-white w-2/3 text-primary-900 pl-10 pt-6 space-y-10 opacity-95 ">
                    <img src="/logo.png" alt="logo" />
                    <nav className="flex flex-col  gap-5 font-bold">
                        <Link to="/" className={`${getLinkClassName('/')} hover:text-primary-500`} onClick={() => handleLinkClick('/')}>Home</Link>
                        <Link to="/products" className={`${getLinkClassName('/products')} hover:text-primary-500`} onClick={() => handleLinkClick('/products')}>Products</Link>
                        <Link to="/projects" className={`${getLinkClassName('/projects')} hover:text-primary-500`} onClick={() => handleLinkClick('/projects')}>Projects</Link>
                        <Link to="/water-credit" className={`${getLinkClassName('/water-credit')} hover:text-primary-500`} onClick={() => handleLinkClick('/water-credit')}>Water Credit</Link>
                        <Link to="/about-us" className={`${getLinkClassName('/about-us')} hover:text-primary-500`} onClick={() => handleLinkClick('/about-us')}>About Us</Link>
                        <Link to="/contact-us" onClick={() => handleLinkClick('/contact-us')}>
                            <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false}>Contact Us</Btn>
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
}
