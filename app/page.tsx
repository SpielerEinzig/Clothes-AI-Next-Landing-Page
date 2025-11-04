import CallToAction from "@/components/call_to_action";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how_it_works";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clothes AI - AI Virtual Try On & Outfit Maker App",
  description:
    "Transform your wardrobe with AI. Instantly see yourself in any outfit with our virtual try-on app. Download now and reimagine your style!",
};

export default function Home() {
  return (
    <div className="w-full bg-background">
      <Navbar />
      <main className="">
        <Hero />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
