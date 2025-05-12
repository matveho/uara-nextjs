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



            <section className="bg-black py-16">
                <div className="container mx-auto px-6 ">
                    <h2 className={[ "text-center", "mb-6", styles.team_name].join(" ")}>
                        Flight & Propulsion
                    </h2>
                </div>
            </section>


            <JoinUs/>

            <Footer/>

        </>
    );
}
