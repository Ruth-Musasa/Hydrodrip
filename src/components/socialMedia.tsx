import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function SocialMedia() {
    return (
        <div className="flex gap-4  md:justify-start">
            <FaFacebook className="text-white bg-primary-300 rounded-full p-2" size={30} />
            <FaTwitter className="text-white bg-primary-300 rounded-full p-2" size={30} />
            <FaYoutube className="text-white bg-primary-300 rounded-full p-2" size={30} />
            <FaLinkedin className="text-white bg-primary-300 rounded-full p-2" size={30} />
        </div>
    )
}