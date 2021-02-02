import React, { useEffect } from 'react'
import Banner from "../organisms/banner"
import store from "../../redux/store"
import {getAllTeachers} from "../../redux/actionCreators"
import {connect} from "react-redux"


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
            <article key={t.id}>
              <div className="s-px-4">
                <div className="img-container circle s-mb-2">
                  <img src={t.photo} alt={t.name}/>
                </div>
              </div>
              <div className="s-center">
                <p className="t3 s-mb-1">{t.name}</p>
                <p>{t.country}</p>
              </div>
            </article>
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
