"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        id: "rescue",
        title: "RoboCup Rescue Subteam",
        category: "Robotics",
        description:
            "Our RoboCup Rescue Robotics team focuses on designing and developing autonomous robots capable of navigating disaster scenarios to assist in search and rescue operations. Through cutting-edge research in robotics, AI, and control systems, the team competes globally to push the boundaries of rescue technology and inspire innovation.",
        images: ["/assets/projects/RoboCup.jpg", "/assets/projects/RoboCup2.jpg"],
        url: "https://rescuesim.robocup.org/",
    },
    {
        id: "frc",
        title: "FIRST Robotics Team Support",
        category: "Outreach",
        description:
            "Our FIRST Robotics team is dedicated to mentoring local FRC teams, sharing expertise in engineering, programming, and strategy to help them excel in competitions. In addition, some members actively contribute to organizing and running the BC Regional, fostering a vibrant robotics community and inspiring the next generation of innovators.",
        images: ["/assets/projects/FRC.jpg", "/assets/projects/FRC2.jpg"],
        url: "https://www.firstinspires.org/robotics/frc",
    },
    {
        id: "projects",
        title: "Student Projects",
        category: "Robotics",
        description: "Our organization aims to support student projects and research in robotics, electronics, and AI. Whether you're working on an innovative idea, looking for collaborators, or need resources to bring your project to life, we're here to help. If you have a project idea, reach out to us at ualbertarobotics@gmail.com or join us below to get in contact.",
        images: ["/assets/projects/ElectronicsProject.jpg"],
        url: "https://www.youtube.com/watch?v=XfELJU1mRMg"
    },
    {
        id: "education",
        title: "Educational Robotics Subteam",
        category: "Education",
        description:
            "Our Educational Robotics Subteam is dedicated to fostering hands-on learning by building robots from the ground up—sometimes even from scraps! By running workshops and hosting events, we aim to promote robotics development, inspire creativity, and make robotics accessible to everyone, regardless of their experience level.",
        images: ["/assets/projects/Learning.jpg", "/assets/projects/Learning2.jpg"],
        url: "https://www.youtube.com/watch?v=XfELJU1mRMg",
    },



];


