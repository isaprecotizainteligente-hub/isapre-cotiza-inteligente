"use client";

import { useState } from "react";
import {
  User,
  Phone,
  Cake,
  Users,
  Building2,
  DollarSign,
  Hospital,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import FormCard from "./FormCard";
import Input from "./Input";
import TextArea from "./TextArea";

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    whatsapp: "",
    edad: "",
    beneficiarios: "",
    sistema: "",
    renta: "",
    clinica: "",
    comentario: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.nombre.trim()) {
      alert("Por favor ingresa tu nombre.");
      return;
    }

    if (!form.whatsapp.trim()) {
      alert("Por favor ingresa tu WhatsApp.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error();
      }

      setSuccess(true);

      // ========= Google Tag Manager + Google Analytics =========
      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: "generate_lead",
        form_name: "Cotización Isapre",
        lead_type: "Formulario Web",
        });

     window.gtag?.("event", "generate_lead", {
        form_name: "Cotización Isapre",
        method: "Formulario",
        });
    
      setForm({
        nombre: "",
        whatsapp: "",
        edad: "",
        beneficiarios: "",
        sistema: "",
        renta: "",
        clinica: "",
        comentario: "",
      });

    } catch {
      alert("Ocurrió un error enviando la cotización.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <FormCard
        title="🎉 ¡Solicitud enviada!"
        subtitle="Recibimos tu información correctamente."
      >
        <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-3xl">
            ✅
          </div>

          <h3 className="mt-6 text-2xl font-bold text-white">
            ¡Muchas gracias!
          </h3>

          <p className="mt-4 leading-8 text-slate-300">
            Un asesor revisará tu caso y te contactará por
            <span className="font-semibold text-white">
              {" "}WhatsApp lo antes posible.
            </span>
          </p>

        </div>
      </FormCard>
    );
  }

  return (
    <FormCard
      title="Recibe tu cotización gratuita"
      subtitle="Completa estos datos. Nosotros nos encargamos de encontrar la mejor alternativa para ti."
    >

      <div className="mb-8 grid grid-cols-2 gap-3">

        <div className="flex items-center gap-3 rounded-2xl border border-blue-500/15 bg-blue-500/10 p-4">

          <Clock3 className="h-5 w-5 text-blue-400" />

          <div>

            <p className="text-xs text-slate-400">
              Tiempo de respuesta
            </p>

            <p className="font-semibold text-white">
              Menos de 15 min
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/15 bg-emerald-500/10 p-4">

          <ShieldCheck className="h-5 w-5 text-emerald-400" />

          <div>

            <p className="text-xs text-slate-400">
              Información
            </p>

            <p className="font-semibold text-white">
              100% confidencial
            </p>

          </div>

        </div>

      </div>
            <form onSubmit={handleSubmit}>

        <div className="grid gap-5 md:grid-cols-2">

          <Input
            icon={User}
            label="¿Cómo te llamas?"
            placeholder="Juan Pérez"
            value={form.nombre}
            onChange={(value) => setForm({ ...form, nombre: value })}
          />

          <Input
            icon={Phone}
            label="¿Cuál es tu WhatsApp?"
            placeholder="+56 9 1234 5678"
            value={form.whatsapp}
            onChange={(value) => setForm({ ...form, whatsapp: value })}
          />

          <Input
            icon={Cake}
            label="¿Cuál es tu edad?"
            placeholder="34"
            value={form.edad}
            onChange={(value) => setForm({ ...form, edad: value })}
          />

          <Input
            icon={Users}
            label="Edad de beneficiarios"
            placeholder="32, 5 y 8"
            value={form.beneficiarios}
            onChange={(value) =>
              setForm({ ...form, beneficiarios: value })
            }
          />

          <Input
            icon={Building2}
            label="Fonasa o Isapre"
            placeholder="Fonasa, Colmena..."
            value={form.sistema}
            onChange={(value) =>
              setForm({ ...form, sistema: value })
            }
          />

          <Input
            icon={DollarSign}
            label="Renta imponible"
            placeholder="$1.200.000"
            value={form.renta}
            onChange={(value) =>
              setForm({ ...form, renta: value })
            }
          />

        </div>

        <div className="mt-5">

          <Input
            icon={Hospital}
            label="Clínica de preferencia"
            placeholder="Alemana, Indisa..."
            value={form.clinica}
            onChange={(value) =>
              setForm({ ...form, clinica: value })
            }
          />

        </div>

        <div className="mt-5">

          <TextArea
            icon={MessageSquare}
            label="¿Qué estás buscando?"
            placeholder="Cuéntanos qué te gustaría mejorar..."
            value={form.comentario}
            onChange={(value) =>
              setForm({ ...form, comentario: value })
            }
          />

        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 py-5 text-lg font-bold text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-blue-500/40 disabled:opacity-50"
        >
          {loading ? (
            "Enviando..."
          ) : (
            <>
              Obtener mi mejor plan
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>

        <p className="mt-5 text-center text-sm leading-6 text-slate-500">
          🔒 Nunca compartiremos tu información con terceros.
        </p>

      </form>

    </FormCard>
  );
}