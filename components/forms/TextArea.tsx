import { LucideIcon } from "lucide-react";

interface TextAreaProps {
  icon: LucideIcon;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}

export default function TextArea({
  icon: Icon,
  label,
  placeholder,
  value,
  onChange,
  rows = 5,
}: TextAreaProps) {
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
        hover:border-white/20
        focus-within:border-blue-500/60
        focus-within:shadow-[0_0_0_4px_rgba(37,99,235,.12)]
        "
      >

        {/* Glow */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />

        <textarea
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="
          relative
          w-full
          resize-none
          bg-transparent
          px-5
          py-4
          text-base
          leading-7
          text-white
          placeholder:text-slate-500
          outline-none
          "
        />

      </div>

    </div>
  );
}