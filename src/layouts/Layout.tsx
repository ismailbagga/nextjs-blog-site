import React, { FC, ReactNode } from "react";
import { Inter, Stint_Ultra_Condensed } from "next/font/google";
import localFont from "next/font/local";

import Nav from "./Nav";
import Footer from "./Footer";
import path from "path";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const fontPath = path.join(process.cwd(), "src", "fonts", "hack");

const hack = localFont({ src: "../fonts/hack/Hack-Regular.ttf", variable: "--font-hack" });

const stintUltra = Stint_Ultra_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-stint-ultra",
});
const Layout: FC<{ children: ReactNode }> = (props) => {
  return (
    <main
      className={`${inter.variable} ${stintUltra.variable} ${hack.variable} relative z-0 min-h-screen   bg-cd-gray dark:bg-cd-dark dark:text-white`}
    >
      <div className="container mx-auto max-w-[120rem] ">
        <Nav />
        {props.children}
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
