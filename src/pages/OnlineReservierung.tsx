import { FC, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const OnlineReservierung: FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isContentVisible] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tcwehen-primary via-tcwehen-accent to-tcwehen-secondary text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm brightness-75"
          style={{
            backgroundImage: 'url(/assets/Plätze2.PNG)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="relative">
          <div className="container-custom section-spacing relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-12 md:p-16 shadow-2xl border border-white/20">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
                  Online Platzreservierung
                </h1>
                <div className="w-32 h-1 bg-white/80 mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  Buchen Sie Ihren Platz bequem online - 24/7 verfügbar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-tcwehen-secondary">
                Direkt zum Buchungssystem
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-8"></div>
              <p className="text-xl mb-12 text-gray-600 leading-relaxed">
                Klicken Sie hier, um direkt zur Online-Platzreservierung zu gelangen
              </p>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="https://wehen.tennisplatz.info/reservierung" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-tcwehen-primary to-tcwehen-accent rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-tcwehen-primary hover:bg-tcwehen-accent text-white px-12 py-6 rounded-xl font-semibold text-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>Jetzt Platz reservieren</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        
        <div className="container-custom relative z-10">
          <div
            ref={contentRef}
            className={`transition-all duration-700 ${
              isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-tcwehen-secondary mb-6">
                  So funktioniert die Online-Reservierung
                </h2>
                <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-6"></div>
                <p className="text-lg text-gray-600">
                  Folgen Sie diesen einfachen Schritten für Ihre Platzreservierung
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Step 1 */}
                <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-tcwehen-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-tcwehen-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-tcwehen-secondary mb-4">
                          Registrierung
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Registriere Dich bitte vollständig mit Vor- und Nachnamen und bearbeite alle Einstellungen zu Benachrichtigungen. Dieses ist nötig damit wir dich dem Verein zuordnen können und Du umfänglich informiert wirst. Siehe dazu auch Anleitung zur Registrierung.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-tcwehen-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-tcwehen-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-tcwehen-secondary mb-4">
                          Profil überprüfen
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          In deinem Profil (Profilbild rechts oben) hast Du einen Überblick über Deine Daten und kannst diese zum Teil auch ändern.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-tcwehen-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-tcwehen-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-tcwehen-secondary mb-4">
                          Platz buchen
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Klicke in der Hauptmenüleiste auf „Reservierung". Es erscheint der Reservierungsplan. Hier kannst Du einen Platz buchen. Klicke dazu auf ein grünes Feld – entsprechend der Zeit und des Platzes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-tcwehen-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-tcwehen-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-tcwehen-secondary mb-4">
                          Mitspieler & Speichern
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Wähle Deine Mitspieler aus, sofern sie auch registriert sind. Mit einem Klick auf „speichern" hast Du den Platz gebucht. Viel Spaß!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tcwehen-secondary mb-6">
                Weitere Informationen
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Wichtige Dokumente und Kontaktmöglichkeiten
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Reservation Rules */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
                <div className="w-16 h-16 bg-tcwehen-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-tcwehen-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tcwehen-secondary mb-4">
                  Reservierungsregeln
                </h3>
                <p className="text-gray-600 mb-6">
                  Alle wichtigen Regeln und Hinweise zur Platzreservierung
                </p>
                <a 
                  href="http://tc-wehen.de/wp-content/uploads/2025/04/Platzreservierung_2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-tcwehen-primary hover:bg-tcwehen-accent text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span>PDF herunterladen</span>
                </a>
              </div>

              {/* Support Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tcwehen-secondary mb-4">
                  Fragen zum Buchungstool?
                </h3>
                <p className="text-gray-600 mb-6">
                  Bei weiteren Fragen zum Buchungstool, schreibt uns bitte eine E-Mail
                </p>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>Kontakt aufnehmen</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineReservierung;