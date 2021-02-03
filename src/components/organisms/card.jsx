import React from 'react'
import {Link} from "react-router-dom"
const Card = ({ photo, name, subtitle, cardId, path}) => {
  return (
    <article className="card s-border">
      <div className="img-container s-ratio-16-9">
        <Link to={`/${path}/${cardId}`}>
          <img src={photo} alt={name}/>
        </Link>
      </div>
      <div className="card__data s-pxy-2">
        <h3 className="t4 center">{name}</h3>
        <p className="t8 center">{subtitle}</p>
      </div>
    </article>
  )
}

export default Card
