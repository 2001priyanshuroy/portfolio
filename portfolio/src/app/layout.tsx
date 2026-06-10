import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Priyanshu Roy | Backend Engineer",
  description:
    "Backend Engineer with 2+ years of experience building scalable microservices using Java and Spring Boot. Specialized in system design, API optimization, and CI/CD.",
  keywords: [
    "Backend Engineer",
    "Java",
    "Spring Boot",
    "Microservices",
    "System Design",
    "Full Stack Developer",
  ],
  authors: [{ name: "Priyanshu Roy", url: "https://priyanshuroy.dev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://priyanshuroy.dev",
    siteName: "Priyanshu Roy",
    title: "Priyanshu Roy | Backend Engineer",
    description:
      "Backend Engineer with 2+ years of experience building scalable microservices using Java and Spring Boot.",
    images: [
      {
        url: "https://priyanshuroy.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Priyanshu Roy - Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Roy | Backend Engineer",
    description:
      "Backend Engineer with 2+ years of experience building scalable microservices using Java and Spring Boot.",
    creator: "@priyanshuroy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} bg-dark text-white antialiased`}>
        <div
          className="fixed top-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50 origin-left"
          id="scroll-progress"
          style={{ transform: "scaleX(0)" }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
