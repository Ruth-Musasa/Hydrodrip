import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

type BtnProps = {
    Size: 'small' | 'medium' | 'large';
    Style: 'Filled' | 'Outlined';
    Color: 'primary' | 'Secondary';
    State: 'Default' | 'Disabled';
    icon: boolean
    children: React.ReactNode;
    classe?:string;
};

const Btn: React.FC<BtnProps> = ({ Size, Style, Color, State, children, icon ,classe }) => {
    const baseStyles = 'flex items-center justify-center rounded transition duration-300';

    const sizeStyles = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    const styleStyles = {
        Filled: 'bg-primary-500 text-white hover:bg-primary-700',
        Outlined: 'border border-primary-500 text-primary-500',
    };

    const colorStyles = {
        primary: 'bg-primary-500 text-white hover:bg-primary-600',
        Secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    };

    const stateStyles = {
        Default: '',
        Disabled: 'opacity-50 cursor-not-allowed',
    };

    return (
        <button
            className={`${classe} ${baseStyles} ${sizeStyles[Size]} ${styleStyles[Style]} ${colorStyles[Color]} ${stateStyles[State]} `}
            disabled={State === 'Disabled'}
        >
            {children}
            {icon ? <FaArrowRight className="ml-2" /> : null}

        </button>
    );
};

export default Btn;
