import Container from "@/components/ui/Container";

const stats = [
  {
    value: "+10",
    title: "años de experiencia",
  },
  {
    value: "+2.500",
    title: "personas asesoradas",
  },
  {
    value: "100%",
    title: "cotización gratuita",
  },
  {
    value: "Todo Chile",
    title: "atención online",
  },
];

export default function Stats() {
  return (
    <section
      className="
        border-y
        border-[#DCE5EC]
        bg-white
      "
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.title}
              className={`
                px-6
                py-9
                text-center
                sm:px-8
                lg:py-10
                ${
                  index > 0
                    ? "border-l border-[#DCE5EC]"
                    : ""
                }
                ${
                  index === 2
                    ? "border-t border-[#DCE5EC] lg:border-t-0"
                    : ""
                }
                ${
                  index === 3
                    ? "border-t border-[#DCE5EC] lg:border-t-0"
                    : ""
                }
              `}
            >
              <p
                className="
                  text-3xl
                  font-black
                  leading-none
                  tracking-tight
                  text-[#123B63]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {item.value}
              </p>

              <p
                className="
                  mt-3
                  text-xs
                  font-medium
                  leading-5
                  text-[#7B8794]
                  sm:text-sm
                "
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}