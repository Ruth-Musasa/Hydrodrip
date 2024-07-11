import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Header() {
    return (
        <div className='bg-gray-900'>
            <div className="flex  justify-between items-center w-10/12 py-4 m-auto">
                <div className="flex flex-row gap-4 md:gap-20">
                    <div className='flex gap-2'>
                        <FaPhone className='text-blue-500' size={20} />
                        <span className='text-white font-bold hidden md:block'>+1234567890</span>
                    </div>
                    <div className='hidden md:block border-l h-6'></div>
                    <div className='flex gap-2'>
                        <FaMailBulk className="text-blue-500" size={20} />
                        <span className='text-white font-bold hidden md:block'>connect@hydrodrip.com</span>
                    </div>
                </div>
                <div className="flex gap-4 ">
                    <FaFacebook className="text-white bg-blue-500 rounded-full p-2" size={30} />
                    <FaTwitter className="text-white bg-blue-500 rounded-full p-2" size={30} />
                    <FaYoutube className="text-white bg-blue-500 rounded-full p-2" size={30} />
                    <FaLinkedin className="text-white bg-blue-500 rounded-full p-2" size={30} />
                </div>
            </div>
        </div>
    )
}