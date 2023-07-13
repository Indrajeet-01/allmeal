import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { useEffect } from "react"
import axios from 'axios'

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


export default function Home({}) {
  const [data , setData] = useState([])
  const [cat, setCat] = useState([])
  const [error, setError] = useState(null);

  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/foods')
        setData(response.data)
        const catresponse = await axios.get('http://localhost:8000/foodcat')
        setCat(catresponse.data)

      }catch (error) {
        setError(error.message);

      }
    }
    fetchData()
  },[])
  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <>
    <div>
        <Navbar/>
        <div  >
      <div className="d-flex justify-content-center">
      <input className="form-control me-2 d-flex justify-content-center" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
     { /*<button className="btn btn-outline-success" type="submit">Search</button>*/}
    </div>
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
        <div className='m-3'>
          {
            cat !== [] ?
            cat.map((item1) => {
              return (<div className='row mb-3'>
                <div key={item1._id} className='fs-3 m-3'>
                  {item1.Category}
                </div>
                <hr />
                {data !== []
                ? data.filter((item2)=> (item2.Category === item1.Category) 
                ).map(filterItems => {
                  return (
                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                      <Card
                      foodItem = {filterItems}
                      
                      options = {filterItems.options}
                      
                      ></Card>
                    </div>
                  )
                }
            )     : <div>No such data found</div>}
              </div>

              )
            }) : ''
          }

        </div>
        <Footer/>
    </div>
    </>
  )
}
