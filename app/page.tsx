import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhatIsOccupationalHealth } from "@/components/sections/WhatIsOccupationalHealth";
import { PainPoints } from "@/components/sections/PainPoints";
import { ServiceCategories } from "@/components/sections/ServiceCategories";
import { CoreServices } from "@/components/sections/CoreServices";
import { Benefits } from "@/components/sections/Benefits";
import { SelfCareApp } from "@/components/sections/SelfCareApp";
import { AdvancedServices } from "@/components/sections/AdvancedServices";
import { PhysicalKit } from "@/components/sections/PhysicalKit";
import { PricingTable } from "@/components/sections/PricingTable";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { CtaBar } from "@/components/sections/CtaBar";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <WhatIsOccupationalHealth />
        <Benefits />
        <ServiceCategories />
        <CoreServices />
        <SelfCareApp />
        <AdvancedServices />
        <PhysicalKit />
        <PricingTable />
        <TrustedBy />
        <CtaBar />
      </main>
      <Footer />
    </>
  );
}
