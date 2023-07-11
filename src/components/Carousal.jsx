import React from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

export default function 
() {
  return (
    <div  >
      <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
        <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            showDots={false}
            slidesToSlide={1}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
          <div>
              
            <div className="carousel-item active"  >
      <img className="d-block " src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80" style={{"width":"100%","height":"400px" }} alt="First slide"/>
    </div>
    <div className="carousel-item active">
      <img className="d-block " src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" style={{"width":"100%","height":"400px" }} alt="Second slide"/>
    </div>
    <div className="carousel-item active">
      <img className="d-block " src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" style={{"width":"100%","height":"400px"}} alt="Third slide"/>
    </div>
    </div> 
        </Carousel>
    </div>
  )
}
