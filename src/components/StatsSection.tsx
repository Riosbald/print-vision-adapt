
import { TrendingUp, Clock, Users, Calendar } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '1000+',
      label: 'Projects completed',
      description: 'Successful printing projects delivered'
    },
    {
      icon: Clock,
      number: '48hr',
      label: 'Average turnaround',
      description: 'From order to delivery'
    },
    {
      icon: TrendingUp,
      number: '99%',
      label: 'Customer satisfaction',
      description: 'Client retention rate'
    },
    {
      icon: Calendar,
      number: '10+',
      label: 'Years experience',
      description: 'Industry expertise'
    }
  ];

  return (
    <section className="bg-primary-dark text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            The best return on your <span className="text-accent-lime">investment</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            See why businesses choose Kween Prints for their professional printing needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 rounded-2xl p-8 hover:bg-white/15 transition-colors duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-lime rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-accent-lime mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-2">
                  {stat.label}
                </div>
                <div className="text-white/70 text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
