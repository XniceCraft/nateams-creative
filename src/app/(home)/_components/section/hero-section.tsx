import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative border-b bg-amber-50 overflow-hidden min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-3xl w-full text-center space-y-12">
        <h2 className="text-5xl font-semibold">
          We Build Websites That Turn Visitors Into Customers
        </h2>
        <p className="text-gray-800">
          Helping businesses establish a professional online presence through
          strategic web design, development, and digital solutions.
        </p>
        <Button className="mx-auto p-6">Book a Free Consultation</Button>
      </div>
    </section>
  );
}
