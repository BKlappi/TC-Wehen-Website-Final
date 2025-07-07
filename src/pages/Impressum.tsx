import { FC, useRef, useState } from 'react';

const Impressum: FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isContentVisible] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-green-100 via-emerald-50 to-blue-50 border-b border-green-200 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Impressum
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Angaben gemäß § 5 TMG
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-16">
        <div
          ref={contentRef}
          className={`transition-all duration-700 ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Club Adresse</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900">Tennis-Club Wehen e.V.</p>
                <p>Platter Straße 89</p>
                <p>65232 Taunusstein</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Schriftverkehr</h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Schriftverkehr bitte immer richten an:</p>
                  <p>TC Wehen</p>
                  <p>Postfach 1523</p>
                  <p>65223 Taunusstein</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">oder</p>
                  <p><a href="mailto:kontakt@tc-wehen.de" className="text-tennis-green hover:underline">kontakt@tc-wehen.de</a></p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Telefon Clubhaus</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><a href="tel:061286598" className="text-tennis-green hover:underline">06128-6598</a></p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vertretungsberechtigter Vorstand</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p>Dr. Rolf Espenhain</p>
                <p>Dr. Johannes Oppermann</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Internetbeauftragter</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p>Frank Kacmaczyk</p>
                <p>Nico Hachenberg für eTennis</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Inhaltlich verantwortlich gemäß § 55 Abs. 2 RStV</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p>Tennis-Club Wehen e.V.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftung für Inhalte</h2>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Einwände</h2>
              <p>
                Einwände gegen unsere Internetseiten können wahlweise schriftlich per Post oder Fax oder per e-mail an uns gerichtet werden.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Schadensminderungspflicht</h2>
              <p>
                Im Falle von Domainstreitigkeiten oder wettbewerbsrechtlichen oder ähnlichen Problemen bitten wir Sie, zur Vermeidung unnötiger Rechtsstreite und Kosten, uns bereits im Vorfeld zu kontaktieren. Die Kostennote einer anwaltlichen Abmahnung, ohne vorhergehende Kontaktaufnahme unter den oben stehenden Adressen oder Telefonnummern, wird im Sinne der Schadensminderungspflicht als unbegründet zurückgewiesen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sonstiges</h2>
              <p>
                Die Informationen und Angaben in unseren Internetseiten wurden sorgfältig recherchiert und geprüft. Alle Angaben erfolgen ohne Gewähr. Druckfehler und Irrtümer vorbehalten. Für Richtigkeit, Vollständigkeit und Aktualität kann keine Haftung übernommen werden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;