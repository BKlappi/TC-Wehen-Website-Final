import { FC } from 'react'
import { content } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Tennisschule: FC = () => {
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
                  {content.tennisschule.title}
                </h1>
                <div className="w-32 h-1 bg-white/80 mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  Professionelles Tennis-Training für alle Altersgruppen und Spielstärken
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
                Unser Trainingskonzept
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                {content.tennisschule.introduction}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal-hidden">
              <h2 className="text-3xl md:text-4xl font-bold text-tcwehen-secondary mb-6">
                Unser Trainingsangebot
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Individuelles Training für jede Altersgruppe und Spielstärke
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kinder und Jugend */}
              <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 relative overflow-hidden reveal-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="mb-6">
                    <span className="inline-block bg-orange-500/10 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                      {content.tennisschule.sections.kinderJugend.title}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-tcwehen-secondary mb-4">
                    Spielerisches Lernen im Fokus
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {content.tennisschule.sections.kinderJugend.description}
                  </p>
                </div>
              </div>

              {/* Erwachsene */}
              <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 relative overflow-hidden reveal-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tcwehen-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="mb-6">
                    <span className="inline-block bg-tcwehen-primary/10 text-tcwehen-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                      {content.tennisschule.sections.erwachsene.title}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-tcwehen-secondary mb-4">
                    Individuelles Training für alle
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {content.tennisschule.sections.erwachsene.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal-hidden">
              <h2 className="text-3xl md:text-4xl font-bold text-tcwehen-secondary mb-6">
                Ihr Trainer
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center reveal-hidden">
              {/* Frank's Image */}
              <div className="relative">
                <img 
                  src="/assets/Frank.PNG"
                  alt="Frank Prätorius - Cheftrainer"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
              
              {/* Frank's Information */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-tcwehen-secondary mb-2">
                    {content.tennisschule.trainer.name}
                  </h3>
                  <p className="text-xl text-tcwehen-primary font-semibold">
                    {content.tennisschule.trainer.position}
                  </p>
                </div>
                
                <div className="space-y-4">
                  {content.tennisschule.trainer.details.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-tcwehen-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Costs Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal-hidden">
              <h2 className="text-3xl md:text-4xl font-bold text-tcwehen-secondary mb-6">
                Trainingspreise
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Faire und transparente Preise für hochwertiges Training
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden reveal-hidden">
              <div className="relative">
                <img 
                  src="/assets/trainingskosten.PNG"
                  alt="Trainingskosten und Konditionen"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Booking Section */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="reveal-hidden">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-tcwehen-secondary">
                Bereit für Ihr Training?
              </h2>
              <div className="w-24 h-1 bg-tcwehen-primary mx-auto mb-8"></div>
              <p className="text-xl mb-8 text-gray-600 leading-relaxed">
                Kontaktiere Frank direkt für Trainingsanfragen über die
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-md mx-auto">
                <div className="text-center">
                  <p className="text-2xl font-bold text-tcwehen-secondary mb-2">+49 163 2343670</p>
                  <p className="text-gray-600">Frank Prätorius</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tennisschule
