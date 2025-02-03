import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
    title: "UofA Robotics Association",
    description:
        "The University of Alberta Robotics Association is a dynamic group of innovators passionate about advancing robotics technology.",
    metadataBase: new URL("https://uara.ca"),
    openGraph: {
        title: "University of Alberta Robotics Association",
        description:
            "Join the University of Alberta Robotics Association to explore innovation, creativity, and cutting-edge robotics technology.",
        url: "https://uara.ca",
        images: [
            {
                url: "/assets/Logo.png",
                width: 1200,
                height: 1200,
                alt: "University of Alberta Robotics Association Logo",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "UofA Robotics Association",
        description:
            "Join the University of Alberta Robotics Association to explore innovation, creativity, and cutting-edge robotics technology.",
        images: ["/assets/Logo.png"],
    },
    alternates: {
        canonical: "https://uara.ca",
        languages: {
            "en-US": "https://uara.ca/en",
        },
    },
};


export default function RootLayout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
                <Analytics />
            </body>
        </html>
    );
}
