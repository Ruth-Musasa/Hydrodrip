import React from 'react';
import { useSpring, animated } from 'react-spring';

interface StatProps {
    title: string;
    value: number;
    suffix?: string;
}

const Stat: React.FC<StatProps> = ({ title, value, suffix = '' }) => {
    const { number } = useSpring({
        from: { number: 0 },
        number: value,
        delay: 2000,
        config: { mass: 1, tension: 20, friction: 80 },
    });

    return (
        <div className="flex flex-col items-center gap-4 p-4 text-white">
            <animated.div className="text-5xl lg:text-7xl font-semibold">
                {number.to((n) => `${n.toFixed(0)}${suffix}`)}
            </animated.div>
            <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
        </div>
    );
};

const DynamicNumber: React.FC = () => {
    const stats = [
        { title: 'Smart Water Meters', value: 200, suffix: '+' },
        { title: 'Satisfied Customers', value: 100, suffix: '%' },
        { title: 'Number of Subscribers', value: 50000, suffix: '+' },
        { title: 'Employed', value: 100 },
    ];

    return (
        <div className="flex flex-wrap justify-center md:gap-8 p-8">
            {stats.map((stat, index) => (
                <Stat key={index} title={stat.title} value={stat.value} suffix={stat.suffix} />
            ))}
        </div>
    );
};

export default DynamicNumber;

