import React, { useEffect } from 'react'
import Banner from "../organisms/banner"
import { getAllSpecialities } from "../../redux/actionCreators"
import { connect } from "react-redux"
import store from "../../redux/store"
import Card from "../organisms/card"
const Specialities = ({ specialities }) => {
  useEffect(() => {
    store.dispatch(getAllSpecialities())
  }, [])
  return (
    <>
      <Banner 
        color="first-color"
        image={{
          src: "https://online.osu.edu/sites/default/files/styles/ocio_slideshow_image/public/slideshow-images/oso-banner-online-summer-courses-1800x600.jpg?itok=kszGfedq",
          alt: "Specialities Banner"
        }}
        title="Specialities"
        subtitle="Master a technology with the learning path that we offer you"
      />
      {
        specialities &&
        <main className="ed-grid m-grid-3">
          {
            specialities.map(s=>(
              <Card photo={s.photo} 
              name={s.title} 
              subtitle={s.subtitle} 
              cardId={s._id} 
              path="specialities"/>
            ))
          }
        </main>
      }
    </>
  )
}
const mapStateToProps = state => ({
  specialities: state.specialityReducer.specialities
})
export default connect(mapStateToProps)(Specialities)
