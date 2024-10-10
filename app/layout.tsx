
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ThemeProvider } from '@/app/_components/ThemeProvider';
import { Toaster } from "@/components/ui/toaster";  // Import Toaster component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Usama",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar/>
          <div className="relative flex top-24 left-0 right-0 bottom-28 justify-center mx-auto container w-[100%] h-[100%] rounded-[10px]">
            {children}
          </div>
          <Toaster />  {/* Add the Toaster component here */}
        </ThemeProvider>
      </body>
    </html>
  );
}
