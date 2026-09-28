"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const isapres = [
  {
    name: "Banmédica",
    logo: "/logos/banmedica.png",
  },
  {
    name: "Colmena",
    logo: "/logos/colmena.png",
  },
  {
    name: "Consalud",
    logo: "/logos/consalud.png",
  },
  {
    name: "Cruz Blanca",
    logo: "/logos/cruzblanca.png",
  },
  {
    name: "Nueva Masvida",
    logo: "/logos/masvida.png",
  },
  {
    name: "Vida Tres",
    logo: "/logos/vidatres.png",
  },
  {
    name: "Esencial",
    logo: "/logos/esencial.png",
  },
];

export default function Isapres() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    let animationId = 0;
    let position = 0;
    let lastTime = performance.now();
    let paused = false;

    const speed = 35;

    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!paused) {
        position -= speed * delta;

        const halfWidth = track.scrollWidth / 2;

        if (Math.abs(position) >= halfWidth) {
          position = 0;
        }

        track.style.transform = `translate3d(${position}px, 0, 0)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      paused = true;
    };

    const handleMouseLeave = () => {
      paused = false;
      lastTime = performance.now();
    };

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="isapres"
      className="
        scroll-mt-20
        overflow-hidden
        border-y
        border-[#E8EEF3]
        bg-white
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          py-8
          sm:px-8
          sm:py-9
          lg:px-12
          lg:py-10
          xl:px-16
        "
      >
        <div className="text-center">
          <h2
            className="
              text-[22px]
              font-black
              leading-tight
              tracking-tight
              text-[#123B63]
              sm:text-2xl
              lg:text-[28px]
            "
          >
            Trabajamos con todas las Isapres
          </h2>
        </div>

        <div className="relative mt-7 overflow-hidden">
          {/* DEGRADADO IZQUIERDO */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-10
              w-16
              bg-gradient-to-r
              from-white
              to-transparent
              sm:w-24
            "
          />

          {/* DEGRADADO DERECHO */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-10
              w-16
              bg-gradient-to-l
              from-white
              to-transparent
              sm:w-24
            "
          />

          <div
            ref={trackRef}
            className="
              flex
              w-max
              items-center
              gap-10
              will-change-transform
            "
          >
            {[...isapres, ...isapres].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="
                  flex
                  h-[72px]
                  w-[170px]
                  shrink-0
                  items-center
                  justify-center
                  px-4
                "
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={210}
                  height={70}
                  className="
                    h-auto
                    max-h-14
                    w-auto
                    max-w-[175px]
                    object-contain
                    transition-transform
                    duration-200
                    hover:scale-105
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}