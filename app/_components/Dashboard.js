"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, animate } from 'framer-motion';
import Image from 'next/image';

// --- Reusable Animated Counter Component ---
// This component handles the number counting animation when it scrolls into view.
function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const node = ref.current;
      // Framer Motion's animate function smoothly transitions from 0 to the target value.
      const animation = animate(0, value, {
        duration: 2.5, // Slower duration for a more premium feel
        ease: "easeOut",
        onUpdate(latest) {
          // Update the text content of the span on each frame
          node.textContent = Math.round(latest).toLocaleString();
        }
      });
      
      // Cleanup function to stop the animation when the component unmounts
      return () => animation.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>0</span>; // Start at 0 before animation begins
}

// --- Data for Stat Cards ---
const stats = [
  { value: 118000, label: "Internship Opportunities", isPrimary: true, suffix: "K+" },
  { value: 25, label: "Sectors" },
  { value: 36, label: "States / UTs" },
  { value: 734, label: "Districts" },
  { value: 5, label: "Qualifications" },
];

// --- Main Page Component ---
export default function DashboardPage() {
  // --- Animation Variants for Framer Motion ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <main className="bg-gradient-to-b from-white via-blue-50 to-orange-50 py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- Section Title --- */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
        >
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900">Dashboard</h1>
            <p className="mt-3 text-lg text-slate-600">A real-time overview of our national impact.</p>
            <div className="mt-4 h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* --- Main Dashboard Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            
            {/* Left Side: Animated Map */}
            <motion.div 
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-3 relative h-[500px]"
            >
                {/* IMPORTANT: Replace with your actual map image path */}
                <Image
                    src="/india-map-img.png" // Example: /india-map.png
                    alt="Map of India with internship locations"
                    layout="fill"
                    objectFit="contain"
                />
                
            </motion.div>

            {/* Right Side: Stat Cards */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="lg:col-span-2 grid grid-cols-2 gap-6"
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`group relative rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300
                            ${stat.isPrimary ? 'col-span-2 bg-gradient-to-br from-blue-800 to-blue-900 text-white' : 'bg-white'}`
                        }
                    >
                         {/* Aurora Hover Effect: A blurred gradient that appears on hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition duration-500 pointer-events-none"></div>
                        <div className="relative z-10">
                            <h3 className={`text-4xl lg:text-5xl font-extrabold ${stat.isPrimary ? 'text-white' : 'text-orange-500'}`}>
                                <AnimatedCounter value={stat.value} />
                                {stat.suffix && <span>{stat.suffix.replace('K','')}</span>}
                                {stat.suffix?.includes('K') && <span className="text-3xl">K+</span>}
                            </h3>
                            <p className={`mt-2 text-sm font-medium ${stat.isPrimary ? 'text-blue-200' : 'text-slate-500'}`}>
                                {stat.label}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>

        {/* --- Partners Section --- */}
        <div className="mt-24">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl font-extrabold text-blue-900">Our Partners</h2>
                <div className="mt-3 h-1 w-20 bg-orange-500 mx-auto rounded-full"></div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center items-center gap-12 sm:gap-20"
            >
                 {/* IMPORTANT: Replace with your actual partner logo paths */}
                <Image src="/cii-logo.jpeg" alt="CII Logo" width={120} height={60} className="object-contain" />
                <Image src="/FICCI_logo.svg" alt="FICCI Logo" width={120} height={60} className="object-contain" />
            </motion.div>
        </div>
      </div>
    </main>
  );
}

