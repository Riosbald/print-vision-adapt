
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Custom Family Gifts Made in Nigeria",
      subtitle: "Personalized gifts that celebrate your loved ones with premium quality printing",
      description: "Create memorable family moments with our custom printing services. From photo books to personalized apparel, we bring your family memories to life.",
      cta: "Start Creating",
      bgColor: "bg-gradient-to-br from-primary to-primary/80",
      price: "Starting from ₦2,500"
    },
    {
      id: 2,
      title: "Professional Corporate Printing Services",
      subtitle: "Elevate your business with high-quality branded materials",
      description: "Professional business cards, letterheads, brochures, and corporate gifts that make your brand stand out in the Nigerian market.",
      cta: "Get Quote",
      bgColor: "bg-gradient-to-br from-slate-800 to-slate-700",
      price: "Bulk discounts available"
    },
    {
      id: 3,
      title: "Traditional Nigerian Wedding Items",
      subtitle: "Beautiful custom wedding favors and ceremonial materials",
      description: "Celebrate your special day with custom wedding invitations, favor boxes, and traditional ceremony materials crafted with care.",
      cta: "Plan Wedding",
      bgColor: "bg-gradient-to-br from-rose-600 to-rose-500",
      price: "Starting from ₦1,800"
    },
    {
      id: 4,
      title: "Custom Art Prints & Canvas Collection",
      subtitle: "Transform your space with personalized artwork",
      description: "High-resolution canvas prints, framed art, and custom wall decorations that add personality to any space.",
      cta: "Browse Art",
      bgColor: "bg-gradient-to-br from-indigo-600 to-purple-600",
      price: "Starting from ₦3,200"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          } ${slide.bgColor}`}
        >
          <div className="container-fluid h-full flex items-center">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="mb-4">
                <span className="bg-accent-lime text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  {slide.price}
                </span>
              </div>
              
              <h1 className="hero-title text-white mb-6">
                {slide.title}
              </h1>
              
              <p className="hero-subtitle text-white/90 mb-4">
                {slide.subtitle}
              </p>
              
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                {slide.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-accent-lime text-primary hover:bg-accent-lime/90 font-semibold px-8 py-4"
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4"
                >
                  Call: 08164376134
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-accent-lime scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
