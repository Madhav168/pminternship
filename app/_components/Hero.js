"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from 'react';

// 1. Import Clerk's components
import {
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

export default function Hero() {
    // A ref to target the section for scroll-linked animations
    const targetRef = useRef(null);
    
    // The useScroll hook tracks scroll progress within the targetRef
    const { scrollYProgress } = useScroll({
        target: targetRef,
        // Start animation when top of section hits top of viewport, end when it's 50% down
        offset: ["start start", "end start"], 
    });

    // Parallax effect for the image: moves the image up as you scroll down
    // The '-15%' and '15%' values can be adjusted for more or less movement
    const imageY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

    // Animation variants for the text reveal effect
    const textRevealVariants = {
        hidden: { y: "100%" },
        visible: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    };
    
    // Staggered animation for the paragraph words
     const wordContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.05, delayChildren: 0.5 },
        },
    };
    const wordVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };


    return (
        <section ref={targetRef} className="md:h-153 h-screen relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 px-6 sm:px-12 lg:px-20 pt-28 pb-16 md:py-16 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
            {/* --- YOUR ORIGINAL CODE (UNCHANGED) --- */}
            <div className="absolute inset-0 z-0 opacity-60 mix-blend-multiply pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-orange-300 rounded-full blur-2xl opacity-50 animate-saffronPulse" style={{ transform: 'scale(1.5) translateZ(0)' }}></div>
                <div className="absolute top-1/4 left-0 w-full h-1/2 bg-white rounded-full blur-2xl opacity-50 animate-whitePulse" style={{ transform: 'scale(1.5) translateZ(0)' }}></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-green-300 rounded-full blur-2xl opacity-50 animate-greenPulse" style={{ transform: 'scale(1.5) translateZ(0)' }}></div>
                <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-gradient-to-br from-orange-100 to-transparent rounded-full mix-blend-screen filter blur-2xl opacity-75 animate-[flagGradientMove_15s_ease-in-out_infinite_alternate] transform animate-flagGradientZoom"></div>
                <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-gradient-to-tl from-green-100 to-transparent rounded-full mix-blend-screen filter blur-2xl opacity-75 animate-[flagGradientMove_15s_ease-in-out_infinite_alternate_reverse] transform animate-flagGradientZoom"></div>
                <div className="absolute center w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full mix-blend-screen filter blur-2xl opacity-75 animate-[flagGradientMove_15s_ease-in-out_infinite_alternate] transform animate-flagGradientZoom"></div>
            </div>

            {/* Left Content */}
            {/* --- ANIMATION WRAPPER: No changes to your internal code --- */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={wordContainerVariants} // Staggered container for child elements
                className="relative z-10 flex-1 text-center md:text-left"
            >
                {/* Text Reveal Animation for the Headline */}
                <div className="overflow-hidden">
                    <motion.h1 
                        variants={textRevealVariants}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-blue-900"
                    >
                        {/* --- YOUR ORIGINAL H1 (UNCHANGED) --- */}
                        Empowering Youth with{" "}
                        <span className="text-orange-500 inline-block">
                            {"Internship".split("").map((char, i) => (
                                <span
                                    key={i}
                                    className="inline-block animate-[float_3s_ease-in-out_infinite]"
                                    style={{ animationDelay: `${i * 0.05}s` }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </span> <span className="text-orange-500">Opportunities</span>
                    </motion.h1>
                </div>

                {/* Staggered Word Animation for the Paragraph */}
                <motion.p 
                    variants={wordContainerVariants}
                    className="mt-6 text-lg sm:text-xl text-gray-700 max-w-xl mx-auto md:mx-0"
                >
                    {/* --- YOUR ORIGINAL P-TAG TEXT, SPLIT FOR ANIMATION --- */}
                    {"The PM Internship Scheme connects India’s youth with leading organizations to gain real-world experience, enhance employability, and build a stronger nation."
                    .split(" ")
                    .map((word, i) => (
                        <motion.span key={i} variants={wordVariants} className="inline-block mr-1.5">
                            {word}
                        </motion.span>
                    ))}
                </motion.p>
                
                {/* --- YOUR ORIGINAL BUTTONS, WRAPPED FOR A DELAYED FADE-IN --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                >
                    <SignedOut>
                        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                            <SignUpButton mode="modal">
                                <button className="relative px-6 py-2.5 rounded-md font-semibold text-[17px] overflow-hidden bg-orange-500 text-white z-10 transition-colors duration-500 group hover:text-white">
                                    <span className="relative z-10">Youth Registration</span>
                                    <span className="absolute w-[250px] h-[200px] rounded-full bg-black top-full left-full transition-all duration-400 ease-out group-hover:top-[-30px] group-hover:left-[-30px] group-active:bg-orange-600"></span>
                                </button>
                            </SignUpButton>
                            <SignInButton mode="modal">
                                <button className="relative px-6 py-2.5 rounded-md font-semibold text-[17px] overflow-hidden bg-blue-900 text-white z-10 transition-colors duration-500 group hover:text-white">
                                    <span className="relative z-10">Login</span>
                                    <span className="absolute w-[200px] h-[150px] rounded-full bg-black top-full left-full transition-all duration-400 ease-out group-hover:top-[-30px] group-hover:left-[-30px] group-active:bg-blue-950"></span>
                                </button>
                            </SignInButton>
                        </div>
                    </SignedOut>
                </motion.div>
            </motion.div>

            {/* Right Image / Illustration */}
            {/* --- ANIMATION WRAPPER: Applying dynamic entrance and parallax scroll --- */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{ y: imageY }} // Apply the parallax scroll effect here
                className="relative z-10 md:flex-1 flex justify-center md:justify-end"
            >
                {/* --- YOUR ORIGINAL IMAGE (UNCHANGED) --- */}
                <Image
                    src="/modi.png"
                    alt="Youth Internship Illustration"
                    width={500}
                    height={400}
                    className="object-contain drop-shadow-lg mt-8 md:mt-60"
                    priority
                />
            </motion.div>

            {/* --- YOUR ORIGINAL DECORATIVE BLOBS (UNCHANGED) --- */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-0"></div>
            <div className="absolute -bottom-16 -left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-0"></div>
        </section>
    );
}

