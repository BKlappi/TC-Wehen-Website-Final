import { FC } from 'react'
import { Link } from 'react-router-dom'
import { content } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

const HomePage: FC = () => {
  useScrollReveal()
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tcwehen-primary via-tcwehen-accent to-tcwehen-secondary text-white overflow-hidden">
        {/* Tennis Ball Background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute top-10 right-10 w-32 h-32 bg-contain bg-no-repeat animate-bounce"
            style={{ backgroundImage: 'url(/assets/Ball.PNG)' }}
          ></div>
          <div 
            className="absolute bottom-20 left-20 w-24 h-24 bg-contain bg-no-repeat animate-pulse"
            style={{ backgroundImage: 'url(/assets/Ball.PNG)' }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-contain bg-no-repeat opacity-50"
            style={{ backgroundImage: 'url(/assets/Ball.PNG)' }}
          ></div>
        </div>
        
        {/* Tennis Ball Background Pattern */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm brightness-75"
          style={{
            backgroundImage: 'url(/assets/Ball.PNG)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="relative">
          <div className="container-custom section-spacing relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-12 md:p-16 shadow-2xl border border-white/20">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight reveal-hidden">
                  {content.home.hero.title}
                </h1>
                <div className="w-32 h-1 bg-white/80 mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  {content.home.hero.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal-hidden">
              <h2 className="text-3xl md:text-5xl font-bold text-tcwehen-secondary mb-8 leading-tight">
                {content.home.welcome.title}
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {content.home.welcome.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tennis Courts */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-tcwehen-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden">
                <img 
                  src="/assets/Plätze2.PNG" 
                  alt="Tennisplätze" 
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-tcwehen-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  6 Plätze
                </div>
              </div>
              <div className="p-6 relative">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-tcwehen-primary/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-tcwehen-primary/30 transition-colors duration-300">
                    <div className="w-6 h-6 bg-tcwehen-primary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-tcwehen-secondary">
                    Moderne Tennisplätze
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  6 Sandplätze in hervorragendem Zustand für optimales Tennisspiel
                </p>
                <Link to="/clubanlage" className="group/btn relative inline-block w-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-tcwehen-primary to-tcwehen-accent rounded-lg blur opacity-0 group-hover/btn:opacity-75 transition duration-300"></div>
                  <div className="relative bg-white border-2 border-tcwehen-primary text-tcwehen-primary hover:bg-tcwehen-primary hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300">
                    Mehr erfahren →
                  </div>
                </Link>
              </div>
            </div>

            {/* Tennis School */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden">
                <img 
                  src="/assets/Tennisschule-Prätorius.PNG" 
                  alt="Tennisschule" 
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Profi Training
                </div>
              </div>
              <div className="p-6 relative">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-yellow-500/30 transition-colors duration-300">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-tcwehen-secondary">
                    Professionelle Tennisschule
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Qualifizierte Trainer für alle Altersgruppen und Spielstärken
                </p>
                <Link to="/tennisschule" className="group/btn relative inline-block w-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg blur opacity-0 group-hover/btn:opacity-75 transition duration-300"></div>
                  <div className="relative bg-white border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300">
                    Training buchen →
                  </div>
                </Link>
              </div>
            </div>

            {/* Community */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden">
                <img 
                  src="/assets/Terrassenansicht-Plätze.PNG" 
                  alt="Gemeinschaft" 
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  300+ Mitglieder
                </div>
              </div>
              <div className="p-6 relative">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-500/30 transition-colors duration-300">
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-tcwehen-secondary">
                    Starke Gemeinschaft
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Über 300 Mitglieder in einer familiären Atmosphäre
                </p>
                <Link to="/mitgliedschaft" className="group/btn relative inline-block w-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-0 group-hover/btn:opacity-75 transition duration-300"></div>
                  <div className="relative bg-white border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300">
                    Mitglied werden →
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 reveal-hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-tcwehen-secondary mb-4">
              {content.home.news.title}
            </h2>
            <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              {content.home.news.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {content.home.news.items.map((item, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-tcwehen-primary rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-tcwehen-secondary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {item.date}
                      </p>
                      <p className="text-gray-700">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal-hidden">
              <h2 className="text-3xl md:text-4xl font-bold text-tcwehen-secondary mb-6">
                TC Wehen in Zahlen
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Was unseren Verein ausmacht und stolz macht
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group reveal-hidden">
                <div className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 border border-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-tcwehen-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="text-4xl md:text-5xl font-bold mb-3 text-tcwehen-primary counter" data-target="300">0</div>
                    <div className="text-lg text-gray-700 font-medium">Aktive Mitglieder</div>
                  </div>
                </div>
              </div>
              
              <div className="group reveal-hidden">
                <div className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 border border-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-tcwehen-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="text-4xl md:text-5xl font-bold mb-3 text-tcwehen-primary counter" data-target="6">0</div>
                    <div className="text-lg text-gray-700 font-medium">Sandplätze</div>
                  </div>
                </div>
              </div>
              
              <div className="group reveal-hidden">
                <div className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 border border-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-tcwehen-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="text-4xl md:text-5xl font-bold mb-3 text-tcwehen-primary counter" data-target="50">0</div>
                    <div className="text-lg text-gray-700 font-medium">Jahre Tradition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="reveal-hidden">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-tcwehen-secondary">
                Bereit für den ersten Aufschlag?
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-8"></div>
              <p className="text-xl mb-12 text-gray-600 leading-relaxed">
                Werden Sie Teil unserer Tennisgemeinschaft und erleben Sie Tennis auf höchstem Niveau.
              </p>
            </div>
            
            {/* Enhanced Button Group */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/mitgliedschaft" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-tcwehen-primary to-tcwehen-accent rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-tcwehen-primary hover:bg-tcwehen-accent text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                  Jetzt Mitglied werden
                </div>
              </Link>
              
              <div className="text-gray-400 text-lg">oder</div>
              
              <Link to="/kontakt" className="group relative">
                <div className="bg-white border-2 border-tcwehen-primary text-tcwehen-primary hover:bg-tcwehen-primary hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Kontakt aufnehmen
                </div>
              </Link>
            </div>
            
            {/* Enhanced Info Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tcwehen-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h3 className="font-semibold mb-3 text-lg text-tcwehen-secondary">Zentrale Lage</h3>
                  <p className="text-gray-600">Gut erreichbar in Taunusstein-Wehen mit ausreichend Parkplätzen</p>
                </div>
              </div>
              
              <div className="group bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tcwehen-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h3 className="font-semibold mb-3 text-lg text-tcwehen-secondary">Moderne Anlage</h3>
                  <p className="text-gray-600">6 gepflegte Sandplätze und gemütliches Clubhaus mit Terrasse</p>
                </div>
              </div>
              
              <div className="group bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tcwehen-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h3 className="font-semibold mb-3 text-lg text-tcwehen-secondary">Profi Training</h3>
                  <p className="text-gray-600">Qualifizierte Trainer für alle Altersgruppen und Spielstärken</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage