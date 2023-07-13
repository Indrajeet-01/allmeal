import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Card(props) {
  let dispatch = useDispatchCart()

  let items = useCart()

  let options = props.options
  let priceOption = Object.keys(options)

  const [qty,setQty] = useState(1)
  const [size,setSize] = useState('')
  const priceref = useRef()
  
  const handleAddToCart = async () => {
    await dispatch({type:'ADD', id:props.foodItem._id,
                    name:props.foodItem.name,price:finalPrice,
                    qty:qty, size:size
  })
  console.log(items)
  }
  let finalPrice = qty * parseInt(options[size])
  useEffect(()=>{
    setSize(priceref.current.value)
  },[])
  return (
    
      <div>
        <div
          className="card mt-3 bg-green-300"
          style={{ width: "20rem", maxHeight: "360px" }}
        >
          <img src={props.foodItem.img} className="card-img-top" alt="..."
            style={{height:'120px',objectFit:'fill'}}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <p className="card-text">meal 1</p>
            <div className="container w-100">
              <select name="" id="" className="m-2 h-100  bg-success rounded " onChange={(e)=>setQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select name="" id="" className="m-2 h-100  bg-success rounded" ref={priceref} onChange={(e)=>setSize(e.target.value)}>
                {priceOption.map((item)=>{
                  return <option key={item} value={item}>{item}</option>
                })}
              </select>
              <div className="d-inline h-100 fs-5">
              ₹{finalPrice}/-
                </div>
            </div>
            <hr />
            <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
  );
}
