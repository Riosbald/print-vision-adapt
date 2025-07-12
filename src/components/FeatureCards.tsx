
import { Award, Zap, Settings } from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality Materials',
      description: 'High-quality digital & litho printing with a huge range of papers and premium materials for every project.',
      bgColor: 'bg-primary-dark',
      textColor: 'text-white',
      iconBg: 'bg-accent-lime',
      iconColor: 'text-primary'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Turnaround',
      description: 'Ultra-fast 48-hour average turnaround times without compromising on quality or attention to detail.',
      bgColor: 'bg-orange-100',
      textColor: 'text-gray-900',
      iconBg: 'bg-orange-500',
      iconColor: 'text-white'
    },
    {
      icon: Settings,
      title: 'Fully Customizable Solutions',
      description: 'Personalized printing solutions tailored to your specific needs, brand requirements, and industry standards.',
      bgColor: 'bg-accent-lime',
      textColor: 'text-primary',
      iconBg: 'bg-primary',
      iconColor: 'text-white'
    }
  ];

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-gray-600 font-semibold mb-4">
            WHY CHOOSE KWEEN PRINTS
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The printing support your business has been asking for
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional printing services that scale with your business needs, delivering exceptional quality every time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} ${feature.textColor} rounded-3xl p-8 hover-lift hover:shadow-xl transition-all duration-300`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.iconBg} rounded-2xl mb-6`}>
                <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>
              
              <p className={`text-lg ${feature.textColor === 'text-white' ? 'text-white/90' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
