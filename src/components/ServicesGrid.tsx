
import { 
  Heart, 
  Shirt, 
  Coffee, 
  ShoppingBag, 
  Smartphone, 
  PenTool, 
  FileText, 
  Wrench 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesGrid = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wellness & Safety Materials',
      description: 'Medical forms, safety signage, healthcare brochures',
      bgColor: 'bg-primary-dark',
      textColor: 'text-white'
    },
    {
      icon: Shirt,
      title: 'Custom Apparel Printing',
      description: 'T-shirts, uniforms, promotional clothing',
      bgColor: 'bg-red-500',
      textColor: 'text-white'
    },
    {
      icon: Coffee,
      title: 'Drinkware Customization',
      description: 'Mugs, bottles, promotional drinkware',
      bgColor: 'bg-primary-dark',
      textColor: 'text-white'
    },
    {
      icon: ShoppingBag,
      title: 'Promotional Bags',
      description: 'Tote bags, shopping bags, branded carriers',
      bgColor: 'bg-primary-dark',
      textColor: 'text-white'
    },
    {
      icon: Smartphone,
      title: 'Technology Accessories',
      description: 'Phone cases, laptop sleeves, tech accessories',
      bgColor: 'bg-blue-500',
      textColor: 'text-white'
    },
    {
      icon: PenTool,
      title: 'Writing Instruments',
      description: 'Custom pens, pencils, promotional stationery',
      bgColor: 'bg-primary-dark',
      textColor: 'text-white'
    },
    {
      icon: FileText,
      title: 'Office Supplies',
      description: 'Business cards, letterheads, office materials',
      bgColor: 'bg-green-600',
      textColor: 'text-white'
    },
    {
      icon: Wrench,
      title: 'Automotive Materials',
      description: 'Vehicle wraps, automotive signage, decals',
      bgColor: 'bg-gray-800',
      textColor: 'text-white'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-gray-600 font-semibold mb-4">
            EASY & HASSLE-FREE
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Every type of <span className="text-accent-lime">printing work</span> you'll ever need, and more
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From promotional materials to professional documentation, we handle all your printing needs with expertise and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} ${service.textColor} rounded-2xl p-6 hover-lift hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 group-hover:bg-white/30 transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-lg font-bold mb-2">
                {service.title}
              </h3>
              
              <p className={`text-sm ${service.textColor === 'text-white' ? 'text-white/80' : 'text-gray-600'}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary text-white hover:bg-primary/90 font-semibold px-8"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
