import React from 'react'
import Banner from "../organisms/banner"
const Courses = () => {
  return (
    <Banner 
      color="dark-color"
      image={{
         src: "https://cdn.firetechcamp.com/wp-content/uploads/2018/06/18091758/Banner_Template_5-1088x353.png",
         alt: "Courses Banner"
      }}
      title=" Our Courses"
      subtitle="Start from scratch in technology as we guide you"
    />
  )
}

export default Courses
