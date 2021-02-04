import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({ color, image, title, subtitle, home }) => {
  return (
    <div className={`main-banner img-container l-block ${color}`}>
      <div className="ed-grid">
        <div>
          <img src={image.src} alt={image.alt} className="main-banner__img"/>
          {
            home ?
            <div className="ed-grid m-grid-2 ">
              <div className="main-banner__data ">
                <h1 className="main-banner__title">{title}</h1>
                <p>{subtitle}</p>
                <Link to="/courses/601aae7604359e00042a69b5" className="button third-color"> Watch </Link>
              </div>
              <div className="img-container s-ratio-12-6">
                <img className="s-radius-1" src="https://www.rocketlab.com.au/wp-content/uploads/2017/01/graphql-banner.png" alt="Course Now" />
              </div>
            </div>
            :
            <div className="main-banner__data s-center">
              <h1 className="main-banner__title">{title}</h1>
              <p>{subtitle}</p>
            </div>  
          }
        </div>
      </div>
    </div>
  )
}

export default Banner
