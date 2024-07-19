import React, { useRef, useEffect, useState } from 'react';

interface TitleWithCurveUnderlineProps {
  title?: string;
  classe?: string;
}

const TitleWithUnderline: React.FC<TitleWithCurveUnderlineProps> = ({ title, classe }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      setWidth(titleRef.current.offsetWidth);
    }
  }, [title]);

  return (
    <div className={`w-11/12 m-auto relative flex flex-col text-primary-900 ${classe}  mb-10 `}>
      <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 ">{title}</h2>
      <svg width={width} height="20" viewBox={`0 0 ${width} 20`} className="absolute bottom-0">
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
