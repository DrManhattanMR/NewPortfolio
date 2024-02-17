
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from './components/Navbar';
import  Footer  from './components/Footer'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manfred Solution",
  description: "Software Developer, Desarrollo de apps y paginas web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
