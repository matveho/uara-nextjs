"use client";

import { Montserrat } from 'next/font/google'
import { Roboto } from 'next/font/google'


import styles from './styles.module.css'


// import NeonAnimation from "@/app/components/NeonAnimation";

import JoinUs from "@/app/components/JoinUs"
import Footer from "@/app/components/Footer"



const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
})

const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-roboto',
    display: 'swap',
})




export default function Page() {
    return (
      <>
        {/* <NeonAnimation/> */}

        {/* <div className="bg-black">
                <section className="py-16">
                    <div className="container mx-auto px-6 ">
                        <h2 className={[ "text-center", "mb-6", styles.team_name].join(" ")}>
                            Flight & Propulsion
                        </h2>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="column">
                            <div className="spacer" />
                            <div className="story">
                                The Mission
                            </div>
                            <div className="spacer" />
                        </div>
                    </div>
                    
                </section>
                <section>
                    Pulse Jet Engine
                </section>
                <section>
                    Liquid Rocket Engine
                </section>
                <section>
                    Rocket
                </section>
            </div> */}

        <div className="bg-white text-black">
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className={["text-center", "mb-6", styles.team_name].join(" ")}>
                Flight & Propulsion
              </h2>
            </div>
          </section>
          <section className="py-12 bg-black text-white">
            <div className="container mx-auto px-6">
              <h3 className="text-2xl font-semibold mb-4">The Mission</h3>
              <p className="text-base leading-relaxed">
                Description of the mission goes here.
              </p>
            </div>
          </section>
          <section className="bg-white text-black">
            <div
              className="elementor-shape elementor-shape-bottom"
              data-negative="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100"
                preserveAspectRatio="none">
                <path className="fill-black" d="M0,6V0h1000v100L0,6z"></path>
              </svg>
            </div>
            <div className="container mx-auto px-6">
              <h3 className="text-2xl font-semibold mb-4">Pulse Jet Engine</h3>
              <p className="text-base leading-relaxed">
                Description of the Pulse Jet Engine goes here.
              </p>
            </div>
            <div className="elementor-shape elementor-shape-top" data-negative="false">
          </div>
          </section>
          <section className="bg-black text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
	            <path className="fill-white" d="M0,6V0h1000v100L0,6z"></path>
            </svg>
            <div className="container mx-auto px-6">
              <h3 className="text-2xl font-semibold mb-4">
                Liquid Rocket Engine
              </h3>
              <p className="text-base leading-relaxed">
                Description of the Liquid Rocket Engine goes here.
              </p>
            </div>
          </section>
          <section className="bg-white text-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" transform="matrix(-1,0,0,1,0,0)">
                <path className="fill-black" d="M0 6V0h1000v100z"></path>
            </svg>
            <div className="container mx-auto px-6">
              <h3 className="text-2xl font-semibold mb-4">Rocket</h3>
              <p className="text-base leading-relaxed">
                Description of the Rocket goes here.
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" transform="matrix(1,0,0,-1,0,0)">
                <path className="fill-black" d="M0 6V0h1000v100z"></path>
            </svg>
          </section>
        </div>

        <JoinUs />

        <Footer />
      </>
    );
}
