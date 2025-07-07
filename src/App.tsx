import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Clubanlage from './pages/Clubanlage'
import Mitgliedschaft from './pages/Mitgliedschaft'
import Vorstand from './pages/Vorstand'
import Tennisschule from './pages/Tennisschule'
import Kontakt from './pages/Kontakt'
import Sponsoren from './pages/Sponsoren'
import Datenschutz from './pages/Datenschutz'
import Impressum from './pages/Impressum'
import OnlineReservierung from './pages/OnlineReservierung'

const App: FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/clubanlage" element={<Clubanlage />} />
            <Route path="/mitgliedschaft" element={<Mitgliedschaft />} />
            <Route path="/vorstand" element={<Vorstand />} />
            <Route path="/tennisschule" element={<Tennisschule />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/sponsoren" element={<Sponsoren />} />
            <Route path="/online-reservierung" element={<OnlineReservierung />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  )
}

export default App