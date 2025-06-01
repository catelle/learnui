import { Badge } from '@/components/ui/badge'
import { Rocket } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-opacity-60 backdrop-blur-lg"></div>
      
      <div className="z-10 text-center p-6 animate-fade-in">
        {/* Hero Title */}
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4">
          Launching Your Future with <span className="text-yellow-400">Innovation</span>
        </h1>
        
        {/* Badge for Beta Version */}
        <div className="mb-6">
          <Badge variant="secondary" className="text-sm uppercase bg-indigo-900 px-4 py-2 rounded-full inline-flex items-center">
            <Rocket className="mr-2" size={16} /> Beta Version
          </Badge>
        </div>

        {/* Call to Action */}
        <p className="mb-8 text-xl sm:text-2xl max-w-lg mx-auto opacity-80">
          Be part of the revolution. Join us in building something amazing!
        </p>
        
        <a href="#cta" className="inline-flex items-center px-6 py-3 text-lg font-semibold bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300 outline-none border-2 border-transparent hover:border-white">
          Get Started
        </a>
      </div>

      {/* Animated Background Element (Optional) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-700 via-purple-700 to-transparent"></div>
    </section>
  )
}

export default HeroSection
