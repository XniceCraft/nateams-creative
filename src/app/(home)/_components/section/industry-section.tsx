import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const industries = [
  {
    title: "Professional Services",
    image: "./placeholder.webp",
    description:
      "A practical talk on component APIs, accessibility, and shipping faster.",
  },
  {
    title: "Real Estate",
    image: "./placeholder.webp",
    description: "Property agents, property management, developers.",
  },
  {
    title: "Cafes & Restaurants",
    image: "./placeholder.webp",
    description: "Cafes, bakeries, restaurants, local F&B brands.",
  },
  {
    title: "Hospitality",
    image: "./placeholder.webp",
    description: "Hotels, villas, guesthouses, travel businesses.",
  },
  {
    title: "Startups & SaaS",
    image: "./placeholder.webp",
    description: "New businesses building credibility online.",
  },
  {
    title: "SMEs & Micro Businesses",
    image: "./placeholder.webp",
    description: "Local businesses looking to grow digitally.",
  },
];

export function IndustrySection() {
  return (
    <section className="w-full max-w-6xl mx-auto my-12">
      <h2 className="text-3xl font-semibold mb-12 text-center">
        Industries We Support
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {industries.map((industry) => (
          <Card key={industry.title} className="pt-0">
            <img
              src={industry.image}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader>
              <CardTitle>{industry.title}</CardTitle>
              <CardDescription>{industry.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
