

import Accordion from "@/components/ui/accordionself";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      <Image
        src="/vercel.svg" 
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      
      <div className="relative z-20 text-center max-w-2xl px-4">
        <h1 className="text-5xl font-bold mb-6">Welcome to My Platform</h1>
        <p className="text-lg mb-6">Explore various Hero Sections below, and get to know the core features of the platform.</p>
        
        {/* Accordion for Hero Sections */}
        <div className="space-y-4 mb-8">
          <Accordion />
        </div>

        <Button className="text-lg px-6 py-3">Get Started</Button>
      </div>
    </div>
  );
}
