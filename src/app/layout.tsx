import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ToasterProvider } from "@/providers/toast-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Bud",
  description: "Blog website to read and write.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>
      <Navbar />
        <ToasterProvider />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
