"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {

  const [showBubble, setShowBubble] = useState(true);


  useEffect(() => {

    const handleScroll = () => {
      setShowBubble(window.scrollY < 250);
    };


    window.addEventListener("scroll", handleScroll);


    return () => window.removeEventListener("scroll", handleScroll);

  }, []);



  const phone = "56974171917";


  const message = encodeURIComponent(
    "Hola 👋, quiero revisar mi plan de salud y saber si puedo mejorar mi cobertura o pagar menos."
  );



  return (

    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">


      {showBubble && (

        <div
          className="
          hidden
          rounded-2xl
          bg-white
          px-5
          py-4
          shadow-2xl
          md:block
          animate-in
          fade-in
          slide-in-from-right-3
          "
        >

          <p className="font-semibold text-slate-900">

            💬 ¿Tienes dudas?

          </p>


          <p className="text-sm text-slate-600">

            Conversemos por WhatsApp.

          </p>


        </div>

      )}



      <a

        href={`https://wa.me/${phone}?text=${message}`}

        target="_blank"

        rel="noopener noreferrer"

        aria-label="Contactar por WhatsApp"

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