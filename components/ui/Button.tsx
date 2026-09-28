"use client";

import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        inline-flex
        min-h-11
        items-center
        justify-center
        rounded-lg
        border
        border-[#16A66A]
        bg-[#16A66A]
        px-5
        py-3
        text-sm
        font-bold
        leading-none
        text-white
        shadow-sm
        transition-all
        duration-200
        hover:border-[#118455]
        hover:bg-[#118455]
        hover:shadow-md
        focus:outline-none
        focus:ring-4
        focus:ring-[#16A66A]/15
        disabled:cursor-not-allowed
        disabled:opacity-60
        disabled:hover:bg-[#16A66A]
        disabled:hover:shadow-sm
        ${className}
      `}
    >
      {children}
    </button>
  );
}