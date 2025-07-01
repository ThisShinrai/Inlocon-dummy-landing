import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";

export const metadata: Metadata = {
  title: "Inlocon - Öffentliche Aufträge für Ihre Branche",
  description:
    "Mehr als 1 Mio. Ausschreibungen – sofort durchsuchbar. Finden Sie relevante Aufträge schnell, einfach und passend.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${geist.variable}`}>
      <body className="flex min-h-screen flex-col bg-white text-gray-800">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
