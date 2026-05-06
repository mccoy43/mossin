import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import PriceCalculator from "@/components/PriceCalculator";
import ServiceTracker from "@/components/ServiceTracker";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Gallery />
      <PriceCalculator />
      <ServiceTracker />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppCTA />
    </main>
  );
}
