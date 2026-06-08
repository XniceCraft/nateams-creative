import { Button } from "@/components/ui/button";
import { ConsultationCTASectionContent } from "@/content/home/consultation-cta-section";

export function ConsultationCTASection() {
  return (
    <section className="my-24 mx-12 bg-[#FFD04A] flex flex-col justify-center items-center p-12 rounded-4xl">
      <h2 className="text-4xl font-semibold text-center mb-5">
        {ConsultationCTASectionContent.heading}
      </h2>
      <p className="w-[80%] text-center mb-16 text-gray-800">
        {ConsultationCTASectionContent.description}
      </p>
      <Button className="bg-gray-800 hover:bg-gray-900" asChild>
        <a href={ConsultationCTASectionContent.buttonUrl} target="_blank">
          {ConsultationCTASectionContent.buttonText}
        </a>
      </Button>
    </section>
  );
}
