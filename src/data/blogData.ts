export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  imageUrl: string;
  excerpt: string;
  content: string;
}

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Die Zukunft der öffentlichen Ausschreibungen",
    date: "15. Juni 2025",
    author: "Dr. Anna Meier",
    imageUrl: "/images/pexels-tima-miroshnichenko-6474134.jpg",
    excerpt: "Ein Blick auf die kommenden Trends und Technologien, die den Markt für öffentliche Aufträge prägen werden.",
    content: `
      <p>Die Digitalisierung schreitet unaufhaltsam voran, und der Bereich der öffentlichen Ausschreibungen bildet da keine Ausnahme. Künstliche Intelligenz, Blockchain und Big Data werden die Art und Weise, wie Aufträge vergeben und abgewickelt werden, grundlegend verändern.</p>
      <p>KI-gestützte Systeme können bereits heute dabei helfen, passende Ausschreibungen zu identifizieren und Angebote zu optimieren. In Zukunft werden sie noch präziser und effizienter arbeiten, was sowohl Auftraggebern als auch Auftragnehmern zugutekommt.</p>
      <p>Blockchain-Technologie könnte die Transparenz und Sicherheit von Vergabeverfahren erhöhen, indem sie manipulationssichere Aufzeichnungen aller Schritte ermöglicht. Dies würde das Vertrauen in den Prozess stärken und Korruption vorbeugen.</p>
      <p>Big Data Analytics wird es ermöglichen, Muster und Trends in Ausschreibungsdaten zu erkennen, um fundiertere Entscheidungen zu treffen und die Effizienz zu steigern. Unternehmen können so ihre Strategien anpassen und ihre Erfolgschancen erhöhen.</p>
      <p>Insgesamt steht der Markt für öffentliche Aufträge vor einer spannenden Transformation. Wer diese Entwicklungen frühzeitig erkennt und adaptiert, wird sich einen entscheidenden Wettbewerbsvorteil sichern können.</p>
    `,
  },
  {
    id: "2",
    title: "5 Tipps für erfolgreiche Angebote im öffentlichen Sektor",
    date: "01. Mai 2025",
    author: "Dipl.-Ing. Klaus Schmidt",
    imageUrl: "/images/pexels-canvastudio-3277806.jpg",
    excerpt: "Praktische Ratschläge, wie Sie Ihre Chancen auf den Zuschlag bei öffentlichen Ausschreibungen maximieren können.",
    content: `
      <p>Der öffentliche Sektor bietet enorme Geschäftschancen, doch der Wettbewerb ist hart. Mit diesen fünf Tipps können Sie Ihre Angebote optimieren und Ihre Erfolgsquote steigern:</p>
      <ol>
        <li><strong>Verstehen Sie die Anforderungen genau:</strong> Lesen Sie die Vergabeunterlagen sorgfältig durch und stellen Sie sicher, dass Sie alle Kriterien und Spezifikationen vollständig verstanden haben.</li>
        <li><strong>Heben Sie Ihre Alleinstellungsmerkmale hervor:</strong> Zeigen Sie auf, warum Ihr Unternehmen die beste Wahl ist. Betonen Sie Ihre Erfahrung, Expertise und innovative Lösungen.</li>
        <li><strong>Kalkulieren Sie präzise:</strong> Ein wettbewerbsfähiger Preis ist entscheidend. Achten Sie darauf, alle Kosten zu berücksichtigen, aber vermeiden Sie überhöhte Margen.</li>
        <li><strong>Achten Sie auf Formalitäten:</strong> Öffentliche Ausschreibungen sind oft mit strengen formalen Anforderungen verbunden. Stellen Sie sicher, dass alle Dokumente vollständig und korrekt eingereicht werden.</li>
        <li><strong>Nutzen Sie Referenzen:</strong> Verweisen Sie auf ähnliche, erfolgreich abgeschlossene Projekte, um Ihre Kompetenz und Zuverlässigkeit zu belegen.</li>
      </ol>
      <p>Mit einer strategischen Herangehensweise und sorgfältiger Vorbereitung können Sie Ihre Position im öffentlichen Vergabemarkt deutlich stärken.</p>
    `,
  },
  {
    id: "3",
    title: "Nachhaltigkeit in öffentlichen Ausschreibungen: Eine wachsende Bedeutung",
    date: "20. April 2025",
    author: "Lena Grün",
    imageUrl: "/images/pexels-polina-zimmerman-3747446.jpg",
    excerpt: "Erfahren Sie, wie ökologische und soziale Kriterien zunehmend in Vergabeverfahren integriert werden.",
    content: `
      <p>Nachhaltigkeit ist kein bloßes Schlagwort mehr, sondern ein zentraler Bestandteil vieler öffentlicher Ausschreibungen. Auftraggeber legen zunehmend Wert auf ökologische und soziale Aspekte bei der Vergabe von Aufträgen.</p>
      <p>Dies umfasst Kriterien wie Energieeffizienz, Ressourcenschonung, faire Arbeitsbedingungen und die Einhaltung von Umweltstandards. Unternehmen, die diese Aspekte in ihren Geschäftsmodellen und Angeboten berücksichtigen, haben einen klaren Vorteil.</p>
      <p>Die Integration von Nachhaltigkeitskriterien fördert nicht nur den Umweltschutz und soziale Gerechtigkeit, sondern kann auch zu Kosteneinsparungen und einer verbesserten Reputation führen. Es ist eine Win-Win-Situation für alle Beteiligten.</p>
      <p>Bereiten Sie sich darauf vor, Ihre Nachhaltigkeitsstrategien in Ihren Angeboten transparent darzulegen und nachzuweisen. Dies wird in Zukunft ein entscheidender Faktor für den Erfolg im öffentlichen Sektor sein.</p>
    `,
  },
];
