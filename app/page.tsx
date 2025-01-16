import Image from "next/image";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "UofA Robotics Association",
    description:
        "The University of Alberta Robotics Association is a dynamic group of innovators passionate about advancing robotics technology.",
};


export default function Page() {
    return (
        <>
            {/* About Us Section */}
            <section className="bg-gray-950 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">About Us</h2>
                    <p className="text-lg text-white leading-relaxed max-w-3xl mx-auto">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...
                    </p>
                </div>
            </section>

            {/* Current Project Section */}
            <section className="bg-black py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Project Image */}
                        <div className="relative w-full h-64 md:h-96">
                            <Image
                                src="/assets/Icon6.png"
                                alt="Current Project"
                                fill
                                style={{ objectFit: "cover" }}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        {/* Project Details */}
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Our Current Project
                            </h2>
                            <p className="text-lg text-white leading-relaxed mb-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                It has survived not only five centuries, but also the leap into electronic...
                            </p>
                            <a
                                href="#"
                                className="inline-block mt-4 bg-amber-950 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-900"
                            >
                                Learn More About Our Projects
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
