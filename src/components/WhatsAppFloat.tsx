
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const whatsappUrl = "https://wa.me/message/RSITTGMBGEAOD1";
  
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppFloat;
