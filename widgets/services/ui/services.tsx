import { Container } from "@/shared/ui/container";
import { Reveal } from "@/shared/ui/reveal";

const services = [
  { title: "Разработка", description: "Веб-приложения, API и серверные системы. От интерфейса до логики, данных и инфраструктуры." },
  { title: "Продукты", description: "Превращаю идеи в полезные цифровые продукты, которыми хочется пользоваться." },
  { title: "Системы", description: "Архитектура, инфраструктура и инструменты для создания надёжного программного обеспечения." },
];

export function Services() {
  return (
    <section className="border-t border-line">
      <Container className="py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">Чем занимаюсь</h2>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="divide-y divide-line">
              {services.map((service, index) => (
                <Reveal key={service.title} className="grid gap-5 py-8 first:pt-0 last:pb-0 sm:grid-cols-12">
                  <div className="text-sm text-muted sm:col-span-2">{String(index + 1).padStart(2, "0")}</div>
                  <div className="sm:col-span-10">
                    <h3 className="text-2xl font-medium tracking-tight">{service.title}</h3>
                    <p className="mt-3 max-w-xl text-base leading-7 text-muted">{service.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
