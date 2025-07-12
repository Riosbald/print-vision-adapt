
import { Button } from '@/components/ui/button'

export default function ValueProposition() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-4">
              <span className="text-sm font-semibold text-accent-lime uppercase tracking-wide">
                A NEW ERA OF PRINTING SERVICES
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-serif text-foreground mb-8 leading-tight">
              The printing support your business{' '}
              <span className="italic font-light">has been asking for</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Kween_Prints is your dedicated, professional printing partner designed to expand your
              production capacity and elevate your brand's visual presence with high-quality digital
              and litho printing solutions.
            </p>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              See us as an extension of your team, freeing you to focus on your core business
              while we handle all your printing needs with expertise and precision.
            </p>

            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 h-auto"
            >
              Learn More
            </Button>
          </div>

          {/* Right Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-muted to-muted/80 rounded-2xl aspect-square lg:aspect-[4/3] p-8 flex items-center justify-center">
              {/* Simulated printing workspace */}
              <div className="grid grid-cols-2 gap-4 w-full h-full">
                <div className="bg-card rounded-lg shadow-lg p-6 flex flex-col justify-between border">
                  <div>
                    <div className="w-full h-4 bg-accent-lime rounded mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded w-3/4"></div>
                      <div className="h-2 bg-muted rounded w-1/2"></div>
                      <div className="h-2 bg-muted rounded w-5/6"></div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">Business Cards</div>
                </div>

                <div className="bg-card rounded-lg shadow-lg p-6 flex flex-col justify-between border">
                  <div>
                    <div className="w-full h-4 bg-orange-400 rounded mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded w-4/5"></div>
                      <div className="h-2 bg-muted rounded w-2/3"></div>
                      <div className="h-2 bg-muted rounded w-3/4"></div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">Brochures</div>
                </div>

                <div className="bg-card rounded-lg shadow-lg p-6 flex flex-col justify-between border">
                  <div>
                    <div className="w-full h-4 bg-blue-400 rounded mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded w-3/5"></div>
                      <div className="h-2 bg-muted rounded w-4/5"></div>
                      <div className="h-2 bg-muted rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">Banners</div>
                </div>

                <div className="bg-card rounded-lg shadow-lg p-6 flex flex-col justify-between border">
                  <div>
                    <div className="w-full h-4 bg-purple-400 rounded mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded w-5/6"></div>
                      <div className="h-2 bg-muted rounded w-1/2"></div>
                      <div className="h-2 bg-muted rounded w-4/5"></div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">Custom Prints</div>
                </div>
              </div>
            </div>

            {/* Floating quality badge */}
            <div className="absolute -top-4 -right-4 bg-accent-lime text-primary px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              Premium Quality
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
