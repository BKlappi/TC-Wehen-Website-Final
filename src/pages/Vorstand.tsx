import { FC } from 'react'
import { Link } from 'react-router-dom'
import { content } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Vorstand: FC = () => {
  useScrollReveal()
  
  // Helper function to get role color accent
  const getRoleColor = (position: string) => {
    if (position.includes('Vorsitzender')) return 'border-blue-200'
    if (position.includes('Schatzmeister')) return 'border-green-200'
    if (position.includes('Jugendwart')) return 'border-orange-200'
    if (position.includes('Sportwart')) return 'border-red-200'
    if (position.includes('Breitensport')) return 'border-purple-200'
    if (position.includes('Platzwart')) return 'border-yellow-200'
    return 'border-tcwehen-primary/30'
  }
  
  const getRoleGradient = (position: string) => {
    if (position.includes('Vorsitzender')) return 'from-blue-500/10 to-blue-600/10'
    if (position.includes('Schatzmeister')) return 'from-green-500/10 to-green-600/10'
    if (position.includes('Jugendwart')) return 'from-orange-500/10 to-orange-600/10'
    if (position.includes('Sportwart')) return 'from-red-500/10 to-red-600/10'
    if (position.includes('Breitensport')) return 'from-purple-500/10 to-purple-600/10'
    if (position.includes('Platzwart')) return 'from-yellow-500/10 to-yellow-600/10'
    return 'from-tcwehen-primary/10 to-tcwehen-accent/10'
  }
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tcwehen-primary via-tcwehen-accent to-tcwehen-secondary text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm brightness-75"
          style={{
            backgroundImage: 'url(/assets/Terrassenansicht-Plätze.PNG)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="relative">
          <div className="container-custom section-spacing relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-12 md:p-16 shadow-2xl border border-white/20">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight reveal-hidden">
                  {content.vorstand.title}
                </h1>
                <div className="w-32 h-1 bg-white/80 mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  {content.vorstand.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal-hidden">
              <h2 className="text-3xl md:text-4xl font-bold text-tcwehen-secondary mb-6">
                Unser Führungsteam
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Lernen Sie die engagierten Menschen kennen, die unseren Verein mit Leidenschaft und Expertise leiten.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.vorstand.members.map((member, index) => (
                <div key={index} className={`group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 relative overflow-hidden reveal-hidden ${getRoleColor(member.position)}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${getRoleGradient(member.position)}`}></div>
                  <div className="relative">
                    {/* Position Badge */}
                    <div className="mb-6">
                      <span className="inline-block bg-tcwehen-primary/10 text-tcwehen-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                        {member.position}
                      </span>
                    </div>
                    
                    {/* Name - Main Focus */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-tcwehen-secondary mb-2 leading-tight">
                        {member.name}
                      </h3>
                      <div className="w-12 h-1 bg-tcwehen-primary rounded-full"></div>
                    </div>
                    
                    {/* Email Contact */}
                    <div className="mt-auto">
                      <a 
                        href={`mailto:${member.email}`}
                        className="group/email inline-flex items-center text-gray-600 hover:text-tcwehen-primary transition-colors duration-300"
                      >
                        <span className="text-sm font-medium group-hover/email:underline">
                          {member.email}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="reveal-hidden">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-tcwehen-secondary">
                Haben Sie Fragen?
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-8"></div>
              <p className="text-xl mb-12 text-gray-600 leading-relaxed">
                Unser Vorstandsteam steht Ihnen gerne für alle Fragen rund um den TC Wehen zur Verfügung.
              </p>
            </div>
            
            <div className="flex justify-center items-center reveal-hidden">
              <Link
                to="/kontakt"
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-tcwehen-primary to-tcwehen-accent rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-tcwehen-primary hover:bg-tcwehen-accent text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                  Allgemeine Anfragen
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Vorstand
