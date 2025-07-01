"use client";



const navigation = {
  produkt: [
    { name: "Funktionen", href: "#power-proof" },
    { name: "Demo", href: "#demo" },
    { name: "Preise", href: "#preise" },
    { name: "FAQ", href: "#faq" },
  ],
  unternehmen: [
    { name: "Über Uns", href: "/ueber-uns" },
    { name: "Blog", href: "/blog" },
    { name: "Kontakt", href: "/kontakt" },
  ],
  rechtliches: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "AGB", href: "/agb" },
  ],
};

const social = [
  {
    name: "X",
    href: "#",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            {/* Hier könnte ein Logo stehen */}
            <h2 className="text-2xl font-bold text-white">Inlocon</h2>
            <p className="text-sm text-gray-300">
              Alle öffentlichen Aufträge an einem Ort. Finden Sie schneller und
              einfacher neue Projekte.
            </p>
            <div className="flex space-x-6">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm leading-6 font-semibold text-white">
                  Produkt
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.produkt.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm leading-6 font-semibold text-white">
                  Unternehmen
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.unternehmen.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm leading-6 font-semibold text-white">
                  Rechtliches
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.rechtliches.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex space-x-6">
              <div className="flex items-center gap-x-2">
                <span className="text-xs text-gray-400">DSGVO Konform</span>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="text-xs text-gray-400">Server in DE</span>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="text-xs text-gray-400">
                  TÜV-geprüfter Datenschutz
                </span>
              </div>
            </div>
            <p className="text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} Inlocon AG. Alle Rechte
              vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
