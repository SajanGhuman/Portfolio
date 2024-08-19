import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans, Roboto_Mono } from "next/font/google";

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
      <body className="Roboto_Mono.className">{children}</body>
    </html>
  );
}
