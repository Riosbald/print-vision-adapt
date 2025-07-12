
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Zap, Award, Recycle } from 'lucide-react';

const HeroSection = () => {
  const trustedIndustries = [
    'Healthcare', 'Corporate', 'Retail', 'Education', 'Technology', 'Manufacturing'
  ];

  return (
    <section className="bg-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Your printing partner's{' '}
              <span className="text-accent-lime">printing partner</span>™
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Scale your printing needs with premium digital & litho printing powered by professional expertise, 
              delivering quality you can trust fast and affordably.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center space-x-2 text-accent-lime">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">48hr Turnaround</span>
              </div>
              <div className="flex items-center space-x-2 text-accent-lime">
                <Award className="h-5 w-5" />
                <span className="font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2 text-accent-lime">
                <Recycle className="h-5 w-5" />
                <span className="font-medium">Eco-Friendly</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-accent-lime text-primary hover:bg-accent-lime/90 font-semibold px-8 py-4 text-lg"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
              >
                View Our Work
              </Button>
            </div>

            {/* Trusted Industries */}
            <div className="text-center">
              <p className="text-white/70 mb-4 text-sm uppercase tracking-wide font-medium">
                Trusted by 500+ businesses across all industries
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/60">
                {trustedIndustries.map((industry, index) => (
                  <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
