import Image from "next/image";
import React from "react";
import Logo from "../../public/logo.jpg";
import ColorThemeBtn from "@/components/ColorThemeBtn";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className="flex flex-col space-y-10 py-3 px-3">
      <div id="first-layer" className="flex  items-center">
        <Link href="/" className="flex space-x-3 items-center">
          <Image className="rounded-full" src={Logo} alt="face" height={40} placeholder="blur" />
          <h1 className="block font-dsf text-2xl">Ismail Bagga</h1>
        </Link>
        <ColorThemeBtn className="ml-auto" />
      </div>
      <div id="second-layer"></div>
    </nav>
  );
};

export default Nav;
