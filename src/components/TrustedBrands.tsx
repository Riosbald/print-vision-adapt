
export default function TrustedBrands() {
  const industries = [
    'Healthcare',
    'Education',
    'Retail',
    'Corporate',
    'Non-Profit',
    'Technology',
    'Hospitality',
    'Real Estate',
    'Manufacturing',
    'Legal',
    'Financial',
    'Government'
  ]

  return (
    <section className="bg-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
            Trusted by 500+ businesses across all industries
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-center"
              >
                <div className="bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border">
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-muted to-muted/80 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">
                      {industry.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {industry}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
