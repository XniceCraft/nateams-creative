const reasons = [
  {
    title: "Affordable Pricing",
    desc: "We keep our prices straightforward and competitive — no hidden fees.",
  },
  {
    title: "Easy Communication",
    desc: "Clear, prompt updates so you always know what’s happening.",
  },
  {
    title: "Quality Assurance",
    desc: "We review everything carefully to ensure it meets professional standards.",
  },
  {
    title: "Support After Launch",
    desc: "We’re here to help even after your website goes live.",
  },
] as const;

export function PartnerSection() {
  return (
    <section className="bg-[#EAE7E7] p-32 flex flex-col items-center my-24">
      <h2 className="text-4xl text-center font-semibold mb-6">
        Why Work With Us
      </h2>
      <div className="mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={reason.title}
            className="flex items-center gap-5 py-5 border-b border-gray-300 last:border-none"
          >
            <span>{(index + 1).toString().padStart(2, "0")}</span>
            <div>
              <h3 className="text-gray-850 font-medium">{reason.title}</h3>
              <p className="text-gray-700 text-xs">{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
