import type { Metadata } from "next";
import { Geist, Geist_Mono, Aboreto } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const aboreto = Aboreto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aboreto",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HeroUIProvider>
      <html lang="en" className={`${aboreto.variable} font-aboreto`}>
        <body
          className={`bg-background text-text ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          {children}
        </body>
      </html>
    </HeroUIProvider>
  );
}
