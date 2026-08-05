"use client";

import {
  User,
  Phone,
  DollarSign,
  Calendar,
  Users,
  MessageSquare,
} from "lucide-react";

import { useState } from "react";

import Button from "@/components/ui/Button";



export default function QuoteForm() {


  const [form, setForm] = useState({

    nombre:"",
    telefono:"",
    renta:"",
    edad:"",
    cargas:"",
    comentario:"",

  });



  const [loading,setLoading] = useState(false);





  function handleChange(
    e:
    React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {


    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });


  }






  async function handleSubmit(
    e: React.FormEvent
  ) {


    e.preventDefault();





    if(!form.nombre.trim()){

      alert(
        "Por favor ingresa tu nombre."
      );

      return;

    }





    if(!form.telefono.trim()){

      alert(
        "Por favor ingresa tu número de teléfono."
      );

      return;

    }





    setLoading(true);





    try {


      const response = await fetch(
        "/api/contact",
        {

          method:"POST",

          headers:{

            "Content-Type":"application/json",

          },


          body:JSON.stringify({

            nombre:
            form.nombre,


            whatsapp:
            form.telefono,


            edad:
            form.edad || "No informado",


            beneficiarios:
            form.cargas || "Sin cargas",


            sistema:
            "No informado",


            renta:
            form.renta || "No informado",


            clinica:
            "No informado",


            comentario:
            form.comentario || "Sin comentarios",


          }),


        }
      );





      if(!response.ok){

        throw new Error(
          "Error enviando formulario"
        );

      }





      // GOOGLE TAG MANAGER / GA4

      if(typeof window !== "undefined"){

        window.dataLayer = window.dataLayer || [];


        window.dataLayer.push({

          event:"generate_lead",

          form_name:"cotizacion_isapre",

        });


      }





      alert(
        "¡Solicitud enviada correctamente! Te contactaremos pronto."
      );





      setForm({

        nombre:"",
        telefono:"",
        renta:"",
        edad:"",
        cargas:"",
        comentario:"",

      });





    } catch(error){


      console.error(error);



      alert(
        "Ocurrió un problema al enviar la solicitud."
      );



    } finally {


      setLoading(false);


    }


  }
  const fields = [


  {

    name:"nombre",

    label:"Nombre",

    placeholder:"Juan Pérez",

    icon:User,

    type:"text",

    required:true,

  },



  {

    name:"telefono",

    label:"Número de teléfono",

    placeholder:"+56 9 1234 5678",

    icon:Phone,

    type:"tel",

    required:true,

  },



  {

    name:"renta",

    label:"Renta imponible",

    placeholder:"$1.500.000",

    icon:DollarSign,

    type:"text",

    required:false,

  },



  {

    name:"edad",

    label:"Edad",

    placeholder:"34",

    icon:Calendar,

    type:"number",

    required:false,

  },



  {

    name:"cargas",

    label:"Edad de las cargas (si tiene)",

    placeholder:"Ej: 5, 8, 12",

    icon:Users,

    type:"text",

    required:false,

  },


];





return (


<form

onSubmit={handleSubmit}

className="

rounded-[32px]

border

border-white/15

bg-[#0D2747]/95

p-6

shadow-2xl

shadow-black/20

backdrop-blur-xl

"

>





<div className="mb-6">


<span

className="

inline-flex

rounded-full

border

border-emerald-400/30

bg-emerald-400/10

px-4

py-1.5

text-xs

font-bold

tracking-[0.18em]

text-emerald-300

"

>

COTIZACIÓN GRATUITA

</span>





<h2

className="

mt-4

text-2xl

font-black

leading-tight

text-white

"

>

Recibe tu cotización gratuita

</h2>





<p

className="

mt-2

text-sm

leading-6

text-slate-300

"

>

Analizamos tu situación y buscamos la mejor alternativa para ti.

</p>


</div>







<div className="space-y-3">


{

fields.map((field)=>{


const Icon = field.icon;



return (


<div

key={field.name}

>


<label

className="

mb-1.5

flex

items-center

gap-2

text-sm

font-semibold

text-slate-100

"

>


<Icon

className="

h-4

w-4

text-emerald-400

"

/>


{field.label}


</label>





<input


name={field.name}


type={field.type}


required={field.required}


value={
form[field.name as keyof typeof form]
}


onChange={handleChange}


placeholder={field.placeholder}


className="

w-full

rounded-xl

border

border-white/10

bg-[#071A33]

px-4

py-3

text-white

outline-none

transition-all

placeholder:text-slate-500

focus:border-emerald-400

focus:ring-4

focus:ring-emerald-400/10

"

/>


</div>


);


})

}


</div>







<div className="mt-3">


<label

className="

mb-1.5

flex

items-center

gap-2

text-sm

font-semibold

text-slate-100

"

>


<MessageSquare

className="

h-4

w-4

text-emerald-400

"

/>


¿Qué estás buscando mejorar o revisar?


</label>





<textarea


name="comentario"


value={form.comentario}


onChange={handleChange}


placeholder="Ej: Quiero pagar menos, mejorar mi cobertura, revisar mi plan actual..."


rows={3}


className="

w-full

resize-none

rounded-xl

border

border-white/10

bg-[#071A33]

px-4

py-3

text-white

outline-none

transition-all

placeholder:text-slate-500

focus:border-emerald-400

focus:ring-4

focus:ring-emerald-400/10

"


/>



</div>








<Button


type="submit"


disabled={loading}


className="

mt-6

w-full

py-3

"


>


{

loading

?

"Enviando..."

:

"🔎 Revisar mi plan"

}


</Button>






</form>


);


}