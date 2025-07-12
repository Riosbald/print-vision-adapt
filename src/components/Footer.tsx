
import { Printer, Mail, Phone, MapPin, Instagram, MessageCircle, Clock, Gift } from 'lucide-react';

const Footer = () => {
  const services = [
    'Wellness & Safety Apparel',
    'Custom Drinkware',
    'Promotional Bags',
    'Technology Accessories',
    'Writing Instruments',
    'Office & Stationery',
    'Auto & Tools',
    'Digital & Engraving'
  ];

  const company = [
    'About KwenPrintzz',
    'Our Portfolio',
    'Customer Reviews',
    'Bulk Orders',
    'Custom Design',
    'Quality Guarantee'
  ];

  const support = [
    'Free Design Consultation',
    'Quote Request',
    'File Guidelines',
    'Shipping & Delivery',
    'Returns & Refunds',
    'FAQ'
  ];

  const quickOrder = [
    'Business Cards - ₦1,200',
    'Custom T-Shirts - ₦3,500',
    'Branded Mugs - ₦2,000',
    'Promotional Bags - ₦2,800',
    'Custom Pens - ₦800',
    'Office Supplies - ₦1,200'
  ];

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-fluid">
        {/* Special Offer Banner */}
        <div className="bg-accent-lime text-primary py-4 -mx-4 sm:-mx-6 lg:-mx-8 mb-16">
          <div className="container-fluid">
            <div className="flex items-center justify-center space-x-2 text-center">
              <Gift className="h-5 w-5" />
              <span className="font-bold">
                Special Offer: 15% OFF First Order + FREE ₦5,000 Design Consultation!
              </span>
              <Gift className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-accent-lime p-3 rounded-xl">
                  <Printer className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">KWENPRINTZZ</h3>
                  <p className="text-sm text-white/70">Custom Printing Services Nigeria</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 max-w-md leading-relaxed">
                Nigeria's premier custom printing service provider. We specialize in wellness apparel, 
                corporate branding, promotional items, and high-quality digital printing with 
                nationwide delivery.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent-lime flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">08164376134</span>
                    <div className="text-sm text-white/70">Call or WhatsApp</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent-lime flex-shrink-0" />
                  <div>
                    <span className="text-white">info@kwenprintzz.com</span>
                    <div className="text-sm text-white/70">Email us anytime</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-accent-lime flex-shrink-0" />
                  <div>
                    <span className="text-white">Mon - Sat: 8AM - 6PM WAT</span>
                    <div className="text-sm text-white/70">Sunday: Closed</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent-lime flex-shrink-0" />
                  <div>
                    <span className="text-white">Nationwide Delivery</span>
                    <div className="text-sm text-white/70">Lagos, Abuja, Port Harcourt & More</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/2348164376134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
                <a
                  href="https://www.instagram.com/kweenprintz?igsh=MXJrMnVsajdiamJnag=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Follow Us
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-accent-lime">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-white/70 hover:text-accent-lime transition-colors text-sm leading-relaxed">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Order */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-accent-lime">Quick Order</h4>
              <ul className="space-y-3">
                {quickOrder.map((item, index) => (
                  <li key={index}>
                    <a href="#quote" className="text-white/70 hover:text-accent-lime transition-colors text-sm leading-relaxed">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="text-sm text-accent-lime font-semibold mb-2">
                  Bulk Discounts Available!
                </p>
                <p className="text-xs text-white/60">
                  Up to 20% off orders above ₦50,000
                </p>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-accent-lime">Customer Support</h4>
              <ul className="space-y-3">
                {support.map((item, index) => (
                  <li key={index}>
                    <a href="#support" className="text-white/70 hover:text-accent-lime transition-colors text-sm leading-relaxed">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <h5 className="font-semibold text-accent-lime mb-2">Need Help?</h5>
                <p className="text-sm text-white/80 mb-3">
                  Get your quote in 30 minutes or less!
                </p>
                <a
                  href="tel:+2348164376134"
                  className="inline-flex items-center text-sm font-semibold text-accent-lime hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mr-1" />
                  Call Now: 08164376134
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/70 text-sm text-center md:text-left">
              © 2024 KwenPrintzz. All rights reserved. | Custom Printing Services Nigeria
            </div>

            {/* Payment & Delivery Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-white/70">
              <span>🚚 Nationwide Delivery</span>
              <span>💳 Secure Payment</span>
              <span>✅ Quality Guaranteed</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-white/70 hover:text-accent-lime transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/70 hover:text-accent-lime transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
