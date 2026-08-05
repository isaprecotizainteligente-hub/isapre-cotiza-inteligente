import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
} from "lucide-react";


export default function TrustBar() {


  const items = [
    {
      icon: BadgeCheck,
      title: "+10",
      subtitle: "años de experiencia",
    },
    {
      icon: Clock3,
      title: "<15 min",
      subtitle: "tiempo de respuesta",
    },
    {
      icon: ShieldCheck,
      title: "100%",
      subtitle: "asesoría gratuita",
    },
  ];



  return (

    <div

      className="
      mt-10
      grid
      grid-cols-1
      gap-4
      sm:grid-cols-3
      "

    >



      {items.map((item) => {


        const Icon = item.icon;



        return (


          <div

            key={item.title}

            className="
            flex
            min-h-[110px]
            items-center
            rounded-3xl
            border
            border-white/10
            bg-white/[0.05]
            px-5
            py-4
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-emerald-400/30
            hover:bg-white/[0.08]
            "

          >




            <div

              className="
              flex
              items-center
              gap-4
              "

            >





              <div

                className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-emerald-500
                to-green-600
                shadow-lg
                shadow-emerald-500/30
                "

              >


                <Icon

                  className="
                  h-7
                  w-7
                  text-white
                  "

                />


              </div>







              <div>


                <p

                  className="
                  text-2xl
                  font-black
                  leading-none
                  text-white
                  "

                >

                  {item.title}


                </p>





                <p

                  className="
                  mt-2
                  text-sm
                  leading-tight
                  text-slate-300
                  "

                >

                  {item.subtitle}


                </p>



              </div>





            </div>





          </div>


        );


      })}



    </div>


  );

}