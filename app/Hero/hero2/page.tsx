import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white">
      {/* Left: Background Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-screen">
        
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/70" />
        <Image
          src="/imfadi.jpg"
          alt="Background"
          className="object-cover"
          priority
          fill
        />
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 px-6 py-12 md:py-0 flex flex-col items-start justify-center space-y-6 max-w-xl">
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
    </div>
  );
}
