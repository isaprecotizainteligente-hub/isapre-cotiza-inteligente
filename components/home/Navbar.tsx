"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";


export default function Navbar() {


  const [open, setOpen] = useState(false);




  function goToQuote() {


    document
      .getElementById("cotizacion")
      ?.scrollIntoView({

        behavior:"smooth",

        block:"center",

      });



    setOpen(false);


  }





  const menuItems = [

    {
      title:"Inicio",
      href:"#",
    },

    {
      title:"Cómo funciona",
      href:"#como-funciona",
    },

    {
      title:"Isapres",
      href:"#isapres",
    },

    {
      title:"Beneficios",
      href:"#beneficios",
    },

    {
      title:"Preguntas frecuentes",
      href:"#faq",
    },

  ];







  return (


<header

className="

fixed

top-0

left-0

right-0

z-50

h-20

border-b

border-white/10

bg-[#081B35]/95

backdrop-blur-xl

"

>


<Container>


<div

className="

flex

h-20

items-center

justify-between

"

>






{/* LOGO */}


<a

href="#"

className="flex items-center gap-3"

onClick={()=>setOpen(false)}

>


<Image

src="/logos/logo-v3.png"

alt="Isapre Cotiza Inteligente"

width={70}

height={70}

className="h-14 w-14 object-contain"

priority

/>


<div>


<h2

className="
text-xl
font-black
text-white
"

>

Isapre

</h2>


<p

className="
text-sm
font-medium
text-emerald-400
"

>

Cotiza Inteligente

</p>


</div>


</a>







{/* DESKTOP MENU */}



<nav

className="

hidden

items-center

gap-10

lg:flex

"

>


{

menuItems.map((item)=>(


<a

key={item.title}

href={item.href}

className="

text-sm

font-medium

text-slate-300

transition

hover:text-white

"

>


{item.title}


</a>


))

}


</nav>







{/* DESKTOP BUTTON */}



<div

className="hidden lg:block"

>


<Button

onClick={goToQuote}

>

🚀 Cotizar gratis


</Button>


</div>







{/* MOBILE BUTTON */}



<button


onClick={()=>setOpen(!open)}


className="

flex

h-11

w-11

items-center

justify-center

rounded-xl

border

border-white/10

bg-white/5

text-white

lg:hidden

"


>


{

open

?

<X className="h-5 w-5"/>

:

<Menu className="h-5 w-5"/>

}


</button>





</div>







{/* MOBILE MENU */}



{

open && (


<div

className="

absolute

left-0

right-0

top-20

border-b

border-white/10

bg-[#081B35]

px-6

py-6

shadow-2xl

lg:hidden

"

>


<nav

className="

flex

flex-col

gap-5

"

>


{

menuItems.map((item)=>(


<a


key={item.title}


href={item.href}


onClick={()=>setOpen(false)}


className="

text-base

font-semibold

text-slate-200

hover:text-white

"


>


{item.title}


</a>


))


}




<Button

onClick={goToQuote}

>


🚀 Cotizar gratis


</Button>



</nav>


</div>


)

}




</Container>



</header>



  );

}