import Image from 'next/image'
import {Button} from "@/components/ui/button";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main className="">
        <Header/>
        <Hero/>
        <Reviews/>
        <Footer/>
    </main>
  )
}
