"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/assets/logo.svg";
import { Button } from "./ui/button";
import HamNav from "./HamNav";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Menu", link: "/menu" },
  { name: "Reserve a Table", link: "/booking" },
  { name: "About Us", link: "/about" },
];

function Header() {
  
  return (
    <nav className={"flex flex-col items-center justify-center lg:grid grid-cols-3 justify-items-center p-2"}>
      <div className="h-10 cursor-pointer my-auto">
        <Image className="" src={Logo} alt={"logo"}/>
      </div>
      <HamNav />
      <div
        className={
          "hidden lg:flex justify-center items-center gap-5 text-xl font-medium mt-1"
        }
      >
        {navLinks.map((link) => (
          <Link href={link.link} key={link.name}>
            <div className="whitespace-nowrap">
            {link.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="invisible lg:visible hover:scale-105 hover:transition-all">
          <Link href={'/signup'}>
            <Button>Sign Up</Button>
          </Link>
      </div>
    </nav>
  );
}

export default Header;
