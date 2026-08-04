interface FormCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function FormCard({
  title,
  subtitle,
  children,
}: FormCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111C34]/95 backdrop-blur-2xl shadow-[0_40px_120px_rgba(37,99,235,.22)]">

      {/* Glow superior */}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

      {/* Glow de fondo */}

      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative p-8 lg:p-10">

        <div className="mb-8">

          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">

            Cotización gratuita

          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white">
            {title}
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-400">
            {subtitle}
          </p>

        </div>

        <div className="space-y-6">

          {children}

        </div>

      </div>

    </div>
  );
}