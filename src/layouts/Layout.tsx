import React, { FC, ReactNode } from "react";
import { Inter, Stint_Ultra_Condensed } from "next/font/google";
import Nav from "./Nav";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const stintUltra = Stint_Ultra_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-stint-ultra",
});
const Layout: FC<{ children: ReactNode }> = (props) => {
  return (
    <main className={`${inter.variable} ${stintUltra.variable}`}>
      <Nav />
      {props.children}
      <Footer />
    </main>
  );
};

export default Layout;
