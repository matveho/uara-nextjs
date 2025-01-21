"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NeonAnimation: React.FC = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [isSafari, setIsSafari] = useState(false);

    const { scrollY } = useScroll();
    const parallaxTop = useTransform(scrollY, [0, 1000], ["0%", "30%"]);
    const parallaxBottom = useTransform(scrollY, [0, 1000], ["0%", "100%"]);

    useEffect(() => {
        // Detect Safari
        const ua = navigator.userAgent.toLowerCase();
        setIsSafari(/safari/.test(ua) && !/chrome/.test(ua));

        if (!svgRef.current || /safari/.test(ua) && !/chrome/.test(ua)) return;

        // Hide the SVG until styles are applied
        svgRef.current.style.visibility = "hidden";

        const paths = svgRef.current.querySelectorAll("path");
        paths.forEach((path) => {
            const length = (path as SVGPathElement).getTotalLength();
            const computedStyle = window.getComputedStyle(path);
            const fillColor =
                computedStyle.fill !== "none" ? computedStyle.fill : computedStyle.stroke;

            path.setAttribute(
                "style",
                `
                stroke: ${fillColor};
                stroke-dasharray: ${length};
                stroke-dashoffset: ${length};
                filter: drop-shadow(0 0 8px ${fillColor}) drop-shadow(0 0 20px ${fillColor});
            `
            );
        });

        // Now reveal the SVG so the initial (fully drawn) state isn’t shown
        svgRef.current.style.visibility = "visible";
    }, []);

    return (
        <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-black overflow-hidden">
            {/* Parallax SVG - Bottom Left */}
            <div className="py-10">
                <motion.img
                    src="/assets/RoboArm.svg"
                    alt="Decorative SVG Top Left"
                    className="absolute top-[50%] left-[55%] w-[400px] xl:w-[50%] "
                    style={{y: parallaxTop}}
                    initial={{opacity: 0, rotate:0}}
                    animate={{opacity: 0.5}}
                    transition={{duration: 1.8, ease: "easeOut"}}
                />

                {/* Parallax SVG - Top Left */}
                <motion.img
                    src="/assets/RoboArm2.svg"
                    alt="Decorative SVG Top Left"
                    className="absolute top-[-10vh] left-[-10vh] w-[600px] xl:w-[40%] rotate-180"
                    style={{y: parallaxBottom}}
                    initial={{opacity: 0, rotate: 195}}
                    animate={{opacity: 0.4}}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                />
            </div>


            <div className="flex justify-center items-center bg-none py-10 relative">
                {isSafari ? (
                    <img
                        src="/assets/Hero.png"
                        alt="University of Alberta Robotics Association Logo"
                        className="w-[90vw] md:w-[70vw] lg:w-[60vw] xl:max-w-[800px] h-auto"
                    />
                ) : (
                    <svg
                        ref={svgRef}
                        style={{ visibility: "hidden" }}
                        viewBox="-100 -100 1750.55 557.96"
                        className="w-[90vw] md:w-[70vw] lg:w-[60vw] xl:max-w-[800px] h-auto"
                    >
                        <defs>
                            <style>{`
                                .cls-1 { fill: #fff; }
                                .cls-2 { fill: #e4e1b5; letter-spacing: 0em; }
                                .cls-3 { fill: #fbbb33; }
                                .cls-3, .cls-4 { letter-spacing: 0em; }
                                .cls-5 { stroke: #f16472; }
                                .cls-5, .cls-6, .cls-7, .cls-8 {
                                fill: none;
                                stroke-miterlimit: 10;
                                stroke-width: 10px;
                            }
                                .cls-6 { stroke: #e5d6e9; }
                                .cls-7 { stroke: #fbbb33; }
                                .cls-8 { stroke: #e4e1b5; }
                                .cls-9 {
                                font-family: JosefinSansRoman-Bold, 'Josefin Sans';
                                font-size: 73.64px;
                                font-variation-settings: 'wght' 700;
                                font-weight: 700;
                            }
                                .cls-10 { letter-spacing: -.02em; }
                                .cls-10, .cls-4 { fill: #e5d6e9; }
                                .cls-11 { fill: #f16472; }
        
                                @keyframes draw {
                                0%   { stroke-dashoffset: 100%; }
                                100% { stroke-dashoffset: 0; }
                            }
        
                                path {
                                animation: draw 4s linear forwards;
                            }
        
                            `}</style>
                        </defs>
                        <g id="Web_Frontpage" data-name="Web Frontpage">
                            <g>
                                <path className="cls-6"
                                      d="M802.48,6.26c27.65-.7,115.08-2.65,185.55.41,7.87.34,23.69,1.15,42.84,7.74,12.97,4.47,46.92,16.71,68.05,51.13,13.2,21.51,15.43,41.88,16.26,50.91,3.14,34.03-2.91,65.74-26.37,91.35-11.53,12.58-26.53,21.95-40.92,33.55,21.92,32.41,44.87,66.36,69.02,102.07h-10.9c-28.96,0-57.94-.34-86.89.22-7.78.15-12.06-2.62-16.13-8.8-16.31-24.74-33.21-49.08-49.51-73.83-3.47-5.27-7.35-7.35-13.45-7.08-8.52.38-17.09.48-25.6-.02-7.36-.43-10.12,1.81-9.95,9.71.51,22.95.18,45.93.18,68.89v10.36h-102.71c.18-112.21.35-224.42.53-336.62ZM905.17,177.64c23.53,0,46.74,1.97,69.46-.55,23.43-2.59,37.1-21.84,37.21-45.89.12-25.01-13.27-44.78-36.33-47.91-23-3.12-46.5-2.55-70.35-3.62v97.96Z"/>
                                <path className="cls-7"
                                      d="M1142.26,343.41c80.98-185.96,139.43-320.42,142.27-327.98.32-.86,1.55-4.52,5-6.87,2.49-1.7,5.71-2.21,10.41-2.23,29.58-.11,59.13-.37,88.98,0,3.09.04,5.36.49,7.21,1.69,3.02,1.97,3.92,4.06,4.21,4.8,2.31,5.98,61.27,142.63,142.6,331.01-50.62-.14-87.4-.38-95.03-.19-1.45.04-5.75.18-9.39-2.52-2.72-2.02-3.88-4.74-4.4-6-9.96-24.23-16.73-45.33-16.73-45.33-1.96-5.65-5.13-7.33-10.78-7.31-42.99.16-85.98.19-128.96-.03-5.91-.03-8.66,2.24-10.61,7.56-5.74,15.7-11.78,31.29-18.09,46.77-1.07,2.62-4.08,6.33-6.23,6.36-32.86.41-65.73.28-100.46.28ZM1298.13,209.93h88.7c-14.76-38.46-29.14-75.92-44.33-115.51-15.2,39.56-29.53,76.87-44.37,115.51Z"/>
                                <path className="cls-5"
                                      d="M5.05,5.69h102.68c0,3.89-.01,7.6,0,11.31.22,61.15-.1,122.31.95,183.45.4,23.42,7.68,45.39,30.94,57.11,28.2,14.22,74.95,10.07,87.23-34.63,3.74-13.63,5.4-28.16,5.56-42.31.62-54.88.25-109.78.25-164.67,0-3.21,0-6.42,0-10.08h99.43c.17,3.1.48,6.24.48,9.38.03,54.59.31,109.19-.1,163.77-.2,27.14-2.41,54.14-13.61,79.58-16.97,38.56-46.23,63.97-87.28,75.23-46.24,12.68-92.76,12.93-138.06-4.13-50.73-19.11-77.99-56.97-85.74-108.73-2.11-14.09-2.55-28.51-2.62-42.79-.29-53.7-.12-107.39-.12-161.09,0-3.53,0-7.06,0-11.4Z"/>
                                <path className="cls-8"
                                      d="M360.65,342.95c13.51-31.11,26.29-60.63,39.15-90.12,34.61-79.42,69.33-158.8,103.74-238.31,2.83-6.55,6.14-8.91,13.43-8.79,29.86.49,59.74.31,89.61.1,5.19-.04,8.17,1.25,10.4,6.38,46.97,107.87,94.13,215.66,141.23,323.47.83,1.9,1.46,3.88,2.5,6.69-3.28.23-5.85.57-8.42.57-29.57.04-59.14-.1-88.7.13-5.62.05-8.56-1.3-10.54-7.1-5.39-15.81-11.91-31.24-17.44-47-2-5.69-4.56-8.04-10.96-8-43.28.31-86.57.24-129.85.05-5.33-.02-8.09,1.44-9.98,6.71-5.85,16.3-12.14,32.45-18.73,48.47-1.13,2.74-4.55,6.42-6.96,6.45-32.28.43-64.57.29-98.47.29ZM605.88,210.92c-15.1-39.27-29.92-77.83-45.64-118.72-15.78,41.06-30.55,79.51-45.62,118.72h91.27Z"/>
                            </g>
                            <text className="cls-9" transform="translate(36.28 440.8)">
                                <tspan className="cls-11" x="0" y="0">University</tspan>
                                <tspan className="cls-1" x="376.64" y="0">of</tspan>
                                <tspan className="cls-2" x="474.65" y="0">Alberta</tspan>
                                <tspan className="cls-10" x="761.83" y="0">R</tspan>
                                <tspan className="cls-4" x="810.87" y="0">obotics</tspan>
                                <tspan className="cls-3" x="1082.95" y="0">Association</tspan>
                            </text>
                        </g>
                    </svg>
                )}
            </div>
        </section>
    );
};

export default NeonAnimation;
