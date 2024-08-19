import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans, Roboto_Mono } from "next/font/google";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="Roboto_Mono.className">
        <Navbar />
        {children} <Footer />
      </body>
    </html>
  );
}
