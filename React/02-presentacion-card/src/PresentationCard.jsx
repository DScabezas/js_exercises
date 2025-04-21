import React from "react"
import imageReact from "./assets/react.svg"
import "./PresentationCard.css"

function PresentationCard() {
    const name = "Dario"
    return (
        <div className="presentation-card">
            <p >Hola {name.toUpperCase()}</p>
            <img src={imageReact} alt="logo react" />
        </div>
    )
}

export default PresentationCard
