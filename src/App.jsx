import './App.css'
import React from "react"
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'
import data from './data'

function App() {

  const cards = data.map(place => {
    return (
        <Card
            key={place.id}
            place={place}
        />
    )
})

  return (
    <div className='app'>
      <Navbar />
      <div className='main-container'>
        {cards}
      </div>
    </div>
  )
}

export default App
