import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
    
       <Image
    src="/imfadi.jpg"
    alt="Background"
    fill
    className="object-cover z-0"
  />
  <div className="absolute inset-0 bg-black/85 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Focus Better with <span className="text-primary">Flowify</span>
        </h1>
        <p className="text-muted-foreground mb-6 text-sm sm:text-base">
          The ultimate productivity app to help you focus and get things done.
        </p>
        <Button className="text-sm sm:text-base px-6 py-3">Get Started</Button>
 

      </div>
    </div>
  );
}
