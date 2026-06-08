import { ContactForm } from "../form/contact-form";
import { ContactSectionContent } from "@/content/home/contact-section";

export function ContactSection() {
  return (
    <section className="flex max-w-6xl mx-auto my-24 px-8 gap-5 flex-col md:flex-row">
      <div className="flex-1/2">
        <h2 className="font-semibold text-lg mb-3">
          {ContactSectionContent.heading}
        </h2>
        <p className="text-muted-foreground text-sm mb-5">
          {ContactSectionContent.description}
        </p>
        <div className="space-y-3">
          {ContactSectionContent.contacts.map((contact) => (
            <div key={contact.value} className="flex gap-5">
              <div className="flex items-center justify-center bg-[#FFD04A] size-12 rounded-full">
                <contact.icon className="size-4" />
              </div>
              <div>
                <h3 className="uppercase text-gray-600 font-medium text-xs">
                  {contact.label}
                </h3>
                <p className="text-sm tracking-wide">{contact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1/2">
        <ContactForm />
      </div>
    </section>
  );
}
