import React, { useState } from 'react';
import Btn from '../../components/Button';
import TitleWithUnderline from '../../components/titleWithUnderline';
import SocialMedia from '../../components/socialMedia';
import { FaMailBulk, FaPhone } from 'react-icons/fa';

interface Props {
    bgColor?: string;
}

const Contact: React.FC<Props> = ({ bgColor }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let validationErrors: { name?: string; email?: string; message?: string } = {};

        if (!name) validationErrors.name = 'Veuillez remplir ce champ.';
        if (!email) validationErrors.email = 'Veuillez remplir ce champ.';
        if (!message) validationErrors.message = 'Veuillez remplir ce champ.';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setSubmitted(true);
        }
    };

    return (
        <div className={`${bgColor} py-20 lg:py-32`}>
            <TitleWithUnderline title="Contact Us" classe="items-center" />
            <div className="flex flex-col md:flex-row md:p-8 lg:w-10/12 m-auto ">
                <div className="md:w-2/3 p-4 space-y-10">
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-primary-900">Let's Talk</h3>
                        <p className='md:w-2/3'>Do you have an innovative idea or a bold water management project in mind? We’re here to help. Reach out to us – we would love to hear about your initiative and assist you in bringing it to life. Together, let’s drive forward the innovation in water management.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-primary-900">Email</h3>
                        <div className='flex gap-2'>
                            <FaMailBulk className="text-primary-400" size={20} />
                            <span className='text-primary-900 font-bold '>connect@hydrodrip.com</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-primary-900">Number</h3>
                        <div className='flex gap-2'>
                            <FaPhone className='text-primary-400' size={20} />
                            <span className='text-primary-900 font-bold '>+1234567890</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-primary-900">Social</h3>
                        <SocialMedia />
                    </div>
                </div>
                <div className="md:w-1/3 p-4">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-10">
                        <label className="mb-2">
                            Nom <span className='text-red-500'>*</span>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`border border-zinc-500 p-2 mt-1 w-full rounded ${bgColor}`}
                                required
                                placeholder='Enter your name'
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </label>
                        <label className="mb-2">
                            Email <span className='text-red-500'>*</span>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`border border-zinc-500 p-2 mt-1 w-full rounded ${bgColor}`}
                                placeholder='Enter your Email'
                                required
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </label>
                        <label className="mb-2">
                            Message <span className='text-red-500'>*</span>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className={`border border-zinc-500 p-2 mt-1 w-full rounded ${bgColor}`}
                                rows={5}
                                placeholder='Enter your message'
                                required
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </label>
                        <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true} classe="m-auto">Send</Btn>
                    </form>
                    {submitted && <p className="text-green-500 mt-4">Merci pour votre message !</p>}
                </div>
            </div>
        </div>
    );
};

export default Contact;

