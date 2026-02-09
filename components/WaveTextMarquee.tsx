'use client';

import React from 'react';

interface WaveTextMarqueeProps {
    text: string;
    speed?: number; // Duration in seconds for one complete loop
    fontSize?: number;
    fill?: string;
    className?: string;
}

export default function WaveTextMarquee({
    text,
    speed = 20,
    fontSize = 24,
    fill = '#523cac',
    className = '',
}: WaveTextMarqueeProps) {
    // Repeat text to ensure continuous marquee effect
    const repeatedText = `${text}   `.repeat(3);

    return (
        <div className={`wave-text-marquee ${className}`}>
            <svg
                viewBox="0 0 1549.87 403.06"
                xmlns="http://www.w3.org/2000/svg"
                className="wave-svg"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    {/* Main wave path - extracted from Last Curve.svg */}
                    <path
                        id="wavePath"
                        d="M26.97,180.61c29.66,14.41,59.75,29.97,92.28,36.74s67.35,2.71,98.44-12.11c56.24-26.81,93.28-80.69,147.29-111.05,52.02-29.24,114.62-40.51,173.6-31.25,27.95,4.39,54.86,13.2,79.99,26.17,22.4,11.56,43.45,25.55,64.16,39.86,40.77,28.15,81.35,59.1,129.01,74.65,23.04,7.52,47.7,10.77,71.85,8.12,30.01-3.29,58.45-14.27,84.11-30,28.95-17.75,54.3-40.55,82.23-59.76,25.65-17.65,55.14-33.88,87.01-34.85,54.52-1.66,88.02,46.17,111.96,88.64,12.95,22.99,27.85,46.2,48.19,63.39,21.39,18.08,47.15,26.97,75.13,22.69,16.75-2.56,32.63-9.1,48.59-14.49,8.26-2.79,16.61-5.36,25.16-7.07,2.68-.54,5.37-.96,8.07-1.36,2.22-.33-.19,0,1.51-.21,1.3-.16,2.6-.32,3.9-.47,25.12-2.82,51.16-2.81,75.92,2.63,13.33,2.92,26.12,7.41,37.87,14.42"
                    />
                </defs>

                {/* Animated text along the path */}
                <text
                    fontSize={fontSize}
                    fill={fill}
                    fontWeight="600"
                    style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}
                >
                    <textPath href="#wavePath" startOffset="0%">
                        {repeatedText}
                        <animate
                            attributeName="startOffset"
                            from="0%"
                            to="100%"
                            dur={`${speed}s`}
                            repeatCount="indefinite"
                        />
                    </textPath>
                </text>
            </svg>

            <style jsx>{`
        .wave-text-marquee {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .wave-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Ensure smooth animation */
        text {
          user-select: none;
        }

        @media (max-width: 768px) {
          .wave-svg {
            min-height: 200px;
          }
        }
      `}</style>
        </div>
    );
}
