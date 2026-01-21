import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollSpyProvider } from "@/components/util/ScrollSpyContext";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Ferm Andrei",
  description: "Web-Portfolio-V3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollSpyProvider>
          <Nav />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="fixed inset-0 -z-10 h-full w-full object-cover"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>

          {children}
        </ScrollSpyProvider>
      </body>
    </html>
  );
}
