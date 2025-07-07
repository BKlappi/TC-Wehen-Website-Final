import { FC } from 'react'
import { Link } from 'react-router-dom'
import { content } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Mitgliedschaft: FC = () => {
  useScrollReveal()
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tcwehen-primary via-tcwehen-accent to-tcwehen-secondary text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm brightness-90"
          style={{
            backgroundImage: 'url(/assets/Mitgliedschaft.PNG)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="relative">
          <div className="container-custom section-spacing relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-12 md:p-16 shadow-2xl border border-white/20">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight reveal-hidden">
                  Mitgliedschaft
                </h1>
                <div className="w-32 h-1 bg-white/80 mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  Werden Sie Teil unserer Tennisgemeinschaft und erleben Sie Tennis in familiärer Atmosphäre
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal-hidden">
              <h2 className="text-3xl md:text-5xl font-bold text-tcwehen-secondary mb-8 leading-tight">
                {content.mitgliedschaft.title}
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-8"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed reveal-hidden">
                {content.mitgliedschaft.introduction.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-tcwehen-primary/10 to-tcwehen-accent/10 rounded-2xl border border-tcwehen-primary/20 reveal-hidden">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-tcwehen-primary/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-tcwehen-primary font-bold text-sm">ℹ</span>
                  </div>
                  <p className="text-gray-700 font-medium">{content.mitgliedschaft.note}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents & Links Section */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal-hidden">
              <h2 className="text-3xl md:text-4xl font-bold text-tcwehen-secondary mb-6">
                Wichtige Dokumente
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Alle wichtigen Informationen und Formulare für Ihre Mitgliedschaft
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {content.mitgliedschaft.links.map((link, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 relative overflow-hidden reveal-hidden flex flex-col h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-tcwehen-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative text-center flex flex-col h-full">
                    <div className="w-16 h-16 bg-tcwehen-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-tcwehen-primary/30 transition-colors duration-300">
                      <span className="text-2xl">📄</span>
                    </div>
                    <h3 className="text-xl font-bold text-tcwehen-secondary mb-6 flex-grow">
                      {link.title}
                    </h3>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-block w-full"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-tcwehen-primary to-tcwehen-accent rounded-lg blur opacity-0 group-hover/btn:opacity-75 transition duration-300"></div>
                      <div className="relative bg-tcwehen-primary hover:bg-tcwehen-accent text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300">
                        PDF herunterladen →
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="reveal-hidden">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-tcwehen-secondary">
                Bereit für Ihre Mitgliedschaft?
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-8"></div>
              <p className="text-xl mb-12 text-gray-600 leading-relaxed">
                Kontaktieren Sie uns für ein persönliches Gespräch oder werden Sie direkt Mitglied.
              </p>
            </div>
            
            <div className="flex justify-center reveal-hidden">
              <Link
                to="/kontakt"
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-tcwehen-primary to-tcwehen-accent rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-tcwehen-primary hover:bg-tcwehen-accent text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                  Kontakt aufnehmen
                </div>
              </Link>
              
              <div className="text-gray-400 text-lg">oder</div>
              
              <a 
                href={content.mitgliedschaft.links[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="bg-white border-2 border-tcwehen-primary text-tcwehen-primary hover:bg-tcwehen-primary hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Aufnahmeantrag herunterladen
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mitgliedschaft
