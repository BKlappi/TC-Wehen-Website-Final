import { useRef, useState } from 'react';

const Datenschutz: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isContentVisible] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-green-100 via-emerald-50 to-blue-50 border-b border-green-200 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Datenschutzerklärung
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Informationen zum Umgang mit personenbezogenen Daten
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-16">
        <div
          ref={contentRef}
          className={`prose prose-lg max-w-none transition-all duration-700 ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <p>
                Wir freuen uns sehr über Ihr Interesse an unserem Verein. Datenschutz hat einen besonders hohen Stellenwert für die Vereinsführung des Tennisclub Wehen e.V.. Eine Nutzung unserer Internetseiten ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services unseres Vereins über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht für eine solche Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.
              </p>
              <p>
                Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen Person, erfolgt stets im Einklang mit der Datenschutz-Grundverordnung und in Übereinstimmung mit den für unseren Verein geltenden landesspezifischen Datenschutzbestimmungen. Mittels dieser Datenschutzerklärung möchte unser Verein die Öffentlichkeit über Art, Umfang und Zweck der von uns erhobenen, genutzten und verarbeiteten personenbezogenen Daten informieren. Ferner werden betroffene Personen mittels dieser Datenschutzerklärung über die ihnen zustehenden Rechte aufgeklärt.
              </p>
              <p>
                Unser Verein hat als für die Verarbeitung Verantwortlicher zahlreiche technische und organisatorische Maßnahmen umgesetzt, um einen möglichst lückenlosen Schutz der über diese Internetseite verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch können Internetbasierte Datenübertragungen grundsätzlich Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht gewährleistet werden kann. Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene Daten auch auf alternativen Wegen, beispielsweise telefonisch, an uns zu übermitteln.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Begriffsbestimmungen</h2>
              <p>
                Die Datenschutzerklärung des Vereins beruht auf den Begrifflichkeiten, die durch den Europäischen Richtlinien- und Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung (DS-GVO) verwendet wurden. Unsere Datenschutzerklärung soll sowohl für die Öffentlichkeit als auch für unsere Mitglieder einfach lesbar und verständlich sein. Um dies zu gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten erläutern.
              </p>
              <p>
                Wir verwenden in dieser Datenschutzerklärung unter anderem die folgenden Begriffe:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">a) personenbezogene Daten</h3>
                  <p>
                    Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person") beziehen. Als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">b) betroffene Person</h3>
                  <p>
                    Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene Daten von dem für die Verarbeitung Verantwortlichen verarbeitet werden.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">c) Verarbeitung</h3>
                  <p>
                    Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">d) Einschränkung der Verarbeitung</h3>
                  <p>
                    Einschränkung der Verarbeitung ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">e) Profiling</h3>
                  <p>
                    Profiling ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere, um Aspekte bezüglich Arbeitsleistung, wirtschaftlicher Lage, Gesundheit, persönlicher Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">f) Pseudonymisierung</h3>
                  <p>
                    Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf welche die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">g) Verantwortlicher oder für die Verarbeitung Verantwortlicher</h3>
                  <p>
                    Verantwortlicher oder für die Verarbeitung Verantwortlicher ist die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet. Sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">h) Auftragsverarbeiter</h3>
                  <p>
                    Auftragsverarbeiter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">i) Empfänger</h3>
                  <p>
                    Empfänger ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, der personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten jedoch nicht als Empfänger.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">j) Dritter</h3>
                  <p>
                    Dritter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle außer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu verarbeiten.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">k) Einwilligung</h3>
                  <p>
                    Einwilligung ist jede von der betroffenen Person freiwillig für den bestimmten Fall in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Name und Anschrift des für die Verarbeitung Verantwortlichen</h2>
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten der Europäischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem Charakter ist der:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p>
                  <strong>Tennisclub Wehen e.V.</strong><br />
                  Platter Straße o.Nr.<br />
                  65232 Taunusstein<br />
                  E-Mail: kontakt@tc-wehen.de
                </p>
                <p className="mt-2">
                  <strong>Schriftverkehr:</strong><br />
                  TC Wehen<br />
                  Postfach 1523<br />
                  65223 Taunusstein
                </p>
                <p className="mt-2">
                  <strong>Website:</strong> www.tc-wehen.de
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cookies</h2>
              <p>
                Die Internetseiten des Vereins verwenden Cookies. Cookies sind Textdateien, welche über einen Internetbrowser auf einem Computersystem abgelegt und gespeichert werden.
              </p>
              <p>
                Zahlreiche Internetseiten und Server verwenden Cookies. Viele Cookies enthalten eine sogenannte Cookie-ID. Eine Cookie-ID ist eine eindeutige Kennung des Cookies. Sie besteht aus einer Zeichenfolge, durch welche Internetseiten und Server dem konkreten Internetbrowser zugeordnet werden können, in dem das Cookie gespeichert wurde. Dies ermöglicht es den besuchten Internetseiten und Servern, den individuellen Browser der betroffenen Person von anderen Internetbrowsern, die andere Cookies enthalten, zu unterscheiden. Ein bestimmter Internetbrowser kann über die eindeutige Cookie-ID wiedererkannt und identifiziert werden.
              </p>
              <p>
                Durch den Einsatz von Cookies kann unser Verein den Nutzern dieser Internetseite nutzerfreundlichere Services bereitstellen, die ohne die Cookie-Setzung nicht möglich wären.
              </p>
              <p>
                Mittels eines Cookies können die Informationen und Angebote auf unserer Internetseite im Sinne des Benutzers optimiert werden. Cookies ermöglichen uns, wie bereits erwähnt, die Benutzer unserer Internetseite wiederzuerkennen. Zweck dieser Wiedererkennung ist es, den Nutzern die Verwendung unserer Internetseite zu erleichtern. Der Benutzer einer Internetseite, die Cookies verwendet, muss beispielsweise nicht bei jedem Besuch der Internetseite erneut seine Zugangsdaten eingeben, weil dies von der Internetseite und dem auf dem Computersystem des Benutzers abgelegten Cookie übernommen wird.
              </p>
              <p>
                Die betroffene Person kann die Setzung von Cookies durch unsere Internetseite jederzeit mittels einer entsprechenden Einstellung des genutzten Internetbrowsers verhindern und damit der Setzung von Cookies dauerhaft widersprechen. Ferner können bereits gesetzte Cookies jederzeit über einen Internetbrowser oder andere Softwareprogramme gelöscht werden. Dies ist in allen gängigen Internetbrowsern möglich. Deaktiviert die betroffene Person die Setzung von Cookies in dem genutzten Internetbrowser, sind unter Umständen nicht alle Funktionen unserer Internetseite vollumfänglich nutzbar.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Erfassung von allgemeinen Daten und Informationen</h2>
              <p>
                Die Internetseite des Vereins Tennis Club Wehen e.V. erfasst mit jedem Aufruf der Internetseite durch eine betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert. Erfasst werden können die (1) verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System verwendete Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche über ein zugreifendes System auf unserer Internetseite angesteuert werden, (5) das Datum und die Uhrzeit eines Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse (IP-Adresse), (7) der Internet-Service-Provider des zugreifenden Systems und (8) sonstige ähnliche Daten und Informationen, die der Gefahrenabwehr im Falle von Angriffen auf unsere informationstechnologischen Systeme dienen.
              </p>
              <p>
                Bei der Nutzung dieser allgemeinen Daten und Informationen zieht der Verein keine Rückschlüsse auf die betroffene Person. Diese Informationen werden vielmehr benötigt, um (1) die Inhalte unserer Internetseite korrekt auszuliefern, (2) die Inhalte unserer Internetseite sowie die Werbung für diese zu optimieren, (3) die dauerhafte Funktionsfähigkeit unserer informationstechnologischen Systeme und der Technik unserer Internetseite zu gewährleisten sowie (4) um Strafverfolgungsbehörden im Falle eines Cyberangriffes die zur Strafverfolgung notwendigen Informationen bereitzustellen. Diese anonym erhobenen Daten und Informationen werden durch den Verein daher einerseits statistisch und ferner mit dem Ziel ausgewertet, den Datenschutz und die Datensicherheit in unserem Verein zu erhöhen, um letztlich ein optimales Schutzniveau für die von uns verarbeiteten personenbezogenen Daten sicherzustellen. Die anonymen Daten der Server-Logfiles werden getrennt von allen durch eine betroffene Person angegebenen personenbezogenen Daten gespeichert.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Registrierung auf unserer Internetseite</h2>
              <p>
                Die betroffene Person hat die Möglichkeit, sich auf der Internetseite des für die Verarbeitung Verantwortlichen unter Angabe von personenbezogenen Daten zu registrieren. Welche personenbezogenen Daten dabei an den für die Verarbeitung Verantwortlichen übermittelt werden, ergibt sich aus der jeweiligen Eingabemaske, die für die Registrierung verwendet wird. Die von der betroffenen Person eingegebenen personenbezogenen Daten werden ausschließlich für die interne Verwendung bei dem für die Verarbeitung Verantwortlichen und für eigene Zwecke erhoben und gespeichert. Der für die Verarbeitung Verantwortliche kann die Weitergabe an einen oder mehrere Auftragsverarbeiter, beispielsweise einen Paketdienstleister, veranlassen, der die personenbezogenen Daten ebenfalls ausschließlich für eine interne Verwendung, die dem für die Verarbeitung Verantwortlichen zuzurechnen ist, nutzt.
              </p>
              <p>
                Durch eine Registrierung auf der Internetseite des für die Verarbeitung Verantwortlichen wird ferner die vom Internet-Service-Provider (ISP) der betroffenen Person vergebene IP-Adresse, das Datum sowie die Uhrzeit der Registrierung gespeichert. Die Speicherung dieser Daten erfolgt vor dem Hintergrund, dass nur so der Missbrauch unserer Dienste verhindert werden kann, und diese Daten im Bedarfsfall ermöglichen, begangene Straftaten aufzuklären. Insofern ist die Speicherung dieser Daten zur Absicherung des für die Verarbeitung Verantwortlichen erforderlich. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, sofern keine gesetzliche Pflicht zur Weitergabe besteht oder die Weitergabe der Strafverfolgung dient.
              </p>
              <p>
                Die Registrierung der betroffenen Person unter freiwilliger Angabe personenbezogener Daten dient dem für die Verarbeitung Verantwortlichen dazu, der betroffenen Person Inhalte oder Leistungen anzubieten, die aufgrund der Natur der Sache nur registrierten Benutzern angeboten werden können. Registrierten Personen steht die Möglichkeit frei, die bei der Registrierung angegebenen personenbezogenen Daten jederzeit abzuändern oder vollständig aus dem Datenbestand des für die Verarbeitung Verantwortlichen löschen zu lassen.
              </p>
              <p>
                Der für die Verarbeitung Verantwortliche erteilt jeder betroffenen Person jederzeit auf Anfrage Auskunft darüber, welche personenbezogenen Daten über die betroffene Person gespeichert sind. Ferner berichtigt oder löscht der für die Verarbeitung Verantwortliche personenbezogene Daten auf Wunsch oder Hinweis der betroffenen Person, soweit dem keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Ein in dieser Datenschutzerklärung namentlich benannter Datenschutzbeauftragter und die Gesamtheit der Mitarbeiter des für die Verarbeitung Verantwortlichen stehen der betroffenen Person in diesem Zusammenhang als Ansprechpartner zur Verfügung.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Abonnement unseres Newsletters</h2>
              <p>
                Auf der Internetseite des Vereins wird den Benutzern die Möglichkeit eingeräumt, den Newsletter unseres Vereins zu abonnieren. Welche personenbezogenen Daten bei der Bestellung des Newsletters an den für die Verarbeitung Verantwortlichen übermittelt werden, ergibt sich aus der hierzu verwendeten Eingabemaske.
              </p>
              <p>
                Der Verein informiert seine Mitglieder in regelmäßigen Abständen im Wege eines Newsletters über Angebote des Vereins. Der Newsletter unseres Vereins kann von der betroffenen Person grundsätzlich nur dann empfangen werden, wenn (1) die betroffene Person über eine gültige E-Mail-Adresse verfügt und (2) die betroffene Person sich für den Newsletterversand registriert. An die von einer betroffenen Person erstmalig für den Newsletterversand eingetragene E-Mail-Adresse wird aus rechtlichen Gründen eine Bestätigungsmail im Double-Opt-In-Verfahren versendet. Diese Bestätigungsmail dient der Überprüfung, ob der Inhaber der E-Mail-Adresse als betroffene Person den Empfang des Newsletters autorisiert hat.
              </p>
              <p>
                Bei der Anmeldung zum Newsletter speichern wir ferner die vom Internet-Service-Provider (ISP) vergebene IP-Adresse des von der betroffenen Person zum Zeitpunkt der Anmeldung verwendeten Computersystems sowie das Datum und die Uhrzeit der Anmeldung. Die Erhebung dieser Daten ist erforderlich, um den(möglichen) Missbrauch der E-Mail-Adresse einer betroffenen Person zu einem späteren Zeitpunkt nachvollziehen zu können und dient deshalb der rechtlichen Absicherung des für die Verarbeitung Verantwortlichen.
              </p>
              <p>
                Die im Rahmen einer Anmeldung zum Newsletter erhobenen personenbezogenen Daten werden ausschließlich zum Versand unseres Newsletters verwendet. Ferner könnten Abonnenten des Newsletters per E-Mail informiert werden, sofern dies für den Betrieb des Newsletter-Dienstes oder eine diesbezügliche Registrierung erforderlich ist, wie dies im Falle von Änderungen am Newsletterangebot oder bei der Veränderung der technischen Gegebenheiten der Fall sein könnte. Es erfolgt keine Weitergabe der im Rahmen des Newsletter-Dienstes erhobenen personenbezogenen Daten an Dritte. Das Abonnement unseres Newsletters kann durch die betroffene Person jederzeit gekündigt werden. Die Einwilligung in die Speicherung personenbezogener Daten, die die betroffene Person uns für den Newsletterversand erteilt hat, kann jederzeit widerrufen werden. Zum Zwecke des Widerrufs der Einwilligung findet sich in jedem Newsletter ein entsprechender Link. Ferner besteht die Möglichkeit, sich jederzeit auch direkt auf der Internetseite des für die Verarbeitung Verantwortlichen vom Newsletterversand abzumelden oder dies dem für die Verarbeitung Verantwortlichen auf andere Weise mitzuteilen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Kontaktmöglichkeit über die Internetseite</h2>
              <p>
                Die Internetseite des Vereins enthält aufgrund von gesetzlichen Vorschriften Angaben, die eine schnelle elektronische Kontaktaufnahme zu unserem Verein sowie eine unmittelbare Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine Adresse der sogenannten elektronischen Post (E-Mail-Adresse) umfasst. Sofern eine betroffene Person per E-Mail oder über ein Kontaktformular den Kontakt mit dem für die Verarbeitung Verantwortlichen aufnimmt, werden die von der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert. Solche auf freiwilliger Basis von einer betroffenen Person an den für die Verarbeitung Verantwortlichen übermittelten personenbezogenen Daten werden für Zwecke der Bearbeitung oder der Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt keine Weitergabe dieser personenbezogenen Daten an Dritte.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Kommentarfunktion im Blog auf der Internetseite</h2>
              <p>
                Der Verein bietet den Nutzern auf einem Blog, der sich auf der Internetseite des für die Verarbeitung Verantwortlichen befindet, die Möglichkeit, individuelle Kommentare zu einzelnen Blog-Beiträgen zu hinterlassen. Ein Blog ist ein auf einer Internetseite geführtes, in der Regel öffentlich einsehbares Portal, in welchem eine oder mehrere Personen, die Blogger oder Web-Blogger genannt werden, Artikel posten oder Gedanken in sogenannten Blogposts niederschreiben können. Die Blogposts können in der Regel von Dritten kommentiert werden.
              </p>
              <p>
                Hinterlässt eine betroffene Person einen Kommentar in dem auf dieser Internetseite veröffentlichten Blog, werden neben den von der betroffenen Person hinterlassenen Kommentaren auch Angaben zum Zeitpunkt der Kommentareingabe sowie zu dem von der betroffenen Person gewählten Nutzernamen (Pseudonym) gespeichert und veröffentlicht. Ferner wird die vom Internet-Service-Provider (ISP) der betroffenen Person vergebene IP-Adresse mit protokolliert. Diese Speicherung der IP-Adresse erfolgt aus Sicherheitsgründen und für den Fall, dass die betroffene Person durch einen abgegebenen Kommentar die Rechte Dritter verletzt oder rechtswidrige Inhalte postet. Die Speicherung dieser personenbezogenen Daten erfolgt daher im eigenen Interesse des für die Verarbeitung Verantwortlichen, damit sich dieser im Falle einer Rechtsverletzung gegebenenfalls exkulpieren könnte. Es erfolgt keine Weitergabe dieser erhobenen personenbezogenen Daten an Dritte, sofern eine solche Weitergabe nicht gesetzlich vorgeschrieben ist oder der Rechtsverteidigung des für die Verarbeitung Verantwortlichen dient.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Abonnement von Kommentaren im Blog auf der Internetseite</h2>
              <p>
                Die im Blog des Vereins abgegebenen Kommentare können grundsätzlich von Dritten abonniert werden. Insbesondere besteht die Möglichkeit, dass ein Kommentator die seinem Kommentar nachfolgenden Kommentare zu einem bestimmten Blog-Beitrag abonniert.
              </p>
              <p>
                Sofern sich eine betroffene Person für die Option entscheidet, Kommentare zu abonnieren, versendet der für die Verarbeitung Verantwortliche eine automatische Bestätigungsmail, um im Double-Opt-In-Verfahren zu überprüfen, ob sich wirklich der Inhaber der angegebenen E-Mail-Adresse für diese Option entschieden hat. Die Option zum Abonnement von Kommentaren kann jederzeit beendet werden.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Routinemäßige Löschung und Sperrung von personenbezogenen Daten</h2>
              <p>
                Der für die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten der betroffenen Person nur für den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist oder sofern dies durch den Europäischen Richtlinien- und Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder Vorschriften, welchen der für die Verarbeitung Verantwortliche unterliegt, vorgesehen wurde.
              </p>
              <p>
                Entfällt der Speicherungszweck oder läuft eine vom Europäischen Richtlinien- und Verordnungsgeber oder einem anderen zuständigen Gesetzgeber vorgeschriebene Speicherfrist ab, werden die personenbezogenen Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Rechte der betroffenen Person</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">a) Recht auf Bestätigung</h3>
                  <p>
                    Jede betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber eingeräumte Recht, von dem für die Verarbeitung Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden. Möchte eine betroffene Person dieses Bestätigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an unseren Datenschutzbeauftragten oder einen anderen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">b) Recht auf Auskunft</h3>
                  <p>
                    Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, jederzeit von dem für die Verarbeitung Verantwortlichen unentgeltliche Auskunft über die zu seiner Person gespeicherten personenbezogenen Daten und eine Kopie dieser Auskunft zu erhalten. Ferner hat der Europäische Richtlinien- und Verordnungsgeber der betroffenen Person Auskunft über folgende Informationen zugestanden:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>die Verarbeitungszwecke</li>
                    <li>die Kategorien personenbezogener Daten, die verarbeitet werden</li>
                    <li>die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empfängern in Drittländern oder bei internationalen Organisationen</li>
                    <li>falls möglich die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer</li>
                    <li>das Bestehen eines Rechts auf Berichtigung oder Löschung der sie betreffenden personenbezogenen Daten oder auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung</li>
                    <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde</li>
                    <li>wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden: Alle verfügbaren Informationen über die Herkunft der Daten</li>
                    <li>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Artikel 22 Abs.1 und 4 DS-GVO und — zumindest in diesen Fällen — aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person</li>
                  </ul>
                  <p>
                    Ferner steht der betroffenen Person ein Auskunftsrecht darüber zu, ob personenbezogene Daten an ein Drittland oder an eine internationale Organisation übermittelt wurden. Sofern dies der Fall ist, so steht der betroffenen Person im Übrigen das Recht zu, Auskunft über die geeigneten Garantien im Zusammenhang mit der Übermittlung zu erhalten.
                  </p>
                  <p>
                    Möchte eine betroffene Person dieses Auskunftsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an unseren Datenschutzbeauftragten oder einen anderen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">c) Recht auf Berichtigung</h3>
                  <p>
                    Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, die unverzügliche Berichtigung sie betreffender unrichtiger personenbezogener Daten zu verlangen. Ferner steht der betroffenen Person das Recht zu, unter Berücksichtigung der Zwecke der Verarbeitung, die Vervollständigung unvollständiger personenbezogener Daten — auch mittels einer ergänzenden Erklärung — zu verlangen.
                  </p>
                  <p>
                    Möchte eine betroffene Person dieses Berichtigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an unseren Datenschutzbeauftragten oder einen anderen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">d) Recht auf Löschung (Recht auf Vergessen werden)</h3>
                  <p>
                    Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen zu verlangen, dass die sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, sofern einer der folgenden Gründe zutrifft und soweit die Verarbeitung nicht erforderlich ist:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Die personenbezogenen Daten wurden für solche Zwecke erhoben oder auf sonstige Weise verarbeitet, für welche sie nicht mehr notwendig sind.</li>
                    <li>Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
                    <li>Die betroffene Person legt gemäß Art. 21 Abs. 1 DS-GVO Widerspruch gegen die Verarbeitung ein, und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder die betroffene Person legt gemäß Art. 21 Abs. 2 DS-GVO Widerspruch gegen die Verarbeitung ein.</li>
                    <li>Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
                    <li>Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.</li>
                    <li>Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DS-GVO erhoben.</li>
                  </ul>
                  <p>
                    Sofern einer der oben genannten Gründe zutrifft und eine betroffene Person die Löschung von personenbezogenen Daten, die bei dem Verein gespeichert sind, veranlassen möchte, kann sie sich hierzu jederzeit an unseren Datenschutzbeauftragten oder einen anderen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden. Der Datenschutzbeauftragte des Vereins oder ein anderer Mitarbeiter wird veranlassen, dass dem Löschverlangen unverzüglich nachgekommen wird.
                  </p>
                  <p>
                    Wurden die personenbezogenen Daten von dem Verein öffentlich gemacht und ist unser Verein als Verantwortlicher gemäß Art. 17 Abs. 1 DS-GVO zur Löschung der personenbezogenen Daten verpflichtet, so trifft der Verein unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um andere für die Datenverarbeitung Verantwortliche, welche die veröffentlichten personenbezogenen Daten verarbeiten, darüber in Kenntnis zu setzen, dass die betroffene Person von diesen anderen für die Datenverarbeitung Verantwortlichen die Löschung sämtlicher Links zu diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt hat, soweit die Verarbeitung nicht erforderlich ist. Der Datenschutzbeauftragte des Vereins oder ein anderer Mitarbeiter wird im Einzelfall das Notwendige veranlassen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">e) Recht auf Einschränkung der Verarbeitung</h3>
                  <p>
                    Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Die Richtigkeit der personenbezogenen Daten wird von der betroffenen Person bestritten, und zwar für eine Dauer, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen.</li>
                    <li>Die Verarbeitung ist unrechtmäßig, die betroffene Person lehnt die Löschung der personenbezogenen Daten ab und verlangt stattdessen die Einschränkung der Nutzung der personenbezogenen Daten.</li>
                    <li>Der Verantwortliche benötigt die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger, die betroffene Person benötigt sie jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
                    <li>Die betroffene Person hat Widerspruch gegen die Verarbeitung gem. Art. 21 Abs. 1 DS-GVO eingelegt und es steht noch nicht fest, ob die berechtigten Gründe des Verantwortlichen gegenüber denen der betroffenen Person überwiegen.</li>
                  </ul>
                  <p>
                    Sofern eine der oben genannten Voraussetzungen gegeben ist und eine betroffene Person die Einschränkung von personenbezogenen Daten, die bei dem Verein gespeichert sind, verlangen möchte, kann sie sich hierzu jederzeit an unseren Datenschutzbeauftragten oder einen anderen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden. Der Datenschutzbeauftragte des Vereins oder ein anderer Mitarbeiter wird die Einschränkung der Verarbeitung veranlassen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">f) Recht auf Datenübertragbarkeit</h3>
                  <p>
                    Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, die sie betreffenden personenbezogenen Daten, welche durch die betroffene Person einem Verantwortlichen bereitgestellt wurden, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Sie hat außerdem das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern die Verarbeitung auf der Einwilligung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO oder auf einem Vertrag gemäß Art. 6 Abs. 1 Buchstabe b DS-GVO beruht und die Verarbeitung mithilfe automatisierter Verfahren erfolgt, sofern die Verarbeitung nicht für die Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, welche dem Verantwortlichen übertragen wurde.
                  </p>
                  <p>
                    Ferner hat die betroffene Person bei der Ausübung ihres Rechts auf Datenübertragbarkeit gemäß Art. 20 Abs. 1 DS-GVO das Recht, zu erwirken, dass die personenbezogenen Daten direkt von einem Verantwortlichen an einen anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist und sofern hiervon nicht die Rechte und Freiheiten anderer Personen beeinträchtigt werden.
                  </p>
                  <p>
                    Zur Geltendmachung des Rechts auf Datenübertragbarkeit kann sich die betroffene Person jederzeit an den von der bestellten Datenschutzbeauftragten oder einen anderen Mitarbeiter wenden.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">g) Recht auf Widerspruch</h3>
                  <p>
                    Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 Buchstaben e oder f DS-GVO erfolgt, Widerspruch einzulegen. Dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
                  </p>
                  <p>
                    Der Verein verarbeitet die personenbezogenen Daten im Falle des Widerspruchs nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die den Interessen, Rechten und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                  </p>
                  <p>
                    Zur Ausübung des Rechts auf Widerspruch kann sich die betroffene Person direkt an den Datenschutzbeauftragten des Vereins oder einen anderen Mitarbeiter wenden. Der betroffenen Person steht es ferner frei, im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft, ungeachtet der Richtlinie 2002/58/EG, ihr Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen technische Spezifikationen verwendet werden.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">h) Automatisierte Entscheidungen im Einzelfall einschließlich Profiling</h3>
                  <p>
                    Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden, die ihr gegenüber rechtliche Wirkung entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt, sofern die Entscheidung (1) nicht für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich ist, oder (2) aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung der Rechte und Freiheiten sowie der berechtigten Interessen der betroffenen Person enthalten oder (3) mit ausdrücklicher Einwilligung der betroffenen Person erfolgt.
                  </p>
                  <p>
                    Ist die Entscheidung (1) für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich oder (2) erfolgt sie mit ausdrücklicher Einwilligung der betroffenen Person, trifft die angemessene Maßnahmen, um die Rechte und Freiheiten sowie die berechtigten Interessen der betroffenen Person zu wahren, wozu mindestens das Recht auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung gehört.
                  </p>
                  <p>
                    Möchte die betroffene Person Rechte mit Bezug auf automatisierte Entscheidungen geltend machen, kann sie sich hierzu jederzeit an unseren Datenschutzbeauftragten oder einen anderen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">i) Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</h3>
                  <p>
                    Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, eine Einwilligung zur Verarbeitung personenbezogener Daten jederzeit zu widerrufen.
                  </p>
                  <p>
                    Möchte die betroffene Person ihr Recht auf Widerruf einer Einwilligung geltend machen, kann sie sich hierzu jederzeit an unseren Datenschutzbeauftragten oder einen anderen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Rechtsgrundlage der Verarbeitung</h2>
              <p>
                Art. 6 I lit. a DS-GVO dient unserem Verein als Rechtsgrundlage für Verarbeitungsvorgänge, bei denen wir eine Einwilligung für einen bestimmten Verarbeitungszweck einholen. Ist die Verarbeitung personenbezogener Daten zur Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, erforderlich, wie dies beispielsweise bei Verarbeitungsvorgängen der Fall ist, die für eine Lieferung von Waren oder die Erbringung einer sonstigen Leistung oder Gegenleistung notwendig sind, so beruht die Verarbeitung auf Art. 6 I lit. b DS-GVO. Gleiches gilt für solche Verarbeitungsvorgänge die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind, etwa in Fällen von Anfragen zur unseren Produkten oder Leistungen. Unterliegt unser Verein einer rechtlichen Verpflichtung durch welche eine Verarbeitung von personenbezogenen Daten erforderlich wird, wie beispielsweise zur Erfüllung steuerlicher Pflichten, so basiert die Verarbeitung auf Art. 6 I lit. c DS-GVO. In seltenen Fällen könnte die Verarbeitung von personenbezogenen Daten erforderlich werden, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen. Dies wäre beispielsweise der Fall, wenn ein Besucher in unserem Betrieb verletzt werden würde und daraufhin sein Name, sein Alter, seine Krankenkassendaten oder sonstige lebenswichtige Informationen an einen Arzt, ein Krankenhaus oder sonstige Dritte weitergegeben werden müssten. Dann würde die Verarbeitung auf Art. 6 I lit. d DS-GVO beruhen.
                Letztlich könnten Verarbeitungsvorgänge auf Art. 6 I lit. f DS-GVO beruhen. Auf dieser Rechtsgrundlage basieren Verarbeitungsvorgänge, die von keiner der vorgenannten Rechtsgrundlagen erfasst werden, wenn die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Vereins oder eines Dritten erforderlich ist, sofern die Interessen, Grundrechte und Grundfreiheiten des Betroffenen nicht überwiegen. Solche Verarbeitungsvorgänge sind uns insbesondere deshalb gestattet, weil sie durch den Europäischen Gesetzgeber besonders erwähnt wurden. Er vertrat insoweit die Auffassung, dass ein berechtigtes Interesse anzunehmen sein könnte, wenn die betroffene Person ein Kunde des Verantwortlichen ist (Erwägungsgrund 47 Satz 2 DS-GVO).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Berechtigte Interessen an der Verarbeitung, die von dem Verantwortlichen oder einem Dritten verfolgt werden</h2>
              <p>
                Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I lit. f DS-GVO ist unser berechtigtes Interesse die Durchführung unserer Geschäftstätigkeit zugunsten des Wohlergehens all unserer Mitarbeiter und unserer Anteilseigner.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Dauer, für die die personenbezogenen Daten gespeichert werden</h2>
              <p>
                Das Kriterium für die Dauer der Speicherung von personenbezogenen Daten ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist werden die entsprechenden Daten routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der personenbezogenen Daten; Erforderlichkeit für den Vertragsabschluss; Verpflichtung der betroffenen Person, die personenbezogenen Daten bereitzustellen; mögliche Folgen der Nichtbereitstellung</h2>
              <p>
                Wir klären Sie darüber auf, dass die Bereitstellung personenbezogener Daten zum Teil gesetzlich vorgeschrieben ist (z.B. Steuervorschriften) oder sich auch aus vertraglichen Regelungen (z.B. Angaben zum Vertragspartner) ergeben kann.
                Mitunter kann es zu einem Vertragsschluss erforderlich sein, dass eine betroffene Person uns personenbezogene Daten zur Verfügung stellt, die in der Folge durch uns verarbeitet werden müssen. Die betroffene Person ist beispielsweise verpflichtet uns personenbezogene Daten bereitzustellen, wenn unser Verein mit ihr einen Vertrag abschließt. Eine Nichtbereitstellung der personenbezogenen Daten hätte zur Folge, dass der Vertrag mit dem Betroffenen nicht geschlossen werden könnte.
                Vor einer Bereitstellung personenbezogener Daten durch den Betroffenen muss sich der Betroffene an unseren Datenschutzbeauftragten wenden. Unser Datenschutzbeauftragte klärt den Betroffenen einzelfallbezogen darüber auf, ob die Bereitstellung der personenbezogenen Daten gesetzlich oder vertraglich vorgeschrieben oder für den Vertragsabschluss erforderlich ist, ob eine Verpflichtung besteht, die personenbezogenen Daten bereitzustellen, und welche Folgen die Nichtbereitstellung der personenbezogenen Daten hätte.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Bestehen einer automatisierten Entscheidungsfindung</h2>
              <p>
                Als verantwortungsbewusstes Verein verzichten wir auf eine automatische Entscheidungsfindung oder ein Profiling.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Google Maps</h2>
              <p>
                Wir verwenden auf unserer Webseite Inhalte von Google Maps zur Darstellung von Umgebungskarten.
              </p>
              <p>
                Durch den Besuch auf unserer Webseite erhält daher Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; „Google") die Information, dass Sie die entsprechende Seite unserer Webseite aufgerufen haben.
              </p>
              <p>
                Zudem werden die unter Ziffer 4.) dieser Erklärung genannten Daten übermittelt. Dies erfolgt unabhängig davon, ob Sie in ein Nutzerkonto von Google eingeloggt sind oder ob kein Nutzerkonto besteht. Wenn Sie in ein Google Konto eingeloggt sind, werden diese Daten direkt Ihrem Konto zugeordnet. Wenn Sie diese Zuordnung mit Ihrem Profil nicht wünschen, müssen Sie sich zuvor aus Ihrem Google Konto ausloggen.
                Google verfügt über eine sog. EU-U.S. Privacy Shield Zertifizierung. Bei dem EU-U.S. Privacy Shield Abkommen handelt es sich um ein Datenschutzabkommen, das für Datenübermittlungen an zertifizierte U.S.-Unternehmen ein angemessenes Datenschutzniveau sicherstellen soll. Die EU-Kommission hat die Angemessenheit des zugesicherten Datenschutzniveaus nach dem EU-U.S. Privacy Shield Abkommen mit Beschluss vom 12.07.2016 (Az. C(2016) 4176) festgestellt.
              </p>
              <p>
                Den Beschluss der EU-Kommission können Sie hier einsehen: <a href="http://eur-lex.europa.eu/legal-content/DE/TXT/?uri=uriserv:OJ.L_.2016.207.01.0001.01.DEU" className="text-tennis-green hover:underline">http://eur-lex.europa.eu/legal-content/DE/TXT/?uri=uriserv:OJ.L_.2016.207.01.0001.01.DEU</a>.
              </p>
              <p>
                Den aktuellen Stand der Zertifizierung von Google nach dem EU-U.S. Privacy Shield Abkommen finden Sie hier:
                <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI" className="text-tennis-green hover:underline">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI</a>.
              </p>
              <p>
                Weitere Informationen zu Zweck und Umfang der Datenerhebung und ihrer Verarbeitung durch Google erhalten Sie in der Datenschutzerklärung von Google: <a href="https://www.google.com/intl/de_de/policies/privacy/" className="text-tennis-green hover:underline">https://www.google.com/intl/de_de/policies/privacy/</a>. Dort erhalten Sie auch weitere Informationen zu Ihren diesbezüglichen Rechten und Einstellungsmöglichkeiten zum Schutz Ihrer Privatsphäre.
              </p>
              <p>
                Die Verarbeitung Ihrer Daten erfolgt auf der Rechtsgrundlage des Art. 6 Abs. 1 f) DSGVO (Interessenabwägung) und in unserem Interesse, um Ihnen das Kartenangebot von Google Maps auf unserer Webseite anzeigen zu können.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;