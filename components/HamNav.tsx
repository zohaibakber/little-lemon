import React from "react";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { useTheme } from "next-themes"
import { any } from "zod";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Menu", link: "/menu" },
  { name: "Reserve a Table", link: "/booking" },
  { name: "About Us", link: "/about" },
];

const HamNav = () => {
  const [open, setOpen] = useState(false);
  const {theme, setTheme} = useTheme()

  return (
    <>
      <Button
        className="absolute right-1 top-2 lg:hidden transition-all"
        variant={"ghost"}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </Button>
      <div className={cn("w-screen pt-2", open ? "w-full" : "hidden")}>
        <div className="flex flex-col items-center w-full gap-y-3">
          {navLinks.map((link) => (
            <div>
              <Link href={link.link} key={link.name}>
                {link.name}
              </Link>
              <Separator />
            </div>
          ))}
          <Button variant={'outline'} onClick={() => {
            theme === 'dark'? setTheme('light') : setTheme('dark')
          }}>
            Change Theme
          </Button>
        </div>
      </div>
    </>
  );
};

export default HamNav;
