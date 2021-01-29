import {
   GET_ALL_POSTS,
   GET_ALL_SPECIALITIES,
   GET_ALL_COURSES,
   GET_ALL_TEACHERS,
   GET_POST,
   GET_SPECIALITY,
   GET_COURSE,
   GET_WORKSHOP,
   } from "./actions"

export const postReducer = (state = {}, action) => {
  if (action.type === GET_ALL_POSTS){
    return {
      ...state,
      posts: action.posts
    }
  }
  if (action.type === GET_POST){
    return{
      ...state,
      post: action.post
    }
  } 
  return state
}
export const specialityReducer = (state = {}, action) => {
  if(action.type === GET_ALL_SPECIALITIES){
    return {
      ...state,
      specialities: action.specialities
    }
  }
  if(action.type === GET_SPECIALITY){
    return {
      ...state,
      speciality: action.speciality
    }
  }
  return state
}
export const courseReducer = (state = {}, action) => {
  if(action.type === GET_ALL_COURSES){
    return {
      ...state,
      courses: action.courses
    }
  }
  if(action.type === GET_COURSE){
    return {
      ...state,
      course: action.course
    }
  }
  return state
}
export const teacherReducer = (state = {}, action) => {
  if(action.type === GET_ALL_TEACHERS){
    return {
      ...state,
      teachers: action.teachers
    }
  }
  return state
}
export const workshopReducer = (state = {}, action) => {
  if(action.type === GET_WORKSHOP){
    return {
      ...state,
      workshop: action.workshop
      
    }
  }
  return state
}