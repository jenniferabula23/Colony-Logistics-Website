import { MessageCircle } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-500/30 transition-all hover:bg-green-600 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-20" />
    </a>
  );
}
