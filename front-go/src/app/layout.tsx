import type { Metadata } from "next";
import { Finlandica } from "next/font/google";
import "./globals.css";
import { NavbarMyMenu } from "./components/Navbar";
import { FooterMyBar } from "./components/FooterBar";

const finlandica = Finlandica({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // хэрэгтэй жинүүдийг жагсаана
  display: "swap",
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
    <html lang="en">
      <body
        className={`${finlandica.className} antialiased flex flex-col w-screen justify-center`}
      >
        <div className="flex flex-col w-[1440px] mx-auto">
          <NavbarMyMenu />
          {children}
          <FooterMyBar />
        </div>
      </body>
    </html>
  );
}
