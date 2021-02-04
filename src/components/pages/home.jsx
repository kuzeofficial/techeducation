import React, {useEffect} from 'react'
import Banner from '../organisms/banner'
import { connect } from "react-redux"
import store from "../../redux/store"
import getAllPosts from "../../redux/actionCreators"
import Publication from '../organisms/publication'
const Home = ({ posts }) => {
  useEffect(() => {
    store.dispatch(getAllPosts())
  }, [])

  return (
    <>
      <Banner
        color="dark-color"
        image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREBEREBAVFhURDxUWFRAVFRAWEBYXFRYaGBUTGBUYHSgiGBolGxUXIzEtJSkrLi4uGCIzODMsNygtLisBCgoKDg0OGxAQGzceICIvNystKy4tLS83LS0vLS0tNSstLS02LSstLS0tKy0tLS0rKystLSstLSstLS0rLS0tK//AABEIALEBHAMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABgcIBQQDAgH/xABNEAABAwIDBAYDCgoIBwEAAAABAAIDBBEFEiEGBzFBExQiUWGRMnGBFyQ0QlSTobHB0ggjUlNic4KSotEzQ0RkcrKzwiZ0hKPT4vAV/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAkEQEBAAMAAgEEAgMAAAAAAAAAAQIDERIhMQQiMnETgTNBUf/aAAwDAQACEQMRAD8AvFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBU1tRvhqaKtnpXUcR6KZzQ7NJct4scRyJaQVcqzp+EBhnR4nHMBpUQgk972dg/wtZ5rWM7RMMB3uyTzYdHJTRsbWyOY5wc+7SJOjbbvubKebdbQ/wD51BNVhoc6PKGsJIDi5wba48CT7Fman6RseFyxtJMTpX3AcQCyYu5A9yuDf7WF9BSwx3/HzdJo157LGcDlBtrIPJXx9wcem34Tulhj6nF+NfG0nM/TPlufZm+hTvdftu7FoJpJImxuilDcjSSMrm3BN/EO8lm2jYRV0oIItPANQ4cOjHAgHkrS/BucRJWi4s5kVxrfMC630Fy3lhJOok+1W9B9JircPjgY9vSQsdIS4OBkDSdB3B4XEw7fLUz1jKRlFFd9R0Qdmk07WXMR6tVFsXjp5sRqa+TEYPxeIMeGWqM2QSGzf6OxIa0DTTRfrczhYnxiSfi2Bk0oOtruuxvEfp39i3dUmPb/AMOuu/fzOP7F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"
        title="Welcome to the EdTech platform, learn with us to improve your future... "
        subtitle="Our team is prepared with enough experience to guide you through this journey that you have just undertaken."
        home
      />
      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Latest Posts</h2>
          {
            posts?
            <div>
              {
                posts.map(p => <Publication 
                title={p.title} author={p.author}
                fecha={p.fecha} content={p.content}
                key={p._id}
                />)
              }
            </div>:
            <p>Dont have publications</p>
          }
        </div>
        <div>
          <h3>Category List</h3>
          <ul className="feature-list">
            <li><span>React.JS...</span></li>
          </ul>
        </div>
      </main>
    </>
  )
}
const mapStateToProps = state => ({
  posts: state.postReducer.posts
})
export default connect(mapStateToProps,{})(Home)
