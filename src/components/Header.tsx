import { FaMailBulk, FaPhone} from "react-icons/fa";
import SocialMedia from "./socialMedia";

export default function Header() {
    return (
        <div className='bg-gray-900'>
            <div className="flex justify-center py-4 md:py-0 md:justify-between items-center w-10/12  m-auto">
                <div className="flex flex-row gap-4 lg:gap-14">
                    <div className='hidden md:flex gap-2 py-4 '>
                        <FaPhone className='text-primary-400' size={20} />
                        <span className='text-white font-bold '>+1234567890</span>
                    </div>
                    <div className='hidden md:block border-l '></div>
                    <div className=' hidden md:flex gap-2 py-4  '>
                        <FaMailBulk className="text-primary-400" size={20} />
                        <span className='text-white font-bold'>connect@hydrodrip.com</span>
                    </div>
                </div>
                <SocialMedia />
            </div>
        </div>
    )
}