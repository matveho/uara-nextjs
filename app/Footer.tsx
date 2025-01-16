"use client";
import { useEffect, useRef } from "react";

export const Footer = ({
                           setFooterHeight,
                       }: {
    setFooterHeight?: (height: number) => void;
}) => {
    // We'll measure the DOM node to dynamically set height if needed
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (footerRef.current && setFooterHeight) {
            const rect = footerRef.current.getBoundingClientRect();
            setFooterHeight(rect.height);
        }
    }, [setFooterHeight]);

    return (
        <footer className="parallax-footer" ref={footerRef}>
            <div className="custom-footer-content">
                <div className="custom-footer-left">
                    {/* Left-aligned content (desktop) */}
                    <h2 className="text-xl font-bold">UARA</h2>
                    <p className="mt-2">Some short paragraph or tagline about your group.</p>
                    <div className="mt-2">
                        <a href="#" className="mr-3">Facebook</a>
                        <a href="#" className="mr-3">Twitter</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>

                <div className="custom-footer-right">
                    {/* Right-aligned content (desktop) */}
                    <p>&copy; {new Date().getFullYear()} University of Alberta Robotics Association</p>
                    <p>All rights reserved.</p>
                    <p>Some other details or disclaimers</p>
                </div>
            </div>
        </footer>
    );
};
