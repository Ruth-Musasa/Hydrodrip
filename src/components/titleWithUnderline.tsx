
import React, { useRef, useEffect, useState } from 'react';

interface TitleWithCurveUnderlineProps {
  title?: string;
  classe?: string;
}

const TitleWithUnderline: React.FC<TitleWithCurveUnderlineProps> = ({ title, classe }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      if (titleRef.current) {
        const newWidth = window.innerWidth < 768 ? 160 : titleRef.current.offsetWidth;
        setWidth(newWidth);
      }
    };

    updateWidth();

    window.addEventListener('resize', updateWidth); 

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      window.removeEventListener('resize', updateWidth); 
    };
  }, [title]);

  return (
    <div className={`m-auto relative flex flex-col text-primary-900 text-3xl md:text-4xl ${classe} mb-6`}>
      <h2 ref={titleRef} className="font-bold mb-4">{title}</h2>
      <svg width={width} height="20" viewBox={`0 0 ${width} 20`} className={`absolute bottom-0 ${isVisible ? 'underline-animation' : ''}`}>
        <path
          d={`M0 18 Q ${width / 2} 0 ${width} 10`}
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth="4"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#66A5E1", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#CCE1F5", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default TitleWithUnderline;
