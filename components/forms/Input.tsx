import { LucideIcon } from "lucide-react";

interface InputProps {
  icon: LucideIcon;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

export default function Input({
  icon: Icon,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <div className="space-y-3">

      <label className="flex items-center gap-2 text-sm font-semibold text-slate-300">

        <Icon className="h-4 w-4 text-blue-400" />

        {label}

      </label>

      <div
        className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#0B1427]
        transition-all
        duration-300
        focus-within:border-blue-500/60
        focus-within:shadow-[0_0_0_4px_rgba(37,99,235,.12)]
        hover:border-white/20
        "
      >

        {/* Glow */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />

        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="
          relative
          w-full
          bg-transparent
          px-5
          py-4
          text-base
          text-white
          placeholder:text-slate-500
          outline-none
          "
        />

      </div>

    </div>
  );
}