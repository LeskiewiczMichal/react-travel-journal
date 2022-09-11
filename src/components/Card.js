import React from "react"
import locationIcon from "../icons/location.png"

export default function Card (props) {
    return(
        <div className="card--container">
            <img src={props.item.imageUrl} alt="mallorca" className="card--photo"/>
            <div className="card--info-container">
                <div className="card--location-container">
                    <span className="card--location-country">
                        <img src={locationIcon} alt="location icon" className="card--location-icon"/>
                        {props.item.location}
                    </span>
                    <a href={props.item.googleMapsUrl} className="card--location-link">View on Google Maps</a>
                </div>
                <h2 className="card--name">{props.item.title}</h2>
                <span className="card--data">{props.item.startDate}{props.item.endDate && ` - ${props.item.endDate}`}</span>
                <span className="card--description">{props.item.description}</span>
            </div>
        </div>
    )
}
