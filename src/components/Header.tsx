
import { useState } from 'react';
import { Menu, X, Printer, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'All Products', href: '#products' },
    { name: 'Custom Orders', href: '#custom' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceCategories = [
    'Wellness & Safety Apparel',
    'Drinkware',
    'Bags',
    'Technology',
    'Writing Instruments',
    'Office & Stationery',
    'Auto & Tools'
  ];

  return (
    <header className="bg-primary-dark text-white sticky top-0 z-40 border-b border-primary/20 shadow-lg">
      <div className="container-fluid">
        {/* Top Bar */}
        <div className="border-b border-white/10 py-2 hidden md:block">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent-lime" />
                <span>08164376134</span>
              </div>
              <div>Mon - Sat: 8AM - 6PM WAT</div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/kweenprintz?igsh=MXJrMnVsajdiamJnag=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-lime transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <span className="text-accent-lime font-semibold">
                FREE Design Consultation - ₦5,000 Value!
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-accent-lime p-3 rounded-xl">
              <Printer className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">KWENPRINTZZ</h1>
              <p className="text-xs text-white/70">Custom Printing Services Nigeria</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link hover:text-accent-lime transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline"
              className="border-accent-lime text-accent-lime hover:bg-accent-lime hover:text-primary"
            >
              Get Quote
            </Button>
            <Button 
              className="bg-accent-lime text-primary hover:bg-accent-lime/90 font-semibold"
              onClick={() => window.open('https://wa.me/2348164376134', '_blank')}
            >
              WhatsApp Us
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-primary-dark text-white border-primary/20 w-full sm:w-80">
              <div className="flex flex-col space-y-6 mt-8">
                {/* Mobile Contact Info */}
                <div className="border-b border-white/20 pb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="h-4 w-4 text-accent-lime" />
                    <span className="font-semibold">08164376134</span>
                  </div>
                  <div className="text-sm text-white/70">Mon - Sat: 8AM - 6PM WAT</div>
                </div>

                {/* Navigation Links */}
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-white/90 hover:text-accent-lime transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}

                {/* Service Categories */}
                <div className="border-t border-white/20 pt-6">
                  <h3 className="font-semibold mb-4 text-accent-lime">Our Services</h3>
                  <div className="space-y-2">
                    {serviceCategories.map((service) => (
                      <a
                        key={service}
                        href="#services"
                        className="block text-sm text-white/70 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile CTAs */}
                <div className="space-y-3 pt-6">
                  <Button 
                    className="bg-accent-lime text-primary hover:bg-accent-lime/90 font-semibold w-full"
                    onClick={() => {
                      window.open('https://wa.me/2348164376134', '_blank');
                      setIsOpen(false);
                    }}
                  >
                    WhatsApp Us Now
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-accent-lime text-accent-lime hover:bg-accent-lime hover:text-primary w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Free Quote
                  </Button>
                </div>

                {/* Social Link */}
                <div className="flex justify-center pt-4">
                  <a 
                    href="https://www.instagram.com/kweenprintz?igsh=MXJrMnVsajdiamJnag=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-lime hover:text-white transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
