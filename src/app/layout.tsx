import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arpit-builds.vercel.app"),

  title: "Arpit Tiwari | Software Engineer",

  description:
    "Arpit Tiwari — Software Engineer focused on backend systems, full-stack development, AI-powered applications, and workflow automation.",

  keywords: [
    "Arpit Tiwari",
    "Software Engineer",
    "Backend Engineer",
    "Full-Stack Engineer",
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
    title: "Arpit Tiwari | Software Engineer",
    description:
      "Software Engineer focused on backend systems, full-stack development, AI-powered applications, and workflow automation.",
    siteName: "Arpit Tiwari Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Arpit Tiwari | Software Engineer",
    description:
      "Software Engineer focused on backend systems, full-stack development, AI-powered applications, and workflow automation.",
  },
};

export const viewport: Viewport = {
  themeColor: "#090d16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
