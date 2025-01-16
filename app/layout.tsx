"use client";

import { Hind_Siliguri } from "next/font/google";
import React, { useEffect, useState } from "react";
import "./globals.css";
import { Footer } from "./Footer";
import { Header } from "./Header";

const hindSiliguri = Hind_Siliguri({
    variable: "--font-hind-siliguri",
    subsets: ["latin", "latin-ext"],
    weight: ["400", "500", "600", "700"],
});



export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const [windowHeight, setWindowHeight] = useState<number>(0);
    const [footerHeight, setFooterHeight] = useState<number>(300); // default

    // This will replicate the snippet’s parallax logic
    useEffect(() => {
        function handleResize() {
            setWindowHeight(window.innerHeight);
        }

        // Set initial heights on mount
        handleResize();

        // Adjust height on resize
        window.addEventListener("resize", handleResize);

        // On scroll, handle the parallax effect
        function handleScroll() {
            const scrollY = window.scrollY;
            const scrollAnimateMain = document.getElementById("scroll-animate-main");
            const parallaxHeader = document.querySelector(".parallax-header") as HTMLElement;
            const parallaxFooter = document.querySelector(".parallax-footer") as HTMLElement;

            // Move the main wrapper
            if (scrollAnimateMain) {
                scrollAnimateMain.style.top = `-${scrollY}px`;
            }

            // Adjust header background position (basic parallax formula)
            if (parallaxHeader) {
                // This is similar to snippet’s background-position-y approach
                const heightDocument = windowHeight + (document.querySelector(".content")?.scrollHeight || 0) + footerHeight - 20;
                const yPos = 50 - (scrollY * 100) / heightDocument;
                parallaxHeader.style.backgroundPositionY = `${yPos}%`;
            }

            // Show or hide footer
            if (parallaxFooter) {
                if (scrollY >= footerHeight) {
                    parallaxFooter.style.bottom = "0px";
                } else {
                    parallaxFooter.style.bottom = `-${footerHeight}px`;
                }
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [windowHeight, footerHeight]);

    // Once we know the windowHeight, we can set up these heights
    // We also measure the actual .content if needed
    const heightDocument =
        windowHeight +
        // If you want to dynamically measure content in client side,
        // you'd do so in useEffect. Here we just assume it’s big enough.
        1000 + // or read from your actual content, or keep snippet’s logic
        footerHeight -
        20;

    return (
        <html lang="en" className={hindSiliguri.variable}>
        <body className="antialiased font-sans">
        {/* Outermost parallax container */}
        <div
            id="scroll-animate"
            style={{ height: `${heightDocument}px` }}
        >
            <div
                id="scroll-animate-main"
                style={{ height: `${heightDocument}px` }}
            >
                <div
                    className="wrapper-parallax"
                    style={{
                        marginTop: `${windowHeight}px`,
                        marginBottom: `${footerHeight}px`,
                    }}
                >
                    {/* Our big parallax "Header" replaced with your hero + logo */}
                    <Header />

                    {/* Where the page content (About, Current Project, etc.) goes */}
                    <section className="content">
                        {children}
                    </section>

                    {/* Our parallax Footer */}
                    <Footer setFooterHeight={setFooterHeight} />
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}
