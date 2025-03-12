import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header/Header";
import Footer from "@/components/ui/Footer/Footer";
import clsx from "clsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dev-place",
  description: "Le blog sur le développement informatique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(geistSans.variable, geistMono.variable, "antialiased bg-customGrey text-primary font-[family-name:var(--font-geist-sans)]")}
      >
        <Header />
        <div className="pt-14">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
