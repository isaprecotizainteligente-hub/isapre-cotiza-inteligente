import {
  BadgeCheck,
  Clock3,
  ShieldCheck,
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
    <div className="mt-10 border-t border-[#DCE5EC] pt-7">
      <div className="grid grid-cols-1 divide-y divide-[#E9EFF4] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                flex
                items-center
                gap-3
                py-4
                first:pt-0
                last:pb-0
                sm:px-6
                sm:py-2
                sm:first:pl-0
                sm:last:pr-0
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#E8F7F0]
                  text-[#16A66A]
                "
              >
                <Icon
                  className="h-5 w-5"
                  strokeWidth={2}
                />
              </div>

              <div>
                <p
                  className="
                    text-xl
                    font-black
                    leading-none
                    tracking-tight
                    text-[#123B63]
                  "
                >
                  {item.title}
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    font-medium
                    leading-5
                    text-[#7B8794]
                  "
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}