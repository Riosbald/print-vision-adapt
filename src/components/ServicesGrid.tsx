
import {
  Shield,
  Shirt,
  Coffee,
  ShoppingBag,
  Laptop,
  PenTool,
  FileText,
  Wrench,
  Printer
} from 'lucide-react'

export default function ServicesGrid() {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Wellness & Safety",
      description: "Safety signage, health posters, compliance materials",
      bgColor: "bg-emerald-600"
    },
    {
      icon: <Shirt className="w-8 h-8 text-white" />,
      title: "Apparel",
      description: "Custom t-shirts, uniforms, promotional clothing",
      bgColor: "bg-blue-600"
    },
    {
      icon: <Coffee className="w-8 h-8 text-white" />,
      title: "Drinkware",
      description: "Custom mugs, bottles, promotional drinkware",
      bgColor: "bg-amber-600"
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-white" />,
      title: "Bags",
      description: "Tote bags, promotional bags, custom packaging",
      bgColor: "bg-purple-600"
    },
    {
      icon: <Laptop className="w-8 h-8 text-white" />,
      title: "Technology",
      description: "Device cases, tech accessories, cable labels",
      bgColor: "bg-indigo-600"
    },
    {
      icon: <PenTool className="w-8 h-8 text-white" />,
      title: "Writing Instruments",
      description: "Custom pens, pencils, promotional writing tools",
      bgColor: "bg-rose-600"
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Office & Stationery",
      description: "Business cards, letterheads, office supplies",
      bgColor: "bg-slate-600"
    },
    {
      icon: <Wrench className="w-8 h-8 text-white" />,
      title: "Auto & Tools",
      description: "Vehicle decals, tool labels, automotive materials",
      bgColor: "bg-orange-600"
    },
    {
      icon: <Printer className="w-8 h-8 text-white" />,
      title: "Digital & Engraving",
      description: "High-quality digital prints, laser engraving services",
      bgColor: "bg-lime-600"
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-sm font-semibold text-lime-600 uppercase tracking-wide">
              COMPREHENSIVE & COMPLETE
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-8">
            Every type of printing service you'll ever need,{' '}
            <span className="italic font-light">and more</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} p-8 rounded-2xl text-white hover:scale-105 transition-transform duration-300 cursor-pointer group`}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-white/90 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-8">
            Don't see what you're looking for? We specialize in custom solutions.
          </p>
          <button className="bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors font-semibold">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  )
}
