import { About } from "@/widgets/about/ui/about";
import { Contact } from "@/widgets/contact/ui/contact";
import { Focus } from "@/widgets/focus/ui/focus";
import { Footer } from "@/widgets/footer/ui/footer";
import { Header } from "@/widgets/header/ui/header";
import { Hero } from "@/widgets/hero/ui/hero";
import { Services } from "@/widgets/services/ui/services";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <Focus />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
