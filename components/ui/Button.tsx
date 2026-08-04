"use client";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-blue-500
        px-7
        py-4
        font-semibold
        text-white
        shadow-lg
        shadow-blue-600/30
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-[1.02]
        hover:shadow-blue-500/50
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}