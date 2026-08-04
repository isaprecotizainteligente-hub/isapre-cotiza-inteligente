export default function HeroCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-sm">

      <div className="text-2xl text-yellow-400">
        ★★★★★
      </div>

      <h3 className="mt-6 text-5xl font-black text-white">
        +10 años
      </h3>

      <p className="mt-3 text-lg leading-8 text-slate-300">
        asesorando personas a encontrar el plan de Isapre ideal para su realidad.
      </p>

      <div className="my-8 h-px bg-white/10" />

      <div className="space-y-5">

        <div className="flex items-center gap-3">
          <span className="text-green-400">✔</span>
          <span className="text-slate-200">
            Comparación entre todas las Isapres.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-green-400">✔</span>
          <span className="text-slate-200">
            Atención personalizada.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-green-400">✔</span>
          <span className="text-slate-200">
            Sin costo para el cliente.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-green-400">✔</span>
          <span className="text-slate-200">
            Respuesta en menos de 15 minutos.
          </span>
        </div>

      </div>

      <div className="my-8 h-px bg-white/10" />

      <div className="flex items-end gap-3">

        <span className="text-5xl font-black text-white">
          +3000
        </span>

        <span className="pb-2 text-slate-400">
          cotizaciones realizadas
        </span>

      </div>

    </div>
  );
}