import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JG University | Shape Your Future in Excellence",
  description:
    "A premier institution offering world-class programs in engineering, business, law, and more. Join 5000+ students building tomorrow.",
  keywords: ["university", "education", "B.Tech", "MBA", "admissions"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(playfair.variable, dmSans.variable, "font-sans", geist.variable)}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
