
import { useState, useEffect } from 'react';
import { X, Gift, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LeadGenPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000); // Show after 30 seconds

    const hasSeenPopup = localStorage.getItem('kwenprintzz-popup-seen');
    if (hasSeenPopup) {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('kwenprintzz-popup-seen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Lead captured:', { name, email });
    handleClose();
    
    // Redirect to WhatsApp with pre-filled message
    const message = encodeURIComponent(`Hi! I'm ${name} (${email}). I'd like to claim my 15% OFF first order + FREE ₦5,000 design consultation offer!`);
    window.open(`https://wa.me/2348164376134?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 mx-4 max-w-md w-full shadow-2xl animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="bg-accent-lime rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Special Offer!
          </h3>
          <p className="text-gray-600">
            Get 15% OFF your first order + FREE ₦5,000 design consultation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <Button type="submit" className="w-full btn-accent">
            Claim My Offer Now!
          </Button>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>Quote in 30 min</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <span>08164376134</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadGenPopup;
