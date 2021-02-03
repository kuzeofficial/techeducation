import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Banner from "../organisms/banner"
import store from "../../redux/store"
import { getAllCourses } from "../../redux/actionCreators"
import Card from "../organisms/card"

const Courses = ({ courses }) => {

  useEffect(() => {
    store.dispatch(getAllCourses())
  }, [])

  return (
    <>
      <Banner 
        color="dark-color"
        image={{
          src: "https://cdn.firetechcamp.com/wp-content/uploads/2018/06/18091758/Banner_Template_5-1088x353.png",
          alt: "Courses Banner"
        }}
        title=" Our Courses"
        subtitle="Start from scratch in technology as we guide you"
      />
      {
        courses &&
        <main className="ed-grid m-grid-5 ">
          {
            courses.map(c => (
              <Card photo={c.photo} name={c.name} cardId={c._id} path="courses"/>
            ))
          }
        </main>
      }
    </>
  )
}


const mapStateToProps = state => ({
  courses: state.courseReducer.courses
})
export default connect(mapStateToProps, {})(Courses)
