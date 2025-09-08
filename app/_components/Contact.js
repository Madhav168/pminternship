"use client";
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

// --- Data for Contact Info ---
const contactDetails = [
    {
        icon: MapPin,
        title: "Address",
        info: "A Wing, 5th Floor, Shastri Bhawan, Dr Rajendra Prasad Rd, New Delhi-110001"
    },
    {
        icon: Mail,
        title: "Email",
        info: "pminternship[at]mca.gov.in",
        href: "mailto:pminternship[at]mca.gov.in"
    },
    {
        icon: Phone,
        title: "Toll-Free Number",
        info: "1800 11 6090",
        href: "tel:1800116090"
    }
];

// --- Magnetic Button Component ---
const MagneticButton = ({ children }) => {
    const ref = useRef(null);
    const mouseX = useMotionValue(Infinity);
    const mouseY = useMotionValue(Infinity);

    const springConfig = { damping: 15, stiffness: 200, mass: 0.1 };
    const springX = useSpring(0, springConfig);
    const springY = useSpring(0, springConfig);

    useTransform(mouseX, (val) => springX.set(val));
    useTransform(mouseY, (val) => springY.set(val));

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        mouseX.set(e.clientX - left - width / 2);
        mouseY.set(e.clientY - top - height / 2);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };
    
    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className="group relative w-full rounded-xl bg-orange-500 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-orange-600 overflow-hidden"
        >
            <span className="relative z-10">{children}</span>
            <div className="absolute inset-0 z-0 h-full w-full translate-x-[-100%] transform bg-white/20 transition-transform duration-500 ease-in-out group-hover:translate-x-0"></div>
        </motion.button>
    );
};


// --- Main Page Component ---
export default function ContactPage() {
    // --- Animation Variants ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80 } },
    };
    
    return (
        <main id='contact' className="bg-gradient-to-b from-white via-orange-50 to-blue-50 py-24 px-6 sm:px-12 lg:px-20">
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-6xl mx-auto"
            >
                {/* --- Page Header --- */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
                        Get In <span className="text-orange-500">Touch</span>
                    </h1>
                    {/* FIXED: Replaced ' with &apos; to fix the linting error */}
                    <motion.p variants={itemVariants} className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        We&apos;re here to help. Whether you have a question about eligibility, partnerships, or anything else, our team is ready to answer all your questions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* --- Left Column: Contact Info & Map --- */}
                    <motion.div variants={containerVariants}>
                        {contactDetails.map((item, index) => (
                            <motion.div 
                                key={index} 
                                variants={itemVariants} 
                                className="mb-8"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="bg-orange-100 p-4 rounded-full">
                                        <item.icon className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                                        <p className="text-slate-600 mt-1">{item.info}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <motion.div variants={itemVariants} className="mt-12 rounded-xl overflow-hidden shadow-lg border-2 border-slate-100">
                           <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562389178128!2d77.21623897534438!3d28.61663447567527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3941a80a4e5%3A0x516799c8085156a9!2sMinistry%20of%20Corporate%20Affairs%2C%205th%20Floor%2C%20Shastri%20Bhawan!5e0!3m2!1sen!2sin!4v1725785868694!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                           ></iframe>
                        </motion.div>
                    </motion.div>

                    {/* --- Right Column: Contact Form --- */}
                    <motion.div 
                        variants={itemVariants}
                        className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-slate-100"
                    >
                        <form action="#" method="POST" className="space-y-8">
                            <div>
                                <label htmlFor="name" className="text-sm font-semibold text-blue-900">Full Name</label>
                                <input type="text" id="name" name="name" className="mt-2 w-full rounded-md border-slate-300 focus:border-orange-500 focus:ring-orange-500 transition" />
                            </div>
                             <div>
                                <label htmlFor="email" className="text-sm font-semibold text-blue-900">Email Address</label>
                                <input type="email" id="email" name="email" className="mt-2 w-full rounded-md border-slate-300 focus:border-orange-500 focus:ring-orange-500 transition" />
                            </div>
                            <div>
                                <label htmlFor="message" className="text-sm font-semibold text-blue-900">Message</label>
                                <textarea id="message" name="message" rows="5" className="mt-2 w-full rounded-md border-slate-300 focus:border-orange-500 focus:ring-orange-500 transition"></textarea>
                            </div>
                            <div>
                                <MagneticButton>Send Message</MagneticButton>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </main>
    );
}

