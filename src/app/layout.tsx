import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Austin Mubaya | Information Systems Graduate & IT Specialist",
  description:
    "Portfolio of Austin Mubaya — BSc Information Systems Graduate from University of Malawi (UNIMA), Cisco Certified in Cyber Threat Management & Introduction to Cybersecurity, and ICTAM Member. Specializing in Systems Analysis, Database Management, and GIS Web Applications.",
  keywords: [
    "Austin Mubaya",
    "Information Systems",
    "University of Malawi",
    "UNIMA",
    "Systems Analysis and Design",
    "Database Management",
    "GIS EduMap",
    "HealthLocator WebApp",
    "Cyber Threat Management",
    "Introduction to Cybersecurity",
    "Cisco Networking Academy",
    "ICTAM Malawi",
    "Business Analytics",
    "Mzuzu Malawi",
  ],
  authors: [{ name: "Austin Mubaya" }],
  creator: "Austin Mubaya",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Austin Mubaya | Information Systems Graduate & IT Specialist",
    description:
      "BSc Information Systems graduate from University of Malawi. Systems Analysis, Database Management, Cisco Cyber Threat Management, and GIS Web Systems.",
    siteName: "Austin Mubaya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Mubaya | Information Systems Graduate & IT Specialist",
    description:
      "Information Systems graduate from University of Malawi (UNIMA) with Cisco Cyber Threat Management certification and ICTAM membership.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#030712] text-gray-100 font-sans selection:bg-white/10 selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
