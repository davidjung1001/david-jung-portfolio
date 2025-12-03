import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "My Portfolio",
  description: "Built with Next.js and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
