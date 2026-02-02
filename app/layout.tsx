import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "ProDev Consulting Limited | Professional Development Consulting Services",
    template: "%s | ProDev Consulting Limited",
  },
  description:
    "ProDev Consulting Limited provides professional consulting and project management services for development programs across public and private sectors in Nigeria and Africa.",
  keywords: [
    "consulting",
    "project management",
    "monitoring and evaluation",
    "MEL",
    "development programs",
    "Nigeria",
    "Africa",
    "technical advisory",
    "capacity building",
    "digital transformation",
  ],
  authors: [{ name: "ProDev Consulting Limited" }],
  creator: "ProDev Consulting Limited",
  metadataBase: new URL("https://prodevconsulting.ng"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://prodevconsulting.ng",
    siteName: "ProDev Consulting Limited",
    title: "ProDev Consulting Limited | Professional Development Consulting Services",
    description:
      "Professional consulting and project management services enhancing design, delivery, monitoring, and evaluation of development programs.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ProDev Consulting Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProDev Consulting Limited",
    description:
      "Professional consulting and project management services for development programs.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
    ],
    apple: [
      { url: "/favicon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
