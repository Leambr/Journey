import './App.css'
import ItineraryPage from './Pages/ItineraryPage/ItineraryPage'
import LandingPage from './Pages/LandingPage/LandingPage'
import TourPage from './Pages/TourPage/TourPage'
import WebPage from './Pages/WebPage/WebPage'
import NotFound from './Pages/NotFoundPage/NotFound'


import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="mobile">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/itineraries/:monument" element={<ItineraryPage />} />
          <Route path="/itineraries/:monument/:tour" element={<TourPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="computer">
        <WebPage />
      </div>
    </div>
  )
}

export default App
