"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Time between each word animating in
      },
    },
};

const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 15,
      duration: 1.5,
    },
  },
};

const callToActionVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 12,
            delay: 1.2,
        },
    },
}

// --- Main Page Component ---
export default function MobileApp() {
    const title = "Download PMIS Mobile Application".split(" ");
    const description = "Register, complete your profile, explore and apply for paid internships in top companies of India seamlessly.".split(" ");

    return (
        <main id='mobileapp' className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-orange-50 to-white py-20 px-6 sm:px-12 lg:px-20 overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            >
                {/* --- Left Content: Text & CTAs --- */}
                <div className="text-center md:text-left z-10">
                    <motion.h1
                        variants={textContainerVariants}
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-900 leading-tight mb-6"
                    >
                        {title.map((word, index) => (
                            <motion.span
                                key={index}
                                variants={wordVariants}
                                className="inline-block mr-3"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        variants={textContainerVariants}
                        className="text-lg text-slate-600 max-w-md mx-auto md:mx-0 mb-10"
                    >
                        {description.map((word, index) => (
                             <motion.span
                                key={index}
                                variants={wordVariants}
                                className="inline-block mr-1.5"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.p>
                    
                    {/* Call to Action Buttons */}
                    <motion.div 
                        variants={callToActionVariants}
                        className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6"
                    >
                        <Link 
                            href="https://play.google.com/store/apps/details?id=com.mca.pm_internship"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* IMPORTANT: Replace with your actual 'Get it on Google Play' image path */}
                                <Image
                                    src="/get-it-on-google-play.png" // Example path
                                    alt="Get it on Google Play"
                                    width={200}
                                    height={74}
                                    className="rounded-lg shadow-lg"
                                />
                            </motion.div>
                        </Link>
                        <div className="bg-white p-3 rounded-xl shadow-lg">
                             {/* IMPORTANT: Replace with your actual QR code image path */}
                            <Image
                                src="/play-store-qr-code.png" // Example path
                                alt="QR Code for mobile app download"
                                width={120}
                                height={120}
                                className="rounded-md"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* --- Right Content: Single Combined Phone Mockup --- */}
                <motion.div
                    variants={imageVariants}
                    animate={{
                        y: [0, -20, 0], // Gentle floating effect
                        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="flex items-center justify-center"
                >
                    {/* IMPORTANT: Replace with your single combined image of the phones */}
                    <Image
                        src="/download_pmis_prototype.png" // Example path
                        alt="Mobile App Screenshots"
                        width={500}
                        height={600}
                        className="object-contain drop-shadow-2xl"
                    />
                </motion.div>
            </motion.div>
        </main>
    );
}

