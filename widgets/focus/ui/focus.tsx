import { Container } from "@/shared/ui/container";
import { Reveal } from "@/shared/ui/reveal";

const focusItems = [
  { label: "Создаю", text: "Цифровые продукты от идеи до работающего решения." },
  { label: "Изучаю", text: "Архитектуру, инфраструктуру и масштабируемые системы." },
  { label: "Исследую", text: "ИИ, инструменты для разработчиков и новые подходы к созданию ПО." },
];

export function Focus() {
  return (
    <section id="focus" className="border-t border-line">
      <Container className="py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">Фокус</h2>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="grid divide-y divide-line">
              {focusItems.map((item) => (
                <Reveal key={item.label} className="py-8 first:pt-0 last:pb-0">
                  <p className="text-sm text-muted">{item.label}</p>
                  <h3 className="mt-3 max-w-2xl text-2xl font-medium tracking-tight sm:text-3xl">{item.text}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
