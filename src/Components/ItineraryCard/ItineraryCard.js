import React from 'react'
import './ItineraryCard.css'

export default function ItineraryCard(props) {
  const itineraryImg = `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.image})`

  return (
    <div
      className="itinerary-card"
      style={{ backgroundImage: `${itineraryImg}` }}
      onClick={() => props.navFunc(props.itineraryName)}
    >
      <div className="it-filter"></div>
      <div className="itinerary-content">
        <p className="itinerary-category">{props.type.toUpperCase()}</p>

        <h3 className="itinerary-name">{props.itineraryName}</h3>
        <p className="itinerary-description">{props.description}</p>
      </div>
    </div>
  )
}
