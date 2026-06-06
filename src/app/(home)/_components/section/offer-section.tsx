import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const offers = [
  {
    title: "Website Design & Development",
    description: "Modern websites designed to attract and convert customers.",
  },
  {
    title: "Landing Pages",
    description: "High-converting landing pages for campaigns and promotions.",
  },
  {
    title: "Business Website Revamp",
    description:
      "Transform outdated websites into professional digital assets.",
  },
  {
    title: "SEO Foundation",
    description: "Build websites optimized for search visibility from day one.",
  },
  {
    title: "Website Maintenance",
    description: "Ongoing support, updates, and performance improvements.",
  },
] as const;

export function OfferSection() {
  return (
    <section className="bg-[#F6F3F2] my-24 py-12">
      <div className="w-full max-w-6xl mx-auto space-y-10">
        <h2 className="text-3xl text-center font-semibold">
          What We Can Help With
        </h2>
        <div className="grid grid-cols-4 gap-2">
          {offers.map((offer) => (
            <Card key={offer.title}>
              <CardHeader>
                <CardTitle>{offer.title}</CardTitle>
                <CardDescription>{offer.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="font-medium text-2xl">Ready to discuss your project?</p>
          <Button className="font-medium text-lg px-8 py-6">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
