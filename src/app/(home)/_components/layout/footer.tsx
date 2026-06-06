import Link from "next/link";

const routes = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Services",
    href: "#",
  },
  {
    label: "Portfolio",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
] as const;

const contacts = [
  {
    label: "Email",
    url: "#",
  },
  {
    label: "Whatsapp",
    url: "#",
  },
  {
    label: "Linkedin",
    url: "#",
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-white px-12 py-8 border-t">
      <div className="flex justify-between max-w-6xl mx-auto mb-5">
        <div className="max-w-xl flex gap-5 items-center">
          <img src="/logo.png" className="w-24 h-24 object-contain" />
          <div>
            <h1 className="font-bold text-3xl tracking-tight mb-2">
              Nateams Agency
            </h1>
            <p className="text-sm text-muted-foreground">
              Elevating businesses through purposeful software design and
              development.
            </p>
          </div>
        </div>
        <ul className="flex flex-col gap-3">
          {routes.map((route) => (
            <li key={route.label}>
              <Link href={route.href}>{route.label}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-3">
          {contacts.map((contact) => (
            <li key={contact.label}>
              <Link href={contact.url}>{contact.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center text-sm">
        Copyright © {new Date().getFullYear()} Nateams Creative. All rights
        reserved.
      </p>
    </footer>
  );
}
