import React, { useState } from 'react';
import Btn from '../../components/Button';

const Form: React.FC = () => {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState({
        lastName: '',
        firstName: '',
        email: '',
        phone: '',
        message: ''
    });

    const validateEmail = (email: string) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhone = (phone: string) => {
        const re = /^\d{10}$/;
        return re.test(String(phone));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            lastName: lastName ? '' : 'Last name is required.',
            firstName: firstName ? '' : 'First name is required.',
            email: validateEmail(email) ? '' : 'Valid email is required.',
            phone: validatePhone(phone) ? '' : 'Valid phone number is required.',
            message: message ? '' : 'Message is required.'
        };

        setErrors(newErrors);

        if (!Object.values(newErrors).some(error => error !== '')) {
            alert('Form submitted successfully!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="md:w-9/12 mx-auto p-8 space-y-14 mb-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col">
                    <label className="mb-2 text-gray-700" htmlFor="lastName">Last Name <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md"
                        placeholder="Enter your last name"
                    />
                    {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 text-gray-700" htmlFor="firstName">First Name <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md"
                        placeholder="Enter your first name"
                    />
                    {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 text-gray-700" htmlFor="email">Email <span className="text-red-500">*</span></label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md"
                        placeholder="Enter your email"
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 text-gray-700" htmlFor="phone">Phone Number <span className="text-red-500">*</span></label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md"
                        placeholder="Enter your phone number"
                    />
                    {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                </div>
            </div>
            <div className="flex flex-col">
                <label className="mb-2 text-gray-700" htmlFor="message">Message <span className="text-red-500">*</span></label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border border-gray-300 p-2 rounded-md"
                    rows={4}
                    placeholder="Enter your message"
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
            </div>
            <button type="submit" className='w-full '>
                <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={false} classe="m-auto">Send the message</Btn>
            </button>
        </form>
    );
};

export default Form;
