import { FaWhatsapp } from "react-icons/fa";
import { company } from "@/lib/data/company";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={company.phone.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 left-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-all duration-200 ease-out hover:scale-110 hover:bg-[#1FBE5B] hover:shadow-xl active:scale-100 md:bottom-6 md:left-6 md:size-16"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 transition-transform duration-1000 ease-out group-hover:scale-125 motion-safe:animate-ping" />
      <FaWhatsapp className="size-7 md:size-8" />
    </a>
  );
}

export default WhatsAppFloatingButton;
