import type { Metadata } from "next";
import { Geist, Geist_Mono, Finlandica } from "next/font/google";
import "./globals.css";
import { NavbarMyMenu } from "./components/Navbar";
import { FooterMyBar } from "./components/FooterBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const finlandica = Finlandica({
  variable: "--font-finlandica",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "News Go",
  description: "Blog site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${finlandica.variable}`}>
      <body
        className={`${finlandica.variable}  antialiased flex flex-col w-screen justify-center`}
      >
        <div className="w-full">
          <NavbarMyMenu />
          {children}
          <FooterMyBar />
        </div>
      </body>
    </html>
  );
}
