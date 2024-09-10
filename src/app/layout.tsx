import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pomoc dla Trójki Klasowej",
  description: "Wydarzenia za które Trójka klasowa bierze odpowiedzialność",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " relative font-inter antialiased"}>{children}</body>
    </html>
  );
}