// Helper to group projects in pairs
function chunkArray<T>(arr: T[], size: number): T[][] {
    const chunked: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        chunked.push(arr.slice(i, i + size));
    }
    return chunked;
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleClose = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).id === "modal-background") {
            setSelectedProject(null);
            setCurrentImageIndex(0);
        }
    };

    const handleNextImage = () => {
        const project = projects.find((p) => p.id === selectedProject);
        if (project) {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }
    };

    const handlePreviousImage = () => {
        const project = projects.find((p) => p.id === selectedProject);
        if (project) {
            setCurrentImageIndex(
                (prev) => (prev - 1 + project.images.length) % project.images.length
            );
        }
    };

    const rows = chunkArray(projects, 2); // Pair up

    return (
        <section id="teams" className="bg-black py-16 relative">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl sm:text-5xl font-bold text-white text-center mb-14">
                    Our Projects & Teams
                </h2>

                {rows.map((rowProjects, rowIndex) => {
                    const isEvenRow = rowIndex % 2 === 0;

                    return (
                        <div
                            key={rowIndex}
                            className="flex flex-wrap md:flex-nowrap -mx-4 mb-6"
                        >
                            {rowProjects.length === 2 ? (
                                <>
                                    {/* Left Card */}
                                    <motion.div
                                        className={
                                            "px-6 mb-6 w-full " +
                                            (isEvenRow ? "md:w-[55%]" : "md:w-[45%]")
                                        }
                                        whileHover={{scale: 1.05}}
                                        initial={{opacity: 0, x: -20}}
                                        whileInView={{opacity: 1, x: 0}}
                                        transition={{
                                            duration: 0.6,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2
                                        }} // Ensures animation plays when the card is in view
                                        onClick={() => setSelectedProject(rowProjects[0].id)}
                                    >
                                        <div
                                            className="relative bg-[#231f20] rounded-3xl overflow-hidden
                                     shadow-lg cursor-pointer h-[450px]"
                                        >
                                            <img
                                                src={rowProjects[0].images[0]}
                                                alt={rowProjects[0].title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div
                                                className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
                                            <div className="absolute bottom-4 left-4">
                                                <p className="text-lg uppercase text-amber-500">
                                                    {rowProjects[0].category}
                                                </p>
                                                <h3 className="text-2xl font-bold text-white">
                                                    {rowProjects[0].title}
                                                </h3>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Right Card */}
                                    <motion.div
                                        className={
                                            "px-4 mb-6 w-full " +
                                            (isEvenRow ? "md:w-[45%]" : "md:w-[55%]")
                                        }
                                        whileHover={{scale: 1.05}}
                                        initial={{opacity: 0, x: 20}}
                                        whileInView={{opacity: 1, x: 0}}
                                        transition={{
                                            duration: 0.6,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2
                                        }} // Ensures animation plays when the card is in view
                                        onClick={() => setSelectedProject(rowProjects[1].id)}
                                    >
                                        <div
                                            className="relative bg-[#231f20] rounded-3xl overflow-hidden
                                     shadow-lg cursor-pointer h-[450px]"
                                        >
                                            <img
                                                src={rowProjects[1].images[0]}
                                                alt={rowProjects[1].title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div
                                                className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
                                            <div className="absolute bottom-4 left-4">
                                                <p className="text-lg uppercase text-amber-500">
                                                    {rowProjects[1].category}
                                                </p>
                                                <h3 className="text-2xl font-bold text-white">
                                                    {rowProjects[1].title}
                                                </h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                </>
                            ) : (
                                // If there's only one card in this row, center it at md+
                                <motion.div
                                    className="px-4 mb-6 w-full md:w-[50%] md:mx-auto"
                                    whileHover={{scale: 1.05}}
                                    initial={{opacity: 0, y: 20}}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.1 * rowIndex, // Stagger animation for rows
                                    }}
                                    onClick={() => setSelectedProject(rowProjects[0].id)}
                                >
                                    <div
                                        className="relative bg-[#231f20] rounded-3xl overflow-hidden
                                 shadow-lg cursor-pointer h-[450px]"
                                    >
                                        <img
                                            src={rowProjects[0].images[0]}
                                            alt={rowProjects[0].title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <p className="text-lg uppercase text-amber-500">
                                                {rowProjects[0].category}
                                            </p>
                                            <h3 className="text-2xl font-bold text-white">
                                                {rowProjects[0].title}
                                            </h3>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    );
                })}
            </div>
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        id="modal-background"
                        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center overflow-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    >
                        <motion.div
                            className="bg-[#231f20] max-w-4xl w-full rounded-3xl overflow-hidden shadow-lg relative mx-4 my-8 sm:mx-0 sm:my-0 sm:max-h-none sm:min-h-0"
                            layoutId={`project-${selectedProject}`}
                            initial={{scale: 0.9}}
                            animate={{scale: 1}}
                            exit={{scale: 0.9}}
                            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
                        >
                            <div className="relative bg-black">
                                <motion.img
                                    src={
                                        projects.find((p) => p.id === selectedProject)?.images[currentImageIndex]
                                    }
                                    alt=""
                                    className="mx-auto max-h-[40vh] md:max-h-[70vh] max-w-[100%] object-contain"

                                    layoutId={`image-${selectedProject}`}
                                />
                                {/* Navigation Buttons */}
                                <button
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePreviousImage();
                                    }}
                                >
                                    &#8592;
                                </button>
                                <button
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleNextImage();
                                    }}
                                >
                                    &#8594;
                                </button>
                            </div>
                            <motion.div
                                className="p-6"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: 20}}
                            >
                                <p className="text-lg uppercase text-amber-500">
                                    {projects.find((p) => p.id === selectedProject)?.category}
                                </p>
                                <h3 className="text-4xl font-bold text-white mb-4">
                                    {projects.find((p) => p.id === selectedProject)?.title}
                                </h3>
                                <p className="text-xl text-white leading-relaxed">
                                    {projects.find((p) => p.id === selectedProject)?.description}
                                </p>
                                {/* Find Out More Button */}
                                <div className="mt-6  text-center">
                                    <a
                                        href={projects.find((p) => p.id === selectedProject)?.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button
                                            className="border-2 border-theme1 text-theme2 px-10 py-2 rounded-xl font-medium hover:bg-amber-900"
                                        >
                                            Find Out More
                                        </button>
                                    </a>
                                </div>
                            </motion.div>

                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedProject(null);
                                    setCurrentImageIndex(0);
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.715-4.714a.75.75 0 111.06 1.06L13.525 12l4.714 4.715a.75.75 0 01-1.06 1.06L12 13.525l-4.715 4.714a.75.75 0 01-1.06-1.06L10.475 12 5.76 7.285a.75.75 0 010-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
