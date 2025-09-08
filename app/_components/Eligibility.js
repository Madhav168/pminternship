"use client";
import React from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Calendar,
    Briefcase,
    GraduationCap,
    Users,
    Award,
    Banknote,
    Building,
    AppWindow
} from 'lucide-react';

// --- Mock Data ---
const eligibilityCriteria = [
    {
        icon: Calendar,
        title: "Age",
        frontText: "21 - 24 Years",
        backText: "Applicants must be between the ages of 21 and 24 to be eligible for the scheme."
    },
    {
        icon: Briefcase,
        title: "Job Status",
        frontText: "Not Employed Full-Time",
        backText: "Candidates must not be engaged in any full-time employment at the time of application."
    },
    {
        icon: GraduationCap,
        title: "Education",
        frontText: "Not Enrolled Full-Time",
        backText: "You cannot be enrolled in a full-time educational course during the internship period."
    },
    {
        icon: Users,
        title: "Family",
        frontText: "Income & Employment",
        backText: "No family member (self, spouse, parents) should have an income exceeding ₹8 Lakhs PA or hold a government job."
    }
];

const coreBenefits = [
    {
        icon: Building,
        title: "Real-World Experience",
        description: "Gain 12 months of invaluable real-life experience in India's top companies."
    },
    {
        icon: Banknote,
        title: "Monthly Assistance",
        description: "Receive a monthly assistance of ₹4500 from the Government of India and ₹500 from the industry."
    },
    {
        icon: Award,
        title: "One-Time Grant",
        description: "A one-time grant of ₹6000 is provided for incidentals to help you get started."
    },
    {
        icon: AppWindow,
        title: "Sector Selection",
        description: "Choose from a wide array of various sectors and top-tier companies across India."
    }
];

// --- Animation Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 80,
        },
    },
};

// --- Reusable Animated Title Component ---
const AnimatedTitle = ({ text }) => {
    const title = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: i * 0.1 },
        }),
    };

    const char = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight text-center"
            variants={title}
            initial="hidden"
            animate="visible"
        >
            {text.split(" ").map((word, index) => (
                <span key={index} className="inline-block mr-4">
                    {word.split("").map((character, i) => (
                        <motion.span key={i} className="inline-block" variants={char}>
                            {character}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.h1>
    );
};


// --- Main Page Component ---
export default function Eligibility() {
    const benefitsRef = React.useRef(null);
    const isInView = useInView(benefitsRef, { once: true, amount: 0.2 });

    return (
        <main id='eligibility' className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-24 px-6 sm:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
                {/* --- Page Header --- */}
                <div className="text-center mb-20">
                    <AnimatedTitle text="Are you Eligible ?" />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto"
                    >
                        Check the criteria below to see if you qualify for this unique opportunity to kickstart your career.
                    </motion.p>
                </div>

                {/* --- Eligibility Criteria Section with 3D Flip Cards --- */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
                >
                    {eligibilityCriteria.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            style={{ perspective: 1000 }} // apply perspective on parent
                        >
                            <motion.div
                                className="relative w-full h-56 rounded-xl shadow-lg cursor-pointer"
                                style={{ transformStyle: "preserve-3d" }}
                                whileHover={{ rotateY: 180 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }} // smooth flip
                            >
                                {/* Front of the Card */}
                                <div
                                    className="absolute inset-0 bg-white p-6 flex flex-col items-center justify-center text-center rounded-xl border-2 border-orange-100"
                                    style={{ backfaceVisibility: "hidden" }}
                                >
                                    <item.icon className="h-12 w-12 text-orange-500 mb-3" />
                                    <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                                    <p className="text-slate-600 mt-1">{item.frontText}</p>
                                </div>

                                {/* Back of the Card */}
                                <div
                                    className="absolute inset-0 bg-blue-900 p-6 flex items-center justify-center text-center rounded-xl text-white"
                                    style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                                >
                                    <p>{item.backText}</p>
                                </div>
                            </motion.div>
                        </motion.div>

                    ))}
                </motion.section>

                {/* --- Core Benefits Section --- */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
                            Core <span className="text-orange-500">Benefits</span>
                        </h2>
                        <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
                            Successful applicants will receive the following benefits as part of the PM Internship Scheme.
                        </p>
                    </div>

                    <motion.div
                        ref={benefitsRef}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {coreBenefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 flex items-start gap-6 hover:shadow-orange-100 hover:border-orange-200 transition-all duration-300"
                            >
                                <div className="bg-orange-100 p-4 rounded-full">
                                    <benefit.icon className="h-8 w-8 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-blue-900">{benefit.title}</h3>
                                    <p className="text-slate-600 mt-2">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </div>
        </main>
    );
}
