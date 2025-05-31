import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeroWithForm() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Join the Web3 Weekly</h1>
        <p className="text-muted-foreground mb-6 text-sm sm:text-base">
          A newsletter to stay ahead in decentralized tech.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <Input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full sm:w-auto flex-grow"
          />
          <Button type="submit" className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
