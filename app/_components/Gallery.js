"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Youtube, Linkedin, Twitter, ArrowRight, MapPin } from 'lucide-react';

// --- Mock Data ---
const socialPosts = [
  {
    platform: 'Instagram',
    icon: Instagram,
    color: 'text-pink-500',
    description: 'Follow our journey and see behind-the-scenes moments.',
    link: 'https://www.instagram.com/mca21india/',
  },
  {
    platform: 'YouTube',
    icon: Youtube,
    color: 'text-red-600',
    description: 'Watch event highlights, interviews, and success stories.',
    link: 'https://www.youtube.com/@MCA21India',
  },
  {
    platform: 'LinkedIn',
    icon: Linkedin,
    color: 'text-blue-700',
    description: 'Connect professionally and stay updated on opportunities.',
    link: 'https://www.linkedin.com/company/mca21india/',
  },
  {
    platform: 'Twitter',
    icon: Twitter,
    color: 'text-sky-500',
    description: 'Get the latest news and announcements in real-time.',
    link: 'https://x.com/MCA21India',
  },
];

const events = [
  {
    image: '/northeast-round-table.jpg',
    title: 'North-East Roundtable on PM Internship Scheme',
    date: '10th July 2025',
    location: 'Shillong, Meghalaya',
    description: 'Leaders, industry, and youth converge to drive PM Interns forward.',
  },
  {
    image: '/PM-Dehradun.webp',
    title: 'Meaningful Moments in Dehradun',
    date: '17th June 2025',
    location: 'Dehradun',
    description: 'PM Interns engage in insightful discussions and networking.',
  },
  {
    image: '/pm-hyd.jpeg',
    title: 'Celebrating the Spirit of Learning in Hyderabad',
    date: '20th June 2025',
    location: 'Hyderabad',
    description: 'A vibrant session celebrating innovation, and youth leadership.',
  },
  {
    image: '/pm-intern.jpg',
    title: 'Official Launch of the PM Internship Portal',
    date: '1st May 2025',
    location: 'New Delhi',
    description: 'The inauguration ceremony of the national internship platform.',
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

// --- Helper Components ---
const SectionTitle = ({ children }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">{children}</h2>
    <div className="mt-3 h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
  </div>
);

// --- Events Carousel with Auto Scroll ---
const EventsCarousel = () => {
  // Duplicate events for seamless loop
  const duplicatedEvents = [...events, ...events];

  return (
    <div className="relative w-full overflow-hidden group">
      {/* Fading gradient edges */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-8 animate-scroll group-hover:[animation-play-state:paused]"
      >
        {duplicatedEvents.map((event, index) => (
          <motion.div
            key={`${event.title}-${index}`}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="flex-shrink-0 w-[90vw] sm:w-[45vw] lg:w-[30vw] bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2 truncate">{event.title}</h3>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                <span>{event.date}</span>
                <span className="flex items-center gap-1.5 truncate">
                  <MapPin size={14} />{event.location}
                </span>
              </div>
              <p className="text-slate-600 mb-4 h-12 text-ellipsis overflow-hidden">{event.description}</p>
              <Link href="#" className="inline-flex items-center gap-2 font-semibold text-orange-500 group/link">
                View Event
                <ArrowRight size={18} className="transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// --- Main Page Component ---
export default function GalleryPage() {
  return (
    <main id='gallery' className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20 overflow-x-hidden">
      {/* Add custom animation keyframes */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20"
      >
        <div className="text-center mb-20">
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
            Our <span className="text-orange-500">Gallery</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Explore moments from our events and connect with us on social media to stay updated with the latest happenings.
          </motion.p>
        </div>
        
        {/* Social Media Gallery */}
        <section className="mb-24">
          <SectionTitle>Social Media Gallery</SectionTitle>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {socialPosts.map((post) => (
              <motion.a
                key={post.platform}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-orange-500"
              >
                <div className="flex items-center gap-4 mb-3">
                  <post.icon className={`w-8 h-8 ${post.color}`} />
                  <h3 className="text-xl font-bold text-blue-900">{post.platform}</h3>
                </div>
                <p className="text-slate-600">{post.description}</p>
              </motion.a>
            ))}
          </motion.div>
        </section>

        {/* Events Gallery */}
        <section>
          <SectionTitle>Events Gallery</SectionTitle>
          <EventsCarousel />
        </section>
      </motion.div>
    </main>
  );
}
