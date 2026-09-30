import Image from "next/image";
import { Container } from "@/shared/ui/container";
import { Reveal } from "@/shared/ui/reveal";
import { siteConfig } from "@/shared/config/site";

const facts = [
  { label: "Формат работы", value: "Удалённо" },
  { label: "Компетенции", value: "От кода до продукта" },
  { label: "Ценю", value: "Понятность · Польза · Детали" },
];

export function About() {
  return (
    <section id="about" className="border-t border-line">
      <Container className="py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">Обо мне</h2>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal>
              <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_9rem] sm:items-start sm:gap-8">
                <div>
                  <p className="max-w-3xl text-2xl font-medium leading-tight tracking-tight sm:text-4xl">Я Маулен — Software Developer.</p>
                  <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                    Мне нравится превращать сложные идеи в понятные решения и разбираться в том, как всё работает изнутри.
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                    Ценю хорошие интерфейсы, чистую архитектуру и продукты, которые действительно решают задачи.
                  </p>
                </div>

                <div className="order-first sm:order-last">
                  <div className="relative mx-auto aspect-square w-28 overflow-hidden rounded-3xl border border-line bg-[#e9e9e6] shadow-[0_12px_30px_rgba(24,24,27,0.08)] sm:w-36">
                    <Image
                      src={siteConfig.avatarUrl}
                      alt={siteConfig.name}
                      fill
                      sizes="(min-width: 640px) 144px, 112px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-paper p-6">
                  <p className="text-xs uppercase tracking-wider text-muted">{fact.label}</p>
                  <p className="mt-3 text-sm font-medium">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
