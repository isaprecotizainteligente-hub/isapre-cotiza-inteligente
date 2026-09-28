"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const updateBubble = () => {
      const shouldShow = window.scrollY > 350;

      if (shouldShow) {
        clearTimeout(timer);

        timer = setTimeout(() => {
          setShowBubble(true);
        }, 1200);
      } else {
        clearTimeout(timer);
        setShowBubble(false);
      }
    };

    updateBubble();

    window.addEventListener("scroll", updateBubble, {
      passive: true,
    });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", updateBubble);
    };
  }, []);

  const phone = "56974171917";

  const message = encodeURIComponent(
    "Hola 👋, quiero revisar mi plan de salud y saber si puedo mejorar mi cobertura o pagar menos."
  );

  function handleWhatsAppClick() {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: "click_whatsapp",
        button_name: "whatsapp_flotante",
      });
    }
  }

  return (
    <div
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        flex-col
        items-end
      "
    >
      {showBubble && (
        <div
          className="
            absolute
            bottom-2
            right-[76px]
            hidden
            w-[235px]
            rounded-2xl
            border
            border-[#E7EEF3]
            bg-white
            px-4
            py-3
            shadow-[0_12px_30px_rgba(16,42,67,0.14)]
            md:block
            animate-in
            fade-in
            slide-in-from-right-2
            duration-300
          "
        >
          <p
            className="
              text-sm
              font-bold
              text-[#123B63]
            "
          >
            💬 ¿Estás pagando de más?
          </p>

          <p
            className="
              mt-1
              text-xs
              leading-5
              text-[#60758A]
            "
          >
            Revísalo gratis por WhatsApp.
          </p>
        </div>
      )}

      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        onClick={handleWhatsAppClick}
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-green-500
          text-white
          shadow-2xl
          transition-all
          duration-300
          hover:scale-110
          hover:bg-green-600
        "
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
}