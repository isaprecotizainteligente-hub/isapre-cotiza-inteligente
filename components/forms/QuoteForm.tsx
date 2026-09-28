"use client";

import {
  Calendar,
  CheckCircle2,
  DollarSign,
  MessageSquare,
  Phone,
  ShieldCheck,
  User,
  Users,
} from "lucide-react";

import { useState } from "react";

type FormState = {
  nombre: string;
  telefono: string;
  renta: string;
  edad: string;
  cargas: string;
  comentario: string;
};

const initialForm: FormState = {
  nombre: "",
  telefono: "",
  renta: "",
  edad: "",
  cargas: "",
  comentario: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.nombre.trim()) {
      alert("Por favor ingresa tu nombre.");
      return;
    }

    if (!form.telefono.trim()) {
      alert("Por favor ingresa tu número de teléfono.");
      return;
    }

    if (!form.renta.trim()) {
      alert("Por favor ingresa tu renta imponible.");
      return;
    }

    if (!form.edad.trim()) {
      alert("Por favor ingresa tu edad.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: form.nombre,
          whatsapp: form.telefono,
          edad: form.edad,
          beneficiarios: form.cargas || "Sin información",
          sistema: "No informado",
          renta: form.renta,
          clinica: "No informado",
          comentario: form.comentario || "Sin comentario",
        }),
      });

      if (!response.ok) {
        throw new Error("Error enviando formulario");
      }

      if (typeof window !== "undefined") {
        const metaWindow = window as Window & {
          fbq?: (
            command: string,
            eventName: string,
            parameters?: Record<string, unknown>
          ) => void;
        };

        if (typeof metaWindow.fbq === "function") {
          metaWindow.fbq("trackCustom", "CotizacionEnviada", {
            form_name: "cotizacion_isapre",
          });

          metaWindow.fbq("track", "Lead");
        }
      }

      setSuccess(true);

      setTimeout(() => {
        window.location.href = "/cotizacion-enviada";
      }, 900);
    } catch (error) {
      console.error(error);

      alert(
        "Ocurrió un problema al enviar la solicitud. Inténtalo nuevamente."
      );
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="overflow-hidden rounded-2xl bg-white">
        <div className="border-b border-[#E7EEF3] px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8F7F0] text-[#16A66A]">
              <CheckCircle2 className="h-5 w-5" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#16A66A]">
                Solicitud recibida
              </p>

              <h2 className="mt-1 text-xl font-black text-[#123B63]">
                Recibimos tus datos
              </h2>
            </div>
          </div>
        </div>

        <div className="px-6 py-6">
          <p className="text-sm leading-6 text-[#486581]">
            Un asesor revisará tu situación y se pondrá en contacto contigo
            para ayudarte a comparar alternativas.
          </p>

          <div className="mt-5 rounded-xl border border-[#DCE5EC] bg-[#F8FAFC] p-4">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16A66A]" />

                <span className="text-xs leading-5 text-[#486581]">
                  Revisaremos la información que enviaste.
                </span>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16A66A]" />

                <span className="text-xs leading-5 text-[#486581]">
                  Evaluaremos cobertura y costos.
                </span>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16A66A]" />

                <span className="text-xs leading-5 text-[#486581]">
                  Buscaremos alternativas acordes a tu situación.
                </span>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/56974171917"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-5
              flex
              h-11
              w-full
              items-center
              justify-center
              rounded-lg
              bg-[#16A66A]
              text-sm
              font-bold
              text-white
              transition
              hover:bg-[#118455]
            "
          >
            Hablar ahora por WhatsApp
            <span className="ml-2">→</span>
          </a>

          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#7B8794]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#16A66A]" />

            Tus datos fueron recibidos correctamente.
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="overflow-hidden rounded-2xl bg-white"
    >
      {/* CABECERA */}
      <div className="border-b border-[#E7EEF3] px-6 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#16A66A]">
              Cotización gratuita
            </p>

            <h2
              className="
                mt-1.5
                text-[22px]
                font-black
                leading-tight
                tracking-tight
                text-[#123B63]
              "
            >
              Cotiza tu plan de Isapre
            </h2>

            <p className="mt-1.5 max-w-[390px] text-[11px] leading-5 text-[#60758A]">
              Completa tus datos y te enviaremos las mejores alternativas según
              tu situación.
            </p>
          </div>

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E8F7F0] text-[#16A66A]">
            <ShieldCheck className="h-4.5 w-4.5" />
          </div>
        </div>
      </div>

      {/* CAMPOS */}
      <div className="px-6 py-5">
        {/* NOMBRE + TELÉFONO */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label
              htmlFor="nombre"
              className="
                mb-1.5
                flex
                items-center
                gap-1.5
                text-[10px]
                font-bold
                text-[#123B63]
              "
            >
              <User className="h-3.5 w-3.5 text-[#16A66A]" />

              Nombre

              <span className="text-[#16A66A]">*</span>
            </label>

            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="
                h-10
                w-full
                rounded-lg
                border
                border-[#DCE5EC]
                bg-[#F8FAFC]
                px-3
                text-xs
                text-[#123B63]
                outline-none
                transition
                placeholder:text-[#AAB5C0]
                hover:border-[#C5D3DE]
                focus:border-[#16A66A]
                focus:bg-white
                focus:ring-4
                focus:ring-[#16A66A]/10
              "
            />
          </div>

          <div>
            <label
              htmlFor="telefono"
              className="
                mb-1.5
                flex
                items-center
                gap-1.5
                text-[10px]
                font-bold
                text-[#123B63]
              "
            >
              <Phone className="h-3.5 w-3.5 text-[#16A66A]" />

              Número de teléfono

              <span className="text-[#16A66A]">*</span>
            </label>

            <input
              id="telefono"
              name="telefono"
              type="tel"
              required
              value={form.telefono}
              onChange={handleChange}
              placeholder="Ej. +56 9 1234 5678"
              className="
                h-10
                w-full
                rounded-lg
                border
                border-[#DCE5EC]
                bg-[#F8FAFC]
                px-3
                text-xs
                text-[#123B63]
                outline-none
                transition
                placeholder:text-[#AAB5C0]
                hover:border-[#C5D3DE]
                focus:border-[#16A66A]
                focus:bg-white
                focus:ring-4
                focus:ring-[#16A66A]/10
              "
            />
          </div>
        </div>

        {/* RENTA + EDAD */}
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div>
            <label
              htmlFor="renta"
              className="
                mb-1.5
                flex
                items-center
                gap-1.5
                text-[10px]
                font-bold
                text-[#123B63]
              "
            >
              <DollarSign className="h-3.5 w-3.5 text-[#16A66A]" />

              Renta imponible

              <span className="text-[#16A66A]">*</span>
            </label>

            <input
              id="renta"
              name="renta"
              type="text"
              required
              value={form.renta}
              onChange={handleChange}
              placeholder="Ej. $1.500.000"
              className="
                h-10
                w-full
                rounded-lg
                border
                border-[#DCE5EC]
                bg-[#F8FAFC]
                px-3
                text-xs
                text-[#123B63]
                outline-none
                transition
                placeholder:text-[#AAB5C0]
                hover:border-[#C5D3DE]
                focus:border-[#16A66A]
                focus:bg-white
                focus:ring-4
                focus:ring-[#16A66A]/10
              "
            />
          </div>

          <div>
            <label
              htmlFor="edad"
              className="
                mb-1.5
                flex
                items-center
                gap-1.5
                text-[10px]
                font-bold
                text-[#123B63]
              "
            >
              <Calendar className="h-3.5 w-3.5 text-[#16A66A]" />

              Edad

              <span className="text-[#16A66A]">*</span>
            </label>

            <input
              id="edad"
              name="edad"
              type="number"
              min="18"
              max="99"
              required
              value={form.edad}
              onChange={handleChange}
              placeholder="Ej. 34"
              className="
                h-10
                w-full
                rounded-lg
                border
                border-[#DCE5EC]
                bg-[#F8FAFC]
                px-3
                text-xs
                text-[#123B63]
                outline-none
                transition
                placeholder:text-[#AAB5C0]
                hover:border-[#C5D3DE]
                focus:border-[#16A66A]
                focus:bg-white
                focus:ring-4
                focus:ring-[#16A66A]/10
              "
            />
          </div>
        </div>

        {/* CARGAS — OPCIONAL */}
        <div className="mt-3">
          <label
            htmlFor="cargas"
            className="
              mb-1.5
              flex
              items-center
              gap-1.5
              text-[10px]
              font-bold
              text-[#123B63]
            "
          >
            <Users className="h-3.5 w-3.5 text-[#16A66A]" />

            Edad de las cargas

            <span className="ml-1 text-[10px] font-normal text-[#7B8794]">
              opcional
            </span>
          </label>

          <input
            id="cargas"
            name="cargas"
            type="text"
            value={form.cargas}
            onChange={handleChange}
            placeholder="Ej. 5, 8, 12"
            className="
              h-10
              w-full
              rounded-lg
              border
              border-[#DCE5EC]
              bg-[#F8FAFC]
              px-3
              text-xs
              text-[#123B63]
              outline-none
              transition
              placeholder:text-[#AAB5C0]
              hover:border-[#C5D3DE]
              focus:border-[#16A66A]
              focus:bg-white
              focus:ring-4
              focus:ring-[#16A66A]/10
            "
          />
        </div>

        {/* COMENTARIO — OPCIONAL */}
        <div className="mt-3">
          <label
            htmlFor="comentario"
            className="
              mb-1.5
              flex
              items-center
              gap-1.5
              text-[10px]
              font-bold
              text-[#123B63]
            "
          >
            <MessageSquare className="h-3.5 w-3.5 text-[#16A66A]" />

            ¿Qué estás buscando mejorar o revisar?

            <span className="ml-1 text-[10px] font-normal text-[#7B8794]">
              opcional
            </span>
          </label>

          <textarea
            id="comentario"
            name="comentario"
            value={form.comentario}
            onChange={handleChange}
            placeholder="Ej. Quiero revisar mi cobertura o pagar menos..."
            rows={2}
            className="
              h-14
              w-full
              resize-none
              rounded-lg
              border
              border-[#DCE5EC]
              bg-[#F8FAFC]
              px-3
              py-2.5
              text-xs
              leading-5
              text-[#123B63]
              outline-none
              transition
              placeholder:text-[#AAB5C0]
              hover:border-[#C5D3DE]
              focus:border-[#16A66A]
              focus:bg-white
              focus:ring-4
              focus:ring-[#16A66A]/10
            "
          />
        </div>

        {/* CTA */}
        <button
          type="submit"
          disabled={loading}
          className="
            mt-4
            flex
            h-11
            w-full
            items-center
            justify-center
            rounded-lg
            bg-[#16A66A]
            px-5
            text-sm
            font-bold
            text-white
            shadow-sm
            transition
            hover:bg-[#118455]
            hover:shadow-md
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? (
            <>
              <span
                className="
                  mr-2
                  h-3.5
                  w-3.5
                  animate-spin
                  rounded-full
                  border-2
                  border-white/30
                  border-t-white
                "
              />

              Enviando...
            </>
          ) : (
            <>
              Ver mis alternativas
              <span className="ml-2">→</span>
            </>
          )}
        </button>

        <div className="mt-3 flex items-center justify-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5 text-[#16A66A]" />

          <p className="text-[10px] text-[#7B8794]">
            Tus datos son 100% confidenciales.
          </p>
        </div>
      </div>
    </form>
  );
}