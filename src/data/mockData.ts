export interface Tender {
  id: string;
  title: string;
  location: string;
  publishDate: string;
  client: {
    name: string;
    address: string;
    contactPerson?: string;
    contactInfo?: string;
  };
  subject: string;
  serviceDescription: string;
  executionLocation: string;
  executionPeriod: string;
  awardCriteria: string;
  participationConditions: string;
  procedureType: string;
  deadlines: {
    offerSubmission: string;
    bindingPeriod: string;
  };
  tenderDocuments: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export const mockTenders: Tender[] = [
  {
    id: "1",
    title: "Neubau einer Kindertagesstätte",
    location: "München",
    publishDate: "20. Juli 2025",
    client: {
      name: "Stadtwerke München",
      address: "Emmy-Noether-Ring 2, 80992 München",
      contactPerson: "Frau Müller",
      contactInfo: "Tel: 089/123456, E-Mail: mueller@stadtwerke-muenchen.de",
    },
    subject: "Errichtung eines zweigeschossigen Gebäudes mit Außenanlagen für eine Kindertagesstätte mit 80 Plätzen.",
    serviceDescription: "Architektenleistungen LPH 1-9, Tragwerksplanung, Technische Gebäudeausrüstung, Freianlagenplanung. Ausführung der Rohbauarbeiten, Dacharbeiten, Fassadenarbeiten, Innenausbau, Elektroinstallationen, Heizung, Lüftung, Sanitär, Außenanlagen.",
    executionLocation: "Musterweg 10, 80992 München",
    executionPeriod: "Baubeginn: Q4 2025, Fertigstellung: Q4 2027",
    awardCriteria: "Wirtschaftlichstes Angebot basierend auf Preis (60%) und Qualität (40%). Qualität umfasst Referenzen, Konzept und Teamzusammensetzung.",
    participationConditions: "Nachweis der Fachkunde, Referenzen über vergleichbare Projekte der letzten 5 Jahre, Umsatznachweise, Nachweis der Berufshaftpflichtversicherung.",
    procedureType: "Offenes Verfahren",
    deadlines: {
      offerSubmission: "15. September 2025, 12:00 Uhr",
      bindingPeriod: "Bis 15. Dezember 2025",
    },
    tenderDocuments: "Vergabeunterlagen können über die Vergabeplattform XXXXX heruntergeladen werden.",
  },
  {
    id: "2",
    title: "IT-Infrastruktur für Schulzentrum",
    location: "Berlin",
    publishDate: "18. Juli 2025",
    client: {
      name: "Senatsverwaltung für Bildung, Jugend und Familie",
      address: "Bernhard-Weiß-Str. 6, 10178 Berlin",
      contactPerson: "Herr Schmidt",
      contactInfo: "Tel: 030/987654, E-Mail: schmidt@senbjf.berlin.de",
    },
    subject: "Lieferung und Installation von Netzwerkkomponenten, Servern und Endgeräten für ein neues Schulzentrum.",
    serviceDescription: "Planung, Lieferung, Installation und Konfiguration von aktiven und passiven Netzwerkkomponenten, Servern, Workstations, Laptops und Druckern. Inklusive Schulung des Personals und 2 Jahre Wartung.",
    executionLocation: "Neues Schulzentrum, Musterstraße 5, 10178 Berlin",
    executionPeriod: "Lieferung und Installation: Q1 2026, Wartung: 2026-2028",
    awardCriteria: "Bestes Preis-Leistungs-Verhältnis. Technische Spezifikationen (50%), Preis (30%), Referenzen (20%).",
    participationConditions: "Nachweis der Zertifizierungen für Netzwerktechnik, Referenzen über vergleichbare Schulprojekte, Bonitätsnachweis.",
    procedureType: "Nicht offenes Verfahren mit Teilnahmewettbewerb",
    deadlines: {
      offerSubmission: "10. September 2025, 10:00 Uhr",
      bindingPeriod: "Bis 10. Dezember 2025",
    },
    tenderDocuments: "Vergabeunterlagen sind nach erfolgreichem Teilnahmewettbewerb verfügbar.",
  },
  {
    id: "3",
    title: "Sanierung der A8, Abschnitt Leonberg",
    location: "Stuttgart",
    publishDate: "15. Juli 2025",
    client: {
      name: "Autobahn GmbH des Bundes",
      address: "Elisabeth-Selbert-Str. 17, 70197 Stuttgart",
      contactPerson: "Frau Weber",
      contactInfo: "Tel: 0711/112233, E-Mail: weber@autobahn.de",
    },
    subject: "Grundhafte Erneuerung eines 5 km langen Abschnitts der Autobahn A8 inklusive Brückenbauwerken.",
    serviceDescription: "Abbruch und Neubau von Fahrbahndecken, Erneuerung von Entwässerungssystemen, Sanierung von zwei Brücken, Markierungsarbeiten, Beschilderung und Schutzplanken.",
    executionLocation: "Autobahn A8, Abschnitt zwischen AS Leonberg-Ost und AS Leonberg-West",
    executionPeriod: "Baubeginn: Q2 2026, Fertigstellung: Q4 2028",
    awardCriteria: "Wirtschaftlichkeit (70%), technische Leistungsfähigkeit (30%).",
    participationConditions: "Nachweis der Präqualifikation für Straßenbauarbeiten, Referenzen über Autobahnsanierungen, Nachweis der technischen Ausrüstung und des Personals.",
    procedureType: "Verhandlungsverfahren mit vorherigem Teilnahmewettbewerb",
    deadlines: {
      offerSubmission: "01. Oktober 2025, 14:00 Uhr",
      bindingPeriod: "Bis 01. Januar 2026",
    },
    tenderDocuments: "Vergabeunterlagen werden den ausgewählten Bietern direkt zugesandt.",
  },
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Ausschreibung",
    definition:
      "Ein Verfahren, bei dem eine öffentliche oder private Stelle (Auftraggeber) Angebote von potenziellen Auftragnehmern einholt, um eine Dienstleistung oder ein Produkt zu beschaffen. Die Ausschreibung ist oft ein formalisierter Prozess und unterliegt gesetzlichen Vorschriften.",
  },
  {
    term: "Ex-ante",
    definition:
      "Bezieht sich auf Maßnahmen, Analysen oder Berichte, die vor der Durchführung einer Ausschreibung erfolgen, um die Notwendigkeit und den Umfang des Projekts zu definieren sowie potenzielle Risiken zu bewerten. Wenn bei Inlocon von 'Ex-ante' gesprochen wird, ist damit in der Regel eine veröffentlichte Vorinformation zu einem Projekt gemeint.",
  },
  {
    term: "Auftragsvergabe",
    definition:
      "Der Prozess, bei dem der Auftraggeber den Zuschlag an den ausgewählten Bieter vergibt. Dies schließt die Unterzeichnung eines Vertrags zwischen dem Auftraggeber und dem Auftragnehmer ein.",
  },
  {
    term: "Auftraggeber",
    definition:
      "Die öffentliche oder private Institution, die eine Ausschreibung durchführt, um eine Leistung zu erhalten. Im öffentlichen Bereich sind dies oft staatliche Stellen, Behörden oder Kommunen.",
  },
  {
    term: "Auftragnehmer",
    definition:
      "Das Unternehmen oder die Person, die durch die Ausschreibung den Zuschlag erhält und die Leistung gemäß den vertraglichen Bedingungen erbringt.",
  },
  {
    term: "CPV-Code (Common Procurement Vocabulary)",
    definition:
      "Ein standardisierter Katalog von Codes, der in der EU verwendet wird, um die Objekte von Ausschreibungen zu klassifizieren. Jeder Code entspricht einem bestimmten Produkt oder einer Dienstleistung und erleichtert die Suche und Vergleichbarkeit von Ausschreibungen.",
  },
  {
    term: "Submission",
    definition:
      "Die Einreichung von Angeboten durch potenzielle Auftragnehmer. Dieser Begriff wird oft auch für den gesamten Prozess des Angebotswesens verwendet.",
  },
  {
    term: "Leistungsverzeichnis",
    definition:
      "Eine detaillierte Beschreibung der zu erbringenden Leistungen, die in der Ausschreibung enthalten ist. Es dient den Bietern als Grundlage zur Kalkulation ihrer Angebote.",
  },
  {
    term: "Vergabeverfahren",
    definition:
      "Die Methode, die zur Auswahl des Auftragnehmers genutzt wird. Zu den häufigsten Verfahren zählen das offene Verfahren, das nicht offene Verfahren, das Verhandlungsverfahren und der wettbewerbliche Dialog.",
  },
  {
    term: "Zuschlagskriterien",
    definition:
      "Die Kriterien, anhand derer die Angebote bewertet und der Zuschlag erteilt wird. Diese können preislich und/oder qualitativ sein, wie z. B. Qualität der Leistung, Nachhaltigkeit oder Lieferzeit.",
  },
  {
    term: "Bieter",
    definition:
      "Eine natürliche oder juristische Person, die ein Angebot auf eine Ausschreibung abgibt.",
  },
  {
    term: "Rahmenvertrag",
    definition:
      "Ein Vertrag, der die allgemeinen Bedingungen für die Beschaffung bestimmter Leistungen oder Produkte über einen längeren Zeitraum festlegt, ohne jedoch konkrete Einzelaufträge abzudecken.",
  },
  {
    term: "Subunternehmer",
    definition:
      "Ein Unternehmen, das vom Hauptauftragnehmer beauftragt wird, einen Teil der vertraglich vereinbarten Leistungen zu erbringen.",
  },
];
