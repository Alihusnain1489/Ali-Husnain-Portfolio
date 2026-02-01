
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const phoneNumber = "923261052244";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-slate-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with me
      </span>
    </a>
  );
};

export default WhatsAppFloat;
