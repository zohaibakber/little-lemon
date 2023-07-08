'use client'
import {Button} from "@/components/ui/button";
import Image from "next/image";
import heropic from "./assets/restaurant.webp";
import Link from "next/link";
export default function Hero() {
    return(
        <div className={'flex h-96 bg-[#495E57] justify-center gap-x-20'}>
            <div className={'flex-col items-center ml-56 my-auto space-y-6'}>
                <h1 className={'text-6xl text-[#F4CE14] font-bold'}>
                    Little Lemon
                </h1>
                <h2 className={'text-2xl text-white font-bold' +
                    ''}>Chicago</h2>
                <p className={'text-white text-xl'}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <div>
                    <Link href={'/booking'}>
                        <Button>Reserve a table</Button>
                    </Link>
                </div>
            </div>
            <div className={'h-auto max-w-lg my-auto mr-56'}>
                <Image className={'rounded-2xl'} src={heropic} alt={"main"}/>
            </div>
        </div>
    )
}