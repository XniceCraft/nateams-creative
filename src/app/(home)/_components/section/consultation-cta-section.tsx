import { Button } from "@/components/ui/button";

export function ConsultationCTASection() {
  return (
    <section className="my-24 mx-12 bg-[#FFD04A] flex flex-col justify-center items-center p-12 rounded-4xl">
      <h2 className="text-4xl font-semibold text-center mb-5">
        Let&apos;s Build Something That Works
      </h2>
      <p className="w-[80%] text-center mb-16 text-gray-800">
        Whether you need a new website, a redesign, or advice on your digital
        presence, we&apos;re happy to discuss your goals.
      </p>
      <Button className="bg-gray-800">Book Free Consultation</Button>
    </section>
  );
}
