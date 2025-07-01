import { Hero } from "./_components/Hero";
import { ClientLogos } from "./_components/ClientLogos";
import { Benefits } from "./_components/Benefits";
import { Testimonials } from "./_components/Testimonials";
import { LivePreview } from "./_components/LivePreview";
import { Pricing } from "./_components/Pricing";
import { Contact } from "./_components/Contact";
import { Faq } from "./_components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Benefits />
      <Testimonials />
      <LivePreview />
      <Pricing />
      <Faq />
      <Contact />
    </>
  );
}
