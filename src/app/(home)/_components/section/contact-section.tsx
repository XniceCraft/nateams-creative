import { MailIcon, PhoneIcon } from "lucide-react";
import { ContactForm } from "../form/contact-form";

export function ContactSection() {
  return (
    <section className="flex max-w-6xl mx-auto my-24 px-8 gap-5 flex-col md:flex-row">
      <div className="flex-1/2">
        <h2 className="font-semibold text-lg mb-3">Get In Touch</h2>
        <p className="text-muted-foreground text-sm mb-5">
          Whether you have a specific project in mind or just want to explore
          possibilities, we&apos;re here to talk.
        </p>
        <div className="space-y-3">
          <div className="flex gap-5 ">
            <div className="flex items-center justify-center bg-[#FFD04A] size-12 rounded-full">
              <PhoneIcon className="size-4" />
            </div>
            <div>
              <h3 className="uppercase text-gray-600 font-medium text-xs">
                Whatsapp
              </h3>
              <p className="text-sm tracking-wide">+62800000000000</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex items-center justify-center bg-[#FFD04A] size-12 rounded-full">
              <MailIcon className="size-4" />
            </div>
            <div>
              <h3 className="uppercase text-gray-600 font-medium text-xs">
                Email
              </h3>
              <p className="text-sm tracking-wide">nateamscreative@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex items-center justify-center bg-[#FFD04A] size-12 rounded-full">
              <MailIcon className="size-4" />
            </div>
            <div>
              <h3 className="uppercase text-gray-600 font-medium text-xs">
                Linkedin
              </h3>
              <p className="text-sm tracking-wide">Nateams Creative</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex items-center justify-center bg-[#FFD04A] size-12 rounded-full">
              <MailIcon className="size-4" />
            </div>
            <div>
              <h3 className="uppercase text-gray-600 font-medium text-xs">
                Instagram
              </h3>
              <p className="text-sm tracking-wide">@nateamscreative</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1/2">
        <ContactForm />
      </div>
    </section>
  );
}
