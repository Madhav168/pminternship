"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Youtube, Instagram, Linkedin, Twitter, MapPin, Mail, Phone, ArrowUp } from 'lucide-react';

// --- Reusable Link Component for Footer ---
const FooterLink = ({ href, children }) => (
    <Link href={href} className="text-slate-300 hover:text-orange-400 transition-colors duration-300">
        {children}
    </Link>
);

// --- Main Footer Component ---
export default function Footer() {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-blue-900 text-white relative pt-20">
            {/* Animated Wave SVG Background */}
            <div className="absolute top-0 left-0 w-full h-24 overflow-hidden leading-[0]">
                <svg className="relative block w-full h-[100px] animate-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: '200%', transform: 'translate3d(0,0,0)' }}>
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current text-blue-900"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    
                    {/* Column 1: Branding & Social Media */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-4 bg-white p-3 rounded-lg">
                            <Image src="/mca-logo.png" alt="Ministry of Corporate Affairs" width={100} height={40} className="object-contain" />
                            <Image src="/bisag-logo.png" alt="BISAG-N Logo" width={100} height={40} className="object-contain" />
                        </div>
                        <h3 className="text-lg font-semibold mt-6 mb-4 text-orange-400">Social Media</h3>
                        <div className="flex items-center gap-4">
                            <motion.a href="https://www.youtube.com/@MCA21India" whileHover={{ y: -4, scale: 1.1 }} className="bg-white/10 p-3 rounded-full text-white hover:bg-red-500 transition-colors">
                                <Youtube size={20} />
                            </motion.a>
                             <motion.a href="https://www.instagram.com/mca21india/" whileHover={{ y: -4, scale: 1.1 }} className="bg-white/10 p-3 rounded-full text-white hover:bg-pink-500 transition-colors">
                                <Instagram size={20} />
                            </motion.a>
                             <motion.a href="https://www.linkedin.com/company/mca21india/" whileHover={{ y: -4, scale: 1.1 }} className="bg-white/10 p-3 rounded-full text-white hover:bg-blue-600 transition-colors">
                                <Linkedin size={20} />
                            </motion.a>
                             <motion.a href="https://x.com/MCA21India" whileHover={{ y: -4, scale: 1.1 }} className="bg-white/10 p-3 rounded-full text-white hover:bg-sky-500 transition-colors">
                                <Twitter size={20} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Column 2: Get to Know Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-orange-400">Get to Know</h3>
                        <div className="flex flex-col gap-3">
                            <FooterLink href="#">Partner Companies</FooterLink>
                            <FooterLink href="#">Guidelines</FooterLink>
                            <FooterLink href="#">FAQs</FooterLink>
                            <FooterLink href="#">Manuals</FooterLink>
                            <FooterLink href="#">Videos</FooterLink>
                            <FooterLink href="#">Privacy Policy</FooterLink>
                        </div>
                    </div>

                    {/* Column 3: Contact Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-orange-400">Contact Us</h3>
                        <div className="flex flex-col gap-4 text-slate-300">
                            <div className="flex items-start gap-3">
                                <MapPin size={20} className="mt-1 text-orange-400 flex-shrink-0" />
                                <span>A Wing, 5th Floor, Shastri Bhawan, Dr Rajendra Prasad Rd, New Delhi-110001</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={20} className="text-orange-400 flex-shrink-0" />
                                <a href="mailto:pminternship[at]mca.gov.in" className="hover:text-orange-400 transition-colors">pminternship[at]mca.gov.in</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={20} className="text-orange-400 flex-shrink-0" />
                                <span>1800 11 6090</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Download Mobile App */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-orange-400">Download Mobile App</h3>
                        <p className="text-slate-300 mb-4">Click the button below to download the app or scan the QR code.</p>
                        <div className="flex items-center gap-4">
                             <Link href="https://play.google.com/store/apps/details?id=com.mca.pm_internship">
                                {/* Replace with your actual 'Get it on Google Play' image */}
                                <Image src="/get-it-on-google-play.png" alt="Get it on Google Play" width={135} height={40} className="rounded-md" />
                            </Link>
                             {/* Replace with your actual QR code image */}
                            <Image src="/play-store-qr-code.png" alt="QR Code" width={80} height={80} className="rounded-md bg-white p-1" />
                        </div>
                    </div>
                </div>

                {/* --- Bottom Bar --- */}
                <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-slate-400">
                    <p>This site is owned by Ministry of Corporate Affairs.</p>
                    <p>&copy; {new Date().getFullYear()} PM-INTERNSHIP. All Rights Reserved. Technical collaboration with BISAG-N.</p>
                </div>

                 {/* --- Scroll to Top Button --- */}
                <motion.button
                    onClick={handleScrollToTop}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute -top-6 right-10 bg-orange-500 p-4 rounded-full shadow-lg text-white"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} />
                </motion.button>
            </div>
        </footer>
    );
}
