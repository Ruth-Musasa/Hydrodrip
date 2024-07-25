import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

type BtnProps = {
    Size: 'small' | 'medium' | 'large';
    Style: 'Filled' | 'Outlined';
    Color: 'primary' | 'Secondary';
    State: 'Default' | 'Disabled';
    icon: boolean;
    children: React.ReactNode;
    classe?: string;
};

const Btn: React.FC<BtnProps> = ({ Size, Style, Color, State, children, icon, classe }) => {
    const [isActive, setIsActive] = useState(false);

    const handleButtonClick = () => {
        setIsActive(!isActive);
    };

    const baseStyles = 'flex items-center justify-center rounded transition duration-300 font-bold shadow-md shadow-primary-900/50';

    const sizeStyles = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-4 py-2 text-base md:px-6 md:py-3 md:text-lg ',
    };

    const styleStyles = {
        Filled: `bg-primary-500 text-white ${isActive ? 'bg-primary-700' : 'hover:bg-primary-600'}`,
        Outlined: `border border-primary-500 text-primary-500 ${isActive ? 'border-primary-700' : 'hover:border-primary-600'}`,
    };

    const colorStyles = {
        primary: `bg-primary-500 text-white ${isActive ? 'bg-primary-600' : 'hover:bg-primary-700'}`,
        Secondary: `bg-gray-500 text-white ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`,
    };

    const stateStyles = {
        Default: '',
        Disabled: 'opacity-50 cursor-not-allowed',
    };

    return (
        <button
            className={`${classe} ${baseStyles} ${sizeStyles[Size]} ${styleStyles[Style]} ${colorStyles[Color]} ${stateStyles[State]} `}
            disabled={State === 'Disabled'}
            onClick={handleButtonClick}
        >
            {children}
            {icon ? <FaArrowRight className="ml-2" /> : null}
        </button>
    );
};

export default Btn;
