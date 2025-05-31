import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      {/* Left: Image (no overlay, full color) */}
      <div className="relative w-full md:w-1/2 h-64 md:h-screen">
        <Image
          src="/imfadi.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Right: Text Content */}
      <div className="w-full md:w-1/2 px-6 py-12 flex flex-col items-start justify-center max-w-xl mx-auto">
        <div className="text-left">
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
