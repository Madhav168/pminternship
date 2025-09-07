import { ClerkProvider } from "@clerk/nextjs"; // Import ClerkProvider
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PM Internship Scheme | India",
  description:
    "The PM Internship Scheme is a government initiative providing internships to Indian youth in top companies, enabling practical industry experience, skill development, and enhanced employability.",
};

export default function RootLayout({ children }) {
  return (
    // Wrap the entire application with ClerkProvider
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
