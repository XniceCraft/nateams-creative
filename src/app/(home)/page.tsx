import { ContactSection } from "./_components/section/contact-section";
import { ConsultationCTASection } from "./_components/section/consultation-cta-section";
import { TestimonialSection } from "./_components/section/testimonial-section";
import { PartnerSection } from "./_components/section/partner-section";
import { HeroSection } from "./_components/section/hero-section";
import { AboutSection } from "./_components/section/about-section";
import { OfferSection } from "./_components/section/offer-section";
import { IndustrySection } from "./_components/section/industry-section";
import { Footer } from "./_components/layout/footer";
import { Navbar } from "./_components/layout/navbar";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <OfferSection />
        <IndustrySection />
        <PartnerSection />
        <TestimonialSection />
        <ConsultationCTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
