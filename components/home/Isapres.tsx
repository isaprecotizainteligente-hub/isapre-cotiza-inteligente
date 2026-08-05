import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";


const isapres = [
  {
    name:"Banmédica",
    logo:"/logos/banmedica.png",
  },
  {
    name:"Colmena",
    logo:"/logos/colmena.png",
  },
  {
    name:"Consalud",
    logo:"/logos/consalud.png",
  },
  {
    name:"Cruz Blanca",
    logo:"/logos/cruzblanca.png",
  },
  {
    name:"Nueva Masvida",
    logo:"/logos/masvida.png",
  },
  {
    name:"Vida Tres",
    logo:"/logos/vidatres.png",
  },
  {
    name:"Esencial",
    logo:"/logos/esencial.png",
  },
];



export default function Isapres(){


return (


<Section

id="isapres"

className="
scroll-mt-24
relative
"

>



{/* GLOW */}


<div

className="
absolute
right-0
top-0
-z-10
h-[450px]
w-[450px]
rounded-full
bg-emerald-400/10
blur-[160px]
"

/>



<div

className="
absolute
left-0
bottom-0
-z-10
h-[350px]
w-[350px]
rounded-full
bg-blue-400/10
blur-[140px]
"

/>






<Container>





<div

className="
mx-auto
max-w-3xl
text-center
"

>




<span

className="
inline-flex
rounded-full
border
border-emerald-400/20
bg-emerald-400/10
px-5
py-2
text-sm
font-semibold
text-emerald-300
"

>

Comparamos las principales Isapres

</span>







<h2

className="
mt-6
text-4xl
font-black
tracking-tight
text-white
lg:text-5xl
"

>

Encuentra la alternativa

<br/>

que realmente se adapta a ti.


</h2>







<p

className="
mt-6
text-lg
leading-8
text-slate-400
"

>

Analizamos las principales Isapres del país para ayudarte
a encontrar una mejor cobertura según tu edad, renta,
clínica y necesidades.


</p>





</div>









{/* LOGOS */}



<div

className="
mt-20
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
"

>




{
isapres.map((item)=>(



<div

key={item.name}

className="
group
relative
overflow-hidden
rounded-[28px]
border
border-slate-200
bg-white
p-8
shadow-sm
transition-all
duration-500
hover:-translate-y-2
hover:border-emerald-400/40
hover:shadow-[0_25px_60px_rgba(16,185,129,.15)]
"

>





<div

className="
absolute
right-0
top-0
h-20
w-20
rounded-full
bg-emerald-400/10
blur-2xl
transition
group-hover:scale-150
"

/>








<div

className="
relative
flex
h-28
items-center
justify-center
"

>



<Image

src={item.logo}

alt={item.name}

width={220}

height={100}

className="
h-auto
w-auto
max-h-20
object-contain
transition
duration-300
group-hover:scale-105
"

/>



</div>





</div>



))


}





</div>









{/* MENSAJE FINAL */}



<div

className="
mt-16
flex
flex-col
items-center
justify-center
gap-4
rounded-3xl
border
border-emerald-400/20
bg-emerald-400/5
px-8
py-8
text-center
lg:flex-row
"

>



<CheckCircle2

className="
h-6
w-6
text-emerald-400
"

/>





<p

className="
text-lg
text-slate-300
"

>


Comparamos las distintas alternativas disponibles para ayudarte
a tomar una decisión informada, siempre de acuerdo con tu situación
y necesidades.


</p>





</div>





</Container>




</Section>


);


}