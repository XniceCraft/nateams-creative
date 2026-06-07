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
      <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-12 mb-7">
        <div className="max-w-xl flex gap-5 items-center">
          <img
            src="/logo.png"
            alt="Nateams Logo"
            className="w-24 h-24 object-contain"
          />
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
        <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-12">
          <ul className="flex flex-row md:flex-col gap-3">
            {routes.map((route) => (
              <li
                className="relative text-sm group overflow-y-hidden"
                key={route.label}
              >
                <Link
                  className="block relative transition-normal duration-300 ease-out top-0 group-hover:-top-full"
                  href={route.href}
                >
                  {route.label}
                </Link>
                <Link
                  className="block absolute top-full left-0 group-hover:top-0 transition-normal duration-300 ease-out"
                  href={route.href}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-row md:flex-col gap-3">
            {contacts.map((contact) => (
              <li
                className="relative text-sm group overflow-y-hidden"
                key={contact.label}
              >
                <Link
                  className="block relative transition-normal duration-300 ease-out top-0 group-hover:-top-full"
                  href={contact.url}
                >
                  {contact.label}
                </Link>
                <Link
                  className="block absolute top-full left-0 group-hover:top-0 transition-normal duration-300 ease-out"
                  href={contact.url}
                >
                  {contact.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center text-sm">
        Copyright © {new Date().getFullYear()} Nateams Creative. All rights
        reserved.
      </p>
    </footer>
  );
}
