import { Reveal } from "@/shared/ui/reveal";

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-28 pt-40 sm:px-8 sm:pb-36 sm:pt-48 lg:pb-44 lg:pt-56">
      <Reveal>
        <h1 className="max-w-5xl text-[clamp(3.2rem,8vw,8.5rem)] font-medium leading-[0.92] tracking-[-0.055em]">
          Создаю цифровые <span className="text-muted">продукты,</span> системы и полезные вещи.
        </h1>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-base leading-7 text-muted sm:text-lg">
            Software Developer, которому интересно превращать идеи в понятные и работающие решения.
          </p>

          <div className="flex items-center gap-3 text-sm text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Открыт к новым задачам
          </div>
        </div>
      </Reveal>
    </section>
  );
}
