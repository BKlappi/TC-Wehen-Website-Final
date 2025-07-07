import { FC, useState } from 'react'
import { content } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Kontakt: FC = () => {
  useScrollReveal()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate sending process
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    }, 2000) // 2 second "sending" simulation
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
                  {content.kontakt.title}
                </h1>
                <div className="w-32 h-1 bg-white/80 mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  Wir freuen uns auf Ihre Nachricht und helfen Ihnen gerne weiter
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="reveal-hidden">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h2 className="text-3xl font-bold text-tcwehen-secondary mb-6">
                    Nachricht senden
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder={content.kontakt.form.placeholders.name}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tcwehen-primary focus:border-transparent transition-all duration-300 text-gray-700"
                      />
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder={content.kontakt.form.placeholders.email}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tcwehen-primary focus:border-transparent transition-all duration-300 text-gray-700"
                      />
                    </div>
                    
                    <div>
                      <input
                        type="text"
                        name="subject"
                        placeholder={content.kontakt.form.placeholders.subject}
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tcwehen-primary focus:border-transparent transition-all duration-300 text-gray-700"
                      />
                    </div>
                    
                    <div>
                      <textarea
                        name="message"
                        placeholder={content.kontakt.form.placeholders.message}
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tcwehen-primary focus:border-transparent transition-all duration-300 text-gray-700 resize-vertical"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-tcwehen-primary to-tcwehen-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                      <div className="relative bg-tcwehen-primary hover:bg-tcwehen-accent disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Wird gesendet...
                          </>
                        ) : (
                          content.kontakt.form.submitButton
                        )}
                      </div>
                    </button>
                  </form>
                  
                  {/* Success Message */}
                  {showSuccess && (
                    <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-6 animate-fade-in-up">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-green-800 mb-1">
                            Nachricht erfolgreich gesendet!
                          </h3>
                          <p className="text-green-600">
                            Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen zurück.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8 reveal-hidden">
                <div>
                  <h2 className="text-3xl font-bold text-tcwehen-secondary mb-6">
                    Kontaktinformationen
                  </h2>
                </div>
                
                {/* Address */}
                <div className="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-tcwehen-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-tcwehen-secondary mb-3">Clubadresse</h3>
                    <div className="space-y-2">
                      <p className="text-gray-700 font-medium">{content.kontakt.contactInfo.address.name}</p>
                      <p className="text-gray-600">{content.kontakt.contactInfo.address.street}</p>
                      <p className="text-gray-600">{content.kontakt.contactInfo.address.city}</p>
                    </div>
                  </div>
                </div>
                
                {/* Postal Address */}
                <div className="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-tcwehen-secondary mb-3">Postanschrift</h3>
                    <p className="text-sm text-gray-500 mb-2">{content.kontakt.contactInfo.address.postal.note}</p>
                    <div className="space-y-1">
                      <p className="text-gray-700 font-medium">{content.kontakt.contactInfo.address.postal.name}</p>
                      <p className="text-gray-600">{content.kontakt.contactInfo.address.postal.box}</p>
                      <p className="text-gray-600">{content.kontakt.contactInfo.address.postal.city}</p>
                    </div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-tcwehen-secondary mb-3">E-Mail</h3>
                    <a href={`mailto:${content.kontakt.contactInfo.email.label}`} className="text-tcwehen-primary hover:text-tcwehen-accent transition-colors duration-300 font-medium">
                      {content.kontakt.contactInfo.email.label}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">{content.kontakt.contactInfo.email.website}</p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-tcwehen-secondary mb-3">{content.kontakt.contactInfo.phone.label}</h3>
                    <a href={`tel:${content.kontakt.contactInfo.phone.number}`} className="text-tcwehen-primary hover:text-tcwehen-accent transition-colors duration-300 font-medium">
                      {content.kontakt.contactInfo.phone.number}
                    </a>
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
                  <p className="text-gray-700 mb-1 font-medium">{content.kontakt.contactInfo.address.street}</p>
                  <p className="text-gray-700 mb-3 font-medium">{content.kontakt.contactInfo.address.city}</p>
                  <div className="flex items-center text-sm text-tcwehen-primary">
                    <span className="mr-2">📞</span>
                    <span className="font-medium">{content.kontakt.contactInfo.phone.number}</span>
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

export default Kontakt