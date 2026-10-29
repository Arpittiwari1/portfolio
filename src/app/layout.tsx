import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/ui/MotionProvider";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arpit-builds.vercel.app"),
  title: "Arpit Tiwari | Full-Stack Developer",
  description:
    "Arpit Tiwari, Full-Stack Developer. React, TypeScript, FastAPI and Node.js apps with AI features and workflow automation.",
  keywords: [
    "Arpit Tiwari",
    "Full-Stack Developer",
    "Full-Stack Engineer",
    "Software Engineer",
    "Backend Engineer",
    "AI Applications Engineer",
    "FastAPI",
    "Node.js",
    "React",
    "TypeScript",
    "Python",
    "Ollama",
    "n8n",
  ],

  authors: [{ name: "Arpit Tiwari" }],
  creator: "Arpit Tiwari",

  alternates: {
    canonical: "https://arpit-builds.vercel.app",
  },

  icons: {
    icon: "/favicon.svg",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arpit-builds.vercel.app",
    title: "Arpit Tiwari | Full-Stack Developer",
    description:
      "Full-Stack Developer building React, TypeScript, FastAPI, and Node.js applications, AI-powered features, and workflow automation.",
    siteName: "Arpit Tiwari Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Arpit Tiwari | Full-Stack Developer",
    description:
      "Full-Stack Developer building React, TypeScript, FastAPI, and Node.js applications, AI-powered features, and workflow automation.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0f15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
