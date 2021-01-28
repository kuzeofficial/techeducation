import {
   GET_ALL_COURSES, 
   GET_ALL_POSTS, 
   GET_ALL_SPECIALITIES, 
   GET_ALL_TEACHERS, 
   GET_COURSE, 
   GET_SPECIALITY, 
   GET_POST, 
   GET_WORKSHOP
  } from "./actions"

const API_URL = process.env.REACT_APP_API_URL

export const getAllPosts = () => dispatch => {
  Axios.get(`${API_URL}/posts`)
  .then(resp => {
      return dispatch({
        type: GET_ALL_POSTS,
        posts: resp.data
      })
    }
  )
}
export const getAllSpecialities = () => dispatch => {
  Axios.get(`${API_URL}/specialities`)
  .then(resp => {
      return dispatch({
        type: GET_ALL_SPECIALITIES,
        specialities: resp.data
      })
    }
  )
}
export const getAllCourses = () => dispatch => {
  Axios.get(`${API_URL}/courses`)
  .then(resp => {
      return dispatch({
        type: GET_ALL_COURSES,
        courses: resp.data
      })
    }
  )
}
export const getAllTeachers = () => dispatch => {
  Axios.get(`${API_URL}/teachers`)
  .then(resp => {
      return dispatch({
        type: GET_ALL_TEACHERS,
        teachers: resp.data
      })
    }
  )
}

/*-----------------------FOR A POST -----------------*/

export const getPost = () => dispatch => {
  Axios.get(`${API_URL}/posts/${id}`)
  .then(resp => {
      return dispatch({
        type: GET_POST,
        post: resp.data
      })
    }
  )
}
export const getSpecialitiy = () => dispatch => {
  Axios.get(`${API_URL}/speciality/${id}`)
  .then(resp => {
      return dispatch({
        type: GET_SPECIALITY,
        speciality: resp.data
      })
    }
  )
}
export const getCourse = () => dispatch => {
  Axios.get(`${API_URL}/course/${id}`)
  .then(resp => {
      return dispatch({
        type: GET_COURSE,
        course: resp.data
      })
    }
  )
}

export const getWorkshop = () => dispatch => {
  Axios.get(`${API_URL}/class /${id}`)
  .then(resp => {
      return dispatch({
        type: GET_WORKSHOP,
        workshop: resp.data
      })
    }
  )
}


