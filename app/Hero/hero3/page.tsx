import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function HeroWithVideo() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center  px-6 py-12">
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl text-white sm:text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-primary">Dashly</span>
        </h1>
        <p className="mb-6 text-muted-foreground text-sm sm:text-base">
          Powerful analytics for your SaaS in one simple dashboard.
        </p>
        <AspectRatio ratio={16 / 9} className="bg-black rounded-lg overflow-hidden shadow-lg max-w-full">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            className="w-full h-full"
            allowFullScreen
          />
        </AspectRatio>
      </div>
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl text-white sm:text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-primary">Dashly</span>
        </h1>
        <p className="mb-6 text-muted-foreground text-sm sm:text-base">
          Powerful analytics for your SaaS in one simple dashboard.
        </p>
        <AspectRatio ratio={16 / 9} className="bg-black rounded-lg overflow-hidden shadow-lg max-w-full">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            className="w-full h-full"
            allowFullScreen
          />
        </AspectRatio>
      </div>
       <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* First aspect ratio box */}
      <div className="aspect-w-16 aspect-h-9 w-full md:w-1/2 bg-gray-800 rounded-md overflow-hidden">
       <AspectRatio ratio={16 / 9} className="bg-black rounded-lg overflow-hidden shadow-lg max-w-full">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            className="w-full h-full"
            allowFullScreen
          />
        </AspectRatio>
      </div>

      {/* Second aspect ratio box */}
      <div className="aspect-w-16 aspect-h-9 w-full md:w-1/2 bg-gray-800 rounded-md overflow-hidden">
       <AspectRatio ratio={16 / 9} className="bg-black rounded-lg overflow-hidden shadow-lg max-w-full">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            className="w-full h-full"
            allowFullScreen
          />
        </AspectRatio>
      </div>
    </div>
    </section>
  );
}
