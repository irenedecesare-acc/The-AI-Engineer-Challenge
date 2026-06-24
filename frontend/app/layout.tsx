import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grove — your coach",
  description:
    "A warm, supportive coach for stress, focus, motivation, and confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${figtree.variable} ${fraunces.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
