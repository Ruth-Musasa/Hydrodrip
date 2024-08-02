import { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Btn from './Button';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 50);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleLinkClick = (path: string) => {
        setActiveLink(path);
        setIsOpen(false);
    };

    const getLinkClassName = (path: string) => (
        activeLink === path ? 'text-primary-500' : ''
    );

    return (
        <div className={`relative z-10 ${isScrolled ? 'bg-gray-900 text-white' : ''}`}>
            <header className="flex justify-between items-center w-10/12 m-auto">
                <Link to="/" className='lg:hidden flex'>
                    <img src="/logo mobile.webp" alt="logo" className='h-28 w-auto mb-[-20px] ml-[-6px]  ' />
                </Link>
                {isScrolled ?
                    <Link to="/" className='hidden lg:flex'>
                        <img src="/logo white.webp" alt="logo" className='h-20 w-auto ' />
                    </Link> 
                    :
                    <Link to="/" className='hidden lg:flex'>
                        <img src="/hydrodrip logo.svg" alt="logo" className='h-16 w-auto my-2' />
                    </Link>
                }

                <div className="flex lg:hidden">
                    <button onClick={toggleMenu} className={`menu-button ${isOpen ? 'open' : ''}`}>
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
                        <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false}>
                            Contact Us
                        </Btn>
                    </Link>
                </div>
            </header>
            {isOpen && (
                <div ref={menuRef} className="lg:hidden fixed top-0 z-50 h-screen bg-white w-2/3 text-primary-900 pl-10 pt-6 space-y-10">
                    <img src="/hydrodrip logo.svg" className='h-24 w-auto' alt="logo" />
                    <nav className="flex flex-col gap-5 font-bold">
                        <Link to="/" className={`${getLinkClassName('/')} hover:text-primary-500`} onClick={() => handleLinkClick('/')}>Home</Link>
                        <Link to="/products" className={`${getLinkClassName('/products')} hover:text-primary-500`} onClick={() => handleLinkClick('/products')}>Products</Link>
                        <Link to="/projects" className={`${getLinkClassName('/projects')} hover:text-primary-500`} onClick={() => handleLinkClick('/projects')}>Projects</Link>
                        <Link to="/water-credit" className={`${getLinkClassName('/water-credit')} hover:text-primary-500`} onClick={() => handleLinkClick('/water-credit')}>Water Credit</Link>
                        <Link to="/about-us" className={`${getLinkClassName('/about-us')} hover:text-primary-500`} onClick={() => handleLinkClick('/about-us')}>About Us</Link>
                        <Link to="/contact-us" onClick={() => handleLinkClick('/contact-us')}>
                            <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false}>
                                Contact Us
                            </Btn>
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
}
