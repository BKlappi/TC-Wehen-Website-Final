import { useState } from 'react'
import { Link } from 'react-router-dom'

const navigation = [
  {
    name: "Start",
    href: "/",
  },
  {
    name: "Clubanlage",
    href: "/clubanlage",
  },
  {
    name: "Verein",
    href: "#",
    children: [
      {
        name: "Mitgliedschaft",
        href: "/mitgliedschaft",
      },
      {
        name: "Mannschaften",
        href: "https://htv.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/clubInfoDisplay?club=24972",
        external: true,
      },
      {
        name: "Medenspiele",
        href: "https://htv.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/clubMeetings?club=24972",
        external: true,
      },
      {
        name: "Unser Vorstand",
        href: "/vorstand",
      },
      {
        name: "Mach Mit!",
        href: "http://tc-wehen.de/wp-content/uploads/2024/01/Mithilfe_Mitglieder.pdf",
        external: true,
      },
      {
        name: "Satzung",
        href: "https://tc-wehen.com/wp-content/uploads/2021/03/Satzung_TC-Wehen_Maerz_2020.pdf",
        external: true,
      },
      {
        name: "Beitrag und Gebühren",
        href: "http://tc-wehen.de/wp-content/uploads/2025/04/Beitragsordnung_TCWehen_2025.pdf",
        external: true,
      },
      {
        name: "Hand und Spanndienst",
        href: "http://tc-wehen.de/wp-content/uploads/2024/04/TCW_HSD_Arbeitsstunden.pdf",
        external: true,
      },
      {
        name: "Gastspieler",
        href: "http://tc-wehen.de/wp-content/uploads/2025/04/Gastspieler_2025.pdf",
        external: true,
      },
    ],
  },
  {
    name: "Online-Platzreservierung",
    href: "/online-reservierung",
  },
  {
    name: "Tennisschule",
    href: "/tennisschule",
  },
  {
    name: "Kontakt",
    href: "/kontakt",
  },
  {
    name: "Sponsoren",
    href: "/sponsoren",
  },
  {
    name: "Shop",
    href: "https://sportinn.eu/tc-wehen",
    external: true,
  },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/assets/Logo-TCW.PNG" 
              alt="TC Wehen Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-tcwehen-secondary">TC Wehen e.V.</h1>
              <p className="text-sm text-gray-600">Tennis Club</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(item.name)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <button className="px-4 py-2 text-gray-700 hover:text-tcwehen-primary font-medium transition-colors duration-200 whitespace-nowrap">
                      {item.name}
                    </button>
                    {dropdownOpen === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                        {item.children.map((child) => (
                          <div key={child.name}>
                            {child.external ? (
                              <a
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-tcwehen-primary hover:text-white transition-colors duration-200"
                              >
                                {child.name}
                              </a>
                            ) : (
                              <Link
                                to={child.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-tcwehen-primary hover:text-white transition-colors duration-200"
                              >
                                {child.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-gray-700 hover:text-tcwehen-primary font-medium transition-colors duration-200 whitespace-nowrap"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="px-4 py-2 text-gray-700 hover:text-tcwehen-primary font-medium transition-colors duration-200 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-tcwehen-primary"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setDropdownOpen(dropdownOpen === item.name ? null : item.name)}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:text-tcwehen-primary font-medium"
                      >
                        {item.name}
                      </button>
                      {dropdownOpen === item.name && (
                        <div className="pl-6 space-y-1">
                          {item.children.map((child) => (
                            <div key={child.name}>
                              {child.external ? (
                                <a
                                  href={child.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-tcwehen-primary"
                                >
                                  {child.name}
                                </a>
                              ) : (
                                <Link
                                  to={child.href}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-tcwehen-primary"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {child.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:text-tcwehen-primary font-medium"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-4 py-2 text-gray-700 hover:text-tcwehen-primary font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}