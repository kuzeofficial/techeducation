import React, { useEffect } from 'react'
import Banner from "../organisms/banner"
import store from "../../redux/store"
import {getAllTeachers} from "../../redux/actionCreators"
import {connect} from "react-redux"
import Teacher from "../organisms/teacher"

const Teachers = ({ match , teachers}) => {
  
  useEffect(() =>{
    store.dispatch(getAllTeachers())
  }, [match])

  return (
    <>
      <Banner 
        color="third-color" 
        image={{
          src: "https://request.org.uk/teachers/wp-content/uploads/sites/2/2013/07/TEACHERS-banner.jpg",
          alt: "Banner Profesores"
        }}
        title="Our teachers"
        subtitle="This teacher is highly qualified to guide you in your education"
      />
      {
        teachers &&
        <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
        {
          teachers.map(t => (
              <Teacher 
                photo={t.photo}
                name={t.name}
                country={t.country}
              />
          ))
        }
      </main>  
      }
    </>
  )
}

const mapStateToProps = state => ({
  teachers: state.teacherReducer.teachers
})

export default connect(mapStateToProps, {})(Teachers)
