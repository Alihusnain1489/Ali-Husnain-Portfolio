import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const phoneNumber = "923261052244";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 group sm:bottom-6 sm:right-6"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>

      {/* Tooltip — hidden on touch/mobile widths since hover doesn't apply there */}
      <span className="absolute right-16 hidden whitespace-nowrap rounded-lg bg-slate-800 px-3 py-2 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Chat with me
      </span>
    </a>
  );
};

export default WhatsAppFloat;