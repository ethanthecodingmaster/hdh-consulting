import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyHDH } from "@/components/home/WhyHDH";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFAQSchema } from "@/lib/structured-data";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <JsonLd data={getFAQSchema()} />
      <Hero />
      <ServicesOverview />
      <WhyHDH />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
