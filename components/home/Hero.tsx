"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import QuoteForm from "@/components/forms/QuoteForm";
import TrustBar from "./TrustBar";


const benefits = [
  {
    title: "Revisión gratuita",
    text: "Analizamos tu situación sin costo ni compromiso.",
  },
  {
    title: "Comparamos las principales Isapres",
    text: "Buscamos la alternativa que mejor se adapte a ti.",
  },
  {
    title: "Respuesta rápida",
    text: "Normalmente por WhatsApp en menos de 15 minutos.",
  },
];


export default function Hero() {


  const [highlightForm, setHighlightForm] = useState(false);



  function goToQuote() {


    const form = document.getElementById("cotizacion");


    form?.scrollIntoView({

      behavior:"smooth",

      block:"center",

    });



    setHighlightForm(true);



    setTimeout(()=>{

      setHighlightForm(false);

    },1500);


  }





  return (


<Section

className="
relative
min-h-[calc(100vh-80px)]
overflow-hidden
bg-[#081B35]
pt-36
pb-10
lg:pt-32
"

>


{/* FONDO */}

<div

className="
absolute
inset-0
-z-30
bg-[#081B35]
"

/>



{/* GLOW AZUL */}

<div

className="
absolute
left-[-250px]
top-[-250px]
-z-20
h-[650px]
w-[650px]
rounded-full
bg-blue-500/20
blur-[180px]
"

/>




{/* GLOW VERDE */}

<div

className="
absolute
right-[-250px]
bottom-[-250px]
-z-20
h-[650px]
w-[650px]
rounded-full
bg-emerald-400/10
blur-[180px]
"

/>




{/* GRID */}

<div

className="
absolute
inset-0
-z-10
opacity-[0.035]
"

style={{

backgroundImage:`

linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),

linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)

`,

backgroundSize:"60px 60px",

}}

/>





<Container>


<div

className="
grid
items-center
gap-10
lg:grid-cols-2
lg:gap-12
"

>



{/* IZQUIERDA */}


<div className="order-2 lg:order-1">



<div

className="
inline-flex
items-center
gap-3
rounded-full
border
border-emerald-500/20
bg-emerald-500/10
px-4
py-2
text-sm
font-semibold
text-emerald-300
"

>


<span

className="
flex
h-6
w-6
items-center
justify-center
rounded-full
bg-emerald-500
text-white
"

>

✓

</span>


Más de 10 años ayudando a personas en todo Chile


</div>





<h1

className="
mt-6
text-4xl
font-black
leading-[1.05]
tracking-tight
text-white
sm:text-5xl
lg:text-6xl
"

>


¿Estás pagando de más por tu



<span

className="
mt-2
block
bg-gradient-to-r
from-emerald-400
via-green-500
to-teal-400
bg-clip-text
text-transparent
"

>

plan de salud?


</span>


</h1>






<p

className="
mt-5
max-w-xl
text-lg
leading-8
text-slate-300
"

>

Descubre en menos de{" "}

<strong className="text-white">

2 minutos

</strong>

{" "}

si puedes acceder a una mejor cobertura o pagar menos por tu plan.
Comparamos las principales Isapres de Chile.


</p>






<div className="mt-5 space-y-3">


{

benefits.map((item)=>(


<div

key={item.title}

className="
flex
items-center
gap-3
rounded-2xl
border
border-white/10
bg-white/[0.06]
p-3
backdrop-blur-xl
"

>


<div

className="
flex
h-9
w-9
shrink-0
items-center
justify-center
rounded-full
bg-green-500
shadow-lg
shadow-green-500/30
"

>

<CheckCircle2 className="h-5 w-5 text-white"/>

</div>




<div>

<p className="font-semibold text-white">

{item.title}

</p>


<p className="text-sm text-slate-400">

{item.text}

</p>


</div>



</div>


))

}


</div>







<div className="mt-6 flex flex-wrap gap-3">


<Button onClick={goToQuote}>

🔎 Revisar mi plan

</Button>



<a

href="#como-funciona"

className="
rounded-2xl
border
border-white/10
bg-white/[0.04]
px-7
py-4
font-semibold
text-white
transition
hover:border-emerald-400
"

>

Cómo funciona


</a>


</div>





<TrustBar />



</div>








{/* FORMULARIO */}

<div
  id="cotizacion"
  className={`
    order-1 lg:order-2
    relative
    lg:-mt-12
    transition-all
    duration-500

    ${
      highlightForm
        ? "scale-[1.02] drop-shadow-[0_0_35px_rgba(34,197,94,.35)]"
        : ""
    }
  `}
>




<div

className="
absolute
-inset-5
rounded-[40px]
bg-emerald-500/10
blur-3xl
"

/>



<div className="relative">


<QuoteForm />


</div>



</div>





</div>


</Container>



</Section>


  );


}