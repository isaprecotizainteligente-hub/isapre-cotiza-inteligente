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
      
      rounded-2xl

      bg-gradient-to-r
      from-emerald-400
      to-green-500

      px-7
      py-4

      font-bold
      text-white

      shadow-lg
      shadow-emerald-500/30

      transition-all

      hover:scale-105

      disabled:cursor-not-allowed
      disabled:opacity-60

      ${className}

      `}

    >

      {children}

    </button>

  );


}