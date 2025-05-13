"use client";

import React, { useRef, ReactNode, Suspense } from "react";
import Image from "next/image";
import { Montserrat, Roboto } from "next/font/google";
import JoinUs from "@/app/components/JoinUs";
import Footer from "@/app/components/Footer";
import { useScroll, MotionValue } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
});
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-roboto",
    display: "swap",
});

/* ───── 3‑D MODEL ───── */
function PulsejetModel({ progress }: { progress: MotionValue<number> }) {
    const { scene } = useGLTF("/assets/propulsion/pulsejet_v3.gltf");
    const groupRef = useRef<THREE.Group>(null);

    const start = { x: 4, y: 2, z: 1.8};
    const end = { x: 1.2, y: -0.5, z: 0 };        // { x: 6, y: 1, z: 1 };start

    useFrame(() => {
        if (!groupRef.current) return;
        const p = progress.get();
        groupRef.current.rotation.x = start.x + (end.x - start.x) * p;
        groupRef.current.rotation.y = start.y + (end.y - start.y) * p;
        groupRef.current.rotation.z = start.z + (end.z - start.z) * p;
    });

    return (
        <group ref={groupRef} scale={[6, 6, 6]}>
            <primitive object={scene} />
        </group>
    );
}

/* ───── 3‑D CANVAS WRAPPER ───── */
function PulsejetCanvas({ parent } : { parent: React.RefObject<HTMLElement | null>}) {
    const { scrollYProgress } = useScroll({
        target: parent,
        offset: ["start end", "center center"],
    });

    return (
        <div className="h-[28rem] w-full flex-1">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <Suspense fallback={null}>
                    <PulsejetModel progress={scrollYProgress} />
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[4, 4, 4]} intensity={0.8} />
                </Suspense>
            </Canvas>
        </div>
    );
}

/* ───── PAGE ───── */
export default function Page() {
    return (
        <div className={`${montserrat.variable} ${roboto.variable}`}>
            <header className="bg-transparent py-4">
                <div className="flex justify-center items-center">
                    <Image
                        src="/assets/Logo.svg"
                        alt="UARA"
                        height={50}
                        width={100}
                        className={""}/>
                </div>
            </header>

            {/* HERO */}
            <section
                className="relative min-h-[95vh] bg-fixed bg-cover bg-center flex items-center"
                style={{backgroundImage: "url('/assets/propulsion/propulsionhero.jpg')"}}
            >
                <div className="absolute inset-0 bg-black/40"/>
                <div className="relative z-10 pl-[8%] pb-[2%] pr-5">
          <span className="block text-xl md:text-3xl tracking-widest text-white/80 mb-2">
            UofA Robotics Association
          </span>
                    <h1 className="text-white font-light leading-tight md:text-7xl text-4xl">
                        Propulsion&nbsp;&amp; Flight Systems Subteam
                    </h1>
                </div>
            </section>

            {/* MISSION */}
            <section className="py-32 bg-black text-white">
                <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center gap-10">
                    {/* image — cap width so it doesn’t grow past md */}
                    <div className="md:flex-shrink-0">
                        <img
                            src="/assets/propulsion/people.jpg"
                            alt="Propulsion team members"
                            className="ml-7 w-full max-w-xs lg:max-w-lg h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* text */}
                    <div className="md:w-1/2 text-left max-w-4xl">
                        <h2 className="md:text-6xl text-5xl font-thin mb-8">To be honest,</h2>
                        <p className="leading-relaxed font-thin md:text-xl text-lg">
                            we’re a group of ambitious students chasing disproportionately ambitious
                            goals. Our mission is simple: learn by building real hardware and, in
                            the process, nudge Canada’s emerging small‑scale propulsion industry
                            forward. We design, test and iterate—in the open—because the fastest way
                            to master propulsion is to launch something that actually flies.
                        </p>
                    </div>
                </div>
            </section>


            {/* STAGES */}
            <Stage
                number={1}
                title="Valveless Pulse‑Jet"
                bg="bg-[#083453]"
                fg="text-neutral-100"
                align="left"
                visualKind="model"
                slopeAbove="text-[#083453]"
            >
                Our first stage is a valveless pulse‑jet engine—perfect practice for
                combustion research, instrumentation and high‑temperature
                manufacturing. Its low part‑count lets us iterate fast, validate
                data‑acquisition pipelines and build the test‑stand discipline every
                later stage will depend on.
            </Stage>

            <Stage
                number={2}
                title="Regeneratively‑Cooled Liquid Engine"
                bg="bg-white"
                fg="text-neutral-900"
                align="right"
                visualKind="image"
                imageSrc="/assets/propulsion/stage2.png"
                slopeAbove="text-[#083453]"  /* blends with Stage 1 */
            >
                Stage 2 transforms pulse‑jet lessons into a kerosene–LOX demonstrator.
                We’ll tackle turbopumps, regenerative cooling and real‑time control
                software—key technologies on the path to orbital‑class propulsion.
            </Stage>

            <Stage
                number={3}
                title="Modular Launch Vehicle"
                bg="bg-slate-900"
                fg="text-slate-100"
                align="left"
                visualKind="image"
                imageSrc="/assets/propulsion/stage3.jpg"
                slopeAbove="text-white"
            >
                The final stage is a two‑kilometre‑class sounding rocket designed around
                our liquid engine. Its purpose: full‑system flight data, recovery
                operations practice and a proof‑point that Alberta students can put
                hardware above the Kármán line sooner than you’d expect.
            </Stage>

            {/* CTA & FOOTER */}
            <JoinUs/>
            <Footer/>
        </div>
    );
}

