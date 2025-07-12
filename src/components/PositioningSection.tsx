
import { TrendingUp, Zap, Recycle } from 'lucide-react';

const PositioningSection = () => {
  const pillars = [
    {
      icon: TrendingUp,
      title: 'SCALABLE',
      subtitle: 'Boost your printing capacity',
      description: 'Scale up or down based on your needs. From single items to bulk orders, we handle projects of any size with the same attention to quality.',
      bgColor: 'bg-accent-lime',
      textColor: 'text-primary',
      iconBg: 'bg-primary',
      iconColor: 'text-white'
    },
    {
      icon: Zap,
      title: 'FLEXIBLE',
      subtitle: 'Say yes to any print job',
      description: 'Whether it\'s rush orders, custom specifications, or unique materials, our flexible approach means we can accommodate any printing requirement.',
      bgColor: 'bg-blue-50',
      textColor: 'text-gray-900',
      iconBg: 'bg-blue-500',
      iconColor: 'text-white'
    },
    {
      icon: Recycle,
      title: 'SUSTAINABLE',
      subtitle: 'Eco-friendly practices without compromise',
      description: 'Committed to environmental responsibility with sustainable materials and eco-friendly printing processes that don\'t sacrifice quality.',
      bgColor: 'bg-green-50',
      textColor: 'text-gray-900',
      iconBg: 'bg-green-600',
      iconColor: 'text-white'
    }
  ];

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-gray-600 font-semibold mb-4">
            OUR DIFFERENCE
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kween Prints is the perfect fit for <span className="text-primary">fast moving businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three core principles that set us apart in the professional printing industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`${pillar.bgColor} ${pillar.textColor} rounded-3xl p-8 hover-lift hover:shadow-xl transition-all duration-300 text-center`}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 ${pillar.iconBg} rounded-3xl mb-6`}>
                <pillar.icon className={`h-10 w-10 ${pillar.iconColor}`} />
              </div>
              
              <div className="text-sm font-bold uppercase tracking-wide mb-2 text-gray-600">
                {pillar.title}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                {pillar.subtitle}
              </h3>
              
              <p className={`text-lg ${pillar.textColor === 'text-primary' ? 'text-primary/80' : 'text-gray-600'}`}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositioningSection;
