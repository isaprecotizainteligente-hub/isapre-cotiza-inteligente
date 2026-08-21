import Link from "next/link";

export default function CotizacionEnviadaPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16">
      <div className="w-full max-w-xl rounded-[32px] border border-white/15 bg-[#0D2747]/95 p-8 text-center shadow-2xl">
        
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/20 text-3xl text-emerald-400">
          ✓
        </div>

        <h1 className="text-3xl font-black text-white">
          ¡Solicitud recibida!
        </h1>

        <p className="mt-4 leading-7 text-slate-300">
          Recibimos correctamente tus datos.
          <br />
          Un asesor especializado revisará tu información y te contactará
          para ayudarte a encontrar una mejor alternativa de salud.
        </p>

        <div className="mt-6 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-300">
          ✓ Revisaremos tu situación
          <br />
          ✓ Compararemos alternativas
          <br />
          ✓ Te contactaremos a la brevedad
        </div>

        <a
          href="https://wa.me/56974171917"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block rounded-xl bg-green-500 px-5 py-3 font-bold text-white transition hover:bg-green-600"
        >
          Hablar ahora por WhatsApp
        </a>

        <Link
          href="/"
          className="mt-4 block text-sm text-slate-400 hover:text-white"
        >
          Volver al inicio
        </Link>

      </div>
    </main>
  );
}