import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Navbar } from "./components/Navbar/Navbar";
import { RightBar } from "./components/RightBar/RightBar";
import GoogleAnalytics from "./components/googleAnalyticsInitializer";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: "https://peruguitar.com",
  title: "Peru Guitar",
  description:
    "La primera comunidad de guitarristas en el Perú. Encuentra artículos, tutoriales y recursos para mejorar tu técnica y conocimiento de la guitarra.",
  openGraph: {
    title: "Peru Guitar",
    description: "La primera comunidad de guitarristas en el Perú.",
    url: "https://peruguitar.com",
    siteName: "Peru Guitar",
    images: [
      {
        url: "/og-peruguitar.png",
        width: 1200,
        height: 630,
        alt: "Peru Guitar - Comunidad de Guitarristas",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peru Guitar",
    description: "La primera comunidad de guitarristas en el Perú.",
    images: ["/og-peruguitar.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 text-zinc-100`}
      >
        <div className="h-screen w-full lg:flex overflow-hidden">
          <Navbar isMobileView={false} />

          <main className="flex-1 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <Navbar isMobileView={true} />

            <div className="w-full max-w-4xl mx-auto px-6 py-12">
              {children}
            </div>

            <Footer />
          </main>

          <aside className="w-80 border-l border-white/5 hidden xl:flex flex-col pt-12">
            <RightBar />
          </aside>
        </div>

        <GoogleAnalytics />
      </body>
    </html>
  );
}
