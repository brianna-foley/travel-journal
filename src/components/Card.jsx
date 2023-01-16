import React from "react"
import location from '../images/location.png'

export default function Card(props) {
    const img = props.place.imageUrl

    return (
        <div className='card--container'>
            <div className='card--image margin-left' style={{backgroundImage: `url(${img})`}}></div>
            <section className='card--info'>
                <div className='card--location'>
                    <img src={location} className='margin-right'/>
                    <p className='margin-right'>{props.place.location}</p>
                    <a href={props.place.googleMapsUrl} className='margin-right card--location-link'>View on Google Maps</a>
                </div>
                <h2 className='card--title'>{props.place.title}</h2>
                <div className='card--dates'>{props.place.startDate} - {props.place.endDate}</div>
                <p className='card--description'>{props.place.description}</p>
            </section>
       </div>
    )
}
