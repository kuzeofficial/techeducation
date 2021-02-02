import React from 'react'
import Banner from "../organisms/banner"
const Specialities = () => {
  return (
    <Banner 
      color="first-color"
      image={{
         src: "https://online.osu.edu/sites/default/files/styles/ocio_slideshow_image/public/slideshow-images/oso-banner-online-summer-courses-1800x600.jpg?itok=kszGfedq",
         alt: "Specialities Banner"
      }}
      title="Specialities"
      subtitle="Master a technology with the learning path that we offer you"
    />
  )
}

export default Specialities
