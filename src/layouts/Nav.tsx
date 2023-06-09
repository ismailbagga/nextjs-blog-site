import Image from "next/image";
import React, { FC, ReactNode } from "react";
import Logo from "../../public/icons/logo.jpg";
import TwitterLogo from "@/../public/icons/twitter.png";
import GithubLogo from "@/../public/icons/github.png";

import ColorThemeBtn from "@/components/ColorThemeBtn";
import Link from "next/link";

const NavLink: FC<{
  href: string;
  children?: ReactNode;
  text?: string;
  className?: string;
}> = (props) => {
  return (
    <Link
      href={props.href}
      className={`font-stf  text-2xl font-bold text-gray-700 transition-colors duration-200  hover:text-gray-900 ${props.className}`}
    >
      {props.children}
      {props.text}
    </Link>
  );
};

const Nav = () => {
  return (
    <nav className="flex flex-col space-y-3 px-10 py-8">
      <div id="first-layer" className="flex  items-center">
        <Link href="/" className="flex items-center space-x-3">
          <Image className="rounded-full" src={Logo} alt="face" height={60} placeholder="blur" />
          <h1 className="block font-dsf text-4xl">Ismail Bagga</h1>
        </Link>
        <ColorThemeBtn className="ml-auto" />
      </div>
      <div id="second-layer" className="flex items-center">
        <NavLink href="/blogs" text="Blogs" className="mr-3" />
        <NavLink href="/tags" text="Tags" />
        <div className="ml-auto flex space-x-2">
          <NavLink href="https://twitter.com/bagga_ismail">
            <Image src={TwitterLogo} alt="Twitter Logo" height={32} />
          </NavLink>
          <NavLink href="https://github.com/ismailbagga">
            <Image src={GithubLogo} alt="Github Logo" height={32} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
