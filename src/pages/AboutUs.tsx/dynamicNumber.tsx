import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

interface StatProps {
    title: string;
    value: number;
    suffix?: string;
    isVisible: boolean;
}

const Stat: React.FC<StatProps> = ({ title, value, suffix = '', isVisible }) => {
    const { number } = useSpring({
        from: { number: 0 },
        number: isVisible ? value : 0,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 80 },
    });

    return (
        <div className="flex flex-col items-center gap-4 p-4 text-white">
            <animated.div className="text-4xl lg:text-5xl font-semibold">
                {number.to((n) => `${n.toFixed(0)}${suffix}`)}
            </animated.div>
            <h3 className="text-sm lg:text-xl font-bold mb-2">{title}</h3>
        </div>
    );
};

const DynamicNumber: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const stats = [
        { title: 'Smart Water Meters', value: 200, suffix: '+' },
        { title: 'Satisfied Customers', value: 100, suffix: '%' },
        { title: 'Number of Subscribers', value: 50000, suffix: '+' },
        { title: 'Employed', value: 100 },
    ];

    return (
        <div ref={sectionRef} className="bg-primary-800 py-14 md:py-28 space-y-10 lg:space-y-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center">Hydrodrip in numbers</h2>
            <div className="md:w-10/12 m-auto grid grid-cols-1 md:grid-cols-4 justify-center md:p-8">
                {stats.map((stat, index) => (
                    <Stat key={index} title={stat.title} value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                ))}
            </div>
        </div>
    );
};

export default DynamicNumber;
