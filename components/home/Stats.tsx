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
    <section className="relative border-y border-white/10 bg-[#08101f] py-20">

      <Container>

        <div className="grid gap-12 text-center md:grid-cols-4">

          {stats.map((item) => (

            <div key={item.title}>

              <h3 className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-5xl font-black text-transparent lg:text-6xl">

                {item.value}

              </h3>

              <p className="mt-4 text-lg text-slate-400">

                {item.title}

              </p>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}