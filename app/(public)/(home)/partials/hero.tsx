import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div
      className="h-screen flex-center relative"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #000000 0%, #000000 80%, transparent 100%)',
          opacity: 0.6,
        }}
      />
      
      <div className="custom-container max-w-[712px] flex flex-col items-center gap-6 md:gap-10 relative z-10">
        <div className="flex flex-col items-center gap-1 md:gap-2">
          <h1 className="text-center text-white font-extrabold text-display-lg md:text-display-2xl">
            Explore Culinary Experiences
          </h1>
          <p className="text-center text-white font-bold text-lg md:text-display-xs">
            Search and refine your choice to discover the perfect restaurant.
          </p>
        </div>
        <div className="bg-white w-full h-12 md:h-14 px-4 md:px-6 rounded-full flex-start gap-1.5">
          <Search className="shrink-0 text-neutral-500 size-5" />
          <Input
            type="text"
            placeholder="Search restaurants, food and drink"
            className="flex-1 p-0 border-0 outline-0 focus:outline-0 text-sm md:text-md placeholder:text-neutral-600"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero