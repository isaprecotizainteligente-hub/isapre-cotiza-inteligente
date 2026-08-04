import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
} from "lucide-react";

export default function TrustBar() {
  const items = [
    {
      icon: BadgeCheck,
      title: "+10 años",
      subtitle: "de experiencia",
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
    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">

      {items.map((item) => {

        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500/30
              hover:bg-white/[0.05]
            "
          >
            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-blue-500
                  to-cyan-500
                  shadow-lg
                  shadow-blue-600/30
                "
              >
                <Icon className="h-6 w-6 text-white" />
              </div>

              <div>

                <p className="text-xl font-bold text-white">
                  {item.title}
                </p>

                <p className="text-sm text-slate-400">
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