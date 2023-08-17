
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";

export const metadata = {
  title: "LittleLemon",
  description: "Little Lemon Restaurant",
}

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
