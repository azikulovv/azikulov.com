import { siteConfig } from "@/shared/config/site";
import { Container } from "@/shared/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-3 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {siteConfig.name}</p>
        <p>Сделано с вниманием к деталям.</p>
      </Container>
    </footer>
  );
}
