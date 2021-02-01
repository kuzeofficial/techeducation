import React from 'react'
import Banner from "../organisms/banner"
const Teachers = () => {
  return (
    <Banner 
      color="third-color" 
      image={{
        src: "https://blog.elink.io/wp-content/uploads/2020/03/Online-Education-Tools-For-Modern-Teachers-Blog-Banner-1250x500.png",
        alt: "Banner Profesores"
      }}
      title="Our teachers"
      subtitle="This teacher is highly qualified to guide you in your education"
    />
  )
}

export default Teachers
