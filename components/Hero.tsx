"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heropic from "./assets/restaurant.webp";
import Link from "next/link";
export default function Hero() {
  return (
    <main className={"bg-[#495E57] grid lg:grid-cols-2 justify-center py-3"}>
      <section className={"flex flex-col items-center gap-3 lg:my-auto lg:gap-y-5"}>
        <h1 className={"text-6xl text-primary font-bold"}>Little Lemon</h1>
        <h2 className={"text-2xl text-white font-bold" + ""}>Chicago</h2>
        <p className={"text-white text-xl text-center"}>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <div className="invisible lg:visible">
          <Link href={"/booking"}>
            <Button>Reserve a table</Button>
          </Link>
        </div>
      </section>
      <div className={"max-h-fit m-4"}>
        <Image className={"rounded-2xl"} src={heropic} alt={"main"} />
      </div>
      <div className="mx-auto lg:hidden">
        <Link href={"/booking"}>
          <Button>Reserve a table</Button>
        </Link>
      </div>
    </main>
  );
}
