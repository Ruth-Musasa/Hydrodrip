import { FaMailBulk, FaPhone } from "react-icons/fa";
import SocialMedia from "./socialMedia";

export default function Header() {
    return (
        <div className='bg-gray-900'>
            <div className="flex justify-center py-4 md:py-0 md:justify-between items-center w-10/12  m-auto">
                <div className="flex flex-row gap-4 lg:gap-14 text-white font-bold ">
                    <div className='hidden md:flex gap-2 py-4 '>
                        <FaPhone className='text-primary-400' size={20} />
                        <a href="tel:+1234567890">+1234567890</a>
                    </div>
                    <div className='hidden md:block border-l '></div>
                    <div className=' hidden md:flex gap-2 py-4  '>
                        <FaMailBulk className="text-primary-400" size={20} />
                        <a href="mailto:connect@hydrodrip.com">connect@hydrodrip.com</a>
                    </div>
                </div>
                <SocialMedia />
            </div>
        </div>
    )
}