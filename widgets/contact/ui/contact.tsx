import { siteConfig } from "@/shared/config/site";
import { ArrowLink } from "@/shared/ui/arrow-link";
import { Container } from "@/shared/ui/container";
import { Reveal } from "@/shared/ui/reveal";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <Container className="py-24 sm:py-32 lg:py-40">
        <Reveal>
          <p className="text-sm font-medium text-muted">Контакты</p>
          <h2 className="mt-8 max-w-4xl text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.045em]">
            Создадим что-нибудь <span className="text-muted">полезное.</span>
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
            <ArrowLink href={`mailto:${siteConfig.email}`}>Email</ArrowLink>
            {siteConfig.socialLinks.map((link) => (
              <ArrowLink key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </ArrowLink>
            ))}
          </div>
          <p className="text-sm text-muted">Открыт к интересным проектам</p>
        </div>
      </Container>
    </section>
  );
}
