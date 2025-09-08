"use client";
import Link from "next/link";
import Image from "next/image";

// Import Clerk's components
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from "@clerk/nextjs";

// ShadCN and Lucide Icon Imports
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
    Menu,
    Home,
    GalleryVertical,
    ClipboardCheck,
    Smartphone,
    LifeBuoy,
    BookOpenCheck, // Icon for Guidelines
    MessageSquareQuote, // Icon for Compendium
} from "lucide-react";


export default function Header() {
    return (
        // A parent div is used to make both the top bar and nav bar sticky together.
        <div className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow pb-1 border-b border-white/80">
            <header className="flex items-center justify-between px-6 sm:px-12 py-4 h-20">
                {/* Logo & Branding */}
                <div className="flex items-center gap-4">
                    <Image
                        src="/mca-logo.png"
                        alt="Ministry of Corporate Affairs"
                        width={135}
                        height={50}
                        className="object-contain hidden lg:block"
                        priority
                    />
                    <Image
                        src="/pm-internship-logo.jpg"
                        alt="PM Internship Scheme"
                        width={135}
                        height={50}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Desktop Auth Section */}
                <div className="hidden md:flex items-center gap-4">
                    <SignedOut>
                        <div className="flex gap-4">
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
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <Image
                        src="/vikshit_img.svg"
                        alt="Viksit Bharat"
                        width={135}
                        height={50}
                        className="object-contain hidden lg:block"
                        priority
                    />
                </div>

                {/* --- Mobile Header Actions --- */}
                <div className="md:hidden flex items-center gap-1 border p-1 border-gray-500/80 rounded-full bg-white">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="px-4 py-2 rounded-md font-semibold text-sm bg-blue-900 text-white">
                                Sign In
                            </button>
                        </SignInButton>
                    </SignedOut>

                    {/* --- Mobile Menu (Hamburger) --- */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="p-2 rounded-md">
                                <Menu className="h-6 w-6 text-blue-900" />
                                <span className="sr-only">Open menu</span>
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white p-0">
                            <div className="flex h-full flex-col">
                                <SheetHeader className="p-4 border-b">
                                    <SheetTitle>
                                        <Image
                                            src="/pm-internship-logo.jpg"
                                            alt="PM Internship Scheme"
                                            width={120}
                                            height={40}
                                            className="object-contain"
                                        />
                                    </SheetTitle>
                                </SheetHeader>
                                {/* Mobile nav links remain inside the sheet */}
                                <nav className="flex-grow p-4 space-y-2 text-lg font-medium">
                                    <Link href="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-700 transition-all hover:bg-slate-100">
                                        <Home className="h-5 w-5" /> Home
                                    </Link>                               
                                    <Link href="#gallery" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-700 transition-all hover:bg-slate-100">
                                        <GalleryVertical className="h-5 w-5" /> Gallery
                                    </Link>
                                    <Link href="#eligibility" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-700 transition-all hover:bg-slate-100">
                                        <ClipboardCheck className="h-5 w-5" /> Eligibility
                                    </Link>
                                    <Link href="#mobileapp" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-700 transition-all hover:bg-slate-100">
                                        <Smartphone className="h-5 w-5" /> Mobile App
                                    </Link>
                                    <Link href="#support" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-700 transition-all hover:bg-slate-100">
                                        <LifeBuoy className="h-5 w-5" /> Support
                                    </Link>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>

            {/* --- MOVED: Desktop Navigation Bar --- */}
            {/* This container is now below the header and styled to match the image */}
            <nav className="hidden md:flex items-center rounded-2xl bg-blue-950 py-1 mx-6">
                <div className="flex items-center gap-8 ml-20 font-medium text-lg">
                    <Link href="/" className="group text-white transition duration-300">
                        <div className="flex items-center gap-1"> <Home className="h-5 w-5" /> Home </div>
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
                    </Link>
                    <Link href="#gallery" className="group text-white transition duration-300">
                        <div className="flex items-center gap-1"> <GalleryVertical className="h-5 w-5" /> Gallery </div>
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
                    </Link>
                    <Link href="#eligibility" className="group text-white transition duration-300">
                        <div className="flex items-center gap-1"> <ClipboardCheck className="h-5 w-5" /> Eligibility </div>
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
                    </Link>
                    <Link href="#mobileapp" className="group text-white transition duration-300">
                        <div className="flex items-center gap-1"> <Smartphone className="h-5 w-5" /> Mobile App </div>
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
                    </Link>
                    <Link href="#support" className="group text-white transition duration-300">
                        <div className="flex items-center gap-1"> <LifeBuoy className="h-5 w-5" /> Support </div>
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
                    </Link>
                </div>
            </nav>
        </div>
    );
}