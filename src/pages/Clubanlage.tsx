import { FC } from 'react'
import { content } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Clubanlage: FC = () => {
  useScrollReveal()
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tcwehen-primary via-tcwehen-accent to-tcwehen-secondary text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm brightness-75"
          style={{
            backgroundImage: 'url(/assets/Plätze.PNG)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="relative">
          <div className="container-custom section-spacing relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-12 md:p-16 shadow-2xl border border-white/20">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight reveal-hidden">
                  Unsere Clubanlage
                </h1>
                <div className="w-32 h-1 bg-white/80 mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  Moderne Tennisanlage mit sechs gepflegten Sandplätzen in landschaftlich schöner Lage am Rande von Taunusstein-Wehen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Details */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal-hidden">
              <h2 className="text-3xl md:text-5xl font-bold text-tcwehen-secondary mb-8 leading-tight">
                Unsere Anlage im Detail
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-8"></div>
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                {content.clubanlage.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 reveal-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tcwehen-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-8 text-center relative">
                  <div className="w-20 h-20 bg-tcwehen-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-tcwehen-primary/30 transition-colors duration-300">
                    <span className="text-3xl">🎾</span>
                  </div>
                  <h3 className="text-xl font-bold text-tcwehen-secondary mb-3">
                    6 Sandplätze
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sehr gepflegte Sandplätze für optimales Tennisspiel in landschaftlich schöner Lage
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 reveal-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-8 text-center relative">
                  <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500/30 transition-colors duration-300">
                    <span className="text-3xl">🏟️</span>
                  </div>
                  <h3 className="text-xl font-bold text-tcwehen-secondary mb-3">
                    Clubhaus & Terrasse
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mehr als 60 Plätze auf den Terrassen mit Blick auf alle Spielfelder
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 reveal-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-8 text-center relative">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/30 transition-colors duration-300">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-tcwehen-secondary mb-3">
                    Trainingsmöglichkeiten
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ballwand und Kleinfeld für zusätzliches Training
                  </p>
                </div>
              </div>
            </div>

            {/* Photography-Focused Gallery */}
            <div className="space-y-8">
              <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 reveal-hidden">
                <div className="relative h-96 md:h-[500px]">
                  <img 
                    src="/assets/Plätze2.PNG"
                    alt="Tennisplätze von oben"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center">
                    <div className="container-custom">
                      <div className="max-w-2xl text-white">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">6 gepflegte Sandplätze</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 reveal-hidden">
                <div className="relative h-96 md:h-[500px]">
                  <img 
                    src="/assets/Terrassenansicht-Plätze.PNG"
                    alt="Terrassenansicht der Plätze"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center">
                    <div className="container-custom">
                      <div className="max-w-2xl ml-auto text-white text-right">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Terrasse mit Panoramablick</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal-hidden">
              <h2 className="text-3xl md:text-4xl font-bold text-tcwehen-secondary mb-6">
                Lage & Öffnungszeiten
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Besuchen Sie uns in landschaftlich schöner Lage
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 relative overflow-hidden reveal-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tcwehen-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-tcwehen-primary/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-tcwehen-primary/30 transition-colors duration-300">
                      <span className="text-3xl">📍</span>
                    </div>
                    <h3 className="text-2xl font-bold text-tcwehen-secondary">Anschrift</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-2 font-medium">{content.contact.address.street}</p>
                  <p className="text-lg text-gray-700 mb-4 font-medium">{content.contact.address.city}</p>
                  <p className="text-gray-600 leading-relaxed">
                    Gut erreichbar mit öffentlichen Verkehrsmitteln und ausreichend Parkplätze vorhanden.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 relative overflow-hidden reveal-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-500/30 transition-colors duration-300">
                      <span className="text-3xl">⏰</span>
                    </div>
                    <h3 className="text-2xl font-bold text-tcwehen-secondary">Öffnungszeiten</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Montag - Freitag</span>
                      <span className="text-gray-800 font-bold text-lg">8:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Samstag</span>
                      <span className="text-gray-800 font-bold text-lg">8:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Sonntag</span>
                      <span className="text-gray-800 font-bold text-lg">8:00 - 22:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal-hidden">
              <h2 className="text-3xl md:text-4xl font-bold text-tcwehen-secondary mb-6">
                So finden Sie uns
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                TC Wehen e.V. - Platter Straße 89, 65232 Taunusstein
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden reveal-hidden">
              <div className="relative h-96 md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.8!2d8.1433!3d50.1467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bdc4a4c8f8c4c5%3A0x1234567890abcdef!2sPlatter%20Stra%C3%9Fe%2089%2C%2065232%20Taunusstein!5e0!3m2!1sde!2sde!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TC Wehen Standort"
                  className="rounded-3xl"
                ></iframe>
                
                {/* Enhanced Map Overlay with Club Info */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl max-w-sm border border-white/20">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-tcwehen-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">TC</span>
                    </div>
                    <h3 className="text-lg font-bold text-tcwehen-secondary">TC Wehen e.V.</h3>
                  </div>
                  <p className="text-gray-700 mb-1 font-medium">{content.contact.address.street}</p>
                  <p className="text-gray-700 mb-3 font-medium">{content.contact.address.city}</p>
                  <div className="flex items-center text-sm text-tcwehen-primary">
                    <span className="mr-2">📞</span>
                    <span className="font-medium">{content.contact.phone}</span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Directions */}
              <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                      <span className="text-3xl">🚗</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">Mit dem Auto</h4>
                    <p className="text-gray-600 leading-relaxed">Ausreichend Parkplätze direkt vor der Anlage verfügbar</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors duration-300">
                      <span className="text-3xl">🚌</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">Öffentliche Verkehrsmittel</h4>
                    <p className="text-gray-600 leading-relaxed">Gut erreichbar mit Bus und Bahn aus Wiesbaden</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500/30 transition-colors duration-300">
                      <span className="text-3xl">🚶</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">Zu Fuß</h4>
                    <p className="text-gray-600 leading-relaxed">Zentrale Lage in Taunusstein-Wehen, gut zu Fuß erreichbar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Clubanlage