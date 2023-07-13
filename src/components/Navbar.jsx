import React  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import { useCart } from './ContextReducer'
import Modal from '../Modal'
import Cart from '../pages/Cart'
import { useState } from 'react'
export default function Navbar(props) {
  const [cartView, setCartView] = useState(false)
  localStorage.setItem('temp', "first")
  let navigate = useNavigate();

  const loadCart = () => {
    setCartView(true)
}

const items = useCart();

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
    <Link class="navbar-brand fs-1 " to="/">All Meal</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
      </ul>

      <div className='d-flex'>
      <div class="btn bg-white text-success mx-2" onClick={loadCart} >
        My Cart {''}
        <Badge pill bg='danger' >{items.length} 
        </Badge>
      </div>
      {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
      </div>

    </div>
  </div>
</nav>
  </div>
  )
}
