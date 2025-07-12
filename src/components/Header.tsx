
import { useState } from 'react';
import { Menu, X, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#portfolio' },
    { name: 'Industries', href: '#industries' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className="bg-primary-dark text-white sticky top-0 z-50 border-b border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-accent-lime p-2 rounded-lg">
              <Printer className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold">KWEEN PRINTS</h1>
              <p className="text-xs text-white/70">Professional Printing Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button 
              className="bg-accent-lime text-primary hover:bg-accent-lime/90 font-semibold px-6"
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-primary-dark text-white border-primary/20">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-white/90 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button 
                  className="bg-accent-lime text-primary hover:bg-accent-lime/90 font-semibold w-full mt-4"
                >
                  Get a Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
