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
        name: "Über uns",
        href: "/ueber-uns",
      },
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
    name: "Online-Platzreservierungen",
    href: "/platzreservierung",
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
];

export default navigation;