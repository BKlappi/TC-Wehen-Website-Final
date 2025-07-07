import { FC } from 'react'
import { Link } from 'react-router-dom'
import { content } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Sponsoren: FC = () => {
  useScrollReveal()
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tcwehen-primary via-tcwehen-accent to-tcwehen-secondary text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[2px] brightness-80"
          style={{
            backgroundImage: 'url(/assets/erfolg.PNG)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="relative">
          <div className="container-custom section-spacing relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-12 md:p-16 shadow-2xl border border-white/20">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight reveal-hidden drop-shadow-lg">
                  Unsere Sponsoren
                </h1>
                <div className="w-32 h-1 bg-white/80 mx-auto mb-8 shadow-lg"></div>
                <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                  {content.sponsoren.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal-hidden">
              <h2 className="text-3xl md:text-4xl font-bold text-tcwehen-secondary mb-6">
                Unsere Partner
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Gemeinsam stark - diese Unternehmen unterstützen den TC Wehen e.V. und fördern den Tennissport in unserer Region.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {content.sponsoren.sponsors.map((sponsor, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 relative overflow-hidden reveal-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-tcwehen-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative text-center">
                    {/* Logo Display Area */}
                    <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-50 transition-colors duration-300">
                      <img 
                        src={sponsor.name === 'Wiesbadener Volksbank' ? '/assets/Sponsor-VolksbankWiesbaden.PNG' : `/assets/Sponsor-${sponsor.name.replace(' ', '')}.PNG`}
                        alt={`${sponsor.name} Logo`}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          // Fallback to text if image doesn't exist
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.parentElement!.innerHTML = `<span class="text-2xl font-bold text-tcwehen-primary">${sponsor.name.split(' ').map(n => n[0]).join('')}</span>`
                        }}
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-tcwehen-secondary mb-4">
                      {sponsor.name}
                    </h3>
                    
                    <a 
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center text-tcwehen-primary hover:text-tcwehen-accent transition-colors duration-300"
                    >
                      <span className="font-medium group-hover/link:underline mr-2">
                        Website besuchen
                      </span>
                      <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="reveal-hidden">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-tcwehen-secondary">
                Werden Sie unser Partner
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-8"></div>
              <p className="text-xl mb-12 text-gray-600 leading-relaxed">
                Interessiert an einer Partnerschaft mit dem TC Wehen e.V.? Unterstützen Sie den Tennissport in unserer Region und profitieren Sie von unserer starken Vereinsgemeinschaft.
              </p>
            </div>
            
            <div className="flex justify-center reveal-hidden">
              <Link
                to="/kontakt"
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-tcwehen-primary to-tcwehen-accent rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-tcwehen-primary hover:bg-tcwehen-accent text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                  Partnerschaft anfragen
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sponsoren