/* ───── STAGE COMPONENT ───── */
type StageProps = {
    number: number;
    title: string;
    bg: string;
    fg: string;
    align: "left" | "right";
    children: ReactNode;
    visualKind: "model" | "image";
    imageSrc?: string;
    slopeAbove?: string;
};

function Stage({
                   number,
                   title,
                   bg,
                   fg,
                   align,
                   children,
                   visualKind,
                   imageSrc,
                   slopeAbove,
               }: StageProps) {
    const sectionRef = useRef<HTMLElement | null>(null);

    const visual =
        visualKind === "model" ? (
            <PulsejetCanvas parent={sectionRef} />
        ) : (
            imageSrc && (
                <img
                    src={imageSrc}
                    alt=""
                    className="h-[28rem] w-full object-contain"
                    loading="lazy"
                />
            )
        );

    return (
        <section
            ref={sectionRef}
            className={`${bg} ${fg} relative overflow-hidden`}
        >
            {/* top slope */}
            {number === 3 && slopeAbove && (
                <svg
                    className={`absolute -top-[1px] left-0 w-full block ${slopeAbove}`}
                    viewBox="0 0 1000 40"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 L1000,40 L1000,0 L0,0 Z"
                        fill="currentColor"
                        transform="scale(-1,1) translate(-1000,0)"
                    />
                </svg>
            )}

            {number !== 3 && slopeAbove && (
                <svg
                    className={`absolute -top-[1px] left-0 w-full block ${slopeAbove}`}
                    viewBox="0 0 1000 40"
                    preserveAspectRatio="none"
                >
                    <path d="M0,0 L1000,40 L1000,0 L0,0 Z" fill="currentColor" />
                </svg>
            )}

            {/* content */}
            <div
                className={`relative z-10 py-24 container mx-auto px-6 flex flex-col md:flex-row ${
                    align === "right" ? "md:flex-row-reverse" : ""
                } items-center gap-10`}
            >
                <div className="md:w-1/2">
                    <h4
                        className={`text-lg tracking-widest uppercase mb-2 ${
                            align === "right" ? "text-right" : "text-left"
                        }`}
                    >
                        Stage {number}
                    </h4>
                    <h3
                        className={`font-light mb-6 ${
                            align === "right"
                                ? "text-right text-4xl sm:text-5xl"
                                : "text-left text-4xl sm:text-5xl"
                        }`}
                    >
                        {title}
                    </h3>
                    <p
                        className={`max-w-lg leading-relaxed text-lg ${
                            align === "right" ? "ml-auto text-right" : ""
                        }`}
                    >
                        {children}
                    </p>
                </div>

                <div className="md:w-1/2">{visual}</div>
            </div>
        </section>
    );
}

/* ───── PRELOAD MODEL ───── */
//useGLTF.preload("/assets/propulsion/pulsejet_v3.gltf");
